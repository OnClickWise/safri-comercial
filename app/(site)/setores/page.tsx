import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/sections/page-hero"

const services = [
  {
    title: "Comércio Geral & Distribuição Estratégica",
    description:
      "Atuamos no comércio por grosso e a retalho de bens essenciais e especializados, garantindo cadeia de fornecimento estável e diversificada.",
    items: [
      "Bens alimentares e produtos de consumo",
      "Material escolar e de escritório",
      "Produtos hospitalares e laboratoriais",
      "Materiais de construção e industriais",
      "Produtos farmacêuticos e cosméticos",
      "Derivados do petróleo, lubrificantes e gás de cozinha",
    ],
    image: "/images/comercio.png",
  },
  {
    title: "Saúde, Farmacêutica & Equipamentos",
    description:
      "Distribuição e comercialização de medicamentos, produtos hospitalares e equipamentos laboratoriais para clínicas, farmácias e instituições de saúde.",
    items: [
      "Equipamentos laboratoriais",
      "Distribuição hospitalar",
      "Fornecimento institucional",
      "Parcerias com fornecedores certificados",
    ],
    image: "/images/saude.png",
  },
  {
    title: "Construção Civil & Infraestrutura",
    description:
      "Executamos obras públicas e privadas com rigor técnico, cumprimento de prazos e conformidade regulatória.",
    items: [
      "Construção e fiscalização de obras",
      "Instalações elétricas e industriais",
      "Sistemas de segurança",
      "Climatização e ar condicionado",
      "Tratamento e purificação de água",
    ],
    image: "/images/construcao.png",
  },
  {
    title: "Indústria & Produção",
    description:
      "Desenvolvimento industrial com foco em verticalização da produção e aumento da competitividade operacional.",
    items: [
      "Indústria pesada e ligeira",
      "Panificação e pastelaria",
      "Transformação de pescado",
      "Produção agropecuária",
      "Exploração mineira e florestal",
    ],
    image: "/images/industria.png",
  },
  {
    title: "Tecnologia & Sistemas de Informação",
    description:
      "Soluções digitais e tecnológicas para automação, controlo e eficiência operacional.",
    items: [
      "Desenvolvimento de software",
      "Consultoria em TI",
      "Sistemas CCTV",
      "Controlo de acesso",
      "Telecomunicações",
    ],
    image: "/images/tecnologia.png",
  },
  {
    title: "Logística & Transporte",
    description:
      "Integração logística para suporte ao comércio e à indústria.",
    items: [
      "Transporte de mercadorias",
      "Transporte de passageiros",
      "Importação e exportação",
      "Serviços transitários",
      "Aluguer de viaturas",
    ],
    image: "/images/logistica.png",
  },
]

export default function AreasPage() {
  return (
    <main>

      {/* HERO DA PÁGINA */}

     <PageHero
      title="Nossos Serviços"
      description="A LUFUAYELE atua em múltiplos setores estratégicos oferecendo soluções completas para empresas, instituições públicas e clientes particulares."
      image="/images/banner-servicos.png"
    />


      {/* SERVIÇOS */}

      <section className="py-24">
        <div className="container mx-auto px-6 space-y-32">

          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* IMAGEM */}

              <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXTO */}

              <div>

                <h2 className="text-3xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-4 text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2">
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
                    <Button size="lg">
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

        <div className="container mx-auto px-6 max-w-3xl">

          <h2 className="text-3xl md:text-4xl font-bold">
            Precisa de uma solução para o seu projeto?
          </h2>

          <p className="mt-6 text-white/80">
            A nossa equipa está preparada para atender projetos empresariais
            e institucionais com eficiência e qualidade.
          </p>

          <Link
            href="https://wa.me/244923019166"
            target="_blank"
          >
            <Button
              size="lg"
              className="mt-10 bg-white text-primary hover:bg-white/90"
            >
              Falar pelo WhatsApp
            </Button>
          </Link>

        </div>

      </section>

    </main>
  )
}