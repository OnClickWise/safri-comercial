import Image from "next/image"
import { PageHero } from "@/components/sections/page-hero"

export default function EmpresaPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="SAFRI Comercial, Lda."
        description="Mais de 25 anos a impulsionar o desenvolvimento económico de Angola através de soluções integradas em comércio, indústria, logística e investimento estratégico."
      />

      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* IMAGEM INSTITUCIONAL */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/safri-edificio.jpg"
                alt="Infraestrutura SAFRI"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg object-cover"
              />

              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  SAFRI Comercial, Lda.
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Estrutura sólida e presença nacional
                </p>
              </div>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="space-y-12">

            {/* QUEM SOMOS */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                Quem Somos
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A <strong>SAFRI Comercial, Lda.</strong> é uma empresa angolana com mais de 25 anos de experiência,
                atuando em múltiplos sectores estratégicos como comércio geral, transportes, indústria,
                construção, importação e agro-pecuária. A empresa destaca-se pela sua capacidade operacional,
                estrutura própria e compromisso com o desenvolvimento económico sustentável.
              </p>
            </div>

            {/* MISSÃO */}
            <div id="missao" className="scroll-mt-24">
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Missão
              </h2>

              <p className="text-slate-600 dark:text-slate-300">
                Contribuir para o desenvolvimento económico de Angola através da implementação
                de soluções eficientes, sustentáveis e inovadoras nos sectores em que atuamos.
              </p>
            </div>

            {/* VISÃO */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Visão
              </h2>

              <p className="text-slate-600 dark:text-slate-300">
                Ser uma referência nacional e internacional na prestação de serviços integrados,
                com excelência operacional e impacto significativo no crescimento económico.
              </p>
            </div>

            {/* VALORES */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Valores
              </h2>

              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li>Integridade e transparência</li>
                <li>Compromisso com resultados</li>
                <li>Excelência operacional</li>
                <li>Inovação contínua</li>
                <li>Responsabilidade social</li>
              </ul>
            </div>

            {/* DIREÇÃO */}
            <div id="direcao" className="scroll-mt-24">
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Direção & Liderança
              </h2>

              <p className="text-slate-600 dark:text-slate-300">
                A SAFRI é liderada por uma equipa experiente e orientada para resultados,
                com forte capacidade estratégica e foco na expansão sustentável dos negócios.
              </p>
            </div>

            {/* INFRAESTRUTURA */}
            <div id="infraestrutura" className="scroll-mt-24">
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Infraestrutura
              </h2>

              <p className="text-slate-600 dark:text-slate-300">
                A empresa dispõe de armazéns com grande capacidade, frota própria,
                unidades industriais e meios operacionais que garantem execução eficiente
                de projectos em larga escala.
              </p>
            </div>

            {/* PARCEIROS */}
            <div id="parceiros" className="scroll-mt-24">
              <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Parceiros
              </h2>

              <p className="text-slate-600 dark:text-slate-300">
                A SAFRI mantém parcerias estratégicas com entidades governamentais,
                empresas privadas e organizações internacionais, garantindo soluções
                confiáveis e de alto impacto.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}