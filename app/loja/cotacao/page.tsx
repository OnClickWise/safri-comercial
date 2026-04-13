"use client"

import { useQuote } from "@/store/cart-store"
import QuoteItem from "@/components/loja/quote/quote-item"

export default function CotacaoPage() {
  const { items, clearQuote } = useQuote()

  const phone = "244923019166"

  const generateMessage = () => {
    if (items.length === 0) {
      return "Olá, gostaria de solicitar uma cotação."
    }

    const list = items
      .map(
        (item) =>
          `• ${item.name} ${item.variant ? `(${item.variant})` : ""} x${item.quantity}`
      )
      .join("\n")

    return `Olá, gostaria de solicitar uma cotação:\n\n${list}`
  }

  const handleSend = () => {
    const message = generateMessage()

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <div className="container py-10 max-w-3xl">

      <h1 className="text-2xl font-bold mb-6">
        Pedido de Cotação
      </h1>

      {/* LISTA */}
      {items.length === 0 ? (
        <div className="text-center text-muted-foreground py-10">
          Nenhum produto adicionado.
        </div>
      ) : (
        <div className="bg-card border rounded-xl p-6 space-y-4">
          {items.map((item) => (
            <QuoteItem key={`${item.id}-${item.variant}`} item={item} />
          ))}
        </div>
      )}

      {/* ACTIONS */}
      {items.length > 0 && (
        <div className="mt-6 flex flex-col md:flex-row gap-4">

          <button
            onClick={clearQuote}
            className="flex-1 border border-border py-3 rounded-lg"
          >
            Limpar lista
          </button>

          <button
            onClick={handleSend}
            className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg"
          >
            Enviar para WhatsApp
          </button>

        </div>
      )}

    </div>
  )
}