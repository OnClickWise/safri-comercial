import Image from "next/image"
import { PageHero } from "@/components/sections/page-hero"

export default function EmpresaPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="SAFRI Comercial, Lda."
        description="Mais de 25 anos a executar projetos de grande escala e a impulsionar o desenvolvimento económico de Angola com soluções integradas e capacidade operacional real."
        image="/images/safri-metal.png"
      />

      <section className="w-full py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LADO ESQUERDO - IMAGENS */}
            <div className="flex flex-col gap-8">

              {/* INFRAESTRUTURA */}
              <div className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/safri-intraestrutura.jpg"
                  alt="Infraestrutura SAFRI"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-lg font-semibold">
                    Infraestrutura Operacional
                  </h3>
                  <p className="text-sm text-white/80">
                    Capacidade real para execução em larga escala
                  </p>
                </div>
              </div>

             {/* CEO */}
            <div className="relative w-full h-[480px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/safri-ceo.png"
                alt="CEO SAFRI"
                fill
                className="object-cover object-center"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* conteúdo */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold">
                  Liderança Estratégica
                </h3>
                <p className="text-sm text-white/80">
                  Gestão orientada para crescimento e resultados
                </p>
              </div>
            </div>

            </div>

            {/* LADO DIREITO - CONTEÚDO */}
            <div className="space-y-12">

              {/* QUEM SOMOS */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Uma empresa construída para executar, crescer e liderar
                </h2>

                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  A <strong>SAFRI Comercial, Lda.</strong> é uma empresa angolana com mais de
                  duas décadas de experiência, posicionada como um parceiro estratégico
                  para projetos que exigem capacidade real de execução, estrutura sólida
                  e eficiência operacional.
                </p>

                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Atuamos em sectores-chave da economia, integrando comércio, logística,
                  indústria, construção e agro-pecuária, com operações próprias que garantem
                  controlo, escala e consistência em cada entrega.
                </p>
              </div>

              {/* MISSÃO + VISÃO */}
              <div className="grid sm:grid-cols-2 gap-8">

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Missão
                  </h3>
                  <p className="text-muted-foreground">
                    Desenvolver e executar soluções integradas que impulsionem o crescimento
                    económico, garantindo eficiência, qualidade e impacto sustentável.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Visão
                  </h3>
                  <p className="text-muted-foreground">
                    Ser referência em Angola e além-fronteiras na execução de projetos
                    estruturais e serviços integrados de alta performance.
                  </p>
                </div>

              </div>

              {/* VALORES */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Princípios que orientam a nossa atuação
                </h3>

                <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
                  <li>• Integridade e transparência</li>
                  <li>• Foco em resultados</li>
                  <li>• Excelência operacional</li>
                  <li>• Inovação contínua</li>
                  <li>• Responsabilidade social</li>
                  <li>• Compromisso com o cliente</li>
                </ul>
              </div>

              {/* INFRA + PARCEIROS */}
              <div className="grid sm:grid-cols-2 gap-8">

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Infraestrutura
                  </h3>
                  <p className="text-muted-foreground">
                    Dispomos de armazéns, frota própria, unidades industriais e meios
                    técnicos que garantem execução eficiente de projetos de grande escala.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Parcerias
                  </h3>
                  <p className="text-muted-foreground">
                    Trabalhamos com entidades públicas, privadas e parceiros internacionais,
                    fortalecendo a capacidade de entrega e expansão dos nossos projetos.
                  </p>
                </div>

              </div>

              {/* BLOCO DE AUTORIDADE */}
              <div className="bg-muted/40 border border-border rounded-2xl p-6">

                <p className="text-base sm:text-lg font-medium">
                  +25 anos de experiência • Estrutura própria • Execução comprovada • Cobertura nacional
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}