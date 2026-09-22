"use client"
import { useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PRODUCT_CATEGORIES } from "@/lib/products"
import { useFilterStore } from "@/store/filter-store"
import { cn } from "@/lib/utils"

export function CategoryMenu() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, align: "start" })
  const { category, setCategory } = useFilterStore()

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const displayCategories = PRODUCT_CATEGORIES.filter((c) => c.id !== "todos")

  return (
    <div className="relative bg-card border-b border-border py-7">
      <div className="container mx-auto px-4">
        <div className="relative">
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary transition-colors -ml-4"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="overflow-hidden px-6" ref={emblaRef}>
            <div className="flex gap-6 justify-center flex-wrap md:flex-nowrap">
              {displayCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/loja/categoria/${cat.id}`}
                  onClick={() => setCategory(cat.id)}
                  className="flex flex-col items-center gap-2.5 shrink-0 group"
                >
                  <div className={cn(
                    "relative h-16 w-16 rounded-full border-2 transition-all overflow-hidden bg-muted",
                    category === cat.id
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-border group-hover:border-primary/40"
                  )}>
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-contain p-1.5"
                      sizes="64px"
                    />
                  </div>
                  <span className={cn(
                    "text-xs font-medium text-center max-w-[90px] leading-tight",
                    category === cat.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  )}>
                    {cat.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-card border border-border shadow-sm hover:border-primary hover:text-primary transition-colors -mr-4"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
