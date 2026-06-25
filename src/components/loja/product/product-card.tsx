"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, ZoomIn, ShoppingCart } from "lucide-react"
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

interface ProductCardProps {
  product: Product
  badge?: string
  imageSrc?: string
}

export function ProductCard({ product, badge, imageSrc }: ProductCardProps) {
  const [imgError, setImgError] = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  const whatsappLink = buildWhatsAppLink(
    buildProductQuoteMessage(product.name),
    CONTACTS.whatsappCommercialRaw
  )

  const handleAddToQuote = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({ id: product.id, name: product.name })
  }

  const src = imageSrc ?? product.images[0]
  const showImage = src && !imgError

  return (
    <div className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
            {badge}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        {showImage ? (
          <Image
            src={src}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/5 to-secondary/15">
            <span className="text-5xl font-black text-secondary/10 uppercase">
              {product.name.charAt(0)}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={handleAddToQuote}
            title="Adicionar à lista"
            className="h-9 w-9 rounded-full bg-white text-foreground flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md"
          >
            <Heart className="h-4 w-4" />
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Cotar pelo WhatsApp"
            className="h-9 w-9 rounded-full bg-white text-foreground flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Link
            href={`/loja/produto/${product.slug}`}
            title="Ver detalhes"
            className="h-9 w-9 rounded-full bg-white text-foreground flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md"
          >
            <ZoomIn className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground">
          {categoryLabels[product.category] ?? product.category}
        </span>
        <Link href={`/loja/produto/${product.slug}`}>
          <h3 className="font-bold text-sm text-foreground hover:text-primary transition-colors line-clamp-2 mt-0.5 mb-3 leading-snug">
            {product.name}
          </h3>
        </Link>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full rounded-full bg-primary text-white text-xs font-bold py-2.5 hover:bg-primary/90 transition-all"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Solicitar Cotação
        </a>
      </div>
    </div>
  )
}
