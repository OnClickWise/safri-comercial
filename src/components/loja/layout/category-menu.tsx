"use client"
import { useCallback } from "react"
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

  return (
    <div className="relative bg-card border-b border-border py-5">
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
            <div className="flex gap-4">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className="flex flex-col items-center gap-2 shrink-0 group"
                >
                  <div className={cn(
                    "h-16 w-16 rounded-full border-2 transition-all overflow-hidden bg-muted flex items-center justify-center",
                    category === cat.id
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-border group-hover:border-primary/40"
                  )}>
                    <span className="text-[10px] text-muted-foreground font-bold text-center px-1 leading-tight">
                      {cat.label.split(" ").slice(-1)[0]}
                    </span>
                  </div>
                  <span className={cn(
                    "text-xs font-medium text-center max-w-[80px] leading-tight",
                    category === cat.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  )}>
                    {cat.label}
                  </span>
                </button>
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
