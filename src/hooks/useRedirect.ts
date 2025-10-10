import { useRedirectStore } from "@/stores/useRedirectStore"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"

export const useRedirect = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { intended, setIntended, clearIntended } = useRedirectStore()

  const captureIntended = () => setIntended(pathname)

  const redirectToIntended = () => {
    if (intended) {
      router.push(intended)
      clearIntended()
    } else {
      router.push('/dashboard')
    }
  }

  return {
    captureIntended,
    redirectToIntended
  }
}
