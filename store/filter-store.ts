"use client"

import { create } from "zustand"

interface FilterStore {
  search: string
  category: string

  setSearch: (value: string) => void
  setCategory: (value: string) => void

  clearFilters: () => void
}

export const useFilter = create<FilterStore>((set) => ({
  search: "",
  category: "",

  setSearch: (value) => set({ search: value }),

  setCategory: (value) =>
    set({
      category: value,
      search: "", // limpa busca ao trocar categoria (UX melhor)
    }),

  clearFilters: () =>
    set({
      search: "",
      category: "",
    }),
}))