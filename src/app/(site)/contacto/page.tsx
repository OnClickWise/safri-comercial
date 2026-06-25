"use client"
import { useState } from "react"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SectionTag } from "@/components/shared/section-tag"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"
import { CONTACTS } from "@/lib/constants"
import { buildWhatsAppLink } from "@/lib/utils"
import { cn } from "@/lib/utils"

export default function ContactoPage() {
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", descricao: "" })

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = () => {
    const msg = `Olá, entro em contacto pelo site:\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\n\nMensagem:\n${formData.descricao}`
    window.open(buildWhatsAppLink(msg), "_blank")
  }

  const isValid = formData.nome.trim() && formData.descricao.trim()

  return (
    <>
      <PageHero
        title="Contacto"
        description="Estamos disponíveis para responder às suas questões e apresentar as melhores soluções para o seu negócio."
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Canais */}
            <div>
              <SectionTag className="mb-4">Fale Connosco</SectionTag>
              <h2 className="text-2xl font-black text-secondary uppercase mb-3">CANAIS DE CONTACTO</h2>
              <div className="h-1 w-10 rounded-full bg-primary mb-8" />

              <div className="space-y-4 mb-8">
                {[
                  { icon: Phone, label: "Telefone", value: `${CONTACTS.phone1} / ${CONTACTS.phone2}`, href: `tel:${CONTACTS.phone1}` },
                  { icon: MessageCircle, label: "WhatsApp Comercial", value: CONTACTS.whatsappCommercial, href: `https://wa.me/${CONTACTS.whatsappCommercialRaw}` },
                  { icon: Mail, label: "Email", value: CONTACTS.email, href: `mailto:${CONTACTS.email}` },
                  { icon: MapPin, label: "Morada", value: CONTACTS.address, href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-border h-64">
                <iframe
                  src={`https://maps.google.com/maps?q=${CONTACTS.coordinates.lat},${CONTACTS.coordinates.lng}&z=15&output=embed`}
                  className="w-full h-full"
                  loading="lazy"
                  title="Localização SAFRI"
                />
              </div>
            </div>

            {/* Formulário */}
            <div>
              <SectionTag className="mb-4">Mensagem</SectionTag>
              <h2 className="text-2xl font-black text-secondary uppercase mb-3">ENVIE UMA MENSAGEM</h2>
              <div className="h-1 w-10 rounded-full bg-primary mb-8" />

              <div className="space-y-4">
                {[
                  { field: "nome" as const, label: "Nome Completo *", placeholder: "O seu nome", type: "text" },
                  { field: "email" as const, label: "Email", placeholder: "email@exemplo.com", type: "email" },
                  { field: "telefone" as const, label: "Telefone / WhatsApp", placeholder: "+244 9XX XXX XXX", type: "tel" },
                ].map(({ field, label, placeholder, type }) => (
                  <div key={field}>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      {label}
                    </label>
                    <input
                      type={type}
                      value={formData[field]}
                      onChange={handleChange(field)}
                      placeholder={placeholder}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                    Mensagem *
                  </label>
                  <textarea
                    value={formData.descricao}
                    onChange={handleChange("descricao")}
                    placeholder="Descreva o que precisa..."
                    rows={5}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleSubmit}
                    disabled={!isValid}
                    className={cn(
                      "flex-1 rounded-full py-3 text-sm font-semibold text-white transition-all",
                      isValid
                        ? "bg-primary hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25"
                        : "bg-muted-foreground/30 cursor-not-allowed"
                    )}
                  >
                    Enviar via WhatsApp
                  </button>
                  <WhatsAppButton
                    message="Olá, gostaria de entrar em contacto com a SAFRI."
                    label="WhatsApp Direto"
                    variant="outline"
                    className="flex-1 justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
