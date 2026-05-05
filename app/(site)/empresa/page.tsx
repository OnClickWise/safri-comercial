import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";

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
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* LADO ESQUERDO - IMAGENS */}
            <div className="flex flex-col gap-8">
              {/* INFRAESTRUTURA */}
              <div className="relative h-[320px] w-full overflow-hidden rounded-3xl shadow-xl sm:h-[420px]">
                <Image
                  src="/images/safri-intraestrutura.jpg"
                  alt="Infraestrutura SAFRI"
                  fill
                  className="object-cover object-center"
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
<div
  className="
    relative
    flex
    h-[520px]                 /* 🔥 maior */
    w-full
    items-end
    justify-center
    overflow-hidden
    rounded-3xl
    bg-gradient-to-b
    from-muted/40
    to-muted
    shadow-xl
    sm:h-[560px]
    lg:h-[540px]
  "
>
  <Image
    src="/images/safri-ceo.png"
    alt="CEO SAFRI"
    fill
    className="
      object-contain
      object-bottom
      px-4              /* 🔥 menos lateral */
      pt-4              /* 🔥 menos topo */
      -mb-4             /* 🔥 puxa pra baixo (efeito premium) */
      scale-110         /* 🔥 aumenta presença */
    "
  />

  {/* overlay */}
  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

  {/* conteúdo */}
  <div className="absolute bottom-6 left-6 right-6 text-white">
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
                <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
                  Uma empresa construída para executar, crescer e liderar
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  A <strong>SAFRI Comercial, Lda.</strong> é uma empresa angolana
                  com mais de duas décadas de experiência, posicionada como um
                  parceiro estratégico para projetos que exigem capacidade real de
                  execução, estrutura sólida e eficiência operacional.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Atuamos em sectores-chave da economia, integrando comércio,
                  logística, indústria, construção e agro-pecuária, com operações
                  próprias que garantem controlo, escala e consistência em cada
                  entrega.
                </p>
              </div>

              {/* MISSÃO + VISÃO */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Missão</h3>
                  <p className="text-muted-foreground">
                    Desenvolver e executar soluções integradas que impulsionem o
                    crescimento económico, garantindo eficiência, qualidade e impacto
                    sustentável.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser referência em Angola e além-fronteiras na execução de projetos
                    estruturais e serviços integrados de alta performance.
                  </p>
                </div>
              </div>

              {/* VALORES */}
              <div>
                <h3 className="mb-4 text-xl font-semibold">
                  Princípios que orientam a nossa atuação
                </h3>

                <ul className="grid gap-3 text-muted-foreground sm:grid-cols-2">
                  <li>• Integridade e transparência</li>
                  <li>• Foco em resultados</li>
                  <li>• Excelência operacional</li>
                  <li>• Inovação contínua</li>
                  <li>• Responsabilidade social</li>
                  <li>• Compromisso com o cliente</li>
                </ul>
              </div>

              {/* INFRA + PARCEIROS */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Infraestrutura</h3>
                  <p className="text-muted-foreground">
                    Dispomos de armazéns, frota própria, unidades industriais e meios
                    técnicos que garantem execução eficiente de projetos de grande
                    escala.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">Parcerias</h3>
                  <p className="text-muted-foreground">
                    Trabalhamos com entidades públicas, privadas e parceiros
                    internacionais, fortalecendo a capacidade de entrega e expansão dos
                    nossos projetos.
                  </p>
                </div>
              </div>

              {/* BLOCO DE AUTORIDADE */}
              <div className="rounded-2xl border border-border bg-muted/40 p-6">
                <p className="text-base font-medium sm:text-lg">
                  +25 anos de experiência • Estrutura própria • Execução comprovada •
                  Cobertura nacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}