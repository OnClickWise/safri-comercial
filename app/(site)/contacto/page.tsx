import { PageHero } from "@/components/sections/page-hero"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react"

import Link from "next/link"

export default function ContactoPage() {

  const phone = "+244248200287"
  const whatsapp = "244923315321"
  const email = "safri@safri.co.ao"

  return (
    <main>

      {/* HERO */}

      <PageHero
        title="Entre em Contacto"
        description="Fale com a equipa da SAFRI para solicitar propostas, informações comerciais ou estabelecer parcerias estratégicas."
        image="/images/safri-metal.png"
      />

      {/* CONTACTO */}

      <section className="py-24">
        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* COLUNA ESQUERDA */}

            <div className="space-y-10">

              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Fale Connosco
                </h2>

                <p className="mt-4 text-muted-foreground">
                  A nossa equipa está disponível para compreender as necessidades
                  do seu projecto e apresentar soluções eficientes, com capacidade
                  real de execução em larga escala.
                </p>
              </div>

              {/* CONTACTOS */}

              <div className="space-y-6">

                {/* TELEFONE */}

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>

                    <Link
                      href={`tel:${phone}`}
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      +244 248 200 287
                    </Link>
                  </div>
                </div>

                {/* WHATSAPP */}

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                    <MessageCircle size={20} />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>

                    <Link
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      className="text-primary hover:underline"
                    >
                      Conversar no WhatsApp
                    </Link>
                  </div>
                </div>

                {/* EMAIL */}

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Email</p>

                    <Link
                      href={`mailto:${email}`}
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      safri@safri.co.ao
                    </Link>
                  </div>
                </div>

                {/* ENDEREÇO */}

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Endereço</p>

                    <Link
                      href="https://www.google.com/maps/place/SAFRI+COMERCIAL,+LDA/@-12.4262728,16.9272131"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      Estrada Nacional N.250, Chissindo <br />
                      Cuito (Kuito) – Bié, Angola
                    </Link>
                  </div>
                </div>

              </div>

              {/* MAPA REAL (GOOGLE) */}

              <div className="rounded-2xl overflow-hidden border border-border h-[300px]">

                <iframe
                  src="https://maps.google.com/maps?q=-12.4262728,16.9272131&z=15&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                />

              </div>

            </div>

            {/* FORMULÁRIO */}

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">

              <h3 className="text-2xl font-semibold text-foreground">
                Solicitar Contacto
              </h3>

              <p className="mt-2 text-muted-foreground">
                Preencha o formulário e entraremos em contacto rapidamente.
              </p>

              <form className="mt-8 space-y-6">

                <Input placeholder="Nome completo" />

                <Input type="email" placeholder="Email" />

                <Input placeholder="Telefone" />

                <Textarea
                  placeholder="Descreva o seu projecto ou necessidade"
                  rows={5}
                />

                <Button size="lg" className="w-full">
                  Enviar Mensagem
                </Button>

              </form>

              {/* WHATSAPP CTA */}

              <Link
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                className="block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full mt-4"
                >
                  Falar pelo WhatsApp
                </Button>
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}