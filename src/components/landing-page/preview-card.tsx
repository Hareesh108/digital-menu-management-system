"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { FOOD_ITEMS } from "~/utils";

const SAMPLE_MENU = {
  restaurant: {
    name: "Mama's Kitchen",
    location: "123 Main St, Bangalore",
    slug: "mamas-kitchen",
  },
  categories: [
    {
      id: "cat-1",
      name: "Recommended",
      subtitle: "Desserts",
      dishes: [
        {
          id: "d-apple-pie",
          name: "Apple Pie",
          price: 140,
          spiceLevel: 0,
          image:
            FOOD_ITEMS.find((f) => f.name.toLowerCase().includes("apple"))
              ?.url ?? FOOD_ITEMS[0]?.url,
          description:
            "A classic apple pie with flaky crust, lightly spiced filling and a hint of citrus.",
        },
        {
          id: "d-choc-mousse",
          name: "Chocolate Mousse",
          price: 140,
          spiceLevel: 0,
          image:
            FOOD_ITEMS.find((f) => f.name.toLowerCase().includes("chocolate"))
              ?.url ?? FOOD_ITEMS[1]?.url,
          description:
            "Creamy layered chocolate mousse with a soft biscuit base and chocolate glaze.",
        },
      ],
    },
    {
      id: "cat-2",
      name: "Starter",
      subtitle: "Appetizers",
      dishes: [
        {
          id: "d-aalu-tikki",
          name: "Aloo Tikki",
          price: 90,
          spiceLevel: 2,
          image:
            FOOD_ITEMS.find((f) => f.name.toLowerCase().includes("aalu"))
              ?.url ?? FOOD_ITEMS[2]?.url,
          description:
            "Crispy potato patties spiced with herbs and served with chutney.",
        },
        {
          id: "d-breaded-mush",
          name: "Breaded Mushrooms",
          price: 130,
          spiceLevel: 1,
          image:
            FOOD_ITEMS.find((f) => f.name.toLowerCase().includes("mush"))
              ?.url ?? FOOD_ITEMS[3]?.url,
          description:
            "Golden battered mushrooms served with herb dip and lemon.",
        },
      ],
    },
  ],
};

export function PreviewCard({ className = "" }: { className?: string }) {
  const { restaurant, categories } = SAMPLE_MENU;

  const previewImage =
    FOOD_ITEMS[Math.floor(Math.random() * FOOD_ITEMS.length)];

  return (
    <Card className={`overflow-hidden shadow-lg ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="relative h-48 w-full shrink-0 bg-slate-100 lg:h-auto lg:w-44">
          <Image
            src={previewImage?.url ?? ""}
            alt={previewImage?.name ?? "img"}
            fill
            sizes="(max-width: 1024px) 100vw, 176px"
            className="object-cover"
          />
        </div>

        <CardContent className="flex w-full flex-col justify-between p-4">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                <p className="text-sm text-slate-600">{restaurant.location}</p>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {categories.map((cat) => (
                <div key={cat.id} className="border-t pt-2 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-800">
                      {cat.name}
                    </h4>
                    <div className="text-sm text-slate-500">{cat.subtitle}</div>
                  </div>

                  <div className="mt-3 grid gap-3">
                    {cat.dishes.map((dish) => (
                      <div key={dish.id} className="flex items-center gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-3 w-3 rounded-full border ${
                                dish.spiceLevel && dish.spiceLevel > 0
                                  ? "border-rose-500 bg-rose-500"
                                  : "border-emerald-500 bg-emerald-500"
                              }`}
                            />
                            <span className="truncate text-sm font-medium">
                              {dish.name}
                            </span>
                          </div>

                          <div className="mt-1 text-sm font-medium text-slate-700">
                            ₹ {dish.price}
                          </div>

                          <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                            {dish.description}
                          </p>
                        </div>

                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-slate-100">
                          <Image
                            src={dish.image ?? ""}
                            alt={dish.name}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span className="text-sm">QR inside — guests scan to open</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
