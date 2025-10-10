import ResponsiveSidebar from "@/components/sidebar/responsive-sidebar";
import SidebarItem from "@/components/sidebar/sidebar-item";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const tokenCookie = cookieStore.get('accessToken')


  if (!tokenCookie?.value) {
    redirect("/auth/login");
  }


  return (

    <div className="flex">
      <ResponsiveSidebar>
        <SidebarItem href="/dashboard">
          Home
        </SidebarItem>

        <SidebarItem subMenu={
          <>
            <Link href={'/dashboard'}>
              Workspace
            </Link>
          </>
        } >
          Workspace
        </SidebarItem>
      </ResponsiveSidebar>

      <main className="flex-i p-6 ml-54">
        {children}
      </main>
    </div >
  )
}
