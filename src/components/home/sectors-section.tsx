import Link from "next/link"
import {
  ShoppingBag, Truck, Factory, Hotel, Globe, GraduationCap, Sprout, ArrowRight,
} from "lucide-react"
import { SectionTag } from "@/components/shared/section-tag"
import { SECTORS } from "@/lib/constants"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag, Truck, Factory, Hotel, Globe, GraduationCap, Sprout,
}

export function SectorsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <SectionTag className="text-white/60 before:bg-white/60 mb-3">Áreas de Atuação</SectionTag>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mt-2">
            SECTORES ESTRATÉGICOS
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
          <p className="mx-auto mt-5 max-w-xl text-white/60 text-sm">
            Actuamos em múltiplos sectores da economia angolana com infraestrutura, expertise e resultados comprovados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SECTORS.map((sector) => {
            const Icon = iconMap[sector.icon] ?? ShoppingBag
            return (
              <Link
                key={sector.id}
                href={`/setores#${sector.id}`}
                className={cn(
                  "group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300",
                  "hover:border-primary hover:bg-white/10 hover:shadow-xl hover:-translate-y-1"
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-white mb-2">{sector.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{sector.shortDesc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver mais <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/setores"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white hover:border-primary hover:text-primary transition-all"
          >
            Ver Todas as Áreas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
