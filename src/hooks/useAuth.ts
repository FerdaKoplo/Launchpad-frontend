import { loginService, logoutService, refreshService, registerService } from "@/services/auth.service"
import { useAuthStore } from "@/stores/useAuthStore"
import { useMutation } from "@tanstack/react-query"

const useAuth = () => {

  const { setTokens, clearTokens, refreshToken } = useAuthStore()

  const login = useMutation({
    mutationFn: (data: { email: string, password: string }) =>
      loginService(data.email, data.password),
    onSuccess: (res) => {
      setTokens(res.accessToken, res.refreshToken)
    }
  })

  const register = useMutation({
    mutationFn: (data: { email: string; password: string; name: string }) =>
      registerService(data.email, data.password, data.name),
    onSuccess: (res) => {
      setTokens(res.accessToken, res.refreshToken)
    },
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
    register,
    logout,
    refresh
  }
}

export default useAuth
