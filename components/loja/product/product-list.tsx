"use client"

import ProductCard from "./product-card"
import { products } from "@/lib/products"
import { useFilter } from "@/store/filter-store"

export default function ProductList({ category: forcedCategory }: any) {
  const { search, category } = useFilter()

  const finalCategory = forcedCategory ?? category

  const filtered = products.filter((p) => {
    const matchCategory = finalCategory
      ? p.category === finalCategory
      : true

    const matchSearch = search
      ? p.name.toLowerCase().includes(search.toLowerCase())
      : true

    return matchCategory && matchSearch
  })

  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filtered.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}