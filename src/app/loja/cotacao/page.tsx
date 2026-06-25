"use client"
import Link from "next/link"
import { ShoppingCart, Trash2, Plus, Minus, MessageCircle, ArrowLeft } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { buildMultiQuoteMessage, buildWhatsAppLink } from "@/lib/utils"
import { CONTACTS } from "@/lib/constants"

export default function CotacaoPage() {
  const { items, removeItem, updateQuantity, clearQuote, totalItems } = useCartStore()

  const total = totalItems()

  const handleSendWhatsApp = () => {
    const msg = buildMultiQuoteMessage(items)
    window.open(buildWhatsAppLink(msg, CONTACTS.whatsappCommercialRaw), "_blank")
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mx-auto mb-4">
          <ShoppingCart className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-black text-secondary mb-2">Lista de Cotação Vazia</h2>
        <p className="text-muted-foreground mb-6">Adicione produtos à lista para solicitar cotação.</p>
        <Link
          href="/loja"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao Catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-secondary">Pedido de Cotação</h1>
          <p className="text-sm text-muted-foreground">{total} {total === 1 ? "item" : "itens"} na lista</p>
        </div>
        <Link href="/loja" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Continuar a comprar
        </Link>
      </div>

      <div className="space-y-3 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
            <div className="flex-1">
              <div className="font-medium text-foreground">{item.name}</div>
              {item.variant && (
                <div className="text-xs text-muted-foreground mt-0.5">{item.variant}</div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                aria-label="Diminuir quantidade"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Minus className="h-3 w-3" />
              </button>
              <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                aria-label="Aumentar quantidade"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              aria-label="Remover item"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={handleSendWhatsApp}
          className="flex items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-bold text-white hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25"
        >
          <MessageCircle className="h-4 w-4" />
          Enviar Pedido por WhatsApp
        </button>
        <button
          onClick={clearQuote}
          className="rounded-full border-2 border-border py-3 text-sm font-semibold text-muted-foreground hover:border-red-300 hover:text-red-500 transition-all"
        >
          Limpar lista
        </button>
      </div>
    </div>
  )
}
