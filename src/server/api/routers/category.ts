import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        restaurantId: z.string(),
        name: z.string().min(1, "Category name is required"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const restaurant = await ctx.db.restaurant.findFirst({
        where: {
          id: input.restaurantId,
        },
      });

      if (!restaurant) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Restaurant not found",
        });
      }

      const existing = await ctx.db.category.findUnique({
        where: {
          restaurantId_name: {
            restaurantId: input.restaurantId,
            name: input.name,
          },
        },
      });

      if (existing) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Category with this name already exists",
        });
      }

      const category = await ctx.db.category.create({
        data: {
          name: input.name,
          restaurantId: input.restaurantId,
        },
      });

      return category;
    }),

  getAll: protectedProcedure.input(z.object({ restaurantId: z.string() })).query(async ({ ctx, input }) => {
    const restaurant = await ctx.db.restaurant.findFirst({
      where: {
        id: input.restaurantId,
      },
    });

    if (!restaurant) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Restaurant not found",
      });
    }

    const categories = await ctx.db.category.findMany({
      where: {
        restaurantId: input.restaurantId,
      },
      include: {
        _count: {
          select: {
            dishes: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return categories;
  }),

  getById: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    const category = await ctx.db.category.findFirst({
      where: {
        id: input.id,
      },
      include: {
        restaurant: true,
        dishes: {
          include: {
            dish: true,
          },
        },
      },
    });

    if (!category) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Category not found",
      });
    }

    return category;
  }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, name } = input;

      const existing = await ctx.db.category.findFirst({
        where: {
          id,
        },
      });

      if (!existing) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Category not found",
        });
      }

      if (name && name !== existing.name) {
        const conflict = await ctx.db.category.findUnique({
          where: {
            restaurantId_name: {
              restaurantId: existing.restaurantId,
              name,
            },
          },
        });

        if (conflict) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Category with this name already exists",
          });
        }
      }

      const category = await ctx.db.category.update({
        where: { id },
        data: {
          ...(name && { name }),
        },
      });

      return category;
    }),

  delete: protectedProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {
    const existing = await ctx.db.category.findFirst({
      where: {
        id: input.id,
      },
    });

    if (!existing) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Category not found",
      });
    }

    await ctx.db.category.delete({
      where: { id: input.id },
    });

    return { success: true };
  }),
});
