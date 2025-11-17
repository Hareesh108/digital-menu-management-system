import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const dashboardRouter = createTRPCRouter({
  getEmail: protectedProcedure.query(async ({ ctx }) => {
    return { email: ctx.session.email };
  }),

  storeEmail: protectedProcedure.input(z.object({ email: z.string().email() })).mutation(async ({ ctx, input }) => {
    const sessionEmail = ctx.session.email;
    if (sessionEmail !== input.email) {
      throw new Error("Provided email does not match authenticated user");
    }
    return { success: true };
  }),
});
