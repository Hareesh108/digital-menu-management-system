"use client";

import { IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { SidebarGroup, SidebarGroupContent, SidebarMenuButton } from "~/components/ui/sidebar";

export function NavSecondary(props: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const router = useRouter();

  async function handleLogout() {
    console.log("Logging out...");
    await new Promise((res) => setTimeout(res, 2000));
    router.push("/");
  }

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
