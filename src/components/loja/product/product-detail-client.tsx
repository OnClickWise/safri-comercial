"use client"
import { useState } from "react"
import Link from "next/link"
import { MessageCircle, ShoppingCart, ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
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

export function ProductDetailClient({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants?.[0]?.value
  )
  const [selectedImage, setSelectedImage] = useState(0)
  const addItem = useCartStore((s) => s.addItem)

  const whatsappLink = buildWhatsAppLink(
    buildProductQuoteMessage(product.name, selectedVariant),
    CONTACTS.whatsappCommercialRaw
  )

  const handleAddToQuote = () => {
    addItem({ id: product.id + (selectedVariant ?? ""), name: product.name, variant: selectedVariant })
  }

  const uniqueVariantValues = product.variants
    ? [...new Set(product.variants.map((v) => v.value))]
    : []

  return (
    <div className="container mx-auto px-4 py-10">
      <Link href="/loja" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
        <ChevronLeft className="h-4 w-4" />
        Voltar ao catálogo
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Imagens */}
        <div>
          <div className="relative rounded-2xl overflow-hidden bg-muted h-[400px] flex items-center justify-center mb-3">
            <div className="text-center">
              <div className="text-5xl font-black text-secondary/10 uppercase">{product.name.charAt(0)}</div>
              <div className="text-secondary/20 text-sm mt-2">{product.name}</div>
            </div>
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`h-16 w-16 rounded-xl border-2 bg-muted flex items-center justify-center text-xs text-muted-foreground transition-all ${
                    selectedImage === i ? "border-primary" : "border-border"
                  }`}
                  aria-label={`Imagem ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Detalhes */}
        <div>
          <Badge variant="outline" className="border-primary text-primary mb-3">
            {categoryLabels[product.category]}
          </Badge>
          <h1 className="text-2xl md:text-3xl font-black text-secondary mb-3">{product.name}</h1>
          <Separator className="mb-5" />
          <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

          {/* Variantes */}
          {uniqueVariantValues.length > 0 && (
            <div className="mb-6">
              <div className="text-sm font-semibold text-foreground mb-2">
                {product.variants![0].name}
              </div>
              <div className="flex flex-wrap gap-2">
                {uniqueVariantValues.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium border-2 transition-all ${
                      selectedVariant === v
                        ? "border-primary bg-primary text-white"
                        : "border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Specs */}
          {product.specs && product.specs.length > 0 && (
            <div className="mb-6 rounded-xl overflow-hidden border border-border">
              {product.specs.map((spec, i) => (
                <div key={i} className={`flex text-sm px-4 py-2.5 ${i % 2 === 0 ? "bg-muted" : "bg-card"}`}>
                  <span className="font-medium text-foreground w-32 shrink-0">{spec.label}</span>
                  <span className="text-muted-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-primary py-3.5 text-sm font-bold text-white hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar Cotação pelo WhatsApp
            </a>
            <button
              onClick={handleAddToQuote}
              className="flex items-center justify-center gap-2 w-full rounded-full border-2 border-secondary py-3.5 text-sm font-bold text-secondary hover:bg-secondary hover:text-white transition-all"
            >
              <ShoppingCart className="h-4 w-4" />
              Adicionar à Lista de Cotação
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
