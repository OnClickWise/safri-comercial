import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Store, Factory, Building2, Sprout, GraduationCap } from "lucide-react"
import { SectionTag } from "@/components/shared/section-tag"
import { ABOUT_STATS } from "@/lib/constants"

const highlights = [
  "Atuação em múltiplos sectores estratégicos",
  "Presença em várias províncias",
  "Infraestrutura e frota própria",
  "Parcerias com entidades públicas e privadas",
]

const statIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Store, Factory, Building2, Sprout, GraduationCap,
}

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr_0.75fr] gap-10 items-start">
          {/* Text */}
          <div>
            <SectionTag className="mb-4">Sobre a SAFRI</SectionTag>
            <h2 className="text-2xl md:text-3xl font-black text-secondary leading-tight mb-4 uppercase">
              25 Anos a Contribuir para o Desenvolvimento de Angola
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              A SAFRI Comercial, Lda. é uma empresa angolana com sede na Província do Bié, actuando em múltiplos sectores da economia nacional há mais de 25 anos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              Com filiais em Huambo e Luanda, trabalhamos em mercados diferenciados e oferecemos soluções integradas que respondem às necessidades reais de cada cliente.
            </p>
            <ul className="space-y-2.5 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href="/empresa"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-all"
            >
              Conhecer a Empresa
            </Link>
          </div>

          {/* Photo */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/ceo.png"
              alt="Director Geral SAFRI — Gonçalves Cassoma"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Stats list */}
          <div className="space-y-3">
            {ABOUT_STATS.map((stat) => {
              const Icon = statIcons[stat.icon] ?? Building2
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xl font-black text-primary leading-none">{stat.value}</div>
                    <div className="text-xs font-semibold text-foreground mt-1">{stat.label}</div>
                    {stat.sublabel && (
                      <div className="text-[11px] text-muted-foreground">{stat.sublabel}</div>
                    )}
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
