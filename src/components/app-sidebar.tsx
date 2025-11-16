"use client";

import { IconDashboard, IconListDetails } from "@tabler/icons-react";
import * as React from "react";

import { LogoutButton } from "~/components/logout-button";
import { NavMain } from "~/components/nav-main";
import { NavUser } from "~/components/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "~/components/ui/sidebar";

const data = {
  user: {
    name: "Hi,",
    email: "hareesh@gmail.com",
    avatar: "/logo/user.png",
  },
  navMain: [
    {
      title: "Restaurant Management",
      url: "dashboard/restaurant-management",
      icon: IconDashboard,
    },
    {
      title: "Menu Management",
      url: "dashboard/menu-management",
      icon: IconListDetails,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
