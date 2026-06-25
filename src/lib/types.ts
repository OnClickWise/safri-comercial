export interface HeroSlide {
  id: number
  title: string
  subtitle: string
  highlight: string
  image: string
}

export interface Sector {
  id: string
  slug: string
  title: string
  shortDesc: string
  description: string
  highlights: string[]
  icon: string
  image: string
  externalLink?: string
}

export interface Differential {
  icon: string
  title: string
  description: string
}

export interface Visit {
  id: string
  slug: string
  title: string
  category: string
  description: string
  content: string
  coverImage: string
  images: string[]
  photoCount: number
}

export type ProductCategory = "sacos" | "saco" | "carteiras" | "cadernos"

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
  category: ProductCategory
  images: string[]
  description: string
  variants?: ProductVariant[]
  specs?: ProductSpec[]
}

export interface QuoteItem {
  id: string
  name: string
  quantity: number
  variant?: string
}

export interface StatItem {
  value: string
  label: string
}
