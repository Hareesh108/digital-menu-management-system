import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

import type { PrismaClient } from "../../../../generated/prisma";

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

async function ensureUniqueSlug(db: PrismaClient, baseSlug: string, excludeId?: string): Promise<string> {
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const existing = await db.restaurant.findUnique({
      where: { slug },
    });

    if (!existing || existing.id === excludeId) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

export const restaurantRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1, "Restaurant name is required"),
        location: z.string().min(1, "Location is required"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const baseSlug = generateSlug(input.name);
      const slug = await ensureUniqueSlug(ctx.db, baseSlug);

      const ownerId = ctx.session?.userId;
      if (!ownerId) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "You must be logged in to create a restaurant" });
      }

      const restaurant = await ctx.db.restaurant.create({
        data: {
          name: input.name,
          location: input.location,
          slug,
          ownerId,
        },
      });

      return restaurant;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const ownerId = ctx.session?.userId;
    if (!ownerId) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "You must be logged in to view restaurants" });
    }

    const restaurants = await ctx.db.restaurant.findMany({
      where: {
        ownerId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        _count: {
          select: {
            categories: true,
            dishes: true,
          },
        },
      },
    });

    return restaurants;
  }),

  getById: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    const ownerId = ctx.session?.userId;
    if (!ownerId) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "You must be logged in to view this restaurant" });
    }

    const restaurant = await ctx.db.restaurant.findFirst({
      where: {
        id: input.id,
        ownerId,
      },
      include: {
        categories: {
          orderBy: {
            name: "asc",
          },
        },
        dishes: {
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
        },
      },
    });

    if (!restaurant) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Restaurant not found",
      });
    }

    return restaurant;
  }),

  getBySlug: publicProcedure.input(z.object({ slug: z.string() })).query(async ({ ctx, input }) => {
    const restaurant = await ctx.db.restaurant.findUnique({
      where: {
        slug: input.slug,
      },
      include: {
        categories: {
          orderBy: {
            name: "asc",
          },
          include: {
            dishes: {
              include: {
                dish: {
                  include: {
                    categories: {
                      include: {
                        category: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        dishes: {
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
        },
      },
    });

    if (!restaurant) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Restaurant not found",
      });
    }

    const categories = restaurant.categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      restaurantId: cat.restaurantId,
      createdAt: cat.createdAt,
      updatedAt: cat.updatedAt,
      dishes: cat.dishes.map((dc) => ({
        ...dc.dish,
        categories: dc.dish.categories.map((dc2) => dc2.category),
      })),
    }));

    return {
      id: restaurant.id,
      name: restaurant.name,
      location: restaurant.location,
      slug: restaurant.slug,
      categories,
      dishes: restaurant.dishes.map((dish) => ({
        ...dish,
        categories: dish.categories.map((dc) => dc.category),
      })),
    };
  }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        location: z.string().min(1).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, name, location } = input;

      const ownerId = ctx.session?.userId;
      if (!ownerId) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "You must be logged in to update this restaurant" });
      }

      const existing = await ctx.db.restaurant.findFirst({
        where: {
          id,
          ownerId,
        },
      });

      if (!existing) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Restaurant not found",
        });
      }

      let slug = existing.slug;
      if (name && name !== existing.name) {
        const baseSlug = generateSlug(name);
        slug = await ensureUniqueSlug(ctx.db, baseSlug, id);
      }

      const restaurant = await ctx.db.restaurant.update({
        where: { id },
        data: {
          ...(name && { name }),
          ...(location && { location }),
          ...(slug !== existing.slug && { slug }),
        },
      });

      return restaurant;
    }),

  delete: protectedProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {
    const ownerId = ctx.session?.userId;
    if (!ownerId) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "You must be logged in to delete this restaurant" });
    }

    const existing = await ctx.db.restaurant.findFirst({
      where: {
        id: input.id,
        ownerId,
      },
    });

    if (!existing) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Restaurant not found",
      });
    }

    await ctx.db.restaurant.delete({
      where: { id: input.id },
    });

    return { success: true };
  }),
});
