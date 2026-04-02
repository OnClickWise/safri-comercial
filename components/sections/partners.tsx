"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const partners = [
  { name: "Parceiro 1", logo: "/images/partners/partner1.png" },
  { name: "Parceiro 2", logo: "/images/partners/partner2.png" },
  { name: "Parceiro 3", logo: "/images/partners/partner3.png" },
  { name: "Parceiro 4", logo: "/images/partners/partner4.png" },
  { name: "Parceiro 5", logo: "/images/partners/partner5.png" },
  { name: "Parceiro 6", logo: "/images/partners/partner6.png" },
  { name: "Parceiro 4", logo: "/images/partners/partner4.png" },
  { name: "Parceiro 5", logo: "/images/partners/partner5.png" },
  { name: "Parceiro 6", logo: "/images/partners/partner6.png" },
  { name: "Parceiro 4", logo: "/images/partners/partner4.png" },
  { name: "Parceiro 5", logo: "/images/partners/partner5.png" },
  { name: "Parceiro 6", logo: "/images/partners/partner6.png" },
];

export function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Parcerias Estratégicas
          </span>

          <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Parceiros que Geram Valor
          </h2>

          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Trabalhamos com entidades governamentais e parceiros privados,
            nacionais e internacionais, garantindo soluções eficazes e
            confiáveis.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-10 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] flex items-center justify-center
                           opacity-70 hover:opacity-100 transition duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
