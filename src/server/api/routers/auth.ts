import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { generateVerificationCode, sendVerificationEmail } from "~/server/auth/email";
import { createSession, deleteSession } from "~/server/auth/session";

export const authRouter = createTRPCRouter({
  // Request verification code (for signup or login)
  requestCode: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().min(1).optional(), // Only for signup
        country: z.string().min(1).optional(), // Only for signup
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { email, name, country } = input;

      // Check if user exists
      const existingUser = await ctx.db.user.findUnique({
        where: { email },
      });

      // If signing up (name and country provided), ensure user doesn't exist
      if (name && country) {
        if (existingUser) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "User with this email already exists",
          });
        }

        // Create user (unverified) with verification code
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

      // If logging in, user must exist
      if (!existingUser) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No account found with this email",
        });
      }

      // Generate and send verification code
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

  // Verify code and complete login/signup
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

      // Check if code is valid
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

      // Create session
      await createSession({
        userId: updatedUser.id,
        email: updatedUser.email,
      });

      return {
        success: true,
        user: {
          id: updatedUser.id,
          email: updatedUser.email,
          name: updatedUser.name,
          country: updatedUser.country,
          emailVerified: updatedUser.emailVerified,
        },
      };
    }),

  // Get current session
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

  // Logout
  logout: publicProcedure.mutation(async () => {
    await deleteSession();
    return { success: true };
  }),
});
