import { redirect } from "next/navigation";

import { getSession } from "~/server/auth/session";

import { AppSidebar } from "~/components/app-sidebar";
import { CurrentUserEmail } from "~/components/current-user-email";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <CurrentUserEmail />
      <AppSidebar variant="inset" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
