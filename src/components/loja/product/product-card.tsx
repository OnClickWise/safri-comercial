"use client"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, ZoomIn, ShoppingCart, X } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { buildProductQuoteMessage, buildWhatsAppLink } from "@/lib/utils"
import { CONTACTS } from "@/lib/constants"
import type { Product } from "@/lib/types"

const categoryLabels: Record<string, string> = {
  sacos: "Sacos Normais e Laminados",
  saco: "Sacos 30kg",
  carteiras: "Carteiras Escolares",
  cadernos: "Cadernos Escolares",
  mobiliario: "Mobiliário e Camas",
}

interface ProductCardProps {
  product: Product
  badge?: string
  imageSrc?: string
}

function QuickViewModal({
  product,
  onClose,
}: {
  product: Product
  onClose: () => void
}) {
  const [thumbIdx, setThumbIdx] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants?.[0]?.value
  )
  const addItem = useCartStore((s) => s.addItem)

  const whatsappLink = buildWhatsAppLink(
    buildProductQuoteMessage(product.name, selectedVariant),
    CONTACTS.whatsappCommercialRaw
  )

  const handleAdd = () => {
    addItem({ id: product.id + (selectedVariant ?? ""), name: product.name, variant: selectedVariant })
    onClose()
  }

  const uniqueVariants = product.variants
    ? [...new Set(product.variants.map((v) => v.value))]
    : []

  const gallery = product.images.length > 0 ? product.images : ["/images/loja/product-images/01.jpg"]

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: image slider */}
          <div className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-tl-2xl rounded-bl-2xl">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden bg-gray-100 dark:bg-neutral-700 mb-3">
              <Image
                src={gallery[thumbIdx]}
                alt={product.name}
                fill
                className="object-contain"
                sizes="400px"
              />
            </div>
            {gallery.length > 1 && (
              <div className="flex gap-2">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setThumbIdx(i)}
                    className={`relative h-14 w-14 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      thumbIdx === i ? "border-[#E21B23]" : "border-gray-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`thumb ${i + 1}`} fill className="object-cover" sizes="56px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: info */}
          <div className="p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E21B23]">
              {categoryLabels[product.category]}
            </span>
            <h2 className="text-xl font-black text-[#1e3a5f] mt-1 mb-1">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3">
              {product.description}
            </p>

            <div className="h-px bg-gray-200 mb-4" />

            {uniqueVariants.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-2">
                  {product.variants![0].name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {uniqueVariants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold border-2 transition-all ${
                        selectedVariant === v
                          ? "border-[#E21B23] bg-[#E21B23] text-white"
                          : "border-gray-200 hover:border-[#E21B23] hover:text-[#E21B23]"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.specs && product.specs.length > 0 && (
              <div className="mb-4 space-y-1.5">
                {product.specs.slice(0, 3).map((spec, i) => (
                  <div key={i} className="flex gap-2 text-xs">
                    <span className="font-semibold text-gray-800 w-24 shrink-0">{spec.label}:</span>
                    <span className="text-gray-500">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="h-px bg-gray-200 mb-4" />

            <div className="space-y-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#E21B23] py-3 text-sm font-bold text-white hover:bg-[#c5171f] transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar Cotação pelo WhatsApp
              </a>
              <button
                onClick={handleAdd}
                className="flex items-center justify-center gap-2 w-full rounded-xl border-2 border-[#1e3a5f] py-2.5 text-sm font-bold text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-all"
              >
                <Heart className="h-4 w-4" />
                Adicionar à Lista de Cotação
              </button>
              <Link
                href={`/loja/produto/${product.slug}`}
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-gray-200 py-2.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-all"
              >
                Ver Página Completa →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export function ProductCard({ product, badge, imageSrc }: ProductCardProps) {
  const [imgError, setImgError] = useState(false)
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  useEffect(() => { setMounted(true) }, [])

  const whatsappLink = buildWhatsAppLink(
    buildProductQuoteMessage(product.name),
    CONTACTS.whatsappCommercialRaw
  )

  const handleAddToQuote = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({ id: product.id, name: product.name })
  }

  const src = imageSrc ?? product.images[0]
  const showImage = src && !imgError

  return (
    <>
      <div className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
        {badge && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
              {badge}
            </span>
          </div>
        )}

        {/* Image — wrapped in Link for navigation, overlay on top */}
        <div className="relative h-52 bg-muted overflow-hidden">
          <Link href={`/loja/produto/${product.slug}`} className="absolute inset-0 z-0">
            {showImage ? (
              <Image
                src={src}
                alt={product.name}
                fill
                className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
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
          </Link>

          {/* Shopingo action bar — slides from bottom, z-10 above the Link */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-3 bg-secondary/90 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToQuote}
              title="Adicionar à lista"
              className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-primary transition-all"
            >
              <Heart className="h-4 w-4" />
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Cotar pelo WhatsApp"
              onClick={(e) => e.stopPropagation()}
              className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-primary transition-all"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuickViewOpen(true) }}
              title="Vista rápida"
              className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-primary transition-all"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card body */}
        <div className="p-4 text-center">
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
            className="flex items-center justify-center gap-1.5 w-full rounded-full bg-secondary text-white text-xs font-bold py-2.5 hover:bg-primary transition-all"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Solicitar Cotação
          </a>
        </div>
      </div>

      {/* QuickView rendered via portal to escape Embla's CSS transform context */}
      {mounted && quickViewOpen && (
        <QuickViewModal product={product} onClose={() => setQuickViewOpen(false)} />
      )}
    </>
  )
}
