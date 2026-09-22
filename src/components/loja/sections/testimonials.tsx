"use client"
import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Excelente qualidade dos cadernos. Entregaram dentro do prazo e o atendimento foi impecável.",
    name: "Escola Futuro Brilhante",
    location: "Luanda",
  },
  {
    quote: "Trabalhamos com a SAFRI há anos. Produtos confiáveis e preços justos para o nosso internato.",
    name: "Colégio Nova Geração",
    location: "Benguela",
  },
  {
    quote: "As carteiras escolares são robustas e resistiram bem ao uso diário dos nossos alunos.",
    name: "Instituto Saber Mais",
    location: "Huambo",
  },
  {
    quote: "Os sacos de ráfia SAFRI são a nossa primeira escolha para o transporte de produção agrícola.",
    name: "Cooperativa Agrícola do Bié",
    location: "Kuito",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true })
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-secondary">O Que Dizem os Nossos Clientes</h2>
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

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.33%-14px)]"
              >
                <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                  <Quote className="h-6 w-6 text-primary/30 mb-3" />
                  <p className="text-sm text-foreground leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="h-9 w-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-secondary leading-tight">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
