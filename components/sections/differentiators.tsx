"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Layers,
  Workflow,
  Handshake,
  Leaf,
} from "lucide-react"

const items = [
  {
    title: "+25 Anos de Experiência",
    desc: "Histórico consolidado no mercado angolano com atuação contínua em sectores estratégicos, garantindo credibilidade, confiança e estabilidade institucional.",
    icon: Layers,
  },
  {
    title: "Presença Multissetorial Integrada",
    desc: "Atuação em comércio, logística, indústria, construção e agro, permitindo soluções completas e maior controlo sobre toda a cadeia de valor.",
    icon: Workflow,
  },
  {
    title: "Infraestrutura e Capacidade Própria",
    desc: "Armazéns, frota, unidades industriais e meios operacionais próprios que garantem autonomia, eficiência e execução em larga escala.",
    icon: Handshake,
  },
  {
    title: "Parcerias Estratégicas e Governamentais",
    desc: "Relações sólidas com entidades públicas e privadas, nacionais e internacionais, fortalecendo a capacidade de entrega e expansão.",
    icon: Leaf,
  },
]

export function Differentiators() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Diferenciais SAFRI
          </span>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Porquê Escolher a SAFRI
          </h2>

          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Uma estrutura sólida, experiência comprovada e capacidade operacional
            que garantem execução eficiente, segurança contratual e resultados consistentes.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 items-center">

           {/* RIGHT  - IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px]">
            <Image
              src="/images/safri.jpg" // 👉 troca pela tua imagem real
              alt="Infraestrutura e operações da SAFRI"
              fill
              className="object-cover rounded-2xl shadow-xl"
              priority
            />

            {/* overlay elegante */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
          {/*  - CARDS */}
          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-border bg-card p-6 sm:p-7
                             hover:shadow-xl hover:-translate-y-1
                             transition-all duration-300"
                >

                  <div className="flex items-start gap-4">

                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-white
                                    group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}