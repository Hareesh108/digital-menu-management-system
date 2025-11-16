"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import { api } from "~/trpc/react";
import type { RouterOutputs } from "~/trpc/react";
import { FOOD_ITEMS } from "~/utils";

type Dish = RouterOutputs["dish"]["getById"];

interface DishFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  restaurantId: string;
  dish?: Dish | null;
}

export function DishFormDialog({
  open,
  onOpenChange,
  restaurantId,
  dish,
}: DishFormDialogProps) {
  const utils = api.useUtils();
  const isEditing = !!dish;

  const { data: categories } = api.category.getAll.useQuery(
    { restaurantId },
    { enabled: open },
  );

  const createMutation = api.dish.create.useMutation({
    onSuccess: () => {
      toast.success("Dish created successfully");
      void utils.dish.getAll.invalidate();
      void utils.restaurant.getBySlug.invalidate();
      onOpenChange(false);
      reset();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create dish");
    },
  });

  const updateMutation = api.dish.update.useMutation({
    onSuccess: () => {
      toast.success("Dish updated successfully");
      void utils.dish.getAll.invalidate();
      void utils.restaurant.getBySlug.invalidate();
      onOpenChange(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update dish");
    },
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  // Use "0" to represent "None" (must be non-empty)
  const [spiceLevel, setSpiceLevel] = useState<string>("0");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [errors, setErrors] = useState<{
    name?: string;
    description?: string;
  }>({});

  useEffect(() => {
    if (dish) {
      setName(dish.name);
      setDescription(dish.description);
      setImage(dish.image ?? "");
      setSpiceLevel(dish.spiceLevel?.toString() ?? "0"); // default to "0"
      setSelectedCategories(dish.categories.map((c) => c.id));
    } else {
      reset();
    }
    setErrors({});
  }, [dish, open]);

  const reset = () => {
    setName("");
    setDescription("");
    setImage("");
    setSpiceLevel("0");
    setSelectedCategories([]);
    setErrors({});
  };

  const validate = () => {
    const newErrors: { name?: string; description?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Dish name is required";
    }
    if (!description.trim()) {
      newErrors.description = "Description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const spice =
      spiceLevel !== "0" && spiceLevel !== "" ? parseInt(spiceLevel, 10) : null;

    const dishData = {
      name: name.trim(),
      description: description.trim(),
      image: image.trim() || null,
      spiceLevel: spice,
      categoryIds: selectedCategories,
    };

    if (isEditing && dish) {
      updateMutation.mutate({
        id: dish.id,
        ...dishData,
      });
    } else {
      createMutation.mutate({
        restaurantId,
        ...dishData,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Dish" : "Create Dish"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update your dish information"
              : "Add a new dish to your menu"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Dish Name</FieldLabel>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Margherita Pizza"
                disabled={createMutation.isPending || updateMutation.isPending}
              />
              {errors.name && (
                <FieldDescription className="text-destructive">
                  {errors.name}
                </FieldDescription>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your dish..."
                rows={3}
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                disabled={createMutation.isPending || updateMutation.isPending}
              />
              {errors.description && (
                <FieldDescription className="text-destructive">
                  {errors.description}
                </FieldDescription>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="image">Image</FieldLabel>

              <Select
                onValueChange={(value) => setImage(value)}
                value={image}
                disabled={createMutation.isPending || updateMutation.isPending}
              >
                <SelectTrigger id="image">
                  <SelectValue placeholder="Select an image" />
                </SelectTrigger>

                <SelectContent>
                  {FOOD_ITEMS.map((item) => (
                    <SelectItem key={item.url} value={item.url}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FieldDescription>
                Optional: Choose an image for your dish
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="spiceLevel">Spice Level</FieldLabel>
              <Select
                value={spiceLevel}
                onValueChange={setSpiceLevel}
                disabled={createMutation.isPending || updateMutation.isPending}
              >
                <SelectTrigger id="spiceLevel">
                  <SelectValue placeholder="Select spice level (optional)" />
                </SelectTrigger>
                <SelectContent>
                  {/* Use "0" instead of empty string */}
                  <SelectItem value="0">None</SelectItem>
                  <SelectItem value="1">🌶️ Mild (1)</SelectItem>
                  <SelectItem value="2">🌶️🌶️ Medium (2)</SelectItem>
                  <SelectItem value="3">🌶️🌶️🌶️ Hot (3)</SelectItem>
                  <SelectItem value="4">🌶️🌶️🌶️🌶️ Very Hot (4)</SelectItem>
                  <SelectItem value="5">
                    🌶️🌶️🌶️🌶️🌶️ Extremely Hot (5)
                  </SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>Categories</FieldLabel>
              <div className="max-h-48 space-y-2 overflow-y-auto rounded-md border p-4">
                {!categories || categories.length === 0 ? (
                  <p className="text-muted-foreground text-sm">
                    No categories available. Create a category first.
                  </p>
                ) : (
                  categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                        disabled={
                          createMutation.isPending || updateMutation.isPending
                        }
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className="flex-1 cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))
                )}
              </div>
              <FieldDescription>
                Select one or more categories for this dish
              </FieldDescription>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              {createMutation.isPending || updateMutation.isPending
                ? isEditing
                  ? "Updating..."
                  : "Creating..."
                : isEditing
                  ? "Update"
                  : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
