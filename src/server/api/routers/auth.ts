import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
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

        await ctx.db.user.create({
          data: {
            email,
            name,
            country,
            verificationCode: code,
            verificationCodeExpires: null,
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

      await ctx.db.user.update({
        where: { email },
        data: {
          verificationCode: code,
          verificationCodeExpires: null,
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

      const normalizedCode = code.trim();

      const MOCK_OTP = "123456";
      const allowMockOtp = process.env.NEXT_PUBLIC_ALLOW_MOCK_OTP === "true";

      const usedMockOtp = allowMockOtp && normalizedCode === MOCK_OTP;
      const isValidCode = usedMockOtp || user.verificationCode === normalizedCode;

      if (!isValidCode) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid verification code",
        });
      }

      if (usedMockOtp) {
        console.warn(`Mock OTP used for login: ${email}`);
      }

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

  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.userId },
      select: {
        id: true,
        email: true,
        name: true,
        country: true,
      },
    });

    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found",
      });
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      country: user.country,
    };
  }),
});
