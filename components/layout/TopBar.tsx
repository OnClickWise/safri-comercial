"use client"

import {
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function TopBar() {
  return (
    <div
      className="
        w-full
        bg-[#0B1F3B]
        text-white
        dark:bg-[#111827]
        text-sm
      "
    >
      <div
        className="
          w-full
          px-4 md:px-8 lg:px-12
          py-2
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-2
        "
      >
        {/* 📍 ENDEREÇO (só desktop) */}
        <div className="hidden md:flex items-center gap-2 text-white/90">
          <MapPin size={15} className="text-[#C6A75E]" />
          <span>
            Av. Principal nº 123, Centro Empresarial, Cuito / Bié - Angola
          </span>
        </div>

        {/* 📞 CONTACTO (mobile first) */}
        <div className="flex items-center gap-4">

          {/* Telefone */}
          <a
            href="tel:+244941178851"
            className="
              flex items-center gap-2
              hover:text-[#C6A75E]
              transition-colors
            "
          >
            <Phone size={16} />
            <span className="font-medium">+244 941 178 851</span>
          </a>

          {/* WhatsApp — ícone aparece no mobile */}
          <a
            href="https://wa.me/244941178851"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1
              hover:text-[#C6A75E]
              transition-colors
            "
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

        </div>

        {/* 🌐 REDES SOCIAIS */}
        <div className="flex items-center gap-4">
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin
              size={18}
              className="hover:text-[#C6A75E] transition-colors"
            />
          </Link>

          <Link href="https://instagram.com" target="_blank">
            <Instagram
              size={18}
              className="hover:text-[#C6A75E] transition-colors"
            />
          </Link>

          <Link href="https://facebook.com" target="_blank">
            <Facebook
              size={18}
              className="hover:text-[#C6A75E] transition-colors"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
