import { Award, ShieldCheck, Truck, CreditCard, Headset } from "lucide-react"
import { COMPANY } from "@/lib/constants"

const features = [
  {
    icon: Award,
    title: `Mais de ${COMPANY.experienceYears.replace("+", "")} Anos`,
    description: "De experiência no mercado angolano",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Garantida",
    description: "Produção nacional com controlo rigoroso",
  },
  {
    icon: Truck,
    title: "Entrega em Todo o País",
    description: "Logística própria e parceiros locais",
  },
  {
    icon: CreditCard,
    title: "Pagamento Seguro",
    description: "Várias formas de pagamento disponíveis",
  },
  {
    icon: Headset,
    title: "Atendimento Especializado",
    description: "Suporte dedicado a escolas e empresas",
  },
]

export function FeaturesBar() {
  return (
    <section className="py-14 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-secondary">
            Porque Escolher a <span className="text-primary">SAFRI</span>?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-background border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">{f.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{f.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
