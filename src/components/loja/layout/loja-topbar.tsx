import { Truck, ShieldCheck, Headset, Award, Phone, ExternalLink } from "lucide-react"
import { CONTACTS, SOCIAL, COMPANY } from "@/lib/constants"

const items = [
  { icon: Truck, label: "Entrega para todo o país" },
  { icon: ShieldCheck, label: "Pagamento seguro" },
  { icon: Headset, label: "Atendimento especializado" },
  { icon: Award, label: `Qualidade há mais de ${COMPANY.experienceYears.replace("+", "")} anos` },
]

export function LojaTopbar() {
  return (
    <div className="hidden lg:block bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-9 text-xs font-medium">
          <div className="flex items-center gap-5">
            {items.map((item) => (
              <span key={item.label} className="flex items-center gap-1.5 text-white/90">
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACTS.phone1.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {CONTACTS.phone1}
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook SAFRI"
              className="flex items-center gap-1.5 border-l border-white/25 pl-4 text-white/90 hover:text-white transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
