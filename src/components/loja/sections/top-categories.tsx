"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PRODUCT_CATEGORIES, getProductsByCategory } from "@/lib/products"
import { useFilterStore } from "@/store/filter-store"

export function TopCategories() {
  const setCategory = useFilterStore((s) => s.setCategory)
  const displayCategories = PRODUCT_CATEGORIES.filter((c) => c.id !== "todos")

  return (
    <section className="py-14 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-secondary">
            Todas as Categorias de Produtos <span className="text-primary">SAFRI</span>
          </h2>
          <Link
            href="/loja/categoria/todos"
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
          >
            Ver todas as categorias
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {displayCategories.map((cat) => {
            const count = getProductsByCategory(cat.id).length
            return (
              <Link
                key={cat.id}
                href={`/loja/categoria/${cat.id}`}
                onClick={() => setCategory(cat.id)}
                className="group text-left"
              >
                <div className="relative rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-40 bg-white">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <div className="p-3 border-t border-border">
                    <p className="font-bold text-secondary text-sm leading-tight">{cat.label}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{count} {count === 1 ? "produto" : "produtos"}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
