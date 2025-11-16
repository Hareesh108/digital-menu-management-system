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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Skeleton } from "~/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

type Category = RouterOutputs["category"]["getAll"][number];
type Dish = RouterOutputs["dish"]["getAll"][number];

export default function MenuManagementPage() {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [dishDialogOpen, setDishDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteType, setDeleteType] = useState<"category" | "dish" | null>(null);
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

  const handleEditCategory = (category: Category) => {
    setSelectedCategory(category);
    setCategoryDialogOpen(true);
  };

  const handleDeleteCategory = (category: Category) => {
    setItemToDelete({ id: category.id, name: category.name, type: "category" });
    setDeleteDialogOpen(true);
  };

  const handleCreateDish = () => {
    setSelectedDish(null);
    setDishDialogOpen(true);
  };

  const handleEditDish = (dish: Dish) => {
    setSelectedDish(dish);
    setDishDialogOpen(true);
  };

  const handleDeleteDish = (dish: Dish) => {
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
              <Button variant="outline" onClick={handleCreateCategory}>
                <Plus className="mr-2 h-4 w-4" />
                Add Category
              </Button>
              <Button onClick={handleCreateDish}>
                <Plus className="mr-2 h-4 w-4" />
                Add Dish
              </Button>
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
          <Tabs defaultValue="categories" className="w-full">
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
                      <Plus className="mr-2 h-4 w-4" />
                      Create Category
                    </Button>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Dishes</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {categories.map((category) => (
                        <TableRow key={category.id}>
                          <TableCell className="font-medium">{category.name}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{category._count?.dishes ?? 0}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEditCategory(category)}
                                title="Edit"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDeleteCategory(category)}
                                title="Delete"
                                className="text-destructive hover:text-destructive"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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
                      <Plus className="mr-2 h-4 w-4" />
                      Create Dish
                    </Button>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Spice Level</TableHead>
                        <TableHead>Categories</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dishes.map((dish) => (
                        <TableRow key={dish.id}>
                          <TableCell className="font-medium">{dish.name}</TableCell>
                          <TableCell className="max-w-md truncate">{dish.description}</TableCell>
                          <TableCell>
                            {dish.spiceLevel && dish.spiceLevel > 0 ? (
                              <Badge variant="outline">{"🌶️".repeat(dish.spiceLevel)}</Badge>
                            ) : (
                              <span className="text-sm text-muted-foreground">-</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {dish.categories.length > 0 ? (
                                dish.categories.slice(0, 2).map((cat) => (
                                  <Badge key={cat.id} variant="secondary" className="text-xs">
                                    {cat.name}
                                  </Badge>
                                ))
                              ) : (
                                <span className="text-sm text-muted-foreground">No categories</span>
                              )}
                              {dish.categories.length > 2 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{dish.categories.length - 2}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
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
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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
