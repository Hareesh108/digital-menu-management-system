import { notFound } from "next/navigation";
import { api } from "~/trpc/server";
import { MenuView } from "~/components/menu-view";

export default async function MenuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let restaurant;
  try {
    restaurant = await api.restaurant.getBySlug({ slug });
  } catch (error) {
    notFound();
  }

  return <MenuView restaurant={restaurant} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const restaurant = await api.restaurant.getBySlug({ slug });
    return {
      title: `${restaurant.name} - Digital Menu`,
      description: `View the digital menu for ${restaurant.name} located at ${restaurant.location}`,
    };
  } catch {
    return {
      title: "Menu Not Found",
    };
  }
}

