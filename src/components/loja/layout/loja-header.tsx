"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, MessageCircle, ShoppingCart, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/store/cart-store"
import { useFilterStore } from "@/store/filter-store"
import { PRODUCT_CATEGORIES } from "@/lib/products"
import { CONTACTS } from "@/lib/constants"
import { LojaTopbar } from "./loja-topbar"

export function LojaHeader() {
  const [searchValue, setSearchValue] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  const totalItems = useCartStore((s) => s.totalItems())
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
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      <LojaTopbar />

      {/* Main row */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/loja" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="SAFRI Comercial, Lda."
                width={280}
                height={135}
                priority
                className="h-11 md:h-14 w-auto"
              />
            </Link>

            {/* Search */}
            <div className="flex-1 hidden md:flex items-center gap-0 rounded-full overflow-hidden border border-border bg-muted/40 max-w-xl">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="O que procura hoje?"
                className="flex-1 bg-transparent px-5 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
              />
              <button
                onClick={handleSearch}
                aria-label="Pesquisar"
                className="px-4 py-2.5 bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 ml-auto">
              <a
                href={`https://wa.me/${CONTACTS.whatsappCommercialRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-secondary hover:border-primary hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <Link
                href="/loja/cotacao"
                className="relative flex items-center gap-2 rounded-full bg-secondary text-white px-4 py-2.5 text-sm font-semibold hover:bg-secondary/90 transition-colors"
              >
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden sm:inline">Cotação</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button
                className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          {mobileOpen && (
            <div className="mt-3 flex items-center gap-0 rounded-full overflow-hidden border border-border bg-muted/40 md:hidden">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="O que procura hoje?"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
              />
              <button onClick={handleSearch} className="px-4 py-2.5 bg-primary text-white">
                <Search className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Mobile categories */}
          {mobileOpen && (
            <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 md:hidden">
              {PRODUCT_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/loja/categoria/${cat.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="shrink-0 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-secondary hover:border-primary hover:text-primary transition-colors"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Category nav */}
      <nav className="hidden md:block bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 py-1">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/loja/categoria/${cat.id}`}
                className="px-3.5 py-2.5 text-sm font-medium text-secondary/80 hover:text-primary transition-colors whitespace-nowrap"
              >
                {cat.label}
              </Link>
            ))}
            <Link
              href="/loja/cotacao"
              className="ml-auto px-3.5 py-2.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
            >
              Solicitar Cotação
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
