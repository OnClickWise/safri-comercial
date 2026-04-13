"use client"

import { useCart } from "@/store/cart-store"
import CartItem from "@/components/loja/cart/cart-item"
import CartSummary from "@/components/loja/cart/cart-summary"

export default function CarrinhoPage() {
  const { items } = useCart()

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-6">Carrinho</h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          {items.length === 0 && <p>Carrinho vazio</p>}

          {items.map((item, i) => (
            <CartItem key={i} item={item} />
          ))}
        </div>

        <CartSummary />
      </div>
    </div>
  )
}