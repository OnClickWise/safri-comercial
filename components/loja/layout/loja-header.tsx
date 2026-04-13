"use client"

import { Search, User, Menu, MessageCircle } from "lucide-react"
import { useFilter } from "@/store/filter-store"
import { useRouter } from "next/navigation"

export default function LojaHeader() {
  const { setSearch } = useFilter()
  const router = useRouter()

  return (
    <header className="w-full bg-secondary text-secondary-foreground shadow-sm">

      {/* TOP */}
      <div className="container mx-auto flex items-center justify-between gap-4 py-3">

        {/* LOGO */}
        <div
          onClick={() => router.push("/loja")}
          className="flex items-center gap-2 font-bold text-lg cursor-pointer"
        >
          <div className="w-8 h-8 bg-primary rounded-full" />
          <span>Safri Comercial</span>
        </div>

        {/* SEARCH */}
        <div className="flex-1 max-w-2xl relative">
          <input
            type="text"
            placeholder="Buscar produtos industriais..."
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full pl-4 pr-12 py-2 
              rounded-full 
              bg-background 
              text-foreground 
              border border-input
              focus:ring-2 focus:ring-primary
              outline-none
            "
          />

          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-6 text-sm">

          {/* USER */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
            <User size={18} />
            <span>Entrar</span>
          </div>

          {/* COTAÇÃO */}
          <button
            onClick={() => router.push("/loja/cotacao")}
            className="
              flex items-center gap-2
              bg-primary text-primary-foreground
              px-4 py-2 rounded-full
              hover:opacity-90 transition
            "
          >
            <MessageCircle size={18} />
            <span>Orçamento</span>
          </button>

        </div>
      </div>

      {/* NAV */}
      <div className="container mx-auto flex items-center gap-6 py-2 text-sm border-t border-border">

        <div className="flex items-center gap-2 cursor-pointer font-medium">
          <Menu size={18} />
          <span>Categorias</span>
        </div>

        <span
          onClick={() => router.push("/loja")}
          className="cursor-pointer hover:text-primary"
        >
          Produtos
        </span>

        <span
          onClick={() => router.push("/loja/cotacao")}
          className="cursor-pointer hover:text-primary"
        >
          Solicitar Cotação
        </span>

        <a
          href="https://wa.me/244923019166"
          target="_blank"
          className="cursor-pointer hover:text-primary"
        >
          WhatsApp
        </a>

      </div>
    </header>
  )
}