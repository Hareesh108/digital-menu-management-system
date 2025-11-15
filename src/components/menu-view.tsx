"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import type { RouterOutputs } from "~/trpc/react";

type Restaurant = RouterOutputs["restaurant"]["getBySlug"];

interface MenuViewProps {
  restaurant: Restaurant;
}

export function MenuView({ restaurant }: MenuViewProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    restaurant.categories[0]?.id ?? null,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCategory, setVisibleCategory] = useState<string | null>(
    restaurant.categories[0]?.id ?? null,
  );

  // Observe which category is in view
  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0,
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

    Object.values(categoryRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [restaurant.categories]);

  const handleCategoryClick = (categoryId: string) => {
    const categoryElement = categoryRefs.current[categoryId];
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setSelectedCategoryId(categoryId);
      setIsMenuOpen(false);
    }
  };

  const currentCategory =
    restaurant.categories.find((cat) => cat.id === visibleCategory) ||
    restaurant.categories[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header with Category Name */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{restaurant.name}</h1>
              {currentCategory && (
                <p className="text-sm text-muted-foreground">
                  {currentCategory.name}
                </p>
              )}
            </div>
            {/* Floating Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Desktop Category Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <nav className="space-y-2">
                {restaurant.categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategoryId === category.id ? "default" : "ghost"
                    }
                    className="w-full justify-start"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    {category.name}
                    <Badge
                      variant="secondary"
                      className="ml-auto"
                    >
                      {category.dishes.length}
                    </Badge>
                  </Button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Mobile Category Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="absolute right-0 top-0 h-full w-64 bg-background shadow-lg">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Categories</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="overflow-y-auto h-[calc(100vh-80px)]">
                  <nav className="p-4 space-y-2">
                    {restaurant.categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={
                          selectedCategoryId === category.id
                            ? "default"
                            : "ghost"
                        }
                        className="w-full justify-start"
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        {category.name}
                        <Badge variant="secondary" className="ml-auto">
                          {category.dishes.length}
                        </Badge>
                      </Button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1" ref={containerRef}>
            {restaurant.categories.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No menu items available yet.
                </p>
              </div>
            ) : (
              <div className="space-y-12">
                {restaurant.categories.map((category) => (
                  <div
                    key={category.id}
                    data-category-id={category.id}
                    ref={(el) => {
                      categoryRefs.current[category.id] = el;
                    }}
                    className="scroll-mt-24"
                  >
                    <h2 className="text-3xl font-bold mb-6">{category.name}</h2>
                    {category.dishes.length === 0 ? (
                      <p className="text-muted-foreground">
                        No items in this category yet.
                      </p>
                    ) : (
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {category.dishes.map((dish) => (
                          <div
                            key={dish.id}
                            className="rounded-lg border bg-card p-4 hover:shadow-md transition-shadow"
                          >
                            {dish.image && (
                              <div className="relative aspect-video w-full mb-4 rounded-md overflow-hidden">
                                <Image
                                  src={dish.image}
                                  alt={dish.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-semibold">
                                {dish.name}
                              </h3>
                              {dish.spiceLevel && dish.spiceLevel > 0 && (
                                <Badge variant="outline">
                                  {"🌶️".repeat(dish.spiceLevel)}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {dish.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Floating Menu Button (Mobile) - Only visible when menu is closed */}
      {!isMenuOpen && (
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg lg:hidden z-40"
          size="icon"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}

