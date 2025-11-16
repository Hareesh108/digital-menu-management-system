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
import { api } from "~/trpc/react";
import type { RouterOutputs } from "~/trpc/react";

type Category = RouterOutputs["category"]["getById"];

interface CategoryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  restaurantId: string;
  category?: Category | null;
}

export function CategoryFormDialog({
  open,
  onOpenChange,
  restaurantId,
  category,
}: CategoryFormDialogProps) {
  const utils = api.useUtils();
  const isEditing = !!category;

  const createMutation = api.category.create.useMutation({
    onSuccess: () => {
      toast.success("Category created successfully");
      void utils.category.getAll.invalidate();
      onOpenChange(false);
      reset();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create category");
    },
  });

  const updateMutation = api.category.update.useMutation({
    onSuccess: () => {
      toast.success("Category updated successfully");
      void utils.category.getAll.invalidate();
      onOpenChange(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update category");
    },
  });

  const [name, setName] = useState("");
  const [errors, setErrors] = useState<{ name?: string }>({});

  useEffect(() => {
    if (category) {
      setName(category.name);
    } else {
      setName("");
    }
    setErrors({});
  }, [category, open]);

  const reset = () => {
    setName("");
    setErrors({});
  };

  const validate = () => {
    const newErrors: { name?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Category name is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (isEditing && category) {
      updateMutation.mutate({
        id: category.id,
        name: name.trim(),
      });
    } else {
      createMutation.mutate({
        restaurantId,
        name: name.trim(),
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit Category" : "Create Category"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update your category information"
              : "Add a new category to organize dishes"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Category Name</FieldLabel>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Appetizers, Main Course, Desserts"
                disabled={createMutation.isPending || updateMutation.isPending}
              />
              {errors.name && (
                <FieldDescription className="text-destructive">
                  {errors.name}
                </FieldDescription>
              )}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <div className="mt-6 flex gap-4">
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
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
