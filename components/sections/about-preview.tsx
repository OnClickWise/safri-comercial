"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function AboutPreview() {
  const features = [
    "Execução comprovada em operações de grande escala",
    "Integração total entre logística, indústria e comércio",
    "Infraestrutura própria com alta capacidade operacional",
    "Parcerias estratégicas com entidades públicas e privadas",
    "Cobertura nacional com potencial de expansão contínua",
  ]

  return (
    <section className="w-full min-h-screen flex items-center py-16 lg:py-24">

      {/* CONTAINER CONTROLADO (mais elegante) */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT - CONTENT */}
          <div className="max-w-xl">

            {/* TAG */}
            <div className="mb-6 inline-block bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              SOBRE A SAFRI
            </div>

            {/* HEADLINE */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              Capacidade real para executar projetos de grande escala
            </h2>

            {/* SUBTEXT */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
              A SAFRI posiciona-se como parceiro estratégico para empresas que exigem
              eficiência operacional, escala e entrega garantida.
            </p>

            <p className="mt-4 text-lg text-muted-foreground">
              Com infraestrutura própria e operações integradas, asseguramos controlo,
              performance e resultados consistentes.
            </p>

            {/* BENEFITS */}
            <ul className="mt-8 space-y-4">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <Stat value="+25" label="Anos" />
              <Stat value="+100" label="Projetos" />
              <Stat value="Nacional" label="Cobertura" />
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button className="px-10 py-6 text-lg font-semibold">
                Conhecer a Empresa
              </Button>

              <Button
                variant="outline"
                className="px-10 py-6 text-lg"
              >
                Falar com Especialista
              </Button>
            </div>

          </div>

          {/* RIGHT - IMAGE (REFINADO) */}
          <div className="relative">

            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl">

              <Image
                src="/images/safri-metal.png"
                alt="Infraestrutura SAFRI"
                fill
                priority
                className="object-cover"
              />

              {/* OVERLAY SUAVE */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            </div>

            {/* BADGE FLOAT (mais elegante) */}
            <div className="absolute -bottom-6 left-6 bg-background border border-border px-4 py-3 rounded-xl shadow-md">
              <span className="text-sm font-semibold">
                +25 anos de experiência comprovada
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

/* STATS */

function Stat({ value, label }: any) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl sm:text-3xl font-bold">
        {value}
      </span>
      <span className="text-sm text-muted-foreground">
        {label}
      </span>
    </div>
  )
}