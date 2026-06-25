import { Award, Network, Building2, Handshake } from "lucide-react"
import { SectionTag } from "@/components/shared/section-tag"
import { DIFFERENTIALS } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award, Network, Building2, Handshake,
}

export function DifferentialsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Cards */}
          <div>
            <SectionTag className="mb-4">Por que a SAFRI</SectionTag>
            <h2 className="text-3xl md:text-4xl font-black text-secondary uppercase mb-3">
              OS NOSSOS DIFERENCIAIS
            </h2>
            <div className="h-1 w-12 rounded-full bg-primary mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {DIFFERENTIALS.map((d) => {
                const Icon = iconMap[d.icon] ?? Award
                return (
                  <div key={d.title} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-lg transition-all duration-200">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-sm">{d.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{d.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Infra visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Comércio Geral", value: "6 lojas" },
                { label: "Capacidade Armazenamento", value: "+10.000 m²" },
                { label: "Frota de Transporte", value: "Própria" },
                { label: "Unidades Industriais", value: "3 fábricas" },
                { label: "Fazenda Agrícola", value: "1.300 ha" },
                { label: "Instituto Superior", value: "+3.600 alunos" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-secondary/5 border border-secondary/10 p-5 text-center">
                  <div className="text-xl font-black text-primary mb-1">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
