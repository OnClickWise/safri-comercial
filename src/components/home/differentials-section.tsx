import Image from "next/image"
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
        <div className="text-center mb-12">
          <SectionTag className="mb-3 justify-center">Por que a SAFRI</SectionTag>
          <h2 className="text-3xl md:text-4xl font-black text-secondary uppercase">
            OS NOSSOS DIFERENCIAIS
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground text-sm">
            Mais do que produtos, entregamos soluções que impulsionam o crescimento de Angola.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
          {/* Cards */}
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

          {/* Logistics visual */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] shadow-xl">
            <Image
              src="/images/galeria4.jpg"
              alt="Logística SAFRI"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-black text-white leading-tight">
                Logística que mantém<br />o país em movimento.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
