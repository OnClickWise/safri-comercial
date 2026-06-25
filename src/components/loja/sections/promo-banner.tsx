import Image from "next/image"
import Link from "next/link"
import { MessageCircle, CheckCircle } from "lucide-react"
import { CONTACTS } from "@/lib/constants"
import { buildWhatsAppLink } from "@/lib/utils"

const highlights = [
  "Mobiliário escolar 100% produzido em Angola",
  "Camas hospitalares e beliches militares",
  "Cadernos e material de papelaria",
  "Capacidade de produção em grande escala",
  "Projecto de sacos de ráfia em curso",
]

export function PromoBanner() {
  const whatsappLink = buildWhatsAppLink(
    "Olá, tenho interesse nos produtos SAFRI-METAL. Pode enviar mais informações?",
    CONTACTS.whatsappCommercialRaw
  )

  return (
    <section className="py-14 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-lg grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 lg:h-auto min-h-[320px] bg-secondary">
            <Image
              src="/images/loja/extra-images/promo-large.webp"
              alt="SAFRI-METAL — Produção Nacional"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-secondary/40" />
            <div className="absolute bottom-6 left-6">
              <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5">
                Produção Nacional
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">SAFRI-METAL, Kuito</span>
            <h2 className="text-2xl md:text-3xl font-black text-secondary mb-4 leading-tight">
              Produção Nacional<br />de Alta Qualidade
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              A SAFRI-METAL é a unidade industrial da SAFRI, com fábrica sediada em Kuito (Bié). Produzimos mobiliário escolar, camas hospitalares e material de papelaria para Angola e África.
            </p>

            <ul className="space-y-2.5 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/25"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar pelo WhatsApp
              </a>
              <Link
                href="/loja/categoria/carteiras"
                className="inline-flex items-center gap-2 rounded-full border-2 border-secondary text-secondary px-6 py-3 text-sm font-bold hover:bg-secondary hover:text-white transition-all"
              >
                Ver Produtos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
