"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const slides = [
  {
    title: "SAFRI",
    subtitle: "Impulsionando o Desenvolvimento Económico de Angola",
    description: [
      "Mais de 25 anos de experiência multissetorial",
      "Atuação em comércio, indústria e logística",
      "Infraestrutura própria e capacidade operacional",
      "Presença consolidada em sectores estratégicos",
    ],
    image: "/images/banner7.png",
  },
  {
    title: "COMÉRCIO GERAL",
    subtitle: "Soluções Comerciais que Movem o Mercado",
    description: [
      "Distribuição de bens essenciais e industriais",
      "Rede logística própria",
      "Capacidade de armazenamento superior a 10.000m²",
      "Cobertura regional eficiente",
    ],
    image: "/images/banner2.png",
  },
  {
    title: "TRANSPORTES & LOGÍSTICA",
    subtitle: "Logística que Liga Angola",
    description: [
      "Transporte de carga pesada e contentorizada",
      "Frota moderna e operacional",
      "Gestão logística integrada",
      "Operações de grande escala",
    ],
    image: "/images/banner3.png",
  },
  {
    title: "INDÚSTRIA",
    subtitle: "Produção Industrial com Impacto Real",
    description: [
      "Produção de mobiliário escolar e hospitalar",
      "Capacidade produtiva instalada",
      "Soluções industriais completas",
      "Fábricas próprias",
    ],
    image: "/images/banner4.png",
  },
  {
    title: "IMPORTAÇÃO",
    subtitle: "Ligamos Angola ao Mercado Global",
    description: [
      "Rede internacional de fornecedores",
      "Importação eficiente e segura",
      "Suporte a projetos públicos e privados",
      "Logística internacional estruturada",
    ],
    image: "/images/banner1.png",
  },
  {
    title: "AGRO-PECUÁRIA",
    subtitle: "Agronegócio Sustentável e Escalável",
    description: [
      "Mais de 1.300 hectares disponíveis",
      "Produção agrícola sustentável",
      "Integração académica e científica",
      "Alto potencial produtivo",
    ],
    image: "/images/banner1.png",
  },
  {
    title: "CONSTRUÇÃO & OBRAS PÚBLICAS",
    subtitle: "Execução com Capacidade Técnica e Escala",
    description: [
      "Execução de projetos estruturais",
      "Infraestruturas públicas e privadas",
      "Equipa técnica qualificada",
      "Capacidade operacional robusta",
    ],
    image: "/images/banner2.png",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const whatsappNumber = "244923019166";

  const proposalLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá, gostaria de solicitar uma proposta da SAFRI.",
  )}`;

  const contactLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá, gostaria de falar com um especialista da SAFRI.",
  )}`;

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden">
      
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-[80vh] sm:h-[85vh] flex items-center"
            >
              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />

              {/* CONTENT */}
              <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16">
                <div className="max-w-2xl">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                    {slide.subtitle}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                    {slide.description.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a href={proposalLink} target="_blank">
                      <Button size="lg">Solicitar Proposta</Button>
                    </a>

                    <a href={contactLink} target="_blank">
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-2"
                      >
                        <MessageCircle size={20} />
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

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-primary w-6" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
}