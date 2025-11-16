"use client";

import { Plus, Edit, Trash2, QrCode, ExternalLink, View, Eye, Copy } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import type { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/react";

import { DeleteConfirmationDialog } from "~/components/delete-confirmation-dialog";
import { QRCodeDialog } from "~/components/restaurant/qr-code-dialog";
import { RestaurantFormDialog } from "~/components/restaurant/restaurant-form-dialog";
import { SiteHeader } from "~/components/site-header";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";

type Restaurant = RouterOutputs["restaurant"]["getAll"][number];

export default function RestaurantManagementPage() {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [restaurantToDelete, setRestaurantToDelete] = useState<Restaurant | null>(null);

  const utils = api.useUtils();
  const { data: restaurants, isLoading } = api.restaurant.getAll.useQuery();

  const deleteMutation = api.restaurant.delete.useMutation({
    onSuccess: () => {
      toast.success("Restaurant deleted successfully");
      void utils.restaurant.getAll.invalidate();
      setDeleteDialogOpen(false);
      setRestaurantToDelete(null);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete restaurant");
    },
  });

  const handleCreate = () => {
    setSelectedRestaurant(null);
    setDialogOpen(true);
  };

  const handleEdit = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setDialogOpen(true);
  };

  const handleDelete = (restaurant: Restaurant) => {
    setRestaurantToDelete(restaurant);
    setDeleteDialogOpen(true);
  };

  const handleShowQR = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setQrDialogOpen(true);
  };

  const handleViewMenu = (restaurant: Restaurant) => {
    router.push(`/menu/${restaurant.slug}`);
  };

  const confirmDelete = () => {
    if (restaurantToDelete) {
      deleteMutation.mutate({ id: restaurantToDelete.id });
    }
  };

  const getMenuUrl = (slug: string) => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/menu/${slug}`;
    }
    return `/menu/${slug}`;
  };

  const handleCopyMenuUrl = async (restaurant: Restaurant) => {
    const url = `${window.location.origin}/menu/${restaurant.slug}`;
    await navigator.clipboard.writeText(url);
    toast.success("Menu link copied!");
  };

  return (
    <>
      <SiteHeader title="Restaurant Management" />
      <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Your Restaurants</h2>
            <p className="text-muted-foreground">Manage your restaurants and their digital menus</p>
          </div>
          <Button onClick={handleCreate}>
            <Plus className="mr-2 h-4 w-4" />
            Add Restaurant
          </Button>
        </div>

        <div className="rounded-md border">
          {isLoading ? (
            <div className="space-y-3 p-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          ) : !restaurants || restaurants.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <p className="text-muted-foreground mb-4">
                No restaurants yet. Create your first restaurant to get started!
              </p>
              <Button onClick={handleCreate}>
                <Plus className="mr-2 h-4 w-4" />
                Create Restaurant
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Categories</TableHead>
                  <TableHead>Dishes</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {restaurants.map((restaurant) => (
                  <TableRow key={restaurant.id}>
                    <TableCell className="font-medium">{restaurant.name}</TableCell>
                    <TableCell>{restaurant.location}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{restaurant._count?.categories ?? 0}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{restaurant._count?.dishes ?? 0}</Badge>
                    </TableCell>
                    <TableCell>
                      <code className="bg-muted rounded px-2 py-1 text-xs">{restaurant.slug}</code>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleViewMenu(restaurant)}
                          title="View Menu"
                          className="cursor-pointer"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCopyMenuUrl(restaurant)}
                          title="Copy URL"
                          className="cursor-pointer"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleShowQR(restaurant)}
                          title="Show QR Code"
                          className="cursor-pointer"
                        >
                          <QrCode className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(restaurant)}
                          title="Edit"
                          className="cursor-pointer"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(restaurant)}
                          title="Delete"
                          className="text-destructive hover:text-destructive cursor-pointer"
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
      </div>

      <RestaurantFormDialog open={dialogOpen} onOpenChange={setDialogOpen} restaurant={selectedRestaurant} />

      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={confirmDelete}
        title="Delete Restaurant"
        description="Are you sure you want to delete"
        itemName={restaurantToDelete?.name}
        isLoading={deleteMutation.isPending}
      />

      {selectedRestaurant && (
        <QRCodeDialog
          open={qrDialogOpen}
          onOpenChange={setQrDialogOpen}
          url={getMenuUrl(selectedRestaurant.slug)}
          restaurantName={selectedRestaurant.name}
        />
      )}
    </>
  );
}
