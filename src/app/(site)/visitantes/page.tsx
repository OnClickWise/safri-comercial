import type { Metadata } from "next"
import Link from "next/link"
import { Camera, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SectionTag } from "@/components/shared/section-tag"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"
import { Badge } from "@/components/ui/badge"
import { visits } from "@/lib/visits"
import { CONTACTS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Visitantes — SAFRI Comercial, Lda.",
  description: "Registo das visitas institucionais à SAFRI Comercial, Lda.",
}

export default function VisitantesPage() {
  return (
    <>
      <PageHero
        title="Visitantes"
        description="A SAFRI recebe regularmente delegações, parceiros e entidades institucionais que conhecem a nossa estrutura operacional."
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionTag className="mb-3">Registo</SectionTag>
            <h2 className="text-2xl md:text-3xl font-black text-secondary uppercase mt-2">VISITAS INSTITUCIONAIS</h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground text-sm">
              Abrimos as nossas instalações para demonstrar capacidade, transparência e compromisso com o desenvolvimento de Angola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visits.map((visit) => (
              <Link
                key={visit.id}
                href={`/visitantes/${visit.slug}`}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-200"
              >
                <div className="relative h-52 bg-secondary/10 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-secondary/20" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-secondary text-white text-xs">
                      {visit.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-xs text-white bg-black/40 rounded-full px-2 py-1">
                    <Camera className="h-3 w-3" />
                    {visit.photoCount} fotos
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {visit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{visit.description}</p>
                  <div className="flex items-center gap-1 text-xs text-primary font-semibold">
                    Ver galeria <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Importância estratégica */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-xl font-black text-secondary mb-4">Transparência e Compromisso Institucional</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            As visitas institucionais à SAFRI representam momentos importantes de aproximação entre o sector privado e as entidades públicas, parceiros internacionais e representantes da sociedade civil.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Ao abrir as nossas instalações, demonstramos a escala, a organização e o compromisso que nos tornam um parceiro estratégico de confiança em Angola.
          </p>
          <WhatsAppButton
            message="Olá, gostaria de agendar uma visita às instalações da SAFRI."
            phone={CONTACTS.whatsappVisitsRaw}
            label="Agendar uma Visita"
          />
        </div>
      </section>
    </>
  )
}
