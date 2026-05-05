"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=244922100548&text&type=phone_number&app_absent=0";

const slides = [
  { image: "/images/banner-loja/loja-banner1.png", alt: "Banner carteiras escolares" },
  { image: "/images/banner-loja/loja-banner2.png", alt: "Banner quadros negros" },
  { image: "/images/banner-loja/loja-banner3.png", alt: "Banner cadeira e mesa infantil" },
  { image: "/images/banner-loja/loja-banner4.png", alt: "Banner sacos industriais personalizados" },
  { image: "/images/banner-loja/loja-banner5.png", alt: "Banner cadernos escolares" },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    onSelect();
    emblaApi.on("select", onSelect);

    const autoplay = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => {
      window.clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-background py-8">
      <div className="w-full px-4">
        <div className="relative mx-auto w-full max-w-[1920px]">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {slides.map((slide, index) => (
                <div
                  key={slide.image}
                  className="
                    relative
                    min-w-full
                    h-[220px]
                    sm:h-[400px]
                    md:h-[500px]
                    lg:h-[600px]
                    xl:h-[730px]
                    2xl:h-[942px]
                    bg-black
                  "
                >
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir WhatsApp - ${slide.alt}`}
                    className="block h-full w-full"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="100vw"
                      className="
                        object-contain
                        object-center
                      "
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Banner anterior"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black shadow-lg transition hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Próximo banner"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black shadow-lg transition hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-5 flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ir para banner ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}