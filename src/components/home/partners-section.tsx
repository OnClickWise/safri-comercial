import { SectionTag } from "@/components/shared/section-tag"

const partners = [
  "Governo de Angola",
  "Governo Provincial do Bié",
  "IPN Ndunduma",
  "SAFRI-METAL",
  "Ministério do Comércio",
  "Banco Angolano",
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
        <div className="flex flex-wrap items-center justify-center gap-6">
          {partners.map((p) => (
            <div
              key={p}
              className="flex h-14 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-all"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
