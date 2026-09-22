import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Lightbulb, LineChart, ShieldCheck } from "lucide-react"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"

const checklist = [
  { icon: Lightbulb, label: "Soluções" },
  { icon: LineChart, label: "Resultados Comprovados" },
  { icon: ShieldCheck, label: "Um Angola Mais Forte" },
]

export function CtaSection() {
  return (
    <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/galeria10.jpg"
          alt="Equipa SAFRI"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <span className="block h-px w-6 bg-primary" />
              Trabalhe Connosco
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
              PRECISA DE UM PARCEIRO<br />DE NEGÓCIOS EM ANGOLA?
            </h2>
            <p className="max-w-xl text-white/70 mb-8">
              A SAFRI oferece soluções comerciais, industriais e de serviços para o mercado angolano. Entre em contacto e descubra como podemos crescer juntos.
            </p>

            <div className="flex flex-wrap items-center gap-4">
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

          <div className="space-y-3">
            {checklist.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-5 py-4">
                <item.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-semibold text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
