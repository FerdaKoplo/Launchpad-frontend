"use client"

import { createContext } from "react"

interface SidebarContextType {
  isOpen: boolean
  toggle: () => void

}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined)
