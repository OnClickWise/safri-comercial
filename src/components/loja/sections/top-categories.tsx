"use client"
import { useCallback } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PRODUCT_CATEGORIES, getProductsByCategory } from "@/lib/products"
import { useFilterStore } from "@/store/filter-store"

const categoryImages: Record<string, string> = {
  todos: "/images/loja/categories/01.webp",
  sacos: "/images/loja/categories/02.webp",
  saco: "/images/loja/categories/03.webp",
  carteiras: "/images/loja/categories/04.webp",
  cadernos: "/images/loja/categories/05.webp",
}

export function TopCategories() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const setCategory = useFilterStore((s) => s.setCategory)
  const router = useRouter()

  const handleCategoryClick = (categoryId: string) => {
    setCategory(categoryId)
    router.push(`/loja/categoria/${categoryId}`)
  }

  const displayCategories = PRODUCT_CATEGORIES.filter((c) => c.id !== "todos")

  return (
    <section className="py-14 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Navegar por</span>
            <h2 className="text-2xl md:text-3xl font-black text-secondary mt-1">Nossas Categorias</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="h-9 w-9 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="h-9 w-9 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {displayCategories.map((cat) => {
              const count = getProductsByCategory(cat.id).length
              const imgSrc = categoryImages[cat.id] ?? "/images/loja/categories/01.webp"
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="min-w-0 flex-[0_0_calc(50%-10px)] sm:flex-[0_0_calc(33.33%-14px)] lg:flex-[0_0_calc(25%-15px)] xl:flex-[0_0_calc(20%-16px)] group text-left"
                >
                  <div className="relative rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="relative h-44 bg-muted">
                      <Image
                        src={imgSrc}
                        alt={cat.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <p className="font-bold text-white text-sm leading-tight">{cat.label}</p>
                      <p className="text-white/70 text-xs mt-0.5">{count} {count === 1 ? "produto" : "produtos"}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
