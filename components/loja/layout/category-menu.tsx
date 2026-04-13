"use client"

import { Package, Factory, School } from "lucide-react"
import { useFilter } from "@/store/filter-store"

const categories = [
  { name: "Todos", value: "", icon: Package },
  { name: "Sacos Industriais", value: "sacos", icon: Factory },
  { name: "Carteiras Escolares", value: "carteiras", icon: School },
]

export default function CategoryMenu() {
  const { category, setCategory } = useFilter()

  return (
    <div className="bg-background border-b border-border">
      <div className="container mx-auto py-4">

        <div className="flex gap-4 overflow-x-auto px-1">

          {categories.map((cat, index) => {
            const Icon = cat.icon
            const active = category === cat.value

            return (
              <div
                key={index}
                onClick={() => setCategory(cat.value)}
                className={`
                  min-w-[110px]
                  flex flex-col items-center justify-center
                  border rounded-xl p-3 cursor-pointer
                  transition
                  ${active 
                    ? "bg-primary text-primary-foreground border-primary shadow-md" 
                    : "bg-card border-border hover:shadow-md hover:-translate-y-1"}
                `}
              >
                {/* ICON */}
                <div className={`
                  w-10 h-10 flex items-center justify-center
                  rounded-full mb-2
                  ${active ? "bg-white/20" : "bg-secondary/10"}
                `}>
                  <Icon size={20} />
                </div>

                {/* LABEL */}
                <span className="text-xs text-center font-medium leading-tight">
                  {cat.name}
                </span>
              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}