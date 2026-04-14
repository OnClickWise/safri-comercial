"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const slides = [
  {
    title: "SOLUÇÕES INDUSTRIAIS DE ALTA PERFORMANCE",
    subtitle:
      "Fornecimento, produção e logística para empresas que operam em grande escala",
    highlight: "Mais de 25 anos a executar projetos estratégicos em Angola",
    image: "/images/banner7.png",
  },
  {
    title: "FORNECIMENTO INTELIGENTE PARA GRANDES OPERAÇÕES",
    subtitle:
      "Garantimos stock, entrega e continuidade para empresas que não podem parar",
    highlight: "Capacidade logística e comercial preparada para grandes volumes",
    image: "/images/banner2.png",
  },
  {
    title: "LOGÍSTICA E TRANSPORTE EM LARGA ESCALA",
    subtitle:
      "Movemos cargas, operações e negócios com eficiência e controlo total",
    highlight: "Infraestrutura própria e frota preparada para grandes desafios",
    image: "/images/banner3.png",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

      const whatsappNumber = "244922100548";
      const proposalLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Olá, gostaria de solicitar uma proposta da SAFRI.",
    )}`;
 

  React.useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-[90vh] flex items-center"
            >
              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40" />

              {/* CONTENT */}
              <div className="relative w-full px-6 lg:px-16 xl:px-24">
                <div className="max-w-5xl">

                  {/* TAG / PROVA */}
                  <div className="mb-6 inline-block bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {slide.highlight}
                  </div>

                  {/* TITLE */}
                  <h1 className="text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] text-white">
                    {slide.title}
                  </h1>

                  {/* SUBTITLE */}
                  <p className="mt-6 text-xl sm:text-2xl text-white/80 max-w-3xl">
                    {slide.subtitle}
                  </p>

                  {/* STATS (PROVA SOCIAL) */}
                  <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
                    <Stat value="+25" label="Anos de Experiência" />
                    <Stat value="+10k m²" label="Capacidade de Armazenamento" />
                    <Stat value="+100" label="Clientes Atendidos" />
                    <Stat value="24h" label="Resposta Comercial" />
                  </div>

                  {/* CTA */}
                  <div className="mt-12 flex flex-col sm:flex-row gap-5">
                    <a href={proposalLink} target="_blank">
                      <Button className="px-10 py-7 text-lg font-semibold">
                        Solicitar Proposta
                      </Button>
                    </a>

                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                    >
                      <Button
                        variant="outline"
                        className="flex items-center gap-3 px-10 py-7 text-lg text-white border-white hover:bg-white hover:text-black"
                      >
                        <MessageCircle size={22} />
                        Falar com Especialista
                      </Button>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* COMPONENTE DE ESTATÍSTICA */

function Stat({ value, label }: any) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl sm:text-3xl font-bold text-white">
        {value}
      </span>
      <span className="text-sm text-white/70">
        {label}
      </span>
    </div>
  );
}