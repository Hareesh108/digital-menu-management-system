"use client";

import { IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { api } from "~/trpc/react";

import { SidebarGroup, SidebarGroupContent, SidebarMenuButton } from "~/components/ui/sidebar";

export function LogoutButton(props: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const router = useRouter();
  const utils = api.useUtils();

  const logoutMutation = api.auth.logout.useMutation({
    onSuccess: () => {
      document.cookie = "session-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      try {
        localStorage.removeItem("currentUserEmail");
      } catch {}

      void utils.auth.getSession.invalidate();
      toast.success("Logged out successfully");

      router.push("/login");
    },
    onError: (error) => {
      console.error("Logout error:", error);
      document.cookie = "session-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      try {
        localStorage.removeItem("currentUserEmail");
      } catch {}
      router.push("/login");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenuButton onClick={handleLogout} className="cursor-pointer" disabled={logoutMutation.isPending}>
          <IconLogout />
          {logoutMutation.isPending ? "Logging out..." : "Log out"}
        </SidebarMenuButton>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
