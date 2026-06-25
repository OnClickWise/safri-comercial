import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { products, getProductBySlug } from "@/lib/products"
import { ProductDetailClient } from "@/components/loja/product/product-detail-client"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} — SAFRI Catálogo`,
    description: product.description,
  }
}

export default async function ProdutoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return <ProductDetailClient product={product} />
}
