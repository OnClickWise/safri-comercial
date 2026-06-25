"use client"
import { useState } from "react"
import { getProductsByCategory } from "@/lib/products"
import { ProductCard } from "./product-card"

const tabs = [
  { id: "sacos", label: "Sacos Normais/Laminados" },
  { id: "saco", label: "Sacos 30kg" },
  { id: "carteiras", label: "Carteiras Escolares" },
  { id: "cadernos", label: "Cadernos Escolares" },
] as const

const tabImages: Record<string, string[]> = {
  sacos: [
    "/images/loja/new-arrival/01.webp",
    "/images/loja/new-arrival/02.webp",
    "/images/loja/new-arrival/03.webp",
    "/images/loja/new-arrival/04.webp",
  ],
  saco: ["/images/loja/new-arrival/05.webp"],
  carteiras: [
    "/images/loja/new-arrival/06.webp",
    "/images/loja/new-arrival/07.webp",
    "/images/loja/new-arrival/08.webp",
    "/images/loja/new-arrival/09.webp",
  ],
  cadernos: [
    "/images/loja/new-arrival/10.webp",
    "/images/loja/new-arrival/01.webp",
    "/images/loja/new-arrival/02.webp",
    "/images/loja/new-arrival/03.webp",
  ],
}

export function TabularProducts() {
  const [activeTab, setActiveTab] = useState<string>("sacos")

  const productsInTab = getProductsByCategory(activeTab)
  const images = tabImages[activeTab] ?? []

  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        {/* Header + Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Catálogo Completo</span>
            <h2 className="text-2xl md:text-3xl font-black text-secondary mt-1">Os Nossos Produtos</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {productsInTab.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              imageSrc={images[i]}
            />
          ))}
          {productsInTab.length === 0 && (
            <div className="col-span-5 text-center py-16 text-muted-foreground">
              Nenhum produto nesta categoria.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
