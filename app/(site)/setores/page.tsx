"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/sections/page-hero"

const services = [
  {
    title: "Comércio Geral",
    description:
      "Base histórica da SAFRI, com forte presença nas províncias do Bié e Huambo, garantindo abastecimento contínuo e resposta eficiente ao mercado.",
    items: [
      "Rede com 6 estabelecimentos comerciais e armazéns",
      "Presença no Kuito, Andulo, Chinguar, Camacupa e Huambo",
      "Venda de bens alimentares, industriais e mobiliário",
      "Capacidade de armazenamento superior a 10.000m²",
      "Participação em programas governamentais (Comércio Rural Permanente)",
    ],
    image: "/images/services/comercio.jpg",
  },
  {
    title: "Transportes & Logística",
    description:
      "Pilar estratégico da operação, garantindo autonomia logística e capacidade de resposta em larga escala.",
    items: [
      "Camiões de 30 toneladas para carga pesada e granel",
      "Transporte contentorizado e porta-máquinas",
      "Camiões basculantes para obras",
      "Frota de apoio operacional e logística",
      "Autocarros para transporte e turismo",
    ],
    image: "/images/services/logistica.jpg",
  },
  {
    title: "Indústria (SAFRI METAL)",
    description:
      "Aposta estratégica na industrialização nacional com produção própria e impacto direto no desenvolvimento local.",
    items: [
      "Fábrica de mobiliário metálico no Kuito",
      "Produção de carteiras escolares e camas hospitalares",
      "Fabricação de beliches militares e civis",
      "Fábrica de cadernos e material de papelaria",
      "Projeto em curso de fábrica de sacos de ráfia",
    ],
    image: "/images/services/industria.jpg",
  },
  {
    title: "Hotelaria & Turismo",
    description:
      "Diversificação estratégica com investimento em turismo e desenvolvimento regional.",
    items: [
      "Centro Turístico da Chicava",
      "Bungalows e áreas de lazer",
      "Discoteca e espaços recreativos",
      "Projeto turístico único na região do Bié",
    ],
    image: "/images/services/turismo.jpg",
  },
  {
    title: "Importação & Comércio Internacional",
    description:
      "Rede global de fornecimento garantindo disponibilidade de produtos e equipamentos estratégicos.",
    items: [
      "Importação da Europa, Ásia e África",
      "Fornecimento para projetos públicos e privados",
      "Logística internacional estruturada",
      "Linhas aéreas expeditas (entregas rápidas)",
      "Capacidade de entrega em menos de 10 dias",
    ],
    image: "/images/services/importacao.jpg",
  },
  {
    title: "Projetos Educacionais",
    description:
      "Investimento estratégico na educação e formação superior em Angola.",
    items: [
      "Instituto Superior Politécnico Ndunduma",
      "Capacidade para mais de 3.600 estudantes",
      "Infraestrutura com mais de 4.900m²",
      "Laboratórios, anfiteatro e blocos académicos",
      "Formação técnica e científica local",
    ],
    image: "/images/services/educacao.jpg",
  },
  {
    title: "Agro-Pecuária",
    description:
      "Aposta no agronegócio como motor de crescimento sustentável e produção nacional.",
    items: [
      "Fazenda com mais de 1.300 hectares",
      "Produção agrícola e pecuária integrada",
      "Projetos de piscicultura, avicultura e suinicultura",
      "Centro de investigação agrícola",
      "Integração com ensino superior (agronomia)",
    ],
    image: "/images/services/agro.jpg",
  },
]

export default function AreasPage() {
  return (
    <main>

      {/* HERO */}
      <PageHero
        title="Áreas de Atuação"
        description="A SAFRI atua em múltiplos sectores estratégicos da economia angolana, com estrutura própria, capacidade operacional e execução comprovada em projetos de grande escala."
        image="/images/safri-metal.png"
      />

      {/* INTRO INSTITUCIONAL */}
      <section className="py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ao longo da sua trajetória, a SAFRI diversificou as suas operações,
            explorando oportunidades estratégicas no mercado angolano e
            desenvolvendo negócios que contribuem diretamente para o crescimento
            do sector empresarial, criação de emprego qualificado e desenvolvimento sustentável.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-28">

          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* IMAGEM */}
              <div className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXTO */}
              <div>

                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  {service.title}
                </h2>

                <p className="mt-4 text-lg text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="https://wa.me/244923019166"
                    target="_blank"
                  >
                    <Button size="lg" className="px-8">
                      Solicitar Informações
                    </Button>
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-primary text-white text-center">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Precisa de capacidade real para executar o seu projeto?
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            A SAFRI está preparada para responder com soluções integradas,
            estrutura própria e experiência comprovada em operações de grande escala.
          </p>

          <Link
            href="https://wa.me/244923019166"
            target="_blank"
          >
            <Button
              size="lg"
              className="mt-10 bg-white text-primary hover:bg-white/90 px-10 py-6"
            >
              Falar com Especialista
            </Button>
          </Link>

        </div>

      </section>

    </main>
  )
}