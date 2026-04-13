"use client"

import ProductCard from "./product-card"
import { products } from "@/lib/products"

export default function ProductCarousel({ category }: any) {
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products

  // ✅ LIMITA A 4 PRODUTOS
  const limited = filtered.slice(0, 4)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {limited.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}