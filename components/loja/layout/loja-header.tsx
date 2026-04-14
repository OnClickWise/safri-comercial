"use client"

import { useState } from "react"
import { Search, Menu, MessageCircle } from "lucide-react"
import { useFilter } from "@/store/filter-store"
import { useRouter } from "next/navigation"

const categories = [
  { name: "Sacos Industriais", value: "sacos" },
  { name: "Carteiras Escolares", value: "carteiras" },
  { name: "Construção", value: "construcao" },
  { name: "Ferro & Metal", value: "metal" },
  { name: "Equipamentos", value: "equipamentos" },
  { name: "Logística", value: "logistica" },
  { name: "Agro-Pecuária", value: "agro" },
]

export default function LojaHeader() {
  const { setCategory } = useFilter()
  const router = useRouter()

  const [query, setQuery] = useState("")
  const [openMenu, setOpenMenu] = useState(false)

  /* 🔍 SEARCH REAL */
  const handleSearch = () => {
    const cleaned = query.trim()

    if (!cleaned) {
      router.push("/loja")
      return
    }

    router.push(`/loja?q=${encodeURIComponent(cleaned)}`)
  }

  return (
    <header className="w-full bg-secondary text-secondary-foreground shadow-sm">

      {/* TOP */}
      <div className="container mx-auto flex items-center justify-between gap-4 py-3">

        {/* LOGO */}
        <div
          onClick={() => router.push("/loja")}
          className="flex items-center gap-2 font-bold text-lg cursor-pointer hover:opacity-80"
        >
          <div className="w-8 h-8 bg-primary rounded-full" />
          <span>Safri Comercial</span>
        </div>

        {/* SEARCH */}
        <div className="flex-1 max-w-2xl relative">

          <input
            type="text"
            placeholder="Buscar produtos, materiais ou categorias..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="
              w-full pl-5 pr-14 py-3 
              rounded-full 
              bg-background 
              text-foreground 
              border border-input
              focus:ring-2 focus:ring-primary
              outline-none
            "
          />

          {/* BOTÃO SEARCH */}
          <button
            onClick={handleSearch}
            className="
              absolute right-2 top-1/2 -translate-y-1/2
              bg-primary text-white
              w-10 h-10 rounded-full
              flex items-center justify-center
              hover:scale-105 transition
            "
          >
            <Search size={18} />
          </button>

        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 text-sm">

          {/* CONTACTO DIRETO */}
          <a
            href="https://wa.me/244922100548"
            target="_blank"
            className="hidden md:flex items-center gap-2 hover:text-primary transition"
          >
            <MessageCircle size={18} />
            <span>Falar</span>
          </a>

          {/* COTAÇÃO */}
          <button
            onClick={() => router.push("/loja/cotacao")}
            className="
              flex items-center gap-2
              bg-primary text-primary-foreground
              px-4 py-2 rounded-full
              hover:scale-105 transition
            "
          >
            <MessageCircle size={18} />
            <span>Orçamento</span>
          </button>

        </div>
      </div>

      {/* NAV */}
      <div className="container mx-auto flex items-center gap-6 py-2 text-sm border-t border-border relative">

        {/* CATEGORIAS */}
        <div
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
          className="relative"
        >
          <div className="flex items-center gap-2 cursor-pointer font-medium hover:text-primary transition">
            <Menu size={18} />
            <span>Categorias</span>
          </div>

          {/* DROPDOWN */}
          {openMenu && (
            <div className="
              absolute top-8 left-0
              bg-card border border-border
              rounded-xl shadow-lg
              p-4
              grid grid-cols-2 gap-3
              w-[320px]
              z-50
            ">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCategory(cat.value)
                    router.push(`/loja?categoria=${cat.value}`)
                    setOpenMenu(false)
                  }}
                  className="cursor-pointer text-sm hover:text-primary transition"
                >
                  {cat.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* LINKS */}
        <span
          onClick={() => router.push("/loja")}
          className="cursor-pointer hover:text-primary transition"
        >
          Produtos
        </span>

        <span
          onClick={() => router.push("/loja/cotacao")}
          className="cursor-pointer hover:text-primary transition"
        >
          Solicitar Cotação
        </span>

        <a
          href="https://wa.me/244922100548"
          target="_blank"
          className="cursor-pointer hover:text-primary transition"
        >
          WhatsApp
        </a>

      </div>
    </header>
  )
}