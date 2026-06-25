"use client"
import { useState } from "react"
import Link from "next/link"
import { Search, MessageCircle, ShoppingCart, ChevronDown, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/store/cart-store"
import { useFilterStore } from "@/store/filter-store"
import { PRODUCT_CATEGORIES } from "@/lib/products"
import { CONTACTS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function LojaHeader() {
  const [searchValue, setSearchValue] = useState("")
  const [catOpen, setCatOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  const totalItems = useCartStore((s) => s.totalItems())
  const setCategory = useFilterStore((s) => s.setCategory)
  const setSearch = useFilterStore((s) => s.setSearch)

  const handleSearch = () => {
    if (searchValue.trim()) {
      setSearch(searchValue.trim())
      router.push("/loja")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch()
  }

  return (
    <header className="sticky top-0 z-50 bg-secondary text-white shadow-lg">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <Link href="/loja" className="flex flex-col leading-none shrink-0">
            <span className="text-xl font-black tracking-tight">
              <span className="text-primary">S</span>AFRI
            </span>
            <span className="text-[9px] text-white/50 uppercase tracking-widest">Catálogo</span>
          </Link>

          {/* Search */}
          <div className="flex-1 hidden md:flex items-center gap-0 rounded-full overflow-hidden border border-white/20 bg-white/10">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pesquisar produtos..."
              className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              aria-label="Pesquisar"
              className="px-4 py-2.5 bg-primary hover:bg-primary/90 transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <a
              href={`https://wa.me/${CONTACTS.whatsappCommercialRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <Link
              href="/loja/cotacao"
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              aria-label="Orçamento"
            >
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        {mobileOpen && (
          <div className="mt-3 flex items-center gap-0 rounded-full overflow-hidden border border-white/20 bg-white/10 md:hidden">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pesquisar..."
              className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none"
            />
            <button onClick={handleSearch} className="px-4 py-2.5 bg-primary">
              <Search className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div className="border-t border-white/10 bg-secondary/80 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-1.5">
            {/* Categories dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCatOpen(true)}
              onMouseLeave={() => setCatOpen(false)}
            >
              <button className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition-colors">
                <Menu className="h-4 w-4" />
                Categorias
                <ChevronDown className="h-3 w-3 opacity-60" />
              </button>
              {catOpen && (
                <div className="absolute top-full left-0 pt-1 z-50 min-w-[200px]">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setCategory(cat.id); setCatOpen(false); router.push("/loja") }}
                        className="block w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/loja" className="px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors text-white/80">
              Produtos
            </Link>
            <Link href="/loja/cotacao" className="px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors text-white/80">
              Solicitar Cotação
            </Link>
            <div className="ml-auto">
              <Link href="/" className="text-xs text-white/50 hover:text-white transition-colors">
                ← Site Institucional
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
