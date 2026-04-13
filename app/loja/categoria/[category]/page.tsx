"use client"

import { useParams } from "next/navigation"
import ProductList from "@/components/loja/product/product-list"

export default function CategoriaPage() {
  const params = useParams()
  const category = params.category as string

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

      <h1 className="text-2xl font-bold mb-6 capitalize">
        {category}
      </h1>

      <ProductList category={category} />

    </div>
  )
}