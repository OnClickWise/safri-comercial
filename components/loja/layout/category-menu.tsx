"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Category = {
  name: string;
  image: string;
  whatsappText: string;
};

const WHATSAPP_PHONE = "244922100548";

const createWhatsappLink = (text: string) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    text
  )}&type=phone_number&app_absent=0`;

const categories: Category[] = [
  {
    name: "Todos",
    image: "/images/categories/categoria0.jpg",
    whatsappText: "Olá, gostaria de saber mais sobre todos os produtos da loja.",
  },
  {
    name: "Sacos Normais e Laminados",
    image: "/images/categories/categoria1.png",
    whatsappText: "Olá, gostaria de solicitar informações sobre Sacos Laminados.",
  },
  {
    name: "Sacos Normais e Laminados",
    image: "/images/categories/categoria3.png",
    whatsappText:
      "Olá, gostaria de solicitar informações sobre Sacos Personalizados.",
  },
  {
    name: "Sacos de Rafia",
    image: "/images/categories/categoria2.png",
    whatsappText: "Olá, gostaria de solicitar informações sobre Sacos de Batata.",
  },
  {
    name: "Estoque",
    image: "/images/categories/categoria6.png",
    whatsappText: "Olá, gostaria de consultar os produtos disponíveis em estoque.",
  },
  {
    name: "Quadro Negro",
    image: "/images/categories/categoria6.png",
    whatsappText: "Olá, gostaria de solicitar informações sobre Quadros Negros.",
  },
  {
    name: "Carteiras Escolares",
    image: "/images/categories/categoria7.png",
    whatsappText:
      "Olá, gostaria de solicitar informações sobre Carteiras Escolares.",
  },
  {
    name: "Cadeira e Mesa Infantil",
    image: "/images/categories/categoria4.png",
    whatsappText:
      "Olá, gostaria de solicitar informações sobre Cadeiras e Mesas Infantis.",
  },
  {
    name: "Cadernos Escolares",
    image: "/images/categories/categoria5.png",
    whatsappText:
      "Olá, gostaria de solicitar informações sobre Cadernos Escolares.",
  },
];

export default function CategoryMenu() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="border-b border-border bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold md:text-2xl">
              Explore Categorias
            </h3>

            <p className="text-sm text-muted-foreground">
              Clique na categoria e fale diretamente pelo WhatsApp
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Categorias anteriores"
              className="rounded-full border p-3 transition hover:bg-muted hover:shadow-md"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Próximas categorias"
              className="rounded-full border p-3 transition hover:bg-muted hover:shadow-md"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="mr-5 min-w-[130px] md:min-w-[150px]"
              >
                <Link
                  href={createWhatsappLink(cat.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Falar no WhatsApp sobre ${cat.name}`}
                  className="group flex w-full flex-col items-center"
                >
                  <div className="relative h-[90px] w-[90px] overflow-hidden rounded-full border border-border bg-muted transition-all duration-300 group-hover:scale-105 group-hover:shadow-md md:h-[110px] md:w-[110px]">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>

                  <span className="mt-3 text-center text-xs font-medium leading-tight text-muted-foreground transition group-hover:text-foreground md:text-sm">
                    {cat.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}