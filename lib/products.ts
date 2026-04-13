// ===============================
// TYPES
// ===============================
export interface ProductVariant {
  name: string
  value: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  slug: string
  category: "sacos" | "carteiras"

  images: string[]
  description: string

  variants?: ProductVariant[]
  specs?: ProductSpec[]
}

// ===============================
// DATA (PRODUTOS REAIS)
// ===============================
export const products: Product[] = [
  // ===============================
  // SACOS INDUSTRIAIS
  // ===============================
  {
    id: "saco-rafia-25",
    name: "Saco de Ráfia 25kg",
    slug: "saco-rafia-25kg",
    category: "sacos",

    images: [
      "/products/saco1.png",
      "/products/saco2.png",
      "/products/saco3.png",
    ],

    description:
      "Saco de ráfia resistente para armazenamento e transporte de produtos agrícolas e industriais.",

    variants: [
      { name: "25kg", value: "25kg" },
      { name: "50kg", value: "50kg" },
      { name: "100kg", value: "100kg" },
    ],

    specs: [
      { label: "Material", value: "Polipropileno" },
      { label: "Uso", value: "Agrícola / Industrial" },
      { label: "Resistência", value: "Alta" },
    ],
  },

  {
    id: "saco-rafia-50",
    name: "Saco de Ráfia 50kg",
    slug: "saco-rafia-50kg",
    category: "sacos",

    images: [
      "/products/saco2.png",
      "/products/saco3.png",
    ],

    description:
      "Ideal para transporte de grãos, cimento e outros materiais pesados.",

    variants: [
      { name: "50kg", value: "50kg" },
      { name: "150kg", value: "150kg" },
    ],

    specs: [
      { label: "Material", value: "Polipropileno" },
      { label: "Durabilidade", value: "Alta" },
    ],
  },

  {
    id: "saco-laminado",
    name: "Saco Laminado",
    slug: "saco-laminado",
    category: "sacos",

    images: [
      "/products/saco3.png",
    ],

    description:
      "Saco laminado com proteção contra umidade e maior durabilidade.",

    specs: [
      { label: "Tipo", value: "Laminado" },
      { label: "Proteção", value: "Umidade" },
    ],
  },

  {
    id: "saco-personalizado",
    name: "Saco Personalizado",
    slug: "saco-personalizado",
    category: "sacos",

    images: [
      "/products/saco1.png",
    ],

    description:
      "Produção de sacos com personalização de marca e especificações do cliente.",

    specs: [
      { label: "Customização", value: "Sim" },
      { label: "Impressão", value: "Alta qualidade" },
    ],
  },

  // ===============================
  // CARTEIRAS ESCOLARES
  // ===============================
  {
    id: "carteira-dupla",
    name: "Carteira Escolar Dupla",
    slug: "carteira-escolar-dupla",
    category: "carteiras",

    images: [
      "/products/carteira1.png",
      "/products/carteira2.png",
    ],

    description:
      "Carteira escolar dupla resistente, ideal para uso em escolas públicas e privadas.",

    variants: [
      { name: "Dupla", value: "dupla" },
      { name: "Individual", value: "individual" },
    ],

    specs: [
      { label: "Material", value: "Metal + MDF" },
      { label: "Capacidade", value: "2 alunos" },
      { label: "Durabilidade", value: "Alta" },
    ],
  },

  {
    id: "carteira-universitaria",
    name: "Carteira Universitária",
    slug: "carteira-universitaria",
    category: "carteiras",

    images: [
      "/products/carteira2.png",
    ],

    description:
      "Carteira com apoio lateral para escrita, ideal para universidades.",

    specs: [
      { label: "Material", value: "Metal + Madeira" },
      { label: "Uso", value: "Universitário" },
    ],
  },

  {
    id: "carteira-infantil",
    name: "Carteira Escolar Infantil",
    slug: "carteira-escolar-infantil",
    category: "carteiras",

    images: [
      "/products/carteira1.png",
    ],

    description:
      "Modelo adaptado para crianças com ergonomia e segurança.",

    specs: [
      { label: "Faixa Etária", value: "Infantil" },
      { label: "Segurança", value: "Alta" },
    ],
  },

  {
    id: "mesa-escolar",
    name: "Mesa Escolar",
    slug: "mesa-escolar",
    category: "carteiras",

    images: [
      "/products/carteira2.png",
    ],

    description:
      "Mesa escolar resistente para salas de aula e centros de formação.",

    specs: [
      { label: "Material", value: "Madeira + Metal" },
      { label: "Uso", value: "Sala de aula" },
    ],
  },
]