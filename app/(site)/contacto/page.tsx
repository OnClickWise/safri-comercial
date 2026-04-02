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
  return (
    <main>

      {/* HERO */}

      <PageHero
        title="Entre em Contacto"
        description="Fale com a equipa da LUFUAYELE para solicitar propostas, informações comerciais ou parcerias."
        image="/images/banner-contacto.png"
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
                  Estamos disponíveis para responder às suas questões,
                  apresentar soluções e desenvolver propostas adequadas
                  às necessidades do seu projeto ou instituição.
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
                    <p className="font-semibold text-foreground">
                      Telefone
                    </p>

                    <Link
                      href="tel:+244923019166"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      +244 923 019 166
                    </Link>

                  </div>

                </div>

                {/* WHATSAPP */}

                <div className="flex gap-4 items-start">

                  <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                    <MessageCircle size={20} />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      WhatsApp
                    </p>

                    <Link
                      href="https://wa.me/244923019166"
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
                    <p className="font-semibold text-foreground">
                      Email
                    </p>

                    <Link
                      href="mailto:contacto@lufuayele.com"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      contacto@lufuayele.com
                    </Link>

                  </div>

                </div>

                {/* ENDEREÇO */}

                <div className="flex gap-4 items-start">

                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      Endereço
                    </p>

                    <Link
                      href="https://www.google.com/maps/search/Rua+Norton+de+Matos+Cuito+Bie+Angola"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      Rua Norton de Matos <br />
                      Município do Cuito <br />
                      Província do Bié — Angola
                    </Link>

                  </div>

                </div>

              </div>

              {/* MAPA */}

              <div className="rounded-2xl overflow-hidden border border-border h-[260px]">

                <iframe
                  src="https://maps.google.com/maps?q=Rua%20Norton%20de%20Matos%20Cuito%20Bie%20Angola&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                />

              </div>

            </div>

            {/* FORMULÁRIO */}

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">

              <h3 className="text-2xl font-semibold text-foreground">
                Enviar Mensagem
              </h3>

              <p className="mt-2 text-muted-foreground">
                Preencha o formulário e a nossa equipa entrará em contacto.
              </p>

              <form className="mt-8 space-y-6">

                <Input placeholder="Nome completo" />

                <Input
                  type="email"
                  placeholder="Email"
                />

                <Input
                  placeholder="Telefone"
                />

                <Textarea
                  placeholder="Escreva a sua mensagem"
                  rows={5}
                />

                <Button
                  size="lg"
                  className="w-full"
                >
                  Enviar Mensagem
                </Button>

              </form>

              {/* ALTERNATIVA WHATSAPP */}

              <Link
                href="https://wa.me/244923019166"
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