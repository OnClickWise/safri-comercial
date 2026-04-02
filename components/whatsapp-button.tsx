"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phone = "244923019166"

  const message =
    "Olá, gostaria de mais informações sobre os serviços da SAFRI Comercial, Lda."

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2
                 bg-[#D7262E] hover:bg-[#B71C23]
                 text-white px-4 py-3 rounded-full shadow-lg
                 transition-all duration-300 hover:scale-105"
    >
      <MessageCircle size={22} />

      <span className="hidden md:block font-medium">
        Falar no WhatsApp
      </span>
    </a>
  )
}