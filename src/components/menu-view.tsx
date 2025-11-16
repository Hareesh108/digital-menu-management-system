"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { RouterOutputs } from "~/trpc/react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog";

type Restaurant = RouterOutputs["restaurant"]["getBySlug"];

interface MenuViewProps {
  restaurant: Restaurant;
}

export function MenuView({ restaurant }: MenuViewProps) {
  // category & overlay state
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(restaurant.categories[0]?.id ?? null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // refs for category sections and scroll container
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // visible category (from observer)
  const [visibleCategory, setVisibleCategory] = useState<string | null>(restaurant.categories[0]?.id ?? null);

  // dialog and viewed tracking
  const [dishDialogOpen, setDishDialogOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<(typeof restaurant.categories)[0]["dishes"][0] | null>(null);

  const [viewedDishIds, setViewedDishIds] = useState<string[]>(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem("dm_viewed_dishes") : null;
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.every((p) => typeof p === "string")) return parsed;
      }
    } catch (err) {
      console.log(err);
    }
    return [];
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("dm_viewed_dishes", JSON.stringify(viewedDishIds));
    } catch (err) {
      console.log(err);
    }
  }, [viewedDishIds]);

  useEffect(() => {
    const rootEl = scrollContainerRef.current;
    if (!rootEl) return;

    const observerOptions: IntersectionObserverInit = {
      root: rootEl,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.getAttribute("data-category-id");
          if (categoryId) {
            setVisibleCategory(categoryId);
            setSelectedCategoryId(categoryId);
          }
        }
      });
    }, observerOptions);

    Object.values(categoryRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [restaurant.categories]);

  // helpers
  const findDishById = (id: string) => {
    for (const cat of restaurant.categories) {
      const found = cat.dishes.find((d) => d.id === id);
      if (found) return found;
    }
    return null;
  };

  const recommendedCategory =
    restaurant.categories.find((c) => c.name.toLowerCase() === "recommended") ?? restaurant.categories[0];

  const recommendedItems = (recommendedCategory?.dishes ?? []).slice(0, 2);

  const latestItems = viewedDishIds
    .map((id) => findDishById(id))
    .filter(Boolean)
    .slice(-2)
    .reverse() as (typeof restaurant.categories)[0]["dishes"][0][];

  const handleCategoryClick = (categoryId: string) => {
    const categoryElement = categoryRefs.current[categoryId];
    if (categoryElement && scrollContainerRef.current) {
      const topPos =
        categoryElement.getBoundingClientRect().top - scrollContainerRef.current.getBoundingClientRect().top;
      scrollContainerRef.current.scrollTo({ top: topPos, behavior: "smooth" });
      setSelectedCategoryId(categoryId);
      setIsMenuOpen(false);
    }
  };

  const handleDishClick = (dish: (typeof restaurant.categories)[0]["dishes"][0]) => {
    setSelectedDish(dish);
    setDishDialogOpen(true);

    setViewedDishIds((prev) => {
      const without = prev.filter((id) => id !== dish.id);
      const next = [...without, dish.id];
      return next.slice(-20);
    });
  };

  const handleDishKeyDown = (e: React.KeyboardEvent, dish: (typeof restaurant.categories)[0]["dishes"][0]) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDishClick(dish);
    }
  };

  const currentCategory = restaurant.categories.find((cat) => cat.id === visibleCategory) ?? restaurant.categories[0];

  return (
    <div className="flex min-h-screen items-start justify-center bg-background px-2 py-4 sm:px-4">
      <div
        className="flex w-full flex-col overflow-hidden rounded-none bg-white sm:max-w-[420px] sm:rounded-md sm:shadow-md sm:ring-1 sm:ring-slate-200"
        style={{ minHeight: "85vh", maxHeight: "92vh" }}
      >
        <header className="sticky top-0 z-30 border-b bg-white">
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <h1 className="text-lg leading-tight font-semibold">{restaurant.name}</h1>
              {currentCategory && <p className="text-sm text-slate-500">Category: {currentCategory.name}</p>}
            </div>

            <div className="ml-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMenuOpen((s) => !s)}
                aria-label="Toggle categories"
                className="h-9 w-9"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </header>

        <div
          ref={scrollContainerRef}
          className="overflow-y-auto"
          style={{ flex: "1 1 auto", WebkitOverflowScrolling: "touch", padding: 8 }}
        >
          <div className="divide-y">
            {restaurant.categories.map((category) => (
              <section
                key={category.id}
                data-category-id={category.id}
                ref={(el) => {
                  categoryRefs.current[category.id] = el;
                }}
                className="scroll-mt-6 px-3 py-5"
              >
                <div className="mb-3">
                  <h2 className="text-center text-base font-semibold text-slate-700">{category.name}</h2>
                </div>

                <div className="space-y-4">
                  {category.dishes.map((dish) => (
                    <article
                      key={dish.id}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => handleDishKeyDown(e, dish)}
                      onClick={() => handleDishClick(dish)}
                      className="flex cursor-pointer items-start gap-3 rounded-md border bg-white p-3"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <span
                            className={`h-3 w-3 rounded-full border ${dish ? "border-emerald-500 bg-emerald-500" : "border-rose-500 bg-rose-500"}`}
                            aria-hidden
                          />
                          {dish.spiceLevel && dish.spiceLevel > 0 && (
                            <span className="text-xs text-rose-500">{"🌶️".repeat(Math.min(3, dish.spiceLevel))}</span>
                          )}
                        </div>

                        <h3 className="truncate text-sm font-semibold text-slate-800">{dish.name}</h3>

                        <div className="mt-1 text-sm font-medium text-slate-700">{dish != null ? `₹ ${100}` : "—"}</div>

                        <p className="mt-2 line-clamp-3 text-sm text-slate-600">{dish.description ?? ""}</p>
                      </div>

                      {dish?.image ? (
                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-slate-100">
                          <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            className="object-cover object-center"
                            sizes="112px"
                          />
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="sm:hidden">
            <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2">
              <Button
                className="rounded-full bg-rose-500 px-6 py-2 text-white shadow-md"
                onClick={() => setIsMenuOpen((s) => !s)}
                aria-label="Menu"
              >
                ≡ Menu
              </Button>
            </div>
          </div>

          <div className="hidden justify-center border-t bg-white p-3 sm:flex">
            <Button
              className="rounded-full bg-rose-500 px-6 py-2 text-white shadow-md"
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-label="Menu"
            >
              ≡ Menu
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)} />
            <div className="relative z-50 mt-14 w-[92%] max-w-xs rounded-md border bg-white shadow-lg">
              <div className="border-b p-3">
                <h3 className="text-center text-sm font-semibold">Categories</h3>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {(recommendedItems.length > 0 || latestItems.length > 0) && (
                  <div className="px-2 py-2">
                    {latestItems.length > 0 && (
                      <div className="mb-3">
                        <div className="text-center text-sm font-semibold text-slate-500">Recently Viewed</div>
                        <div className="mt-2 space-y-1">
                          {latestItems.map((d) => (
                            <button
                              key={d.id}
                              onClick={() => handleDishClick(d)}
                              className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left hover:bg-slate-50"
                            >
                              <span className="truncate">{d.name}</span>
                              <div className="text-sm text-slate-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="my-2 border-t" />
                  </div>
                )}

                <nav className="space-y-2 p-1">
                  {restaurant.categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left hover:bg-slate-50 ${selectedCategoryId === cat.id ? "bg-slate-100 font-medium" : ""}`}
                    >
                      <span>{cat.name}</span>
                      <Badge variant="secondary">{cat.dishes.length}</Badge>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="flex justify-end border-t p-2">
                <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}

        <Dialog open={dishDialogOpen} onOpenChange={setDishDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedDish?.name}</DialogTitle>
              <DialogDescription>{selectedDish?.description ?? "No description available."}</DialogDescription>
            </DialogHeader>

            <div className="mt-4 flex gap-4">
              {selectedDish?.image ? (
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    fill
                    className="object-cover object-center"
                    sizes="112px"
                  />
                </div>
              ) : null}

              <div className="flex-1">
                <div className="mb-2 text-sm font-medium text-slate-700">{selectedDish != null ? `₹ ${700}` : "—"}</div>
                <div className="text-sm text-slate-600">{selectedDish?.description}</div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {restaurant.categories
                    .filter((cat) => cat.dishes.some((d) => d.id === selectedDish?.id))
                    .map((cat) => (
                      <Badge key={cat.id} variant="secondary">
                        {cat.name}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setDishDialogOpen(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
