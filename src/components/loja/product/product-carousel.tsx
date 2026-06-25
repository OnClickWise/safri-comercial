"use client"
import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard } from "./product-card"
import { products } from "@/lib/products"
import type { ProductCategory } from "@/lib/types"

export function ProductCarousel({ category }: { category: ProductCategory }) {
  const filtered = products.filter((p) => p.category === category)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: filtered.length > 3, dragFree: true, align: "start" })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  if (filtered.length === 0) return null

  return (
    <div className="relative">
      <button
        onClick={scrollPrev}
        aria-label="Anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border shadow-md hover:border-primary hover:text-primary transition-colors -ml-4"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div className="overflow-hidden px-2" ref={emblaRef}>
        <div className="flex gap-4">
          {filtered.map((product) => (
            <div key={product.id} className="min-w-0 flex-[0_0_280px] sm:flex-[0_0_260px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollNext}
        aria-label="Próximo"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border shadow-md hover:border-primary hover:text-primary transition-colors -mr-4"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
