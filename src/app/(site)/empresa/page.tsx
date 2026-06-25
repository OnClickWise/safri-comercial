import type { Metadata } from "next"
import { Target, Eye, Star, CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { SectionTag } from "@/components/shared/section-tag"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"
import { COMPANY, MISSION_VISION_VALUES, CONTACTS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Empresa — SAFRI Comercial, Lda.",
  description: "Conheça a história, missão, visão e valores da SAFRI Comercial, Lda.",
}

export default function EmpresaPage() {
  return (
    <>
      <PageHero
        title="A Nossa Empresa"
        description="Mais de 25 anos de excelência no mercado angolano. Conheça a nossa história, valores e estrutura."
      />

      {/* Quem Somos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTag className="mb-4">Quem Somos</SectionTag>
              <h2 className="text-3xl md:text-4xl font-black text-secondary uppercase mb-4">
                SOCIEDADE AFRICANA DE DESENVOLVIMENTO COMERCIAL
              </h2>
              <div className="h-1 w-12 rounded-full bg-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                A SAFRI Comercial, Lda. é uma empresa angolana com sede na Província do Bié, actuando em múltiplos sectores da economia nacional há mais de 25 anos. Com filiais em Huambo e Luanda, trabalhamos em mercados diferenciados que nos permitem versatilidade e capacidade de definir soluções adequadas a cada necessidade produtiva.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                O nosso compromisso é sermos parceiros certos na reconstrução e desenvolvimento do País, criando constantemente novos postos de trabalho qualificado e contribuindo para o crescimento sustentável de Angola.
              </p>
              <WhatsAppButton message="Olá, gostaria de saber mais sobre a SAFRI Comercial." />
            </div>
            <div className="relative h-80 rounded-2xl bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-black text-secondary/20">SAFRI</div>
                <div className="text-secondary/30 text-sm mt-2">Empresa — Kuito, Bié</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section id="missao" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <SectionTag className="mb-3">Identidade Corporativa</SectionTag>
            <h2 className="text-3xl md:text-4xl font-black text-secondary uppercase mt-2">
              MISSÃO, VISÃO E VALORES
            </h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white mb-5">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">Missão</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{MISSION_VISION_VALUES.mission}</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white mb-5">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">Visão</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{MISSION_VISION_VALUES.vision}</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 text-white mb-5">
                <Star className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">Valores</h3>
              <ul className="space-y-2">
                {MISSION_VISION_VALUES.values.map((v) => (
                  <li key={v} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section id="direcao" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <SectionTag className="mb-3">Liderança</SectionTag>
            <h2 className="text-3xl font-black text-secondary uppercase mt-2">DIREÇÃO</h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="relative h-80 rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-black text-secondary/20">CEO</div>
                <div className="text-secondary/30 text-sm mt-2">Gonçalves Cassoma</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-secondary/80 px-4 py-3 text-center">
                <div className="text-white text-xs font-bold uppercase tracking-wide">CEO — SAFRI COMERCIAL, LDA.</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-secondary mb-1">{COMPANY.ceo}</h3>
              <p className="text-primary text-sm font-semibold mb-6">CEO — SAFRI Comercial, Lda.</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Há 25 anos, quando decidimos lançar a empresa, a incerteza e o medo nos apoquentaram — típico de quem sai da zona de conforto para enfrentar novos desafios. Mas certos das nossas convicções, superámos os constrangimentos e entregámo-nos de corpo e alma ao objectivo de criar uma empresa sustentável.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Com uma equipe comprometida, passámos por todas as fases — a guerra, as crises económicas, a falta de quadros. Isso tornou-nos autodidatas na busca permanente do conhecimento para que o barco não afundasse.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-sm">
                "Carreiras e projectos bem-sucedidos dependem do equilíbrio entre o que se faz e o que se gosta de fazer."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section id="infraestrutura" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <SectionTag className="mb-3 text-white/60 before:bg-white/60">Capacidade</SectionTag>
            <h2 className="text-3xl font-black text-white uppercase mt-2">INFRAESTRUTURA</h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "6", label: "Estabelecimentos Comerciais" },
              { value: "+10k m²", label: "Capacidade de Armazenamento" },
              { value: "3", label: "Unidades Industriais" },
              { value: "1.300 ha", label: "Fazenda Agrícola" },
            ].map((item) => (
              <div key={item.label} className="text-center rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-3xl font-black text-primary mb-2">{item.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
