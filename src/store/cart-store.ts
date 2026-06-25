"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { QuoteItem } from "@/lib/types"

interface CartStore {
  items: QuoteItem[]
  addItem: (item: Omit<QuoteItem, "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearQuote: () => void
  totalItems: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existing = get().items.find((i) => i.id === item.id && i.variant === item.variant)
        if (existing) {
          set((s) => ({
            items: s.items.map((i) =>
              i.id === item.id && i.variant === item.variant
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          }))
        } else {
          set((s) => ({ items: [...s.items, { ...item, quantity: 1 }] }))
        }
      },
      removeItem: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        set((s) => ({
          items: s.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        }))
      },
      clearQuote: () => set({ items: [] }),
      totalItems: () => get().items.reduce((acc, i) => acc + i.quantity, 0),
    }),
    { name: "safri-quote-storage" }
  )
)
