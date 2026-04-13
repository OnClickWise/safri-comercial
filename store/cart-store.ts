"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface QuoteItem {
  id: string
  name: string
  quantity: number
  variant?: string
}

interface QuoteStore {
  items: QuoteItem[]

  addItem: (product: {
    id: string
    name: string
    variant?: string
  }) => void

  removeItem: (id: string) => void

  updateQuantity: (id: string, quantity: number) => void

  clearQuote: () => void
}

export const useQuote = create<QuoteStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const items = get().items

        const existing = items.find(
          (i) => i.id === product.id && i.variant === product.variant
        )

        if (existing) {
          set({
            items: items.map((i) =>
              i.id === product.id && i.variant === product.variant
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          })
        } else {
          set({
            items: [
              ...items,
              {
                ...product,
                quantity: 1,
              },
            ],
          })
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((i) => i.id !== id),
        })
      },

      updateQuantity: (id, quantity) => {
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        })
      },

      clearQuote: () => set({ items: [] }),
    }),
    {
      name: "quote-storage",
    }
  )
)