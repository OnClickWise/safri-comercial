"use client"

import { motion } from "framer-motion"
import {
  ShoppingCart,
  Building2,
  Truck,
  Factory,
  Globe,
  Wheat,
  Hotel,
  GraduationCap,
} from "lucide-react"

const areas = [
  {
    title: "Comércio",
    desc: "Fornecimento estratégico de bens alimentares, industriais e mobiliário com capacidade logística para atender grandes volumes e contratos institucionais.",
    icon: ShoppingCart,
  },

  {
    title: "Hotelaria & Turismo",
    desc: "Soluções completas para o sector hoteleiro, incluindo fornecimento, mobiliário, logística e suporte operacional para unidades de alojamento e projectos turísticos.",
    icon: Hotel,
  },

  {
    title: "Ensino & Educação",
    desc: "Fornecimento e produção de mobiliário escolar, equipamentos e soluções estruturais para instituições de ensino públicas e privadas.",
    icon: GraduationCap,
  },
  {
    title: "Transportes & Logística",
    desc: "Operações logísticas com frota própria preparada para cargas pesadas, distribuição regional e suporte a projectos de grande escala.",
    icon: Truck,
  },
  {
    title: "Indústria",
    desc: "Produção industrial com capacidade instalada para mobiliário escolar, hospitalar e soluções metálicas com padrão de qualidade e durabilidade.",
    icon: Factory,
  },
  {
    title: "Importação",
    desc: "Ligação directa a mercados globais com sourcing eficiente, redução de custos e garantia de abastecimento contínuo.",
    icon: Globe,
  },
  {
    title: "Construção Civil & Obras Públicas",
    desc: "Execução de infraestruturas com equipa técnica qualificada, meios próprios e capacidade real de entrega dentro de prazos exigentes.",
    icon: Building2,
  },
  {
    title: "Agro-Pecuária",
    desc: "Projectos agrícolas em larga escala com foco em produtividade, sustentabilidade e integração com investigação técnica.",
    icon: Wheat,
  },
]

export function BusinessAreas() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-background overflow-hidden">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER PREMIUM */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-2 rounded-full">
            Sectores Estratégicos
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight">
            Estrutura Multissetorial com Capacidade Real de Execução
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A SAFRI atua nos principais sectores da economia com operações integradas,
            infraestrutura própria e capacidade para responder a projectos de pequena,
            média e grande escala com eficiência, controlo e consistência.
          </p>

        </div>

        {/* GRID DE ÁREAS */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {areas.map((area, index) => {
            const Icon = area.icon

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative rounded-3xl border border-border bg-card p-7
                           hover:-translate-y-2 hover:shadow-2xl
                           transition-all duration-300"
              >

                {/* glow premium */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 
                                bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

                <div className="relative flex flex-col gap-5">

                  {/* ICON */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary
                                  group-hover:scale-110 transition-transform duration-300">
                    <Icon size={26} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-snug">
                    {area.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {area.desc}
                  </p>

                </div>

              </motion.div>
            )
          })}

        </div>

        {/* BLOCO FINAL (CALL TO AUTHORITY) */}
        <div className="mt-20 pt-12 border-t border-border text-center max-w-3xl mx-auto">

          <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
            Um parceiro estratégico para operações exigentes
          </h3>

          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Mais do que atuar em vários sectores, a SAFRI integra operações,
            controla processos e garante execução com eficiência, reduzindo riscos
            e assegurando resultados concretos para empresas, instituições e projectos públicos.
          </p>

        </div>

      </div>
    </section>
  )
}