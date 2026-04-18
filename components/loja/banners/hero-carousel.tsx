"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Carteiras Escolares de Alta Durabilidade",

    subtitle:
      "Mobiliário escolar resistente para escolas, instituições e projetos públicos.",

    description:
      "Produção e fornecimento em escala com qualidade, durabilidade e condições competitivas para compras institucionais.",

    image: "/images/banner-loja/loja-banner1.png",

    cta: "Ver Carteiras",

    link: "/loja?categoria=carteiras",
  },

  {
    title: "Quadros Negros Profissionais para Salas de Aula",

    subtitle:
      "Soluções para ensino com acabamento resistente e longa vida útil.",

    description:
      "Fornecimento para escolas, centros de formação e projetos educacionais com entrega sob encomenda.",

    image: "/images/banner-loja/loja-banner2.png",

    cta: "Solicitar Cotação",

    link: "/loja?categoria=quadros",
  },

  {
    title: "Sacos para Batata e Armazenamento Agrícola",

    subtitle:
      "Resistência industrial para transporte, logística e conservação.",

    description:
      "Sacos reforçados para uso agrícola e comercial, ideais para grandes volumes com fornecimento contínuo.",

    image: "/images/banner-loja/loja-banner3.png",

    cta: "Ver Sacos",

    link: "/loja?categoria=sacos",
  },

  {
    title: "Sacos Industriais Personalizados",

    subtitle:
      "Embalagens para operações comerciais, industriais e distribuição.",

    description:
      "Modelos laminados, ráfia e personalizados com opções para diferentes cargas e necessidades operacionais.",

    image: "/images/banner-loja/loja-banner4.png",

    cta: "Explorar Produtos",

    link: "/loja?categoria=sacos",
  },

  {
    title: "Cadernos Escolares para Revenda e Fornecimento",

    subtitle:
      "Linha escolar para papelarias, escolas e distribuição institucional.",

    description:
      "Cadernos brochura, espiral e universitários com excelente custo-benefício para compras em quantidade.",

    image: "/images/banner-loja/loja-banner5.png",

    cta: "Ver Cadernos",

    link: "/loja?categoria=cadernos",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

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
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-background py-8">
      <div className="container mx-auto">
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden rounded-[28px]">
            <div className="flex">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="
min-w-full
relative
h-[420px]
md:h-[560px]
flex
items-center
"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover object-center"
                  />

                  <div
                    className="
absolute
inset-0
bg-gradient-to-r
from-black/80
via-black/55
to-black/20
"
                  />

                  <div
                    className="
relative
z-10
w-full
max-w-3xl
px-8
md:px-20
pt-6
"
                  >
                    <div
                      className="
max-w-2xl
flex
flex-col
justify-center
"
                    >
                      <span
                        className="
inline-block
mb-4
text-sm
tracking-widest
uppercase
font-medium
text-primary
"
                      >
                        Fornecimento Profissional
                      </span>

                      <h1
                        className="
text-3xl
md:text-6xl
font-bold
leading-[1.08]
"
                      >
                        {slide.title}
                      </h1>

                      <p
                        className="
mt-5
text-lg
md:text-2xl
text-white/90
leading-relaxed
"
                      >
                        {slide.subtitle}
                      </p>

                      <p
                        className="
mt-5
text-sm
md:text-lg
text-white/75
max-w-xl
leading-relaxed
"
                      >
                        {slide.description}
                      </p>

                      <div className="flex gap-4 mt-8">
                        <Link href={slide.link}>
                          <button
                            className="
bg-primary
px-8
py-4
rounded-full
font-semibold
shadow-lg
hover:opacity-90
transition
"
                          >
                            {slide.cta}
                          </button>
                        </Link>

                        <Link href="/quote">
                          <button
                            className="
border
border-white/50
px-8
py-4
rounded-full
font-semibold
hover:bg-white/10
transition
"
                          >
                            Solicitar Cotação
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="
absolute
left-5
top-1/2
-translate-y-1/2
bg-white/85
p-3
rounded-full
shadow-lg
hover:bg-white
"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollNext}
            className="
absolute
right-5
top-1/2
-translate-y-1/2
bg-white/85
p-3
rounded-full
shadow-lg
hover:bg-white
"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center mt-5 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`
h-2.5
rounded-full
transition-all
${index === selectedIndex ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/40"}
`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
