"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 6500;

const slides = [
  {
    label: "Angola · 25 Anos de Operações",
    title: ["Parceiro Estratégico", "para Grandes Operações"],
    subtitle:
      "Infraestrutura própria, frota dedicada e equipa experiente para executar projetos exigentes com precisão e eficiência.",
    image: "/images/banner7.png",
    position: "center",
  },
  {
    label: "Fornecimento · Nacional e Internacional",
    title: ["Abastecimento Garantido", "para Quem Não Pode Parar"],
    subtitle:
      "Stock permanente, logística integrada e resposta comercial em 24 horas para contratos institucionais de grande volume.",
    image: "/images/banner2.png",
    position: "center",
  },
  {
    label: "Comércio · Logística · Indústria · Agro",
    title: ["Estrutura Multissetorial", "com Execução Real"],
    subtitle:
      "Da importação à entrega final, controlamos todo o processo com eficiência, rigor e resultados mensuráveis.",
    image: "/images/banner4.png",
    position: "center",
  },
];

const stats = [
  { value: "+25", label: "Anos de Experiência" },
  { value: "+10k m²", label: "Capacidade de Stock" },
  { value: "+100", label: "Clientes Servidos" },
  { value: "24h", label: "Resposta Comercial" },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [progressKey, setProgressKey] = React.useState(0);

  const whatsappNumber = "244922100548";
  const proposalLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá, gostaria de solicitar uma proposta da SAFRI.",
  )}`;

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setProgressKey((k) => k + 1);
    });

    const autoplay = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const slide = slides[selectedIndex];

  return (
    <section className="relative overflow-hidden h-screen min-h-[640px] max-h-[1080px]">

      {/* ─── BACKGROUND CAROUSEL ─────────────────────────────── */}
      <div ref={emblaRef} className="absolute inset-0 overflow-hidden">
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative min-w-full h-full flex-shrink-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundPosition: s.position,
                }}
              />

              {/* dual gradient: left coverage + bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          ))}
        </div>
      </div>

      {/* ─── LEFT ACCENT LINE ────────────────────────────────── */}
      <div className="absolute left-0 inset-y-0 w-1 z-20 hidden lg:block">
        <div className="absolute top-[20%] bottom-[20%] w-full bg-primary" />
      </div>

      {/* ─── DECORATIVE SLIDE NUMBER (top-right) ─────────────── */}
      <div className="absolute top-10 right-8 lg:right-16 z-20 hidden xl:block select-none pointer-events-none">
        <span className="font-heading text-[9rem] font-bold leading-none text-white/[0.05]">
          {String(selectedIndex + 1).padStart(2, "0")}
        </span>
      </div>

      {/* ─── MAIN CONTENT ────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 lg:px-16 xl:px-24 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            {/* LABEL */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-8 bg-primary flex-shrink-0" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                {slide.label}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="font-heading font-bold leading-[1.06] text-white">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem]">
                {slide.title[0]}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem] text-white/75">
                {slide.title[1]}
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-7 text-[15px] sm:text-base text-white/55 max-w-[480px] leading-[1.75]">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={proposalLink} target="_blank" rel="noopener noreferrer">
                <Button
                  className="h-12 px-8 text-sm font-semibold rounded-none gap-2
                             shadow-lg shadow-primary/20"
                >
                  Solicitar Proposta
                  <ArrowRight size={15} />
                </Button>
              </a>

              <a href="/empresa">
                <Button
                  variant="outline"
                  className="h-12 px-8 text-sm rounded-none
                             border-white/25 text-white
                             hover:bg-white/10 hover:border-white/50 hover:text-white"
                >
                  Conhecer a Empresa
                </Button>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── SLIDE COUNTER + ARROWS (above stats bar) ────────── */}
      <div className="absolute bottom-[88px] right-8 lg:right-16 z-20 flex items-center gap-4">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Anterior"
          className="flex h-9 w-9 items-center justify-center
                     border border-white/20 text-white/50
                     hover:border-white/50 hover:text-white
                     transition-all duration-200"
        >
          <ChevronLeft size={16} />
        </button>

        <span className="text-[11px] tabular-nums text-white/40 tracking-widest">
          {String(selectedIndex + 1).padStart(2, "0")}
          <span className="mx-2 text-white/20">/</span>
          {String(slides.length).padStart(2, "0")}
        </span>

        <button
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Próximo"
          className="flex h-9 w-9 items-center justify-center
                     border border-white/20 text-white/50
                     hover:border-white/50 hover:text-white
                     transition-all duration-200"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* ─── STATS BAR ───────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20
                      border-t border-white/10
                      bg-black/40 backdrop-blur-md">
        <div className="px-8 lg:px-16 xl:px-24">
          <div className="flex items-stretch divide-x divide-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 py-5 px-4 first:pl-0 last:pr-0"
              >
                <div className="text-lg sm:text-xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/35 mt-[3px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PROGRESS BAR ────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] z-30 bg-white/5">
        <motion.div
          key={progressKey}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
          className="h-full bg-primary"
        />
      </div>

    </section>
  );
}
