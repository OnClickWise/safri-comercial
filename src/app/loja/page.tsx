"use client"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { LojaHeroCarousel } from "@/components/loja/banners/hero-carousel"
import { CategoryMenu } from "@/components/loja/layout/category-menu"
import { ProductSection } from "@/components/loja/product/product-section"
import { useFilterStore } from "@/store/filter-store"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/loja/product/product-card"

function LojaContent() {
  const searchParams = useSearchParams()
  const { search, category, setSearch, setCategory } = useFilterStore()

  useEffect(() => {
    const q = searchParams.get("q")
    const cat = searchParams.get("categoria")
    if (q) setSearch(q)
    if (cat) setCategory(cat)
  }, [searchParams, setSearch, setCategory])

  const filtered = products.filter((p) => {
    if (search) {
      return p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
    }
    if (category !== "todos") return p.category === category
    return true
  })

  const isFiltered = search || category !== "todos"

  return (
    <main>
      <LojaHeroCarousel />
      <CategoryMenu />
      <div className="container mx-auto px-4 py-10 space-y-14">
        {isFiltered ? (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {search ? `Resultados para "${search}"` : `Categoria: ${category}`}
                <span className="ml-2 text-sm font-normal text-muted-foreground">({filtered.length} produtos)</span>
              </h2>
              <button
                onClick={() => useFilterStore.getState().clearFilters()}
                className="text-sm text-primary hover:underline"
              >
                Limpar filtros
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                Nenhum produto encontrado.
              </div>
            )}
          </div>
        ) : (
          <>
            <ProductSection title="Sacos Normais e Laminados" category="sacos" />
            <ProductSection title="Sacos 30kg" category="saco" />
            <ProductSection title="Carteiras Escolares" category="carteiras" />
            <ProductSection title="Cadernos Escolares" category="cadernos" />
          </>
        )}
      </div>
    </main>
  )
}

export default function LojaPage() {
  return (
    <Suspense>
      <LojaContent />
    </Suspense>
  )
}
