import type { Visit } from "./types"

export const visits: Visit[] = [
  {
    id: "ministerio-publico",
    slug: "ministerio-publico",
    title: "Visita do Ministério Público",
    category: "Institucional",
    description:
      "Receção de representantes do Ministério Público em visita institucional às instalações da SAFRI.",
    content:
      "Durante a visita, os representantes conheceram a infraestrutura operacional, os sectores produtivos e a capacidade logística da SAFRI. A visita reforçou a transparência e o compromisso da empresa com as instituições públicas angolanas.",
    coverImage: "/images/visitantes/ministerio-publico/cover.jpg",
    images: [
      "/images/visitantes/ministerio-publico/foto-1.jpg",
      "/images/visitantes/ministerio-publico/foto-2.jpg",
      "/images/visitantes/ministerio-publico/foto-3.jpg",
      "/images/visitantes/ministerio-publico/foto-4.jpg",
    ],
    photoCount: 4,
  },
  {
    id: "visitantes-internacionais",
    slug: "visitantes-internacionais",
    title: "Visitantes Internacionais",
    category: "Cooperação Externa",
    description:
      "Delegações e parceiros internacionais conheceram a estrutura operacional da SAFRI.",
    content:
      "A visita dos parceiros internacionais permitiu apresentar a capacidade multissetorial da SAFRI. As delegações ficaram impressionadas com a escala das operações e o potencial de cooperação bilateral.",
    coverImage: "/images/visitantes/internacionais/cover.jpg",
    images: [
      "/images/visitantes/internacionais/foto-1.jpg",
      "/images/visitantes/internacionais/foto-2.jpg",
      "/images/visitantes/internacionais/foto-3.jpg",
      "/images/visitantes/internacionais/foto-4.jpg",
    ],
    photoCount: 4,
  },
  {
    id: "entidades-publicas-privadas",
    slug: "entidades-publicas-privadas",
    title: "Entidades Públicas e Privadas",
    category: "Relações Institucionais",
    description:
      "A SAFRI recebe regularmente entidades públicas e privadas para apresentação da estrutura operacional.",
    content:
      "Estas visitas representam momentos importantes de aproximação institucional. A empresa abre as suas instalações para demonstrar capacidade, transparência e compromisso com o desenvolvimento de Angola.",
    coverImage: "/images/visitantes/entidades/cover.jpg",
    images: [
      "/images/visitantes/entidades/foto-1.jpg",
      "/images/visitantes/entidades/foto-2.jpg",
      "/images/visitantes/entidades/foto-3.jpg",
      "/images/visitantes/entidades/foto-4.jpg",
    ],
    photoCount: 4,
  },
]

export function getVisitBySlug(slug: string): Visit | undefined {
  return visits.find((v) => v.slug === slug)
}
