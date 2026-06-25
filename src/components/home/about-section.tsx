import Link from "next/link"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { SectionTag } from "@/components/shared/section-tag"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"
import { COMPANY, HERO_STATS } from "@/lib/constants"

const highlights = [
  "Mais de 25 anos no mercado angolano",
  "Atuação em 7 sectores estratégicos",
  "Presença em múltiplas províncias",
  "Infraestrutura e frota próprias",
  "Parceria com entidades públicas e privadas",
]

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <SectionTag className="mb-4">Sobre a SAFRI</SectionTag>
            <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight mb-4">
              25 ANOS DE DESENVOLVIMENTO COMERCIAL E INDUSTRIAL EM ANGOLA
            </h2>
            <div className="h-1 w-12 rounded-full bg-primary mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              A SAFRI Comercial, Lda. é uma empresa angolana com sede na Província do Bié, actuando em múltiplos sectores da economia nacional há mais de 25 anos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Com filiais em Huambo e Luanda, trabalhamos em mercados diferenciados o que nos permite versatilidade e a capacidade de definir soluções adequadas a cada necessidade produtiva.
            </p>
            <ul className="space-y-2.5 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            {/* Stats */}
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
              {HERO_STATS.slice(0, 3).map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-secondary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/empresa"
                className="inline-flex items-center gap-2 rounded-full border-2 border-secondary px-6 py-2.5 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-all"
              >
                Conhecer a Empresa
              </Link>
              <WhatsAppButton message="Olá, gostaria de saber mais sobre a SAFRI." />
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-black text-secondary/20 mb-2">SAFRI</div>
                  <div className="text-secondary/30 text-sm">Imagem corporativa</div>
                </div>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-2xl font-black">+25</div>
              <div className="text-xs text-white/80 uppercase tracking-wide">Anos de<br />Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
