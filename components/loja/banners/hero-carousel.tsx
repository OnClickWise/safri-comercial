"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Material Escolar & Escritório",
    subtitle: "Fornecimento em grande escala para escolas e empresas",
    image: "/products/banner1.png",
    cta: "Ver Produtos",
    link: "/loja?categoria=escolar",
  },
  {
    title: "Equipamentos Industriais",
    subtitle: "Soluções para operações industriais e construção",
    image: "/products/banner2.png",
    cta: "Explorar",
    link: "/loja?categoria=industrial",
  },
  {
    title: "Mobiliário Metálico",
    subtitle: "Produção própria: carteiras, camas e soluções institucionais",
    image: "/products/banner3.png",
    cta: "Ver Catálogo",
    link: "/loja?categoria=mobiliario",
  },
  {
    title: "Produtos Alimentares",
    subtitle: "Distribuição de bens essenciais com stock contínuo",
    image: "/products/banner4.png",
    cta: "Comprar",
    link: "/loja?categoria=alimentar",
  },
  {
    title: "Materiais de Construção",
    subtitle: "Fornecimento para obras públicas e privadas",
    image: "/products/banner5.png",
    cta: "Ver Soluções",
    link: "/loja?categoria=construcao",
  },
]

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  React.useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <section className="bg-background py-8">
      <div className="container mx-auto">

        <div className="relative">

          {/* CAROUSEL */}
          <div ref={emblaRef} className="overflow-hidden rounded-3xl">
            <div className="flex">

              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full relative h-[320px] md:h-[420px] flex items-center"
                >

                  {/* BACKGROUND IMAGE */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                  {/* CONTENT */}
                  <div className="relative z-10 px-6 md:px-12 max-w-2xl text-white">

                    <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                      {slide.title}
                    </h2>

                    <p className="mt-3 text-white/80 text-sm md:text-base">
                      {slide.subtitle}
                    </p>

                    <Link href={slide.link}>
                      <button className="
                        mt-6
                        bg-primary
                        px-6 py-3
                        rounded-full
                        font-semibold
                        hover:opacity-90 transition
                      ">
                        {slide.cta}
                      </button>
                    </Link>

                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* NAVIGATION */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>

          {/* DOTS */}
          <div className="flex justify-center mt-4 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`
                  h-2.5 rounded-full transition-all
                  ${index === selectedIndex
                    ? "w-6 bg-primary"
                    : "w-2.5 bg-muted-foreground/40"}
                `}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}