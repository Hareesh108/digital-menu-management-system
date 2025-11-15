"use client";

import * as React from "react";
import { IconLogout, type Icon } from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

export function NavSecondary({
  ...props
}: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenuButton>
          <IconLogout />
          Log out
        </SidebarMenuButton>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
