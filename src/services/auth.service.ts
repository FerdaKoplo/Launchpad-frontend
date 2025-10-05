import { api } from "@/api/api"

export const loginService = async (email: string, password: string) => {
  const res = await api.post('/login', { email, password })
  return res.data
}

export const registerService = async (name: string, email: string, password: string) => {
  const res = await api.post('/register', { email, password, name })
  return res.data
}

export const logoutService = async (refreshToken: string) => {
  const res = await api.post("/auth/logout", { refreshToken })
  return res.data
}

export const refreshService = async (refreshToken: string) => {
  const res = await api.post("/auth/refresh", { refreshToken })
  return res.data
}
