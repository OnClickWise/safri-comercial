import Image from "next/image"
import { SectionTag } from "@/components/shared/section-tag"
import { PARTNERS } from "@/lib/constants"

export function PartnersSection() {
  return (
    <section className="py-16 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <SectionTag className="mb-2 justify-center">Parceiros</SectionTag>
          <h2 className="text-2xl md:text-3xl font-black text-secondary mt-1">
            PARCERIAS QUE CONSTROEM ANGOLA
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-muted-foreground text-sm">
            Trabalhamos lado a lado com instituições e empresas que partilham a nossa visão de um Angola mais forte.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex h-24 w-56 items-center justify-center rounded-xl border border-border bg-white p-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="relative h-full w-full">
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="224px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
