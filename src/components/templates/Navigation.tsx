"use client";

import { usePathname } from "next/navigation";

import { navMenu, AdminSidebarItems } from "@/components/constants/Navigation";
import BottomNav from "./BottomNav";

function Navigation() {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  return <BottomNav items={isAdmin ? AdminSidebarItems : navMenu} />;
}

export default Navigation;
