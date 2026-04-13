"use client"

import { useRouter } from "next/navigation"
import ProductCarousel from "./product-carousel"

export default function ProductSection({ title, category }: any) {
  const router = useRouter()

  return (
    <section className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-lg md:text-xl font-semibold tracking-tight">
            {title}
          </h2>

          <button
            onClick={() => router.push(`/loja/categoria/${category}`)}
            className="text-sm text-muted-foreground hover:text-primary transition"
          >
            Ver todos
          </button>

        </div>

        <ProductCarousel category={category} />

      </div>
    </section>
  )
}