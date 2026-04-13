"use client"

import { useQuote } from "@/store/cart-store"
import { Trash2 } from "lucide-react"

export default function QuoteItem({ item }: any) {
  const { removeItem, updateQuantity } = useQuote()

  return (
    <div className="flex items-center justify-between border-b py-4 gap-4">

      {/* INFO */}
      <div className="flex-1">
        <p className="font-medium text-sm">{item.name}</p>

        {item.variant && (
          <span className="text-xs text-muted-foreground">
            {item.variant}
          </span>
        )}
      </div>

      {/* QUANTITY */}
      <input
        type="number"
        min={1}
        value={item.quantity}
        onChange={(e) =>
          updateQuantity(item.id, Number(e.target.value))
        }
        className="w-20 border rounded-lg px-2 py-1 text-sm"
      />

      {/* REMOVE */}
      <button
        onClick={() => removeItem(item.id)}
        className="text-red-500 hover:opacity-70"
      >
        <Trash2 size={18} />
      </button>

    </div>
  )
}