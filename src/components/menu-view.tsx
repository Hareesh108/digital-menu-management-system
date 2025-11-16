"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import type { RouterOutputs } from "~/trpc/react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

type Restaurant = RouterOutputs["restaurant"]["getBySlug"];

interface MenuViewProps {
  restaurant: Restaurant;
}

export function MenuView({ restaurant }: MenuViewProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(restaurant.categories[0]?.id ?? null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCategory, setVisibleCategory] = useState<string | null>(restaurant.categories[0]?.id ?? null);

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

  const currentCategory = restaurant.categories.find((cat) => cat.id === visibleCategory) || restaurant.categories[0];

  return (
    <div className="bg-background min-h-screen">
      {/* Sticky Header with Category Name */}
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{restaurant.name}</h1>
              {currentCategory && <p className="text-muted-foreground text-sm">{currentCategory.name}</p>}
            </div>
            {/* Floating Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Desktop Category Sidebar */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-24">
              <h2 className="mb-4 text-lg font-semibold">Categories</h2>
              <nav className="space-y-2">
                {restaurant.categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategoryId === category.id ? "default" : "ghost"}
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
          </aside>

          {/* Mobile Category Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
              <div className="bg-background absolute right-0 top-0 h-full w-64 shadow-lg">
                <div className="border-b p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Categories</h2>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="h-[calc(100vh-80px)] overflow-y-auto">
                  <nav className="space-y-2 p-4">
                    {restaurant.categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategoryId === category.id ? "default" : "ghost"}
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
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No menu items available yet.</p>
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
                    <h2 className="mb-6 text-3xl font-bold">{category.name}</h2>
                    {category.dishes.length === 0 ? (
                      <p className="text-muted-foreground">No items in this category yet.</p>
                    ) : (
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {category.dishes.map((dish) => (
                          <div
                            key={dish.id}
                            className="bg-card rounded-lg border p-4 transition-shadow hover:shadow-md"
                          >
                            {dish.image && (
                              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-md">
                                <Image src={dish.image} alt={dish.name} fill className="object-cover" />
                              </div>
                            )}
                            <div className="mb-2 flex items-start justify-between">
                              <h3 className="text-xl font-semibold">{dish.name}</h3>
                              {dish.spiceLevel && dish.spiceLevel > 0 && (
                                <Badge variant="outline">{"🌶️".repeat(dish.spiceLevel)}</Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground text-sm">{dish.description}</p>
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
          className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg lg:hidden"
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
