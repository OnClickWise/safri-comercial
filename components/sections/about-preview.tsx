"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function AboutPreview() {

  const whatsapp = "244922100548"

  const features = [
    "Execução comprovada em operações de grande escala",
    "Integração total entre logística, indústria e comércio",
    "Infraestrutura própria com alta capacidade operacional",
    "Parcerias estratégicas com entidades públicas e privadas",
    "Cobertura nacional com potencial de expansão contínua",
  ]

  const message = encodeURIComponent(
    "Olá, gostaria de falar com um especialista da SAFRI."
  )

  return (
    <section className="w-full py-24 lg:py-32">

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="max-w-xl">

            {/* TAG */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Sobre a SAFRI
              </span>
            </div>

            {/* TITLE */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              Capacidade real para executar projetos de grande escala
            </h2>

            {/* TEXT */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
              A SAFRI posiciona-se como parceiro estratégico para empresas que exigem
              eficiência operacional, escala e entrega garantida.
            </p>

            <p className="mt-4 text-lg text-muted-foreground">
              Com infraestrutura própria e operações integradas, asseguramos controlo,
              performance e resultados consistentes.
            </p>

            {/* LIST */}
            <ul className="mt-8 space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-base">
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

              {/* EMPRESA */}
              <Link href="/empresa">
                <Button className="px-10 py-6 text-lg font-semibold w-full sm:w-auto">
                  Conhecer a Empresa
                </Button>
              </Link>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${whatsapp}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="px-10 py-6 text-lg w-full"
                >
                  Falar com Especialista
                </Button>
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl">

              <Image
                src="/images/safri-metal.png"
                alt="Infraestrutura SAFRI"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            </div>

            {/* BADGE */}
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