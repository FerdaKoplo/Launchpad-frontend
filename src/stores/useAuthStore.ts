import { AuthState } from "@/interfaces/auth.interface";
import { create } from "zustand";
import Cookies from 'js-cookie'
export const useAuthStore = create<AuthState>((set) => ({
  accessToken: Cookies.get('accessToken') || null,
  refreshToken: Cookies.get('refreshToken') || null,

  setTokens: (accessToken, refreshToken) => {
    Cookies.set('accessToken', accessToken, { expires: 1 });
    Cookies.set('refreshToken', refreshToken, { expires: 7 });
    set({ accessToken, refreshToken });
  },

  clearTokens: () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    set({ accessToken: null, refreshToken: null });
  },
}))













