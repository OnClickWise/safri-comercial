"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Cta() {

  const whatsappNumber = "244923019166"

  const whatsappMessage =
    "Olá, gostaria de solicitar uma proposta da SAFRI."

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="relative py-20 md:py-28 bg-primary text-white overflow-hidden">

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_70%)]" />

      <div className="container relative mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >

          <span className="text-xs uppercase tracking-widest text-white/70">
            Parcerias Estratégicas
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Pronto para Trabalhar com um
            <span className="block">Parceiro de Confiança?</span>
          </h2>

          <p className="mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
            A SAFRI está preparada para apoiar o seu projecto com soluções integradas 
            em comércio, logística, indústria, construção e investimento estratégico, 
            garantindo eficiência, capacidade de execução e resultados concretos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <Button
              size="lg"
              className="px-8 py-6 text-base font-semibold"
            >
              Solicitar Proposta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base border-white text-white hover:bg-white hover:text-primary flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Falar com Especialista
              </Button>
            </a>

          </div>

          <p className="mt-8 text-xs sm:text-sm text-white/60">
            +25 anos de experiência • Presença multissetorial • Cobertura nacional
          </p>

        </motion.div>

      </div>
    </section>
  )
}