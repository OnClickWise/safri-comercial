import Link from "next/link"
import Image from "next/image"
import {
  ShoppingBag, Truck, Factory, Hotel, Globe, GraduationCap, Sprout, ArrowRight,
} from "lucide-react"
import { SectionTag } from "@/components/shared/section-tag"
import { SECTORS } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag, Truck, Factory, Hotel, Globe, GraduationCap, Sprout,
}

export function SectorsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionTag className="text-white/60 before:bg-white/60 mb-3">Áreas de Atuação</SectionTag>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase mt-2">
              SECTORES ESTRATÉGICOS
            </h2>
            <p className="mt-3 max-w-xl text-white/60 text-sm">
              Actuamos em múltiplos sectores da economia angolana com infraestrutura, expertise e resultados comprovados.
            </p>
          </div>
          <Link
            href="/setores"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-primary hover:text-primary transition-all shrink-0"
          >
            Ver Todas as Áreas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SECTORS.map((sector) => {
            const Icon = iconMap[sector.icon] ?? ShoppingBag
            return (
              <Link
                key={sector.id}
                href={`/setores#${sector.id}`}
                className="group relative rounded-2xl overflow-hidden h-56 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-secondary/10 group-hover:from-secondary/95 transition-all" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-white mb-1 leading-tight">{sector.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-2">{sector.shortDesc}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
