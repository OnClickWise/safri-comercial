"use client"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { MessageCircle } from "lucide-react"
import { HERO_SLIDES, HERO_STATS, CONTACTS } from "@/lib/constants"
import { buildWhatsAppLink } from "@/lib/utils"
import { cn } from "@/lib/utils"

export function HeroCarousel() {
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

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const whatsappLink = buildWhatsAppLink(
    "Olá, gostaria de solicitar uma proposta comercial.",
    CONTACTS.whatsappCommercialRaw
  )
  const whatsappSpecialistLink = buildWhatsAppLink(
    "Olá, gostaria de falar com um especialista da SAFRI.",
    CONTACTS.whatsappCommercialRaw
  )

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {HERO_SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-0 flex-[0_0_100%] h-[85vh] min-h-[600px]"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-secondary"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/20" />

              {/* Content */}
              <div className="relative h-full container mx-auto px-4 flex items-center">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
                    <span className="block h-px w-6 bg-primary" />
                    SAFRI Comercial, Lda.
                  </span>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-4">
                    {slide.title}
                  </h1>
                  <div className="h-1 w-16 rounded-full bg-primary mb-5" />
                  <p className="text-base md:text-lg text-white/80 mb-4 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-white text-sm mb-8">
                    {slide.highlight}
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/30"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Solicitar Proposta
                    </a>
                    <a
                      href={whatsappSpecialistLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                    >
                      Falar com Especialista
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              selectedIndex === i ? "w-8 bg-primary" : "w-2 bg-white/40"
            )}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/10 backdrop-blur border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {HERO_STATS.map((stat, i) => (
              <div key={i} className="py-4 px-6 text-center">
                <div className="text-2xl font-black text-primary">{stat.value}</div>
                <div className="text-xs text-white/70 uppercase tracking-wide mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
