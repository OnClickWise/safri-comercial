"use client"
import { useCallback, useEffect, useState } from "react"
import { MessageCircle, Settings, Building2, Users, Clock, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { HERO_SLIDES, HERO_STATS, CONTACTS } from "@/lib/constants"
import { buildWhatsAppLink } from "@/lib/utils"
import { cn } from "@/lib/utils"

const statIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Settings, Building2, Users, Clock,
}

const sideList = ["Indústria", "Logística", "Comércio", "Educação", "Agro-Pecuária", "E muito mais"]

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
              className="relative min-w-0 flex-[0_0_100%] h-[600px] md:h-[640px] bg-secondary"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/10 to-transparent" />

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
                  <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/30"
                    >
                      Conheça as nossas soluções
                      <ChevronRight className="h-4 w-4" />
                    </a>
                    <a
                      href={whatsappSpecialistLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Fale com um especialista
                    </a>
                  </div>
                </div>
              </div>

              {/* Side sector list */}
              <div className="hidden lg:block absolute top-10 right-10 z-10">
                <ul className="space-y-2.5 text-right">
                  {sideList.map((item) => (
                    <li key={item} className="flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-widest text-white/80">
                      {item}
                      <span className="text-primary">»</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
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
      <div className="relative bg-secondary border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {HERO_STATS.map((stat, i) => {
              const Icon = statIcons[stat.icon] ?? Settings
              return (
                <div key={i} className="flex items-center gap-3 py-6 px-6">
                  <span className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xl md:text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-[11px] text-white/60 uppercase tracking-wide mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
