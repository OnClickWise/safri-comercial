"use client"

import {
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
} from "lucide-react"
import Link from "next/link"

export default function TopBar() {
  return (
    <div className="w-full border-b border-border bg-muted/40 backdrop-blur supports-[backdrop-filter]:bg-muted/30">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-2 text-sm">

          {/* 📍 ENDEREÇO + EMAIL (desktop) */}
          <div className="hidden md:flex items-center gap-6 text-muted-foreground">

            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              <span className="truncate">
                ESTRADA NACIONAL N.250, CHISSINDO
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <a
                href="mailto:safri@safri.co.ao"
                className="hover:text-primary transition-colors"
              >
                safri@safri.co.ao
              </a>
            </div>

          </div>

          {/* 📞 CONTACTOS */}
          <div className="flex items-center gap-5">

            {/* Telefone */}
            <a
              href="tel:+244936324116"
              className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone size={15} />
              <span>+244 936 324 116</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/244922100548"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

          </div>

          {/* 🌐 REDES */}
          <div className="flex items-center gap-4">

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={16} />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={16} />
            </Link>

            <Link
              href="https://www.facebook.com/share/1CYHXjwSt5/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={16} />
            </Link>

          </div>

        </div>

      </div>
    </div>
  )
}