"use client"
import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { products } from "@/lib/products"
import { ProductCard } from "./product-card"

const featuredImages = [
  "/images/loja/featured-products/01.webp",
  "/images/loja/featured-products/02.webp",
  "/images/loja/featured-products/03.webp",
  "/images/loja/featured-products/04.webp",
  "/images/loja/featured-products/05.webp",
  "/images/loja/featured-products/06.webp",
  "/images/loja/featured-products/07.webp",
  "/images/loja/featured-products/08.webp",
]

const badges = ["Destaque", "Novo", "Destaque", "Novo", undefined, "Destaque", undefined, "Novo"]

export function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const featured = products.slice(0, 8)

  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Catálogo SAFRI</span>
            <h2 className="text-2xl md:text-3xl font-black text-secondary mt-1">Produtos em Destaque</h2>
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
            {featured.map((product, i) => (
              <div
                key={product.id}
                className="min-w-0 flex-[0_0_calc(50%-10px)] sm:flex-[0_0_calc(33.33%-14px)] lg:flex-[0_0_calc(25%-15px)] xl:flex-[0_0_calc(20%-16px)]"
              >
                <ProductCard
                  product={product}
                  badge={badges[i]}
                  imageSrc={featuredImages[i]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
