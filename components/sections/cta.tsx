"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Cta() {

  const whatsappNumber = "244922100548"
  const whatsappMessage = "Olá, gostaria de solicitar uma proposta da SAFRI."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="relative py-24 md:py-32 bg-secondary text-secondary-foreground overflow-hidden">

      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(226,27,35,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-[#0d2440]" />

      {/* TOP BORDER ACCENT */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container relative mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* TAG */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Parceria Estratégica & Execução Real
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>

          {/* HEADLINE */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
            Transforme o seu projeto em
            <span className="block text-white/70 mt-2">
              resultados concretos e escaláveis
            </span>
          </h2>

          {/* SUBTEXTO */}
          <p className="mt-8 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            A SAFRI oferece estrutura, capacidade operacional e experiência comprovada
            para executar projetos com eficiência, escala e segurança — do planeamento à entrega.
          </p>

          {/* SECTORES */}
          <p className="mt-4 text-xs text-white/35 uppercase tracking-widest">
            Comércio · Logística · Indústria · Construção · Importação · Agro
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="px-10 py-6 text-base font-semibold bg-primary text-white hover:bg-primary/90 rounded-none shadow-lg shadow-primary/20"
              >
                Solicitar Proposta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-6 text-base border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-none flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Falar com Especialista
              </Button>
            </a>

          </div>

          {/* SOCIAL PROOF */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto text-center border-t border-white/10 pt-10">
            <Stat value="+25" label="Anos de Experiência" />
            <Stat value="+100" label="Projetos Executados" />
            <Stat value="Nacional" label="Cobertura Operacional" />
          </div>

        </motion.div>

      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl font-bold text-white">
        {value}
      </div>
      <div className="text-xs text-white/40 mt-1 uppercase tracking-wide">
        {label}
      </div>
    </div>
  )
}
