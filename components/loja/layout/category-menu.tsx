"use client"

import Image from "next/image"
import { useFilter } from "@/store/filter-store"
import { useRouter } from "next/navigation"

const categories = [
  { name: "Todos", value: "", image: "/categories/all.jpg" },
  { name: "Sacos Industriais", value: "sacos", image: "/images/categories/sacos.jpg" },
  { name: "Carteiras Escolares", value: "carteiras", image: "/categories/carteiras.jpg" },
  { name: "Construção", value: "construcao", image: "/categories/construcao.jpg" },
  { name: "Ferro & Metal", value: "metal", image: "/categories/metal.jpg" },
  { name: "Equipamentos", value: "equipamentos", image: "/categories/equipamentos.jpg" },
  { name: "Logística", value: "logistica", image: "/categories/logistica.jpg" },
  { name: "Agro", value: "agro", image: "/categories/agro.jpg" },
]

export default function CategoryMenu() {
  const { category, setCategory } = useFilter()
  const router = useRouter()

  const handleClick = (value: string) => {
    setCategory(value)
    router.push(`/loja${value ? `?categoria=${value}` : ""}`)
  }

  return (
    <div className="bg-background border-b border-border">
      <div className="container mx-auto py-6">

        <div className="
          grid
          grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8
          gap-5
        ">

          {categories.map((cat, index) => {
            const active = category === cat.value

            return (
              <button
                key={index}
                onClick={() => handleClick(cat.value)}
                className="flex flex-col items-center group"
              >

                {/* IMAGE */}
                <div
                  className={`
                    relative
                    w-[65px] h-[65px]
                    md:w-[75px] md:h-[75px]
                    rounded-full
                    overflow-hidden
                    border
                    transition-all duration-300
                    ${active 
                      ? "border-primary shadow-lg scale-105 ring-2 ring-primary/30" 
                      : "border-border group-hover:shadow-md group-hover:scale-105"}
                  `}
                >
                  <Image
                    src={cat.image || "/categories/fallback.jpg"}
                    alt={cat.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                    onError={(e: any) => {
                      e.currentTarget.src = "/categories/fallback.jpg"
                    }}
                  />

                  {/* OVERLAY ACTIVE */}
                  {active && (
                    <div className="absolute inset-0 bg-primary/10" />
                  )}
                </div>

                {/* LABEL */}
                <span
                  className={`
                    mt-2 text-[11px] md:text-xs font-medium text-center leading-tight transition
                    ${active 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground group-hover:text-foreground"}
                  `}
                >
                  {cat.name}
                </span>

              </button>
            )
          })}

        </div>

      </div>
    </div>
  )
}