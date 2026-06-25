import Image from "next/image"
import { SectionTag } from "@/components/shared/section-tag"

const partners = [
  { name: "Governo de Angola", abbr: "Gov.AO" },
  { name: "Governo Provincial do Bié", abbr: "Gov.Bié" },
  { name: "IPN Ndunduma", abbr: "IPN" },
  { name: "SAFRI-METAL", abbr: "S-METAL" },
  { name: "Ministério do Comércio", abbr: "MinCom" },
  { name: "Banco Angolano", abbr: "Banco" },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <SectionTag className="mb-2">Parcerias</SectionTag>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
            Parceiros &amp; Presença Institucional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Partners image */}
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/partners.png"
              alt="Parceiros SAFRI"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8">
              <div>
                <p className="text-white/70 text-xs uppercase tracking-widest mb-1">Juntos a crescer</p>
                <h3 className="text-white text-xl font-black leading-tight">
                  Parcerias que constroem Angola
                </h3>
              </div>
            </div>
          </div>

          {/* Partner badges */}
          <div className="flex flex-wrap gap-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex h-14 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-all"
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
