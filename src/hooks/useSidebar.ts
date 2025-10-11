"use client"

import { SidebarContext } from "@/context/SidebarContext"
import { useContext } from "react"

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) throw new Error("useSidebar must be used inside SidebarProvider")
  return context
}
