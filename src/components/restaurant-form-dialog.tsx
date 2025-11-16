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
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import type { RouterOutputs } from "~/trpc/react";

type Restaurant = RouterOutputs["restaurant"]["getAll"][number];

interface RestaurantFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  restaurant?: Restaurant | null;
}

export function RestaurantFormDialog({
  open,
  onOpenChange,
  restaurant,
}: RestaurantFormDialogProps) {
  const utils = api.useUtils();
  const isEditing = !!restaurant;

  const createMutation = api.restaurant.create.useMutation({
    onSuccess: () => {
      toast.success("Restaurant created successfully");
      void utils.restaurant.getAll.invalidate();
      onOpenChange(false);
      reset();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create restaurant");
    },
  });

  const updateMutation = api.restaurant.update.useMutation({
    onSuccess: () => {
      toast.success("Restaurant updated successfully");
      void utils.restaurant.getAll.invalidate();
      onOpenChange(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update restaurant");
    },
  });

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState<{ name?: string; location?: string }>(
    {},
  );

  useEffect(() => {
    if (restaurant) {
      setName(restaurant.name);
      setLocation(restaurant.location);
    } else {
      setName("");
      setLocation("");
    }
    setErrors({});
  }, [restaurant, open]);

  const validate = () => {
    const newErrors: { name?: string; location?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Restaurant name is required";
    }
    if (!location.trim()) {
      newErrors.location = "Location is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (isEditing && restaurant) {
      updateMutation.mutate({
        id: restaurant.id,
        name: name.trim(),
        location: location.trim(),
      });
    } else {
      createMutation.mutate({
        name: name.trim(),
        location: location.trim(),
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit Restaurant" : "Create Restaurant"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update your restaurant information"
              : "Add a new restaurant to manage"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Restaurant Name</FieldLabel>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="My Restaurant"
                disabled={createMutation.isPending || updateMutation.isPending}
              />
              {errors.name && (
                <FieldDescription className="text-destructive">
                  {errors.name}
                </FieldDescription>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="location">Location</FieldLabel>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="123 Main St, City"
                disabled={createMutation.isPending || updateMutation.isPending}
              />
              {errors.location && (
                <FieldDescription className="text-destructive">
                  {errors.location}
                </FieldDescription>
              )}
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

