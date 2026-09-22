"use client"
import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Landmark, Building2, GraduationCap, Factory, Banknote } from "lucide-react"
import { SectionTag } from "@/components/shared/section-tag"
import { PARTNERS } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark, Building2, GraduationCap, Factory, Banknote,
}

export function PartnersSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true })
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-16 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <SectionTag className="mb-2">Parceiros</SectionTag>
            <h2 className="text-2xl md:text-3xl font-black text-secondary mt-1">
              PARCERIAS QUE CONSTROEM ANGOLA
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground text-sm">
              Trabalhamos lado a lado com instituições e empresas que partilham a nossa visão de um Angola mais forte.
            </p>
          </div>
          <div className="hidden sm:flex gap-2 shrink-0">
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

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {PARTNERS.map((p) => {
              const Icon = iconMap[p.icon] ?? Landmark
              return (
                <div
                  key={p.name}
                  className="min-w-0 shrink-0 flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 hover:border-primary transition-all"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/5 text-secondary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">{p.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
