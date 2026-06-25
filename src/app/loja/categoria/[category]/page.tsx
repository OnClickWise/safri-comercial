import { notFound } from "next/navigation"
import { products, PRODUCT_CATEGORIES, getProductsByCategory } from "@/lib/products"
import { ProductCard } from "@/components/loja/product/product-card"
import { PageHero } from "@/components/shared/page-hero"

export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((c) => ({ category: c.id }))
}

export default async function CategoriaPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = PRODUCT_CATEGORIES.find((c) => c.id === category)
  if (!cat) notFound()

  const filtered = getProductsByCategory(category)

  return (
    <>
      <PageHero title={cat.label} description={`${filtered.length} produtos disponíveis nesta categoria.`} />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </>
  )
}
