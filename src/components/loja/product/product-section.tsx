import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCarousel } from "./product-carousel"
import type { ProductCategory } from "@/lib/types"

interface ProductSectionProps {
  title: string
  category: ProductCategory
}

export function ProductSection({ title, category }: ProductSectionProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
        <Link
          href={`/loja/categoria/${category}`}
          className="flex items-center gap-1 text-sm text-primary font-semibold hover:underline"
        >
          Ver Todos <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <ProductCarousel category={category} />
    </section>
  )
}
