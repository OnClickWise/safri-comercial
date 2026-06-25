import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "sacos-normais-laminados",
    name: "Sacos Normais e Laminados",
    slug: "sacos-normais-laminados",
    category: "sacos",
    images: ["/images/products/sacos/saco-normal-1.jpg", "/images/products/sacos/saco-normal-2.jpg"],
    description:
      "Sacos de polipropileno para uso industrial e comercial, disponíveis em múltiplas capacidades. Alta resistência e durabilidade para transporte e armazenamento de grãos, fertilizantes e produtos industriais.",
    variants: [
      { name: "Capacidade", value: "10kg" },
      { name: "Capacidade", value: "25kg" },
      { name: "Capacidade", value: "50kg" },
      { name: "Capacidade", value: "150kg" },
    ],
    specs: [
      { label: "Material", value: "Polipropileno" },
      { label: "Uso", value: "Industrial e Comercial" },
      { label: "Resistência", value: "Alta" },
    ],
  },
  {
    id: "saco-rafia-reforcado",
    name: "Sacos Ráfia Reforçado",
    slug: "saco-rafia-reforcado",
    category: "sacos",
    images: ["/images/products/sacos/saco-rafia-1.jpg"],
    description:
      "Sacos de ráfia reforçada para aplicações agrícolas e comerciais. Alta durabilidade e resistência ao desgaste, ideais para armazenamento de produtos agrícolas.",
    variants: [
      { name: "Capacidade", value: "10kg" },
      { name: "Capacidade", value: "25kg" },
      { name: "Capacidade", value: "50kg" },
      { name: "Capacidade", value: "150kg" },
    ],
    specs: [
      { label: "Material", value: "Ráfia" },
      { label: "Durabilidade", value: "Alta" },
      { label: "Aplicação", value: "Agrícola e Comercial" },
    ],
  },
  {
    id: "saco-laminado",
    name: "Sacos Laminados",
    slug: "saco-laminado",
    category: "sacos",
    images: ["/images/products/sacos/saco-laminado-1.jpg"],
    description:
      "Sacos laminados com proteção contra humidade, acabamento reforçado. Ideais para produtos que necessitam de proteção adicional durante o transporte e armazenamento.",
    variants: [
      { name: "Capacidade", value: "10kg" },
      { name: "Capacidade", value: "25kg" },
      { name: "Capacidade", value: "50kg" },
      { name: "Capacidade", value: "150kg" },
    ],
    specs: [
      { label: "Tipo", value: "Laminado" },
      { label: "Proteção", value: "Contra humidade" },
      { label: "Acabamento", value: "Reforçado" },
    ],
  },
  {
    id: "saco-personalizado",
    name: "Sacos Personalizados",
    slug: "saco-personalizado",
    category: "sacos",
    images: ["/images/products/sacos/saco-personalizado-1.jpg"],
    description:
      "Sacos personalizados com impressão de alta qualidade para uso comercial e industrial. Ideal para empresas que necessitam de embalagem com identidade visual própria.",
    variants: [
      { name: "Capacidade", value: "10kg" },
      { name: "Capacidade", value: "25kg" },
      { name: "Capacidade", value: "50kg" },
      { name: "Capacidade", value: "150kg" },
    ],
    specs: [
      { label: "Customização", value: "Sim" },
      { label: "Impressão", value: "Alta qualidade" },
      { label: "Uso", value: "Comercial e Industrial" },
    ],
  },
  {
    id: "sacola-laminada-30kg",
    name: "Saco Laminado 30kg",
    slug: "saco-laminado-30kg",
    category: "saco",
    images: ["/images/products/sacos/saco-30kg-1.jpg"],
    description:
      "Saco laminado resistente, reutilizável e indicado para transporte de produtos até 30kg. Fabricado com ráfia laminada de alta durabilidade.",
    variants: [{ name: "Capacidade", value: "30kg" }],
    specs: [
      { label: "Capacidade", value: "30kg" },
      { label: "Material", value: "Ráfia Laminada" },
      { label: "Durabilidade", value: "Alta" },
    ],
  },
  {
    id: "carteira-dupla",
    name: "Carteira Escolar Dupla",
    slug: "carteira-escolar-dupla",
    category: "carteiras",
    images: ["/images/products/carteiras/carteira-dupla-1.jpg", "/images/products/carteiras/carteira-dupla-2.jpg"],
    description:
      "Carteira dupla reforçada para salas de aula e instituições. Estrutura metálica com tampo em MDF, resistente ao uso intensivo. Produção nacional SAFRI-METAL.",
    variants: [
      { name: "Tipo", value: "Dupla" },
      { name: "Tipo", value: "Individual" },
    ],
    specs: [
      { label: "Material", value: "Metal + MDF" },
      { label: "Capacidade", value: "2 alunos" },
      { label: "Produção", value: "SAFRI-METAL, Kuito" },
    ],
  },
  {
    id: "carteira-universitaria",
    name: "Carteira Individual Universitária",
    slug: "carteira-individual-universitaria",
    category: "carteiras",
    images: ["/images/products/carteiras/carteira-uni-1.jpg"],
    description:
      "Modelo individual para uso universitário. Design ergonômico com tampo amplo para escrita e suporte lateral. Estrutura em metal e madeira tratada.",
    specs: [
      { label: "Material", value: "Metal + Madeira" },
      { label: "Uso", value: "Universitário" },
      { label: "Produção", value: "SAFRI-METAL, Kuito" },
    ],
  },
  {
    id: "carteira-infantil",
    name: "Carteira Escolar Infantil",
    slug: "carteira-escolar-infantil",
    category: "carteiras",
    images: ["/images/products/carteiras/carteira-infantil-1.jpg"],
    description:
      "Modelo escolar infantil com ergonomia e segurança adaptadas às crianças. Cantos arredondados, materiais seguros e resistentes ao uso diário.",
    specs: [
      { label: "Faixa Etária", value: "Infantil" },
      { label: "Segurança", value: "Cantos arredondados" },
      { label: "Produção", value: "SAFRI-METAL, Kuito" },
    ],
  },
  {
    id: "mesa-escolar",
    name: "Mesa Escolar",
    slug: "mesa-escolar",
    category: "carteiras",
    images: ["/images/products/carteiras/mesa-escolar-1.jpg"],
    description:
      "Mesas escolares resistentes para salas de aula e centros de formação. Estrutura robusta em madeira e metal para suportar uso intensivo.",
    specs: [
      { label: "Material", value: "Madeira + Metal" },
      { label: "Uso", value: "Sala de aula e formação" },
      { label: "Produção", value: "SAFRI-METAL, Kuito" },
    ],
  },
  {
    id: "caderno-brochura",
    name: "Caderno Escolar Brochura",
    slug: "caderno-escolar-brochura",
    category: "cadernos",
    images: ["/images/products/cadernos/caderno-brochura-1.jpg"],
    description:
      "Caderno escolar tipo brochura, produzido pela SAFRI com papel de qualidade. Ideal para uso diário em todos os níveis de ensino.",
    variants: [
      { name: "Folhas", value: "96 folhas" },
      { name: "Folhas", value: "200 folhas" },
    ],
    specs: [{ label: "Tipo", value: "Brochura" }],
  },
  {
    id: "caderno-espiral",
    name: "Caderno Escolar Espiral",
    slug: "caderno-escolar-espiral",
    category: "cadernos",
    images: ["/images/products/cadernos/caderno-espiral-1.jpg"],
    description:
      "Caderno com encadernação em espiral para facilitar a escrita e o manuseio. Capa resistente e folhas de alta gramagem.",
    variants: [
      { name: "Folhas", value: "100 folhas" },
      { name: "Folhas", value: "200 folhas" },
    ],
    specs: [{ label: "Encadernação", value: "Espiral" }],
  },
  {
    id: "caderno-capa-dura",
    name: "Caderno Escolar Capa Dura",
    slug: "caderno-escolar-capa-dura",
    category: "cadernos",
    images: ["/images/products/cadernos/caderno-capa-dura-1.jpg"],
    description:
      "Caderno com capa dura reforçada para maior durabilidade. Ideal para alunos que usam a mochila com intensidade.",
    specs: [{ label: "Capa", value: "Dura" }],
  },
  {
    id: "caderno-universitario",
    name: "Caderno Universitário com Divisórias",
    slug: "caderno-universitario-divisorias",
    category: "cadernos",
    images: ["/images/products/cadernos/caderno-universitario-1.jpg"],
    description:
      "Caderno universitário com divisórias para organizar múltiplas disciplinas. Prático e resistente para uso intensivo.",
    variants: [
      { name: "Matérias", value: "5 matérias" },
      { name: "Matérias", value: "10 matérias" },
    ],
    specs: [{ label: "Divisórias", value: "Sim" }],
  },
]

export const PRODUCT_CATEGORIES = [
  { id: "todos", label: "Todos os Produtos", image: "/images/products/cat-todos.jpg" },
  { id: "sacos", label: "Sacos Normais e Laminados", image: "/images/products/cat-sacos.jpg" },
  { id: "saco", label: "Sacos 30kg", image: "/images/products/cat-saco30.jpg" },
  { id: "carteiras", label: "Carteiras Escolares", image: "/images/products/cat-carteiras.jpg" },
  { id: "cadernos", label: "Cadernos Escolares", image: "/images/products/cat-cadernos.jpg" },
] as const

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "todos") return products
  return products.filter((p) => p.category === category)
}
