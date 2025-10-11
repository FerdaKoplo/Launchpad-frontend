import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import ClientProtectedLayout from "./client-protected-layout"

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const token = cookieStore.get("accessToken")?.value

  if (!token) {
    redirect("/auth/login")
  }

  return <ClientProtectedLayout>{children}</ClientProtectedLayout>
}
