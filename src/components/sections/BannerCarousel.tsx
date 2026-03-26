"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type BannerItem = {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  gradient: string;
};

const banners: BannerItem[] = [
  {
    label: "Destaque Institucional",
    title: "Liderança com foco em crescimento sustentável",
    subtitle: "Gestão experiente para expansão multissetorial e desenvolvimento estratégico em Angola.",
    cta: "Solicitar apresentação comercial",
    image: "/banners/used/leadership-team.jpg",
    gradient: "from-[var(--safri-red)]/20 via-transparent to-[var(--safri-blue)]/20",
  },
  {
    label: "Infraestrutura",
    title: "Capacidade operacional para grandes projetos",
    subtitle: "Estrutura preparada para produção, armazenamento e logística em escala.",
    cta: "Falar com equipe de vendas",
    image: "/banners/used/warehouse-operations.jpg",
    gradient: "from-[var(--safri-blue)]/20 via-transparent to-[var(--safri-red)]/20",
  },
  {
    label: "Operações",
    title: "Operação integrada para eficiência e performance",
    subtitle: "Atuação coordenada entre unidades para cumprir prazos e elevar resultados.",
    cta: "Agendar reunião",
    image: "/banners/used/metal-fabrication.jpg",
    gradient: "from-[var(--accent)]/20 via-transparent to-[var(--safri-blue)]/20",
  },
  {
    label: "Expansão",
    title: "Presença crescente e visão de longo prazo",
    subtitle: "Construindo oportunidades com responsabilidade e impacto econômico positivo.",
    cta: "Conhecer capacidade industrial",
    image: "/banners/used/africa-network.jpg",
    gradient: "from-[var(--safri-red)]/20 via-transparent to-[var(--accent)]/20",
  },
  {
    label: "Parcerias",
    title: "Conexões estratégicas para novos mercados",
    subtitle: "Atuação integrada entre gestão, operação e relacionamento institucional.",
    cta: "Ver soluções agro",
    image: "/banners/used/agro-drone.jpg",
    gradient: "from-[var(--accent)]/20 via-transparent to-[var(--safri-blue)]/20",
  },
];

export function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / banners.length) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6200);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prev = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <section id="banners" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.42 }}
          className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red-light)]"
        >
          Espaço para Mídia
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.48, delay: 0.04 }}
          className="mt-2 text-3xl font-extrabold text-[var(--foreground)] md:text-4xl"
        >
          Banners institucionais
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-secondary)] md:text-base"
        >
          Conteudo visual da SAFRI com foco em capacidade operacional, liderança e expansão.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--off-white)] shadow-[0_26px_54px_rgba(13,24,42,0.22)]"
        >
          <div className="relative aspect-[16/9] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={banners[current].image}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={banners[current].image}
                  alt={banners[current].title}
                  fill
                  priority={current === 0}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/52 to-black/25" />
            <div className={`absolute inset-0 bg-gradient-to-br ${banners[current].gradient}`} />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/8 to-transparent" />

            <div className="relative z-10 flex h-full items-end p-5 sm:p-6 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={banners[current].title}
                  initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.38 }}
                  className="max-w-3xl"
                >
                <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  {banners[current].label}
                </p>
                <h3 className="mt-4 text-xl font-black leading-tight text-white sm:text-2xl md:text-5xl">
                  {banners[current].title}
                </h3>
                <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-200 sm:text-sm md:text-base md:leading-7">
                  {banners[current].subtitle}
                </p>
                <p className="mt-4 inline-flex rounded-lg border border-white/20 bg-[var(--safri-red)] px-3 py-2 text-xs font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--safri-red-dark)] sm:px-4 sm:text-sm">
                  {banners[current].cta}
                </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
              <motion.div
                className="h-full bg-[var(--safri-red-light)]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.32 }}
              />
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white transition hover:bg-black/60 hover:shadow-lg sm:left-4"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white transition hover:bg-black/60 hover:shadow-lg sm:right-4"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-3"
        >
          {banners.map((banner, index) => (
            <button
              key={banner.title}
              onClick={() => setCurrent(index)}
              className={`relative overflow-hidden rounded-xl border transition ${
                index === current
                  ? "border-[var(--safri-red-light)] shadow-lg shadow-[var(--safri-red)]/20"
                  : "border-[var(--card-border)] opacity-70 hover:-translate-y-0.5 hover:opacity-100 hover:shadow-lg"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image src={banner.image} alt={banner.label} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/35" />
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
