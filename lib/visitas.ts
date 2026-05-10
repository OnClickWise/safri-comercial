import { Building2, Globe2, Landmark } from "lucide-react"

export const visits = [
  {
    slug: "ministerio-publico",
    title: "Visita do Ministério Público",
    category: "Institucional",
    icon: Landmark,
    cover: "/images/visitas/ministerio-publico/cover.jpg",

    description:
      "Receção de representantes do Ministério Público em visita institucional às instalações da SAFRI.",

    content:
      "Durante a visita, os representantes conheceram a infraestrutura operacional, os sectores produtivos e a capacidade logística da SAFRI.",

    photos: [
      "/images/visitas/ministerio-publico/1.jpg",
      "/images/visitas/ministerio-publico/2.jpg",
      "/images/visitas/ministerio-publico/3.jpg",
      "/images/visitas/ministerio-publico/4.jpg",
    ],
  },

  {
    slug: "visitantes-internacionais",
    title: "Visitantes Internacionais",
    category: "Cooperação Externa",
    icon: Globe2,
    cover: "/images/visitas/visitantes-internacionais/cover.jpg",

    description:
      "Delegações e parceiros internacionais conheceram a estrutura operacional da SAFRI.",

    content:
      "A visita dos parceiros internacionais permitiu apresentar a capacidade multissetorial da SAFRI.",

    photos: [
      "/images/visitas/visitantes-internacionais/1.jpg",
      "/images/visitas/visitantes-internacionais/2.jpg",
      "/images/visitas/visitantes-internacionais/3.jpg",
      "/images/visitas/visitantes-internacionais/4.jpg",
    ],
  },

  {
    slug: "entidades-publicas-privadas",
    title: "Entidades Públicas e Privadas",
    category: "Relações Institucionais",
    icon: Building2,
    cover: "/images/visitas/entidades/cover.jpg",

    description:
      "A SAFRI recebe regularmente entidades públicas e privadas.",

    content:
      "Estas visitas representam momentos importantes de aproximação institucional.",

    photos: [
      "/images/visitas/entidades/1.jpg",
      "/images/visitas/entidades/2.jpg",
      "/images/visitas/entidades/3.jpg",
      "/images/visitas/entidades/4.jpg",
    ],
  },

  {
    slug: "ministerio-publico",
    title: "Visita do Ministério Público",
    category: "Institucional",
    icon: Landmark,
    cover: "/images/visitas/ministerio-publico/cover.jpg",

    description:
      "Receção de representantes do Ministério Público em visita institucional às instalações da SAFRI.",

    content:
      "Durante a visita, os representantes conheceram a infraestrutura operacional, os sectores produtivos e a capacidade logística da SAFRI.",

    photos: [
      "/images/visitas/ministerio-publico/1.jpg",
      "/images/visitas/ministerio-publico/2.jpg",
      "/images/visitas/ministerio-publico/3.jpg",
      "/images/visitas/ministerio-publico/4.jpg",
    ],
  },

  {
    slug: "visitantes-internacionais",
    title: "Visitantes Internacionais",
    category: "Cooperação Externa",
    icon: Globe2,
    cover: "/images/visitas/visitantes-internacionais/cover.jpg",

    description:
      "Delegações e parceiros internacionais conheceram a estrutura operacional da SAFRI.",

    content:
      "A visita dos parceiros internacionais permitiu apresentar a capacidade multissetorial da SAFRI.",

    photos: [
      "/images/visitas/visitantes-internacionais/1.jpg",
      "/images/visitas/visitantes-internacionais/2.jpg",
      "/images/visitas/visitantes-internacionais/3.jpg",
      "/images/visitas/visitantes-internacionais/4.jpg",
    ],
  },

  {
    slug: "entidades-publicas-privadas",
    title: "Entidades Públicas e Privadas",
    category: "Relações Institucionais",
    icon: Building2,
    cover: "/images/visitas/entidades/cover.jpg",

    description:
      "A SAFRI recebe regularmente entidades públicas e privadas.",

    content:
      "Estas visitas representam momentos importantes de aproximação institucional.",

    photos: [
      "/images/visitas/entidades/1.jpg",
      "/images/visitas/entidades/2.jpg",
      "/images/visitas/entidades/3.jpg",
      "/images/visitas/entidades/4.jpg",
    ],
  },
]

export function getVisitBySlug(slug: string) {
  return visits.find((visit) => visit.slug === slug)
}