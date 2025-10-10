"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "../ui/button"

interface Props {
  children?: React.ReactNode
  //active: boolean
  href?: string
  subMenu?: React.ReactNode
}

const SidebarItem: React.FC<Props> = ({ children, subMenu, href }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <div className="flex flex-col">
      {href ? (
        <Link href={href}
          className="flex  items-center justify-center
                px-3 py-3 text-sm rounded-lg max-w-2xl">
          {children}
        </Link>
      ) : (
        <Button onClick={toggleMenu}>
          {children}
        </Button>
      )}

      {subMenu && isOpen && (
        <div className="ml-4 flex flex-col gap-2">
          {subMenu}
        </div>
      )}
    </div>

  )
}

export default SidebarItem 
