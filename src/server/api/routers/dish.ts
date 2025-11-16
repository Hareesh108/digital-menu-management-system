import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const dishRouter = createTRPCRouter({
  // Create a new dish
  create: protectedProcedure
    .input(
      z.object({
        restaurantId: z.string(),
        name: z.string().min(1, "Dish name is required"),
        description: z.string().min(1, "Description is required"),
        image: z.string().optional().nullable(),
        spiceLevel: z.number().int().min(1).max(5).optional().nullable(),
        categoryIds: z.array(z.string()).optional().default([]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // NOTE: Authentication skipped
      // Verify restaurant exists
      const restaurant = await ctx.db.restaurant.findFirst({
        where: {
          id: input.restaurantId,
          // ownerId: ctx.session?.userId,
        },
      });

      if (!restaurant) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Restaurant not found",
        });
      }

      // If category IDs provided, verify they belong to the restaurant
      if (input.categoryIds.length > 0) {
        const categories = await ctx.db.category.findMany({
          where: {
            id: {
              in: input.categoryIds,
            },
            restaurantId: input.restaurantId,
          },
        });

        if (categories.length !== input.categoryIds.length) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "One or more categories not found or don't belong to this restaurant",
          });
        }
      }

      // Create dish and connect categories
      const dish = await ctx.db.dish.create({
        data: {
          name: input.name,
          description: input.description,
          image: input.image ?? null,
          spiceLevel: input.spiceLevel ?? null,
          restaurantId: input.restaurantId,
          categories: {
            create: input.categoryIds.map((categoryId) => ({
              categoryId,
            })),
          },
        },
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
      });

      return {
        ...dish,
        categories: dish.categories.map((dc) => dc.category),
      };
    }),

  // Get all dishes for a restaurant
  getAll: protectedProcedure
    .input(z.object({ restaurantId: z.string() }))
    .query(async ({ ctx, input }) => {
      // NOTE: Authentication skipped
      // Verify restaurant exists
      const restaurant = await ctx.db.restaurant.findFirst({
        where: {
          id: input.restaurantId,
          // ownerId: ctx.session?.userId,
        },
      });

      if (!restaurant) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Restaurant not found",
        });
      }

      const dishes = await ctx.db.dish.findMany({
        where: {
          restaurantId: input.restaurantId,
        },
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return dishes.map((dish) => ({
        ...dish,
        categories: dish.categories.map((dc) => dc.category),
      }));
    }),

  // Get a single dish by ID
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      // NOTE: Authentication skipped
      const dish = await ctx.db.dish.findFirst({
        where: {
          id: input.id,
          // restaurant: {
          //   ownerId: ctx.session?.userId,
          // },
        },
        include: {
          restaurant: true,
          categories: {
            include: {
              category: true,
            },
          },
        },
      });

      if (!dish) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Dish not found",
        });
      }

      return {
        ...dish,
        categories: dish.categories.map((dc) => dc.category),
      };
    }),

  // Update a dish
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        description: z.string().min(1).optional(),
        image: z.string().optional().nullable(),
        spiceLevel: z.number().int().min(1).max(5).optional().nullable(),
        categoryIds: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, categoryIds, ...updateData } = input;

      // NOTE: Authentication skipped
      // Check if dish exists
      const existing = await ctx.db.dish.findFirst({
        where: {
          id,
          // restaurant: {
          //   ownerId: ctx.session?.userId,
          // },
        },
        include: {
          categories: true,
        },
      });

      if (!existing) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Dish not found",
        });
      }

      // If category IDs provided, verify they belong to the restaurant
      if (categoryIds !== undefined) {
        const categories = await ctx.db.category.findMany({
          where: {
            id: {
              in: categoryIds,
            },
            restaurantId: existing.restaurantId,
          },
        });

        if (categories.length !== categoryIds.length) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "One or more categories not found or don't belong to this restaurant",
          });
        }
      }

      // Prepare update data, handling null values
      const dataToUpdate: {
        name?: string;
        description?: string;
        image?: string | null;
        spiceLevel?: number | null;
      } = {};

      if (updateData.name !== undefined) dataToUpdate.name = updateData.name;
      if (updateData.description !== undefined)
        dataToUpdate.description = updateData.description;
      if (updateData.image !== undefined) dataToUpdate.image = updateData.image;
      if (updateData.spiceLevel !== undefined)
        dataToUpdate.spiceLevel = updateData.spiceLevel;

      // Update dish
      const dish = await ctx.db.dish.update({
        where: { id },
        data: {
          ...dataToUpdate,
          // Update categories if provided
          ...(categoryIds !== undefined && {
            categories: {
              deleteMany: {}, // Remove all existing category connections
              create: categoryIds.map((categoryId) => ({
                categoryId,
              })),
            },
          }),
        },
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
      });

      return {
        ...dish,
        categories: dish.categories.map((dc) => dc.category),
      };
    }),

  // Delete a dish
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // NOTE: Authentication skipped
      // Check if dish exists
      const existing = await ctx.db.dish.findFirst({
        where: {
          id: input.id,
          // restaurant: {
          //   ownerId: ctx.session?.userId,
          // },
        },
      });

      if (!existing) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Dish not found",
        });
      }

      await ctx.db.dish.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),
});

