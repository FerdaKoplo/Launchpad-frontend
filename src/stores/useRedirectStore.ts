import { create } from "zustand"

interface RedirectState {
  intended: string | null
  setIntended: (path: string) => void
  clearIntended: () => void
}

export const useRedirectStore = create<RedirectState>((set) => ({
  intended: null,
  setIntended: (path) => set({ intended: path }),
  clearIntended: () => set({ intended: null })
}))
