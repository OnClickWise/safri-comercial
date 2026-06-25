"use client"
import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { CONTACTS } from "@/lib/constants"
import { buildWhatsAppLink } from "@/lib/utils"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    eyebrow: "Catálogo Industrial",
    title: "Sacos de Ráfia e Polipropileno",
    subtitle: "Para indústria, comércio e agricultura. Capacidades de 10 kg a 150 kg.",
    cta: "Solicitar Cotação",
    href: null,
    image: "/images/loja/sliders/s_0.webp",
    bg: "bg-secondary",
  },
  {
    id: 2,
    eyebrow: "Produção Nacional",
    title: "Carteiras Escolares SAFRI-METAL",
    subtitle: "Fabricadas em Angola, qualidade comprovada para escolas e instituições.",
    cta: "Ver Produtos",
    href: "/loja/categoria/carteiras",
    image: "/images/loja/sliders/s_1.webp",
    bg: "bg-primary",
  },
  {
    id: 3,
    eyebrow: "Material Escolar",
    title: "Cadernos Escolares SAFRI",
    subtitle: "Brochura, espiral e capa dura — fabricados em Angola com qualidade superior.",
    cta: "Solicitar Cotação",
    href: null,
    image: "/images/loja/sliders/s_2.webp",
    bg: "bg-secondary",
  },
  {
    id: 4,
    eyebrow: "Fornecimento B2B",
    title: "Encomendas em Grandes Volumes",
    subtitle: "Stock garantido e entrega atempada para grandes operações em Angola.",
    cta: "Falar pelo WhatsApp",
    href: null,
    image: "/images/loja/sliders/s_3.webp",
    bg: "bg-[#1a2f50]",
  },
  {
    id: 5,
    eyebrow: "Parceiro Estratégico",
    title: "Soluções B2B para Angola",
    subtitle: "Fornecedor de confiança para empresas, escolas e instituições públicas.",
    cta: "Solicitar Proposta",
    href: null,
    image: "/images/loja/sliders/s_4.webp",
    bg: "bg-secondary",
  },
]

export function LojaHeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi, onSelect])

  const whatsappLink = buildWhatsAppLink(
    "Olá, gostaria de solicitar cotação de produtos do catálogo SAFRI.",
    CONTACTS.whatsappCommercialRaw
  )

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide) => {
          const ctaHref = slide.href ?? whatsappLink
          const isExternal = !slide.href

          return (
            <div
              key={slide.id}
              className={cn(
                "relative min-w-0 flex-[0_0_100%] h-[380px] md:h-[460px] lg:h-[500px]",
                slide.bg
              )}
            >
              <div className="container mx-auto px-4 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text side */}
                <div className="py-10 lg:py-0 z-10">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                    <span className="block h-px w-5 bg-white/40" />
                    {slide.eyebrow}
                  </span>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase leading-tight mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/70 mb-7 max-w-md">
                    {slide.subtitle}
                  </p>
                  {isExternal ? (
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white text-secondary px-7 py-3 text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-lg"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {slide.cta}
                    </a>
                  ) : (
                    <Link
                      href={ctaHref}
                      className="inline-flex items-center gap-2 rounded-full bg-white text-secondary px-7 py-3 text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-lg"
                    >
                      {slide.cta}
                    </Link>
                  )}
                </div>

                {/* Image side */}
                <div className="hidden lg:flex items-end justify-center h-full pt-6 relative">
                  <div className="relative w-full h-full max-h-[440px]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain object-bottom drop-shadow-2xl"
                      sizes="(max-width: 1024px) 0px, 50vw"
                      priority={slide.id === 1}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Próximo"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              selectedIndex === i ? "w-8 bg-white" : "w-2 bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  )
}
