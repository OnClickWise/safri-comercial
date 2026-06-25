"use client"
import { create } from "zustand"

interface FilterStore {
  search: string
  category: string
  setSearch: (value: string) => void
  setCategory: (value: string) => void
  clearFilters: () => void
}

export const useFilterStore = create<FilterStore>((set) => ({
  search: "",
  category: "todos",
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category, search: "" }),
  clearFilters: () => set({ search: "", category: "todos" }),
}))
