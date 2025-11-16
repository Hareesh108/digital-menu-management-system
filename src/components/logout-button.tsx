"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { IconLogout } from "@tabler/icons-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { api } from "~/trpc/react";

export function LogoutButton() {
  const router = useRouter();
  const utils = api.useUtils();
  
  // NOTE: Authentication is disabled, so we'll just clear any local state
  const logoutMutation = api.auth.logout.useMutation({
    onSuccess: () => {
      toast.success("Logged out successfully");
      void utils.auth.getSession.invalidate();
      router.push("/login");
    },
    onError: () => {
      // If auth fails, just redirect anyway
      router.push("/login");
    },
  });

  const handleLogout = () => {
    // Try to logout via API if available, otherwise just redirect
    try {
      logoutMutation.mutate();
    } catch {
      router.push("/login");
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton onClick={handleLogout} size="lg" className="w-full">
          <IconLogout className="h-4 w-4" />
          <span>Logout</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

