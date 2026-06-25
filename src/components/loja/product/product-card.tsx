"use client"
import Link from "next/link"
import { MessageCircle, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/store/cart-store"
import { buildProductQuoteMessage, buildWhatsAppLink } from "@/lib/utils"
import { CONTACTS } from "@/lib/constants"
import type { Product } from "@/lib/types"

const categoryLabels: Record<string, string> = {
  sacos: "Sacos Normais e Laminados",
  saco: "Sacos 30kg",
  carteiras: "Carteiras Escolares",
  cadernos: "Cadernos Escolares",
}

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem)

  const whatsappLink = buildWhatsAppLink(
    buildProductQuoteMessage(product.name),
    CONTACTS.whatsappCommercialRaw
  )

  const handleAddToQuote = () => {
    addItem({ id: product.id, name: product.name })
  }

  return (
    <div className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:shadow-2xl hover:z-30 hover:border-primary/30 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/5 to-secondary/10 group-hover:scale-105 transition-transform duration-500">
          <div className="text-center">
            <div className="text-4xl font-black text-secondary/10 uppercase leading-none">{product.name.charAt(0)}</div>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary text-white text-[10px] uppercase tracking-wide">
            {categoryLabels[product.category] ?? product.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Link href={`/loja/produto/${product.slug}`}>
          <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Variants preview */}
        {product.variants && product.variants.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.variants.slice(0, 3).map((v, i) => (
              <span key={i} className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                {v.value}
              </span>
            ))}
            {product.variants.length > 3 && (
              <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                +{product.variants.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex gap-2">
          <Link
            href={`/loja/produto/${product.slug}`}
            className="flex-1 rounded-full border-2 border-secondary text-secondary text-xs font-semibold py-2 text-center hover:bg-secondary hover:text-white transition-all"
          >
            Ver Detalhes
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-primary text-white text-xs font-semibold py-2 text-center hover:bg-primary/90 transition-all flex items-center justify-center gap-1"
          >
            <MessageCircle className="h-3 w-3" />
            Cotar
          </a>
        </div>

        <button
          onClick={handleAddToQuote}
          className="mt-2 w-full flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors py-1"
        >
          <ShoppingCart className="h-3 w-3" />
          Adicionar à lista de cotação
        </button>
      </div>
    </div>
  )
}
