"use client"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { MessageCircle } from "lucide-react"
import { CONTACTS } from "@/lib/constants"
import { buildWhatsAppLink } from "@/lib/utils"
import { cn } from "@/lib/utils"

const banners = [
  {
    id: 1,
    title: "Sacos de Ráfia e Polipropileno",
    subtitle: "Para indústria, comércio e agricultura — capacidades de 10kg a 150kg",
    cta: "Solicitar Cotação",
    bg: "from-secondary to-secondary/80",
  },
  {
    id: 2,
    title: "Carteiras Escolares SAFRI-METAL",
    subtitle: "Produção nacional, qualidade comprovada — para escolas e instituições",
    cta: "Ver Produtos",
    bg: "from-primary to-primary/70",
  },
  {
    id: 3,
    title: "Cadernos Escolares",
    subtitle: "Brochura, espiral e capa dura — fabricados em Angola pela SAFRI",
    cta: "Solicitar Cotação",
    bg: "from-secondary/90 to-secondary",
  },
  {
    id: 4,
    title: "Encomendas em Grandes Volumes",
    subtitle: "Garantimos stock e entrega para grandes operações — fale connosco",
    cta: "Falar pelo WhatsApp",
    bg: "from-primary/80 to-secondary",
  },
  {
    id: 5,
    title: "Soluções B2B para Angola",
    subtitle: "Fornecedor estratégico para empresas, escolas e instituições públicas",
    cta: "Solicitar Proposta",
    bg: "from-secondary to-primary/60",
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
  }, [emblaApi, onSelect])

  const whatsappLink = buildWhatsAppLink(
    "Olá, gostaria de solicitar cotação de produtos do catálogo SAFRI.",
    CONTACTS.whatsappCommercialRaw
  )

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {banners.map((b) => (
          <div
            key={b.id}
            className={`relative min-w-0 flex-[0_0_100%] h-[320px] md:h-[380px] bg-gradient-to-r ${b.bg} flex items-center`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                  <span className="block h-px w-5 bg-white/40" />
                  SAFRI Catálogo
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight mb-3">
                  {b.title}
                </h2>
                <p className="text-sm text-white/70 mb-6">{b.subtitle}</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-secondary px-6 py-2.5 text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  {b.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Banner ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              selectedIndex === i ? "w-6 bg-primary" : "w-1.5 bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  )
}
