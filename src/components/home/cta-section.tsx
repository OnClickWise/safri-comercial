import Link from "next/link"
import { MessageCircle, ArrowRight } from "lucide-react"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"
import { SECTORS, HERO_STATS } from "@/lib/constants"

export function CtaSection() {
  return (
    <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden>
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
          <span className="block h-px w-6 bg-primary" />
          Trabalhe Connosco
          <span className="block h-px w-6 bg-primary" />
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
          PRECISA DE UM PARCEIRO<br />DE NEGÓCIOS EM ANGOLA?
        </h2>
        <div className="mx-auto h-1 w-12 rounded-full bg-primary mb-5" />
        <p className="mx-auto max-w-xl text-white/60 mb-8">
          A SAFRI oferece soluções comerciais, industriais e de serviços para o mercado angolano. Entre em contacto e descubra como podemos crescer juntos.
        </p>

        {/* Sector chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SECTORS.map((s) => (
            <span key={s.id} className="px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-medium">
              {s.title}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {HERO_STATS.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-primary">{stat.value}</div>
              <div className="text-xs text-white/50 uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton
            message="Olá, gostaria de solicitar uma proposta comercial da SAFRI."
            label="Falar pelo WhatsApp"
            className="shadow-xl"
          />
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-primary hover:text-primary transition-all"
          >
            Formulário de Contacto <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
