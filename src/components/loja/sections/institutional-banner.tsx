import { School, Building2, Landmark, Users, MessageCircle } from "lucide-react"
import { CONTACTS } from "@/lib/constants"
import { buildWhatsAppLink } from "@/lib/utils"

const audiences = [
  { icon: School, label: "Escolas" },
  { icon: Building2, label: "Empresas" },
  { icon: Landmark, label: "Instituições Públicas" },
  { icon: Users, label: "Revendedores" },
]

export function InstitutionalBanner() {
  const whatsappLink = buildWhatsAppLink(
    "Olá, represento uma instituição e gostaria de solicitar uma cotação de produtos SAFRI.",
    CONTACTS.whatsappCommercialRaw
  )

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-[#eaf2fb] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-8 p-8 lg:p-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-secondary leading-tight mb-3">
                Soluções completas para<br />instituições de ensino
              </h2>
              <p className="text-sm text-secondary/70 mb-6 max-w-md">
                Qualidade, durabilidade e o melhor atendimento do mercado angolano.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar Cotação
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {audiences.map((a) => (
                <div
                  key={a.label}
                  className="flex flex-col items-center justify-center gap-2.5 rounded-xl bg-white p-5 text-center shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-secondary leading-tight">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
