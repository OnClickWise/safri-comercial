import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, ExternalLink } from "lucide-react"
import {
  ShoppingBag, Truck, Factory, Hotel, Globe, GraduationCap, Sprout,
} from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SectionTag } from "@/components/shared/section-tag"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"
import { SECTORS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Áreas de Atuação — SAFRI Comercial, Lda.",
  description: "Conheça os sectores estratégicos da SAFRI: comércio, transportes, indústria, hotelaria, importação, educação e agro-pecuária.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag, Truck, Factory, Hotel, Globe, GraduationCap, Sprout,
}

export default function SetoresPage() {
  return (
    <>
      <PageHero
        title="Áreas de Atuação"
        description="Actuamos em múltiplos sectores estratégicos com infraestrutura, expertise e resultados comprovados há mais de 25 anos."
      />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <SectionTag className="mb-3">Visão Geral</SectionTag>
            <p className="text-muted-foreground mt-3">
              A SAFRI atua de forma integrada em 7 sectores da economia angolana, com infraestrutura própria, equipa especializada e capacidade de execução em larga escala.
            </p>
          </div>
        </div>
      </section>

      {SECTORS.map((sector, i) => {
        const Icon = iconMap[sector.icon] ?? ShoppingBag
        const reversed = i % 2 !== 0
        return (
          <section
            key={sector.id}
            id={sector.id}
            className={cn("py-20", i % 2 === 0 ? "bg-background" : "bg-muted")}
          >
            <div className="container mx-auto px-4">
              <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", reversed && "lg:flex lg:flex-row-reverse")}>
                {/* Text */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <SectionTag>{sector.shortDesc}</SectionTag>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-secondary uppercase mb-3">
                    {sector.title}
                  </h2>
                  <div className="h-1 w-10 rounded-full bg-primary mb-5" />
                  <p className="text-muted-foreground leading-relaxed mb-6">{sector.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {sector.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {"externalLink" in sector && sector.externalLink && (
                    <a
                      href={sector.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
                    >
                      Visitar Website <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                {/* Image placeholder */}
                <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden bg-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <Icon className="h-12 w-12 text-secondary/20 mx-auto mb-2" />
                    <div className="text-secondary/30 text-sm font-semibold">{sector.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-16 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-black text-white mb-4">Quer saber mais sobre as nossas soluções?</h3>
          <WhatsAppButton message="Olá, gostaria de informações sobre as áreas de atuação da SAFRI." label="Falar Connosco" />
        </div>
      </section>
    </>
  )
}
