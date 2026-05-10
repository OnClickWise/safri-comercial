"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/sections/page-hero"
import { visits } from "@/lib/visitas"

export default function VisitantesPage() {
  return (
    <main>
      <PageHero
        title="Visitantes Importantes"
        description="Ao longo da sua trajetória, a SAFRI tem recebido representantes institucionais, entidades públicas, parceiros privados e visitantes internacionais, fortalecendo relações estratégicas e consolidando a sua posição como empresa de referência."
        image="/images/safri-metal.png"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Users size={14} />
              Relações Institucionais
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Visitas que reforçam confiança, parceria e reconhecimento
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Cada visita representa uma oportunidade para apresentar a capacidade
              operacional da SAFRI, fortalecer parcerias e demonstrar o compromisso
              da empresa com qualidade, transparência e desenvolvimento sustentável.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visits.map((visitor, index) => {
              const Icon = visitor.icon

              return (
                <motion.article
                  key={visitor.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <Link href={`/visitantes/${visitor.slug}`} className="block h-full">
                    <div className="relative h-[260px] w-full overflow-hidden bg-muted">
                      <Image
                        src={visitor.cover}
                        alt={visitor.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                          <Icon size={14} />
                          {visitor.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-xl font-bold leading-snug transition group-hover:text-primary">
                        {visitor.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {visitor.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                        Ver detalhes
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Importância estratégica
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight lg:text-4xl">
                Uma empresa aberta à cooperação e ao desenvolvimento
              </h2>
            </div>

            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                As visitas recebidas pela SAFRI demonstram o reconhecimento da sua
                estrutura empresarial, da sua capacidade de execução e do seu papel
                no fortalecimento de sectores importantes da economia angolana.
              </p>

              <p>
                A empresa mantém uma postura aberta ao diálogo institucional, à
                cooperação internacional e ao desenvolvimento de parcerias com
                entidades públicas, privadas e organizações estratégicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">
            Deseja conhecer melhor a estrutura da SAFRI?
          </h2>

          <p className="mt-6 text-lg text-white/80">
            A nossa equipa está preparada para receber parceiros, entidades e
            instituições interessadas em conhecer as nossas operações.
          </p>

          <Link href="https://wa.me/244923019166" target="_blank">
            <Button
              size="lg"
              className="mt-10 bg-white px-10 py-6 text-primary hover:bg-white/90"
            >
              Solicitar Visita Institucional
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}