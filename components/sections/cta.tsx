"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Cta() {

  const whatsappNumber = "244922100548"

  const whatsappMessage =
    "Olá, gostaria de solicitar uma proposta da SAFRI."

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="relative py-24 md:py-32 bg-primary text-white overflow-hidden">

      {/* BACKGROUND PREMIUM */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_70%)] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/90" />

      <div className="container relative mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* TAG */}
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60">
            Parceria Estratégica & Execução Real
          </span>

          {/* HEADLINE FORTE */}
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
            Transforme o seu projeto em
            <span className="block text-white/80">
              resultados concretos e escaláveis
            </span>
          </h2>

          {/* SUBTEXTO MAIS DIRETO */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            A SAFRI oferece estrutura, capacidade operacional e experiência comprovada
            para executar projetos com eficiência, escala e segurança — do planeamento à entrega.
          </p>

          {/* PROVA / REFORÇO */}
          <p className="mt-4 text-sm text-white/60">
            Comércio • Logística • Indústria • Construção • Importação • Agro
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">

            {/* CTA PRINCIPAL */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="px-10 py-7 text-base sm:text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-xl"
              >
                Solicitar Proposta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            {/* CTA SECUNDÁRIO */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-7 text-base sm:text-lg border-white/40 text-white hover:bg-white/10 flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Falar com Especialista
              </Button>
            </a>

          </div>

          {/* SOCIAL PROOF */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto text-center">

            <Stat value="+25" label="Anos de Experiência" />
            <Stat value="+100" label="Projetos Executados" />
            <Stat value="Nacional" label="Cobertura Operacional" />

          </div>

        </motion.div>

      </div>
    </section>
  )
}

/* STATS */

function Stat({ value, label }: any) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl font-bold">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-white/60 mt-1">
        {label}
      </div>
    </div>
  )
}