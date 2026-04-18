"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFilter } from "@/store/filter-store";
import { useRouter } from "next/navigation";

const categories = [
  { name: "Todos", value: "", image: "/images/categories/categoria1.png" },

  {
    name: "Sacos Industriais",
    value: "sacos",
    image: "/images/categories/categoria1.png",
  },

  {
    name: "Carteiras Escolares",
    value: "carteiras",
    image: "/images/categories/categoria9.png",
  },

  {
    name: "Mais Escolar",
    value: "mais-escolar",
    image: "/images/categories/categoria18.png",
  },

  {
    name: "Quadros Escolares",
    value: "quadros",
    image: "/images/categories/categoria4.png",
  },


  {
    name: "Estoque",
    value: "estoque",
    image: "/images/categories/categoria6.png",
  },

  {
    name: "Quadro Negro",
    value: "quadros-negro",
    image: "/images/categories/categoria8.png",
  },

  {
    name: "Logística",
    value: "logistica",
    image: "/images/categories/categoria5.png",
  },

  { name: "Agro", 
    value: "agro", 
    image: "/images/categories/categoria1.png" },

  {
    name: "Mais em vendas",
    value: "mais-vendidos",
    image: "/images/categories/categoria17.png",
  },

  {
    name: "Produção",
    value: "producao",
    image: "/images/categories/categoria12.png",
  },

  { name: "EPIs", value: "epis", image: "/images/categories/categoria13.png" },

  {
    name: "Mobiliário",
    value: "mobiliario",
    image: "/images/categories/categoria14.png",
  },

  {
    name: "Armazém",
    value: "armazem",
    image: "/images/categories/categoria6.png",
  },

  {
    name: "Embalagens",
    value: "embalagens",
    image: "/images/categories/categoria12.png",
  },

  {
    name: "Estocagem",
    value: "estocagem",
    image: "/images/categories/categoria9.png",
  },

  {
    name: "Equipa",
    value: "equipa",
    image: "/images/categories/categoria13.png",
  },

  {
    name: "Institucional",
    value: "institucional",
    image: "/images/categories/categoria15.png",
  },

  {
    name: "Sacos Personalizados",
    value: "Sacos",
    image: "/images/categories/categoria4.png",
  },
];

export default function CategoryMenu() {
  const { category, setCategory } = useFilter();

  const router = useRouter();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  React.useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const handleClick = (value: string) => {
    setCategory(value);
    router.push(`/loja${value ? `?categoria=${value}` : ""}`);
  };

  return (
    <section
      className="
bg-background
border-b
border-border
py-8
"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Explore Categorias
            </h3>

            <p className="text-sm text-muted-foreground">
              Produtos organizados por segmentos e linhas de fornecimento
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="
p-3
rounded-full
border
hover:shadow-md
"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={scrollNext}
              className="
p-3
rounded-full
border
hover:shadow-md
"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {categories.map((cat, index) => {
              const active = category === cat.value;

              return (
                <div
                  key={index}
                  className="
min-w-[130px]
md:min-w-[150px]
mr-5
"
                >
                  <button
                    onClick={() => handleClick(cat.value)}
                    className="
w-full
flex
flex-col
items-center
group
"
                  >
                    <div
                      className={`
relative
w-[90px]
h-[90px]
md:w-[110px]
md:h-[110px]
rounded-full
overflow-hidden
border
transition-all
duration-300

${
  active
    ? "border-primary scale-105 ring-4 ring-primary/20 shadow-lg"
    : "border-border group-hover:scale-105 group-hover:shadow-md"
}
`}
                    >
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />

                      {active && (
                        <div
                          className="
absolute
inset-0
bg-primary/10
"
                        />
                      )}
                    </div>

                    <span
                      className={`
mt-3
text-xs
md:text-sm
font-medium
text-center
leading-tight

${active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}
`}
                    >
                      {cat.name}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
