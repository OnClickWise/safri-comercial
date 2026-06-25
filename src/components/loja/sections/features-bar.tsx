import { Truck, Award, Clock, MessageCircle } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística própria para entregas em todo o país",
    borderColor: "border-b-primary",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Produção nacional com controlo de qualidade rigoroso",
    borderColor: "border-b-[#1e3a5f]",
  },
  {
    icon: Clock,
    title: "Cotação em 24h",
    description: "Respondemos a todos os pedidos em menos de 24 horas",
    borderColor: "border-b-green-500",
  },
  {
    icon: MessageCircle,
    title: "Suporte Direto",
    description: "Equipa comercial disponível via WhatsApp e telefone",
    borderColor: "border-b-yellow-500",
  },
]

export function FeaturesBar() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className={`flex gap-4 items-start p-5 rounded-xl bg-background border-b-4 shadow-sm hover:shadow-md transition-shadow ${f.borderColor}`}
              >
                <div className="shrink-0 h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
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
