export const COMPANY = {
  name: "SAFRI Comercial, Lda.",
  shortName: "SAFRI",
  nif: "5131000475",
  country: "Angola",
  experienceYears: "+25",
  storageCapacity: "+10k m²",
  clients: "+100",
  responseTime: "24h",
  ceo: "Sr. Gonçalves Cassoma",
  description:
    "Empresa angolana com mais de 25 anos de experiência, atuando em sectores estratégicos como comércio, indústria, logística, construção e investimento, garantindo execução eficiente e resultados consistentes.",
} as const

export const CONTACTS = {
  phone1: "+244 936 324 116",
  phone2: "+244 248 200 287",
  whatsappCommercial: "+244 922 100 548",
  whatsappCommercialRaw: "244922100548",
  whatsappVisits: "+244 923 019 166",
  whatsappVisitsRaw: "244923019166",
  email: "safri@safri.co.ao",
  address: "Estrada Nacional N.250, Chissindo — Cuito (Kuito), Bié, Angola",
  addressShort: "Estrada Nacional N.250, Chissindo — Angola",
  coordinates: { lat: -12.4262728, lng: 16.9272131 },
} as const

export const SOCIAL = {
  facebook: "https://www.facebook.com/share/1CYHXjwSt5/",
  instagram: "#",
  linkedin: "#",
} as const

export const HERO_SLIDES = [
  {
    id: 1,
    title: "SOLUÇÕES INDUSTRIAIS DE ALTA PERFORMANCE",
    subtitle: "Fornecimento, produção e logística para empresas que operam em grande escala",
    highlight: "Mais de 25 anos a executar projetos estratégicos em Angola",
    image: "/images/hero/slide-1.jpg",
  },
  {
    id: 2,
    title: "FORNECIMENTO INTELIGENTE PARA GRANDES OPERAÇÕES",
    subtitle: "Garantimos stock, entrega e continuidade para empresas que não podem parar",
    highlight: "Capacidade logística e comercial preparada para grandes volumes",
    image: "/images/hero/slide-2.jpg",
  },
  {
    id: 3,
    title: "LOGÍSTICA E TRANSPORTE EM LARGA ESCALA",
    subtitle: "Movemos cargas, operações e negócios com eficiência e controlo total",
    highlight: "Infraestrutura própria e frota preparada para grandes desafios",
    image: "/images/hero/slide-3.jpg",
  },
] as const

export const HERO_STATS = [
  { value: "+25", label: "Anos de Experiência" },
  { value: "+10k m²", label: "Capacidade de Armazenamento" },
  { value: "+100", label: "Clientes Atendidos" },
  { value: "24h", label: "Resposta Comercial" },
] as const

export const SECTORS = [
  {
    id: "comercio",
    slug: "comercio-geral",
    title: "Comércio Geral",
    shortDesc: "Rede comercial, armazéns e fornecimento estratégico",
    description:
      "Base histórica da SAFRI, com forte presença nas províncias do Bié e Huambo, garantindo abastecimento contínuo e resposta eficiente ao mercado.",
    highlights: [
      "Rede com 6 estabelecimentos comerciais e armazéns",
      "Presença no Kuito, Andulo, Chinguar, Camacupa e Huambo",
      "Venda de bens alimentares, industriais e mobiliário",
      "Capacidade de armazenamento superior a 10.000m²",
      "Participação em programas governamentais (Comércio Rural Permanente)",
    ],
    icon: "ShoppingBag",
    image: "/images/setores/comercio.jpg",
  },
  {
    id: "transportes",
    slug: "transportes-logistica",
    title: "Transportes & Logística",
    shortDesc: "Frota para apoio logístico interno e distribuição nacional",
    description:
      "Pilar estratégico da operação, garantindo autonomia logística e capacidade de resposta em larga escala.",
    highlights: [
      "Camiões de 30 toneladas para carga pesada e granel",
      "Transporte contentorizado e porta-máquinas",
      "Camiões basculantes para obras",
      "Frota de apoio operacional e logística",
      "Autocarros para transporte e turismo",
    ],
    icon: "Truck",
    image: "/images/setores/transportes.jpg",
  },
  {
    id: "industria",
    slug: "industria-safri-metal",
    title: "Indústria SAFRI-METAL",
    shortDesc: "Produção de mobiliário e soluções industriais",
    description:
      "Aposta estratégica na industrialização nacional com produção própria e impacto direto no desenvolvimento local.",
    highlights: [
      "Fábrica de mobiliário metálico no Kuito",
      "Produção de carteiras escolares e camas hospitalares",
      "Fabricação de beliches militares e civis",
      "Fábrica de cadernos e material de papelaria",
      "Projeto em curso de fábrica de sacos de ráfia",
    ],
    icon: "Factory",
    image: "/images/setores/industria.jpg",
  },
  {
    id: "hotelaria",
    slug: "hotelaria-turismo",
    title: "Hotelaria & Turismo",
    shortDesc: "Centro turístico e investimentos em lazer",
    description:
      "Diversificação estratégica com investimento em turismo e desenvolvimento regional.",
    highlights: [
      "Centro Turístico da Chicava",
      "Bungalows e áreas de lazer",
      "Discoteca e espaços recreativos",
      "Projeto turístico único na região do Bié",
    ],
    icon: "Hotel",
    image: "/images/setores/hotelaria.jpg",
  },
  {
    id: "importacao",
    slug: "importacao-comercio-internacional",
    title: "Importação & Comércio Internacional",
    shortDesc: "Rede global de fornecimento estratégico",
    description:
      "Rede global de fornecimento garantindo disponibilidade de produtos e equipamentos estratégicos.",
    highlights: [
      "Importação da Europa, Ásia e África",
      "Fornecimento para projetos públicos e privados",
      "Logística internacional estruturada",
      "Linhas aéreas expeditas (entregas rápidas)",
      "Capacidade de entrega em menos de 10 dias",
    ],
    icon: "Globe",
    image: "/images/setores/importacao.jpg",
  },
  {
    id: "educacao",
    slug: "projetos-educacionais",
    title: "Educação & Projetos Académicos",
    shortDesc: "Instituto Superior e formação técnica",
    description:
      "Investimento estratégico na educação e formação superior em Angola.",
    highlights: [
      "Instituto Superior Politécnico Ndunduma",
      "Capacidade para mais de 3.600 estudantes",
      "Infraestrutura com mais de 4.900m²",
      "Laboratórios, anfiteatro e blocos académicos",
      "Formação técnica e científica local",
    ],
    icon: "GraduationCap",
    externalLink: "https://www.ispndunduma.co.ao/",
    image: "/images/setores/educacao.jpg",
  },
  {
    id: "agro",
    slug: "agro-pecuaria",
    title: "Agro-Pecuária",
    shortDesc: "Produção agrícola e investigação científica",
    description:
      "Aposta no agronegócio como motor de crescimento sustentável e produção nacional.",
    highlights: [
      "Fazenda com mais de 1.300 hectares",
      "Produção agrícola e pecuária integrada",
      "Projetos de piscicultura, avicultura e suinicultura",
      "Centro de investigação agrícola",
      "Integração com ensino superior (agronomia)",
    ],
    icon: "Sprout",
    image: "/images/setores/agro.jpg",
  },
] as const

export const DIFFERENTIALS = [
  {
    icon: "Award",
    title: "+25 Anos de Experiência",
    description:
      "Histórico consolidado no mercado angolano com atuação contínua em sectores estratégicos, garantindo credibilidade, confiança e estabilidade institucional.",
  },
  {
    icon: "Network",
    title: "Presença Multissetorial Integrada",
    description:
      "Atuação em comércio, logística, indústria, construção e agro, permitindo soluções completas e maior controlo sobre toda a cadeia de valor.",
  },
  {
    icon: "Building2",
    title: "Infraestrutura e Capacidade Própria",
    description:
      "Armazéns, frota, unidades industriais e meios operacionais próprios que garantem autonomia, eficiência e execução em larga escala.",
  },
  {
    icon: "Handshake",
    title: "Parcerias Estratégicas",
    description:
      "Relações sólidas com entidades públicas e privadas, fortalecendo a capacidade de entrega e expansão.",
  },
] as const

export const MISSION_VISION_VALUES = {
  mission:
    "Ser parceiro certo na reconstrução e desenvolvimento do País, combate à pobreza e busca permanente da auto-sustentabilidade, criando constantemente novos postos de trabalho qualificado.",
  vision:
    "Primar pela qualidade e honra aos compromissos como chave do nosso sucesso. A excelência é a nossa meta — crescer de forma sustentável para o desenvolvimento de Angola.",
  values: [
    "Qualidade e Excelência",
    "Responsabilidade Social",
    "Transparência",
    "Inovação Contínua",
    "Compromisso com Angola",
    "Eficiência Operacional",
  ],
} as const

export const NAV_ITEMS = [
  { label: "Início", href: "/" },
  {
    label: "Empresa",
    href: "/empresa",
    dropdown: [
      { label: "Sobre a SAFRI", href: "/empresa" },
      { label: "Missão, Visão e Valores", href: "/empresa#missao" },
      { label: "Direção", href: "/empresa#direcao" },
      { label: "Infraestrutura", href: "/empresa#infraestrutura" },
    ],
  },
  {
    label: "Áreas de Atuação",
    href: "/setores",
    dropdown: SECTORS.map((s) => ({ label: s.title, href: `/setores#${s.id}` })),
  },
  { label: "Galeria", href: "/galeria" },
  { label: "Visitantes", href: "/visitantes" },
  { label: "Contacto", href: "/contacto" },
] as const
