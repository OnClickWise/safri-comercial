"use client"

import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import React from "react"

const products = [
  { name: "Cimento", image: "/products/cimento.png" },
  { name: "Ferro & Metal", image: "/products/metal.png" },
  { name: "Equipamentos Industriais", image: "/products/equipamentos.png" },
  { name: "Transporte & Logística", image: "/products/logistica.png" },
  { name: "Materiais de Construção", image: "/products/construcao.png" },
  { name: "Agro-Pecuária", image: "/products/agro.png" },
  { name: "Importação", image: "/products/importacao.png" },
  { name: "Distribuição", image: "/products/distribuicao.png" },
  { name: "Armazéns", image: "/products/armazem.png" },
  { name: "Infraestrutura", image: "/products/infraestrutura.png" },
]

export default function ProductsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
      }),
    ]
  )

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Produtos & Soluções
          </h2>
          <p className="text-muted-foreground mt-2">
            Conheça as principais categorias de fornecimento da SAFRI Comercial
          </p>
        </div>

        {/* CAROUSEL */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">

            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] flex flex-col items-center text-center group cursor-pointer"
              >

                {/* IMAGE CIRCULAR */}
                <div className="
                  relative
                  w-[120px] h-[120px]
                  sm:w-[140px] sm:h-[140px]
                  md:w-[160px] md:h-[160px]
                  rounded-full
                  overflow-hidden
                  border border-border
                  shadow-sm
                  group-hover:shadow-lg
                  transition
                ">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
                      object-cover
                      group-hover:scale-110
                      transition-transform duration-500
                    "
                  />

                </div>

                {/* NAME */}
                <span className="mt-4 text-sm font-medium group-hover:text-primary transition">
                  {product.name}
                </span>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}