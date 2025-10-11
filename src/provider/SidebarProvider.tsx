"use client"

import { SidebarContext } from "@/context/SidebarContext"
import { useState } from "react"

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggle = () => setIsOpen(prev => !prev)

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
