
"use client";

import ResponsiveSidebar from "@/components/sidebar/responsive-sidebar";
import SidebarItem from "@/components/sidebar/sidebar-item";
import { useSidebarStore } from "@/stores/useSidebarStore";
import Link from "next/link";

export default function ClientProtectedLayout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebarStore()

  return (
    <div className="flex">
      <ResponsiveSidebar>
        <SidebarItem href="/dashboard">Home</SidebarItem>
        <SidebarItem subMenu={<Link href="/dashboard">Workspace</Link>}>
          Workspace
        </SidebarItem>
      </ResponsiveSidebar>

      <main
        className={`flex-1 p-6 transition-all duration-500 ease-in-out ${isOpen ? "ml-64" : "ml-0"
          }`}
      >
        {children}
      </main>
    </div>
  );
}
