'use client'

import { AuthState } from "@/interfaces/auth.interface";
import { create } from "zustand";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,

  loadTokens: () => {
    const accessToken = getCookie('accessToken') as string | null;
    const refreshToken = getCookie('refreshToken') as string | null;
    set({ accessToken, refreshToken });
  },

  setTokens: (accessToken: string, refreshToken: string) => {
    setCookie('accessToken', accessToken, { maxAge: 60 * 60 * 24 }); // 1 day
    setCookie('refreshToken', refreshToken, { maxAge: 60 * 60 * 24 * 7 }); // 7 days
    set({ accessToken, refreshToken });
  },

  clearTokens: () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    set({ accessToken: null, refreshToken: null });
  },
}));
