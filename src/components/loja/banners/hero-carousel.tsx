"use client"
import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { MessageCircle, ChevronLeft, ChevronRight, Truck, ShieldCheck, Award, Headset } from "lucide-react"
import { CONTACTS } from "@/lib/constants"
import { buildWhatsAppLink } from "@/lib/utils"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    eyebrow: "Qualidade em todas as etapas da educação",
    title: "Produtos SAFRI",
    subtitle: "Para escolas, empresas e instituições. Cadernos, mobiliário escolar, camas e sacos de ráfia.",
    cta: "Ver Todos os Produtos",
    href: "/loja/categoria/todos",
    image: "/images/banners/banner-sala-simulada.png",
  },
  {
    id: 2,
    eyebrow: "Catálogo Industrial",
    title: "Sacos de Ráfia e Polipropileno",
    subtitle: "Para indústria, comércio e agricultura. Capacidades de 10 kg a 150 kg.",
    cta: "Ver Produtos",
    href: "/loja/categoria/sacos",
    image: "/images/banners/banner-sacos.png",
  },
  {
    id: 3,
    eyebrow: "Produção Nacional — SAFRI-METAL, Kuito",
    title: "Carteiras Escolares",
    subtitle: "Fabricadas em Angola, qualidade comprovada para escolas e instituições.",
    cta: "Ver Produtos",
    href: "/loja/categoria/carteiras",
    image: "/images/banners/banner-cardeira.png",
  },
  {
    id: 4,
    eyebrow: "Mobiliário Escolar Completo",
    title: "Carteiras e Quadros Negros",
    subtitle: "Equipamento completo para salas de aula, produzido em Angola pela SAFRI-METAL.",
    cta: "Ver Produtos",
    href: "/loja/categoria/carteiras",
    image: "/images/banners/banner-Carteira-quadro.png",
  },
  {
    id: 5,
    eyebrow: "Mobiliário Institucional",
    title: "Camas e Beliches",
    subtitle: "Camas hospitalares e beliches militares, produzidos em Angola para instituições.",
    cta: "Ver Produtos",
    href: "/loja/categoria/mobiliario",
    image: "/images/banners/banner-cama-beliche.png",
  },
]

const trustItems = [
  { icon: Truck, label: "Entrega rápida" },
  { icon: ShieldCheck, label: "Pagamento seguro" },
  { icon: Award, label: "Produtos de qualidade" },
  { icon: Headset, label: "Apoio ao cliente" },
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
    <div className="bg-secondary">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => {
            const ctaHref = slide.href ?? whatsappLink
            const isExternal = !slide.href

            return (
              <div
                key={slide.id}
                className="relative min-w-0 flex-[0_0_100%] h-[360px] md:h-[420px] lg:h-[480px]"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-[35%_center] md:object-center"
                  sizes="100vw"
                  priority={slide.id === 1}
                />
                {/* Legibility scrim */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/45 to-transparent" />

                <div className="relative container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-lg py-10 lg:py-0 z-10">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
                      {slide.eyebrow}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase leading-tight mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base text-white/80 mb-7 max-w-md">
                      {slide.subtitle}
                    </p>
                    {isExternal ? (
                      <a
                        href={ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-7 py-3 text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-black/20"
                      >
                        <MessageCircle className="h-4 w-4" />
                        {slide.cta}
                      </a>
                    ) : (
                      <Link
                        href={ctaHref}
                        className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-7 py-3 text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-black/20"
                      >
                        {slide.cta}
                        <span aria-hidden>→</span>
                      </Link>
                    )}
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-secondary hover:text-primary transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Próximo"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-secondary hover:text-primary transition-all"
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

      {/* Trust strip */}
      <div className="border-t border-white/10 bg-[#eaf2fb]">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 justify-center md:justify-start">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-xs md:text-sm font-semibold text-secondary">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
