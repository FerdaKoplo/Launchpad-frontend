"use client"

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { Button } from "../ui/button"
import { useSidebar } from "@/hooks/useSidebar"

interface Props {
  children?: React.ReactNode
}

const ResponsiveSidebar: React.FC<Props> = ({ children }) => {

  const { isOpen, toggle } = useSidebar()

  return (
    <>
      <div
        className={`
          w-64 gap-5 p-5 min-h-screen fixed bg-white border-r-2 border-black 
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Button onClick={toggle} className="cursor-pointer bg-transparent text-black hover:bg-transparent">
          <MdOutlineKeyboardDoubleArrowLeft className="rotate-180" />
        </Button>
        {children}
      </div>

      <div
        className={`
          p-5  transition-all duration-500 ease-in-out
          ${isOpen ? "-translate-x-100 pointer-events-none" : "translate-x-0"}
        `}
      >
        <Button onClick={toggle} className="cursor-pointer bg-transparent hover:bg-transparent text-black">
          <MdOutlineKeyboardDoubleArrowLeft />
        </Button>
      </div>
    </>
  )
}

export default ResponsiveSidebar 
