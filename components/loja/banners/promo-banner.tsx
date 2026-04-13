"use client"

import Image from "next/image"

const promos = [
  {
    title: "Até 50% OFF",
    subtitle: "Produtos de beleza",
    cta: "Ver ofertas",
    image: "/products/promo1.png",
  },
  {
    title: "Mamãe e Bebê",
    subtitle: "Cuidados especiais",
    cta: "Comprar agora",
    image: "/products/promo2.png",
  },
  {
    title: "Saúde e Bem-estar",
    subtitle: "Qualidade de vida",
    cta: "Explorar",
    image: "/products/promo3.png",
  },
]

export default function PromoBanner() {
  return (
    <section className="bg-background py-6">
      <div className="container mx-auto grid gap-4 md:grid-cols-3">

        {promos.map((promo, index) => (
          <div
            key={index}
            className="
              relative
              rounded-2xl
              bg-secondary
              text-secondary-foreground
              p-5
              flex items-center justify-between
              overflow-hidden
              hover:scale-[1.02] transition
              cursor-pointer
            "
          >

            {/* TEXT */}
            <div className="z-10 space-y-2 max-w-[60%]">
              <h3 className="text-lg font-bold leading-tight">
                {promo.title}
              </h3>

              <p className="text-sm text-secondary-foreground/80">
                {promo.subtitle}
              </p>

              <button className="
                mt-2
                bg-primary
                text-primary-foreground
                px-4 py-1.5
                rounded-full
                text-sm
                font-medium
                hover:opacity-90 transition
              ">
                {promo.cta}
              </button>
            </div>

            {/* IMAGE */}
            <div className="absolute right-2 bottom-0 opacity-90">
              <Image
                src={promo.image}
                alt={promo.title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}