import Link from "next/link"


interface Props {
  items: {
    label: string
    href: string
  }[]
}

const SidebarItemSubMenu: React.FC<Props> = ({ items }) => {

  return (
    <div className="ml-4 flex flex-col gap-2">
      {items.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="px-3 py-1 text-sm hover:bg-gray-100 rounded"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default SidebarItemSubMenu 
