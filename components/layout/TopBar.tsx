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
    <div className="w-full bg-secondary text-secondary-foreground border-b border-secondary/50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-2 text-sm">

          {/* ENDEREÇO + EMAIL */}
          <div className="hidden md:flex items-center gap-6 text-white/60">

            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-primary" />
              <span className="truncate text-xs tracking-wide">
                ESTRADA NACIONAL N.250, CHISSINDO
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={13} className="text-primary" />
              <a
                href="mailto:safri@safri.co.ao"
                className="text-xs hover:text-white transition-colors"
              >
                safri@safri.co.ao
              </a>
            </div>

          </div>

          {/* CONTACTOS */}
          <div className="flex items-center gap-5">

            <a
              href="tel:+244936324116"
              className="flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white transition-colors"
            >
              <Phone size={13} />
              <span>+244 936 324 116</span>
            </a>

            <a
              href="https://wa.me/244922100548"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
            >
              <MessageCircle size={13} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

          </div>

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-4">

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Linkedin size={14} />
            </Link>

            <Link
              href="https://www.instagram.com/safricomercial/"
              target="_blank"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Instagram size={14} />
            </Link>

            <Link
              href="https://www.facebook.com/share/1CYHXjwSt5/"
              target="_blank"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Facebook size={14} />
            </Link>

          </div>

        </div>

      </div>
    </div>
  )
}
