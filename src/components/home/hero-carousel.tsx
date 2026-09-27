"use client"
import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { MessageCircle, Settings, Building2, Users, Clock, ChevronRight, ChevronLeft } from "lucide-react"
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
    Autoplay({ delay: 6500, stopOnInteraction: false }),
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
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

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
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className="relative min-w-0 flex-[0_0_100%] h-[620px] md:h-[660px] bg-secondary overflow-hidden"
            >
              {/* Background */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={i === 0}
                className="object-cover scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/55 via-secondary/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-secondary/80 to-transparent" />

              {/* Content */}
              <div className="relative h-full container mx-auto px-4 flex items-center pb-10">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
                    <span className="block h-px w-6 bg-primary" />
                    {slide.eyebrow}
                  </span>
                  <h1 className="text-[30px] md:text-[33px] lg:text-[35px] font-black text-white uppercase leading-[1.15] mb-5 text-balance">
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
                      className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-primary/30"
                    >
                      Conheça as nossas soluções
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href={whatsappSpecialistLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/70 transition-all duration-200"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Fale com um especialista
                    </a>
                  </div>
                </div>
              </div>

              {/* Side sector list */}
              <div className="hidden lg:flex flex-col items-end gap-2 absolute top-12 right-10 z-10">
                {sideList.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/90"
                  >
                    {item}
                    <span className="text-primary">»</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Anterior"
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Próximo"
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots + counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <span className="text-xs font-bold text-white/50 tabular-nums hidden sm:inline">
          {String(selectedIndex + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedIndex === i ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative bg-secondary border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {HERO_STATS.map((stat, i) => {
              const Icon = statIcons[stat.icon] ?? Settings
              return (
                <div key={i} className="group flex items-center gap-3 py-6 px-6 transition-colors hover:bg-white/[0.03]">
                  <span className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
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
