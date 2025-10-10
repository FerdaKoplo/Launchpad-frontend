import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const tokenCookie = cookieStore.get('accessToken')


  if (!tokenCookie?.value) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
