"use client";

import { IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { api } from "~/trpc/react";

import { SidebarGroup, SidebarGroupContent, SidebarMenuButton } from "~/components/ui/sidebar";

export function LogoutButton(props: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
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
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenuButton onClick={handleLogout} className="cursor-pointer">
          <IconLogout />
          Log out
        </SidebarMenuButton>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
