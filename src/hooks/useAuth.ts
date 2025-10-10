import { LoginSchema } from "@/schema/login.schema"
import { RegisterSchema } from "@/schema/register.schema"
import { loginService, logoutService, refreshService, registerService } from "@/services/auth.service"
import { useAuthStore } from "@/stores/useAuthStore"
import { useMutation } from "@tanstack/react-query"

const useAuth = () => {

  const { setTokens, clearTokens, refreshToken } = useAuthStore()

  const login = useMutation({
    mutationFn: (data: LoginSchema) =>
      loginService(data.email, data.password),
    onSuccess: (res) => {
      setTokens(res.accessToken, res.refreshToken)
    }
  })

  const registerAccount = useMutation({
    mutationFn: (data: RegisterSchema) => registerService(data.name, data.email, data.password),
    onSuccess: (res) => setTokens(res.accessToken, res.refreshToken),

  })

  const logout = useMutation({
    mutationFn: () => logoutService(refreshToken || ""),
    onSuccess: () => {
      clearTokens()
    },
  })

  const refresh = useMutation({
    mutationFn: () => refreshService(refreshToken || ""),
    onSuccess: (res) => {
      setTokens(res.accessToken, res.refreshToken)
    },
  })

  return {
    login,
    registerAccount,
    logout,
    refresh
  }
}

export default useAuth
