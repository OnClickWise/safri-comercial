import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Camera } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { visits, getVisitBySlug } from "@/lib/visits"
import { CONTACTS, COMPANY } from "@/lib/constants"

export function generateStaticParams() {
  return visits.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const visit = getVisitBySlug(slug)
  if (!visit) return {}
  return {
    title: `${visit.title} — SAFRI Comercial, Lda.`,
    description: visit.description,
  }
}

export default async function VisitaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const visit = getVisitBySlug(slug)
  if (!visit) notFound()

  return (
    <>
      <PageHero title={visit.title} description={visit.description} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Conteúdo */}
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-8">{visit.content}</p>
              <Separator className="mb-8" />

              {/* Galeria */}
              <h3 className="font-bold text-secondary mb-4">Registo Fotográfico</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                {visit.images.map((img, i) => (
                  <div
                    key={i}
                    className={`relative rounded-xl overflow-hidden bg-secondary/10 flex items-center justify-center ${
                      i === 0 ? "col-span-2 row-span-2 h-64" : "h-36"
                    }`}
                  >
                    <Camera className="h-8 w-8 text-secondary/20" />
                    <span className="absolute bottom-2 right-2 text-xs text-white/50 font-mono bg-black/30 rounded px-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Categoria</div>
                  <Badge variant="outline" className="border-primary text-primary">{visit.category}</Badge>
                </div>
                <Separator />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Tipo</div>
                  <div className="text-sm font-medium">Visita institucional e estratégica</div>
                </div>
                <Separator />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Fotos</div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Camera className="h-4 w-4 text-primary" />
                    {visit.photoCount} fotografias
                  </div>
                </div>
                <Separator />
                <WhatsAppButton
                  message={`Olá, gostaria de agendar uma visita às instalações da SAFRI similar à visita "${visit.title}".`}
                  phone={CONTACTS.whatsappVisitsRaw}
                  label="Agendar Visita"
                  className="w-full justify-center"
                />
              </div>

              {/* Info SAFRI */}
              <div className="rounded-2xl bg-muted p-6">
                <h4 className="font-bold text-secondary mb-2">{COMPANY.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {COMPANY.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
