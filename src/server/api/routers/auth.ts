import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { generateVerificationCode, sendVerificationEmail } from "~/server/auth/email";
import { createSession, deleteSession } from "~/server/auth/session";

export const authRouter = createTRPCRouter({
  requestCode: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().min(1).optional(),
        country: z.string().min(1).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { email, name, country } = input;

      const existingUser = await ctx.db.user.findUnique({
        where: { email },
      });

      if (name && country) {
        if (existingUser) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "User with this email already exists",
          });
        }

        const code = generateVerificationCode();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        await ctx.db.user.create({
          data: {
            email,
            name,
            country,
            verificationCode: code,
            verificationCodeExpires: expiresAt,
            emailVerified: false,
          },
        });

        await sendVerificationEmail(email, code);

        return {
          success: true,
          message: "Verification code sent to your email",
        };
      }

      if (!existingUser) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No account found with this email",
        });
      }

      const code = generateVerificationCode();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

      await ctx.db.user.update({
        where: { email },
        data: {
          verificationCode: code,
          verificationCodeExpires: expiresAt,
        },
      });

      await sendVerificationEmail(email, code);

      return {
        success: true,
        message: "Verification code sent to your email",
      };
    }),

  verifyCode: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        code: z.string().length(6),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { email, code } = input;

      const user = await ctx.db.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No account found with this email",
        });
      }

      if (
        user.verificationCode !== code ||
        !user.verificationCodeExpires ||
        user.verificationCodeExpires < new Date()
      ) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid or expired verification code",
        });
      }

      // Mark email as verified and clear verification code
      const updatedUser = await ctx.db.user.update({
        where: { email },
        data: {
          emailVerified: true,
          verificationCode: null,
          verificationCodeExpires: null,
        },
      });

      const sessionToken = await createSession({
        userId: updatedUser.id,
        email: updatedUser.email,
      });

      console.log(`User logged in: ${updatedUser.email}`);

      return {
        success: true,
        sessionToken,
        user: {
          id: updatedUser.id,
          email: updatedUser.email,
          name: updatedUser.name,
          country: updatedUser.country,
          emailVerified: updatedUser.emailVerified,
        },
      };
    }),

  getSession: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.session) {
      return { user: null };
    }

    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.userId },
      select: {
        id: true,
        email: true,
        name: true,
        country: true,
        emailVerified: true,
      },
    });

    if (!user) {
      await deleteSession();
      return { user: null };
    }

    return { user };
  }),

  logout: publicProcedure.mutation(async () => {
    await deleteSession();
    return { success: true };
  }),
});
