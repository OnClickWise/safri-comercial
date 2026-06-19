"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Truck,
  Factory,
  Globe,
  Wheat,
  Hotel,
  GraduationCap,
} from "lucide-react";

const areas = [
  {
    title: "Comércio Geral",
    desc: "Fornecimento estratégico de bens alimentares, industriais e mobiliário com capacidade logística para atender grandes volumes e contratos institucionais.",
    icon: ShoppingCart,
    href: "/setores",
  },
  {
    title: "Hotelaria & Turismo",
    desc: "Soluções completas para o sector hoteleiro, incluindo fornecimento, mobiliário, logística e suporte operacional para unidades de alojamento e projectos turísticos.",
    icon: Hotel,
    href: "/setores",
  },
  {
    title: "Ensino & Educação",
    desc: "Fornecimento e produção de mobiliário escolar, equipamentos e soluções estruturais para instituições de ensino públicas e privadas.",
    icon: GraduationCap,
    href: "/setores",
  },
  {
    title: "Logística",
    desc: "Operações logísticas com frota própria preparada para cargas pesadas, distribuição regional e suporte a projectos de grande escala.",
    icon: Truck,
    href: "/setores",
  },
  {
    title: "Indústria",
    desc: "Produção industrial com capacidade instalada para mobiliário escolar, hospitalar e soluções metálicas com padrão de qualidade e durabilidade.",
    icon: Factory,
    href: "/setores",
  },
  {
    title: "Importação",
    desc: "Ligação directa a mercados globais com sourcing eficiente, redução de custos e garantia de abastecimento contínuo.",
    icon: Globe,
    href: "/setores",
  },
  {
    title: "Agro-Pecuária",
    desc: "Projectos agrícolas em larga escala com foco em produtividade, sustentabilidade e integração com investigação técnica.",
    icon: Wheat,
    href: "/setores",
  },
];

export function BusinessAreas() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Sectores Estratégicos
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>

          <h2 className="font-heading mt-2 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Estrutura Multissetorial com Capacidade Real de Execução
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A SAFRI atua nos principais sectores da economia com operações integradas,
            infraestrutura própria e capacidade para responder a projectos de pequena,
            média e grande escala com eficiência, controlo e consistência.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={area.href}
                  className="
                    group
                    relative
                    block
                    h-full
                    rounded-xl
                    border
                    border-border
                    bg-card
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex flex-col gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-foreground transition group-hover:text-primary sm:text-xl">
                      {area.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {area.desc}
                    </p>

                    <span className="mt-2 text-sm font-semibold text-primary">
                      Ver sector →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-20 max-w-3xl border-t border-border pt-12 text-center">
          <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
            Um parceiro estratégico para operações exigentes
          </h3>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Mais do que atuar em vários sectores, a SAFRI integra operações,
            controla processos e garante execução com eficiência, reduzindo riscos
            e assegurando resultados concretos para empresas, instituições e projectos públicos.
          </p>
        </div>
      </div>
    </section>
  );
}