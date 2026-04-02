"use client"

import { motion } from "framer-motion"
import {
  ShoppingCart,
  Building2,
  Truck,
  Factory,
  Globe,
  Wheat,
} from "lucide-react"

const areas = [
  {
    title: "Comércio Geral",
    desc: "Rede comercial consolidada com armazéns e capacidade superior a 10.000m² para fornecimento de bens alimentares, industriais e mobiliário em diversas regiões.",
    icon: ShoppingCart,
  },
  {
    title: "Transportes & Logística",
    desc: "Frota própria com camiões de grande porte para transporte de carga pesada, granel, contentorizada e apoio a operações logísticas de larga escala.",
    icon: Truck,
  },
  {
    title: "Indústria (SAFRI-METAL)",
    desc: "Produção industrial própria de mobiliário escolar, hospitalar, artigos metálicos e soluções industriais com capacidade produtiva instalada.",
    icon: Factory,
  },
  {
    title: "Importação & Comércio Internacional",
    desc: "Rede global de fornecedores garantindo fornecimento rápido, seguro e eficiente para projectos públicos e privados.",
    icon: Globe,
  },
  {
    title: "Construção & Obras Públicas",
    desc: "Execução de projectos estruturais com meios próprios, incluindo infraestruturas, obras públicas e suporte técnico especializado.",
    icon: Building2,
  },
  {
    title: "Agro-Pecuária",
    desc: "Exploração agrícola com mais de 1.300 hectares, integrando produção, investigação científica e desenvolvimento sustentável.",
    icon: Wheat,
  },
]

export function BusinessAreas() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
            Sectores Estratégicos
          </span>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Áreas de Atuação da SAFRI
          </h2>

          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            A SAFRI atua em múltiplos sectores-chave da economia angolana,
            com estrutura própria, capacidade operacional e soluções adaptadas
            às necessidades de cada projecto.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {areas.map((area, index) => {
            const Icon = area.icon

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-border bg-card p-6 sm:p-7
                           hover:-translate-y-1 hover:shadow-xl
                           transition-all duration-300"
              >

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 
                                bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                <div className="relative flex flex-col gap-4">

                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary
                                  group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.desc}
                  </p>

                </div>

              </motion.div>
            )
          })}

        </div>

        {/* COMMITMENT */}
        <div className="mt-16 pt-10 border-t border-border text-center max-w-3xl mx-auto">

          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            Nosso Compromisso
          </h3>

          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Garantir qualidade, cumprimento rigoroso dos compromissos e
            excelência operacional em todos os projectos, contribuindo
            diretamente para o desenvolvimento económico e social de Angola.
          </p>

        </div>

      </div>
    </section>
  )
}