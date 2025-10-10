"use client"

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { Button } from "../ui/button"

interface Props {
  children?: React.ReactNode
}

const ResponsiveSidebar: React.FC<Props> = ({ children }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => setIsOpen(prev => !prev)



  return (
    <>
      <div
        className={`
          w-64 gap-5 p-5 min-h-screen fixed bg-white border-r-2 border-black 
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Button onClick={toggleMenu}>
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
        <Button onClick={toggleMenu}>
          <MdOutlineKeyboardDoubleArrowLeft />
        </Button>
      </div>
    </>
  )
}

export default ResponsiveSidebar 
