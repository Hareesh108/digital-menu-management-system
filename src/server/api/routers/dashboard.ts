import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const dashboardRouter = createTRPCRouter({
  // Return the current logged-in user's email (from session)
  getEmail: protectedProcedure.query(async ({ ctx }) => {
    // ctx.session is guaranteed by the protectedProcedure middleware
    return { email: ctx.session.email };
  }),

  // Store/confirm the email for the current user. This simply verifies the provided email
  // matches the session email and returns success. If you want to persist or flag something
  // on the user record, extend this handler to update the DB.
  storeEmail: protectedProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ ctx, input }) => {
      const sessionEmail = ctx.session.email;
      if (sessionEmail !== input.email) {
        // If the emails don't match, deny the request
        throw new Error("Provided email does not match authenticated user");
      }

      // Optionally, you could update the user record here (no-op for now).
      // Example (uncomment to update):
      // await ctx.db.user.update({ where: { id: ctx.session.userId }, data: { email: input.email } });

      return { success: true, email: sessionEmail };
    }),
});
