"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { SlidersHorizontal, X, LayoutGrid, List } from "lucide-react"
import { products, PRODUCT_CATEGORIES, getProductsByCategory } from "@/lib/products"
import { ProductCard } from "@/components/loja/product/product-card"

const categoryLabels: Record<string, string> = {
  todos: "Todos os Produtos",
  sacos: "Sacos Normais e Laminados",
  saco: "Sacos 30kg",
  carteiras: "Carteiras Escolares",
  cadernos: "Cadernos Escolares",
  mobiliario: "Mobiliário e Camas",
}

interface CategoryGridClientProps {
  category: string
}

export function CategoryGridClient({ category }: CategoryGridClientProps) {
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cols, setCols] = useState<3 | 4>(3)

  const filtered = getProductsByCategory(category).filter((p) =>
    search ? p.name.toLowerCase().includes(search.toLowerCase()) : true
  )

  const categoryName = categoryLabels[category] ?? category

  return (
    <>
      {/* Mobile filter toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="xl:hidden fixed top-1/2 left-0 -translate-y-1/2 z-30 flex items-center gap-1 bg-secondary text-white text-xs font-bold px-3 py-2 rounded-r-lg shadow-lg"
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filtros
      </button>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside
            className={`
              fixed xl:static inset-y-0 left-0 z-40 w-72 xl:w-64 xl:flex-shrink-0
              bg-card xl:bg-transparent
              transform transition-transform duration-300
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}
              overflow-y-auto xl:overflow-visible
            `}
          >
            {/* Mobile close */}
            <div className="flex items-center justify-between p-4 border-b border-border xl:hidden">
              <span className="font-bold text-sm">Filtros</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4 xl:p-0 space-y-4">
              {/* Filter card */}
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="hidden xl:block bg-muted/60 px-4 py-3 border-b border-border">
                  <h3 className="font-bold text-sm">Filtros</h3>
                </div>

                {/* Search */}
                <div className="p-4 border-b border-border">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 bg-muted/40 px-2 py-1">
                    Pesquisar
                  </p>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Nome do produto..."
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Categories */}
                <div className="p-4">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 bg-muted/40 px-2 py-1">
                    Categorias
                  </p>
                  <div className="space-y-1">
                    {PRODUCT_CATEGORIES.map((cat) => {
                      const count = cat.id === "todos"
                        ? products.length
                        : products.filter((p) => p.category === cat.id).length
                      const isActive = category === cat.id
                      return (
                        <Link
                          key={cat.id}
                          href={`/loja/categoria/${cat.id}`}
                          onClick={() => setSidebarOpen(false)}
                          className={`flex items-center justify-between w-full rounded-lg px-3 py-2 text-sm transition-all ${
                            isActive
                              ? "bg-primary text-white font-semibold"
                              : "text-foreground hover:bg-muted hover:text-primary"
                          }`}
                        >
                          <span>{cat.label}</span>
                          <span className={`text-xs rounded-full px-1.5 py-0.5 ${isActive ? "bg-white/20 text-white" : "text-muted-foreground"}`}>
                            {count}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="rounded-xl bg-secondary p-4 text-white">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Precisa de ajuda?</p>
                <p className="text-sm font-semibold mb-3 leading-snug">Fale com o nosso equipa via WhatsApp</p>
                <a
                  href="https://wa.me/244922100548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-white text-secondary text-xs font-bold py-2.5 hover:bg-primary hover:text-white transition-all"
                >
                  Contactar Agora
                </a>
              </div>
            </div>
          </aside>

          {/* Overlay for mobile sidebar */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/40 xl:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Top bar — shopingo style */}
            <div className="rounded-xl border border-border bg-card mb-5">
              <div className="flex items-center justify-between gap-3 p-3 bg-muted/30 rounded-xl">
                <span className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">{filtered.length}</span> produto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
                  {search && (
                    <span className="ml-1">para <em>&quot;{search}&quot;</em></span>
                  )}
                </span>

                <div className="flex items-center gap-2">
                  {/* Grid toggle */}
                  <div className="hidden lg:flex items-center gap-1 border border-border rounded-lg p-1">
                    <button
                      onClick={() => setCols(3)}
                      title="3 colunas"
                      className={`h-7 w-7 rounded flex items-center justify-center transition-colors ${cols === 3 ? "bg-secondary text-white" : "hover:bg-muted"}`}
                    >
                      <LayoutGrid className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setCols(4)}
                      title="4 colunas"
                      className={`h-7 w-7 rounded flex items-center justify-center transition-colors ${cols === 4 ? "bg-secondary text-white" : "hover:bg-muted"}`}
                    >
                      <List className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Breadcrumb path */}
                  <div className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Link href="/loja" className="hover:text-primary transition-colors">Catálogo</Link>
                    <span>/</span>
                    <span className="text-foreground font-medium">{categoryName}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length > 0 ? (
              <div className={`grid gap-4 grid-cols-2 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-bold text-lg text-secondary mb-2">Nenhum produto encontrado</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tente pesquisar com outras palavras ou{" "}
                  <Link href="/loja/categoria/todos" className="text-primary hover:underline">
                    ver todos os produtos
                  </Link>
                </p>
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary transition-all"
                  >
                    Limpar pesquisa
                  </button>
                )}
              </div>
            )}

            {/* Bottom CTA */}
            {filtered.length > 0 && (
              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <Link
                  href="/loja"
                  className="rounded-full border-2 border-secondary px-6 py-2.5 text-sm font-bold text-secondary hover:bg-secondary hover:text-white transition-all whitespace-nowrap"
                >
                  ← Voltar ao Catálogo
                </Link>
                <div className="flex-1 h-px bg-border" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
