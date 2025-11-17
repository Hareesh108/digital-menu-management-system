"use client";

import { Plus, Edit, Trash2, Utensils } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/react";

import { CategoryFormDialog, DeleteConfirmationDialog, DishFormDialog } from "~/components/menu";
import { SiteHeader } from "~/components/site-header";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { DataTable } from "~/components/ui/data-table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Skeleton } from "~/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

type Category = RouterOutputs["category"]["getById"];
type Dish = RouterOutputs["dish"]["getById"];
type CategoryFromList = RouterOutputs["category"]["getAll"][number];
type DishFromList = RouterOutputs["dish"]["getAll"][number];

export default function MenuManagementPage() {
  const [activeTab, setActiveTab] = useState("categories");

  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [dishDialogOpen, setDishDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [itemToDelete, setItemToDelete] = useState<{
    id: string;
    name: string;
    type: "category" | "dish";
  } | null>(null);

  const utils = api.useUtils();
  const { data: restaurants, isLoading: restaurantsLoading } = api.restaurant.getAll.useQuery();

  useEffect(() => {
    if (restaurants && restaurants.length > 0 && !selectedRestaurantId && !restaurantsLoading) {
      setSelectedRestaurantId(restaurants[0]?.id ?? null);
    }
  }, [restaurants, restaurantsLoading, selectedRestaurantId]);

  const { data: categories, isLoading: categoriesLoading } = api.category.getAll.useQuery(
    { restaurantId: selectedRestaurantId! },
    { enabled: !!selectedRestaurantId },
  );

  const { data: dishes, isLoading: dishesLoading } = api.dish.getAll.useQuery(
    { restaurantId: selectedRestaurantId! },
    { enabled: !!selectedRestaurantId },
  );

  const deleteCategoryMutation = api.category.delete.useMutation({
    onSuccess: () => {
      toast.success("Category deleted successfully");
      void utils.category.getAll.invalidate();
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete category");
    },
  });

  const deleteDishMutation = api.dish.delete.useMutation({
    onSuccess: () => {
      toast.success("Dish deleted successfully");
      void utils.dish.getAll.invalidate();
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete dish");
    },
  });

  const handleCreateCategory = () => {
    setSelectedCategory(null);
    setCategoryDialogOpen(true);
  };

  const handleEditCategory = (category: CategoryFromList) => {
    setSelectedCategory(category as unknown as Category);
    setCategoryDialogOpen(true);
  };

  const handleDeleteCategory = (category: CategoryFromList) => {
    setItemToDelete({ id: category.id, name: category.name, type: "category" });
    setDeleteDialogOpen(true);
  };

  const handleCreateDish = () => {
    setSelectedDish(null);
    setDishDialogOpen(true);
  };

  const handleEditDish = (dish: DishFromList) => {
    setSelectedDish(dish as unknown as Dish);
    setDishDialogOpen(true);
  };

  const handleDeleteDish = (dish: DishFromList) => {
    setItemToDelete({ id: dish.id, name: dish.name, type: "dish" });
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (!itemToDelete) return;

    if (itemToDelete.type === "category") {
      deleteCategoryMutation.mutate({ id: itemToDelete.id });
    } else {
      deleteDishMutation.mutate({ id: itemToDelete.id });
    }
  };

  if (!selectedRestaurantId && restaurants?.length === 0) {
    return (
      <>
        <SiteHeader title="Menu Management" />
        <div className="flex flex-1 flex-col items-center justify-center p-12">
          <Utensils className="mb-4 h-12 w-12 text-muted-foreground" />
          <p className="mb-2 text-lg font-semibold">No Restaurants Found</p>
          <p className="mb-4 text-center text-muted-foreground">
            Create a restaurant first to start managing your menu.
          </p>
          <Button onClick={() => (window.location.href = "/dashboard/restaurant-management")}>
            Go to Restaurant Management
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <SiteHeader title="Menu Management" />
      <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Menu Items</h2>
            <p className="text-muted-foreground">Manage categories and dishes for your restaurant</p>
          </div>

          {selectedRestaurantId && (
            <div className="flex gap-2">
              {activeTab === "categories" && (
                <Button onClick={handleCreateCategory}>
                  <Plus className="h-4 w-4" />
                  Add Category
                </Button>
              )}

              {activeTab === "dishes" && (
                <Button onClick={handleCreateDish}>
                  <Plus className="h-4 w-4" />
                  Add Dish
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Restaurant:</label>
          <Select
            value={selectedRestaurantId ?? ""}
            onValueChange={setSelectedRestaurantId}
            disabled={restaurantsLoading}
          >
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Select a restaurant" />
            </SelectTrigger>
            <SelectContent>
              {restaurants?.map((restaurant) => (
                <SelectItem key={restaurant.id} value={restaurant.id}>
                  {restaurant.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedRestaurantId && (
          <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="dishes">Dishes</TabsTrigger>
            </TabsList>

            <TabsContent value="categories" className="space-y-4">
              <div className="rounded-md border">
                {categoriesLoading ? (
                  <div className="space-y-3 p-4">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                  </div>
                ) : !categories || categories.length === 0 ? (
                  <div className="flex flex-col items-center justify-center p-12 text-center">
                    <p className="mb-4 text-muted-foreground">No categories yet. Create your first category!</p>
                    <Button onClick={handleCreateCategory}>
                      <Plus className="h-4 w-4" />
                      Create Category
                    </Button>
                  </div>
                ) : (
                  <DataTable
                    data={categories.map((cat) => ({
                      ...cat,
                      dishCount: cat._count?.dishes ?? 0,
                    }))}
                    columns={[
                      {
                        key: "name",
                        label: "Name",
                        sortable: true,
                        className: "font-medium",
                      },
                      {
                        key: "dishCount",
                        label: "Dishes",
                        sortable: true,
                        render: (value) => <Badge variant="secondary">{String(value)}</Badge>,
                      },
                    ]}
                    rowActionsColumn={(category) => (
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEditCategory(category as CategoryFromList)}
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteCategory(category as CategoryFromList)}
                          title="Delete"
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    emptyMessage="No categories yet. Create your first category!"
                  />
                )}
              </div>
            </TabsContent>

            <TabsContent value="dishes" className="space-y-4">
              <div className="rounded-md border">
                {dishesLoading ? (
                  <div className="space-y-3 p-4">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                ) : !dishes || dishes.length === 0 ? (
                  <div className="flex flex-col items-center justify-center p-12 text-center">
                    <p className="mb-4 text-muted-foreground">No dishes yet. Create your first dish!</p>
                    <Button onClick={handleCreateDish}>
                      <Plus className="h-4 w-4" />
                      Create Dish
                    </Button>
                  </div>
                ) : (
                  <DataTable
                    data={dishes}
                    columns={[
                      {
                        key: "name",
                        label: "Name",
                        sortable: true,
                        className: "font-medium",
                      },
                      {
                        key: "description",
                        label: "Description",
                        className: "max-w-md truncate",
                      },
                      {
                        key: "spiceLevel",
                        label: "Spice Level",
                        sortable: true,
                        render: (value) => {
                          const level = typeof value === "number" ? value : 0;
                          return level > 0 ? (
                            <Badge variant="outline">{"🌶️".repeat(level)}</Badge>
                          ) : (
                            <span className="text-sm text-muted-foreground">-</span>
                          );
                        },
                      },
                      {
                        key: "price",
                        label: "Price",
                        sortable: true,
                        className: "max-w-md truncate",
                        render: (value) => {
                          if (typeof value === "number") {
                            return String(value);
                          }
                          return "-";
                        },
                      },
                      {
                        key: "categories",
                        label: "Categories",
                        render: (value) => {
                          const cats = Array.isArray(value) ? value : [];
                          return (
                            <div className="flex flex-wrap gap-1">
                              {cats.length > 0 ? (
                                cats.slice(0, 2).map((cat: { id: string; name: string }) => (
                                  <Badge key={cat.id} variant="secondary" className="text-xs">
                                    {cat.name}
                                  </Badge>
                                ))
                              ) : (
                                <span className="text-sm text-muted-foreground">No categories</span>
                              )}
                              {cats.length > 2 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{cats.length - 2}
                                </Badge>
                              )}
                            </div>
                          );
                        },
                      },
                    ]}
                    rowActionsColumn={(dish) => (
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditDish(dish)} title="Edit">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteDish(dish)}
                          title="Delete"
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    emptyMessage="No dishes yet. Create your first dish!"
                  />
                )}
              </div>
            </TabsContent>
          </Tabs>
        )}

        {selectedRestaurantId && (
          <>
            <CategoryFormDialog
              open={categoryDialogOpen}
              onOpenChange={setCategoryDialogOpen}
              restaurantId={selectedRestaurantId}
              category={selectedCategory}
            />

            <DishFormDialog
              open={dishDialogOpen}
              onOpenChange={setDishDialogOpen}
              restaurantId={selectedRestaurantId}
              dish={selectedDish}
            />
          </>
        )}

        <DeleteConfirmationDialog
          open={deleteDialogOpen}
          onOpenChange={setDeleteDialogOpen}
          onConfirm={confirmDelete}
          title={`Delete ${itemToDelete?.type === "category" ? "Category" : "Dish"}`}
          description={`Are you sure you want to delete this ${itemToDelete?.type === "category" ? "category" : "dish"}`}
          itemName={itemToDelete?.name}
          isLoading={deleteCategoryMutation.isPending || deleteDishMutation.isPending}
        />
      </div>
    </>
  );
}
