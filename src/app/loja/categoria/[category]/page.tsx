import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PRODUCT_CATEGORIES, getProductsByCategory } from "@/lib/products"
import { CategoryGridClient } from "@/components/loja/shop/category-grid-client"

export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((c) => ({ category: c.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const cat = PRODUCT_CATEGORIES.find((c) => c.id === category)
  if (!cat) return {}
  const count = getProductsByCategory(category).length
  return {
    title: `${cat.label} — SAFRI Catálogo`,
    description: `${count} produtos disponíveis em ${cat.label}. Solicite cotação directamente pelo WhatsApp.`,
  }
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const cat = PRODUCT_CATEGORIES.find((c) => c.id === category)
  if (!cat) notFound()

  return (
    <>
      {/* Breadcrumb hero — shopingo style */}
      <div className="py-4 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Início</a>
            <span>/</span>
            <a href="/loja" className="hover:text-primary transition-colors">Catálogo</a>
            <span>/</span>
            <span className="text-foreground font-semibold">{cat.label}</span>
          </nav>
          <h1 className="text-xl font-black text-secondary mt-2">{cat.label}</h1>
        </div>
      </div>

      <CategoryGridClient category={category} />
    </>
  )
}
