"use client"

import Image from "next/image"

export default function HeroCarousel() {
  return (
    <section className="bg-background py-6">
      <div className="container mx-auto">

        <div className="
          relative
          rounded-2xl
          bg-gradient-to-r from-secondary to-secondary/80
          text-secondary-foreground
          p-6 md:p-10
          flex flex-col md:flex-row items-center justify-between
          overflow-hidden
        ">

          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-4">

            <span className="
              inline-block
              bg-primary text-primary-foreground
              text-xs font-semibold
              px-3 py-1
              rounded-full
            ">
              Até 30% OFF
            </span>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Cuide da sua saúde com os melhores produtos
            </h2>

            <p className="text-sm md:text-base text-secondary-foreground/80">
              Ofertas especiais em medicamentos, beleza e bem-estar.
            </p>

            <button className="
              mt-2
              bg-primary
              text-primary-foreground
              px-6 py-2
              rounded-full
              font-medium
              hover:opacity-90 transition
            ">
              Aproveitar agora
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="mt-6 md:mt-0">
            <Image
              src="/products/hero.png" // troca depois
              alt="Promoção"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  )
}