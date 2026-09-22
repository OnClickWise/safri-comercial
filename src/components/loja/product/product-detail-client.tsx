"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Heart, Share2, CheckCircle } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { buildProductQuoteMessage, buildWhatsAppLink } from "@/lib/utils"
import { CONTACTS } from "@/lib/constants"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/loja/product/product-card"
import type { Product } from "@/lib/types"

const categoryLabels: Record<string, string> = {
  sacos: "Sacos Normais e Laminados",
  saco: "Sacos 30kg",
  carteiras: "Carteiras Escolares",
  cadernos: "Cadernos Escolares",
  mobiliario: "Mobiliário e Camas",
}

export function ProductDetailClient({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants?.[0]?.value
  )
  const [mainIdx, setMainIdx] = useState(0)
  const gallery = product.images.length > 0 ? product.images : ["/images/loja/product-images/01.jpg"]
  const [added, setAdded] = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  const whatsappLink = buildWhatsAppLink(
    buildProductQuoteMessage(product.name, selectedVariant),
    CONTACTS.whatsappCommercialRaw
  )

  const handleAddToQuote = () => {
    addItem({ id: product.id + (selectedVariant ?? ""), name: product.name, variant: selectedVariant })
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  const uniqueVariants = product.variants
    ? [...new Set(product.variants.map((v) => v.value))]
    : []

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 5)

  return (
    <div>
      {/* Breadcrumb — shopingo style */}
      <div className="py-3 border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <span>/</span>
            <Link href="/loja" className="hover:text-primary transition-colors">Catálogo</Link>
            <span>/</span>
            <Link href={`/loja/categoria/${product.category}`} className="hover:text-primary transition-colors">
              {categoryLabels[product.category]}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-10">

            {/* Left col: gallery — shopingo 2×4 grid */}
            <div className="lg:col-span-4">
              {/* Main image */}
              <div className="relative h-[340px] md:h-[460px] rounded-2xl overflow-hidden bg-muted mb-3 group cursor-zoom-in">
                <Image
                  src={gallery[mainIdx]}
                  alt={`${product.name} — imagem ${mainIdx + 1}`}
                  fill
                  priority
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Thumbnail grid */}
              {gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setMainIdx(i)}
                      className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                        mainIdx === i
                          ? "border-primary shadow-md shadow-primary/20"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Imagem ${i + 1}`}
                        fill
                        className={`object-cover transition-opacity duration-200 ${mainIdx === i ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
                        sizes="100px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right col: product info */}
            <div className="lg:col-span-3">
              <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-widest mb-3">
                {categoryLabels[product.category]}
              </div>

              <h1 className="text-2xl md:text-3xl font-black text-secondary leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {product.description}
              </p>

              <div className="h-px bg-border mb-5" />

              {/* Variant selector — shopingo size-chart style */}
              {uniqueVariants.length > 0 && (
                <div className="mb-5">
                  <p className="text-sm font-bold text-foreground mb-3">
                    {product.variants![0].name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {uniqueVariants.map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVariant(v)}
                        className={`rounded-lg px-4 py-2 text-sm font-semibold border-2 transition-all ${
                          selectedVariant === v
                            ? "border-primary bg-primary text-white shadow-sm shadow-primary/30"
                            : "border-border hover:border-primary hover:text-primary"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs table */}
              {product.specs && product.specs.length > 0 && (
                <div className="mb-5 rounded-xl overflow-hidden border border-border">
                  <div className="bg-muted/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Especificações
                  </div>
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex items-center text-sm px-4 py-2.5 ${
                        i % 2 === 0 ? "bg-card" : "bg-muted/30"
                      }`}
                    >
                      <span className="font-semibold text-foreground w-28 shrink-0">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="h-px bg-border mb-5" />

              {/* CTAs — shopingo cart-buttons style */}
              <div className="space-y-3 mb-5">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  Solicitar Cotação pelo WhatsApp
                </a>
                <button
                  onClick={handleAddToQuote}
                  className={`flex items-center justify-center gap-2 w-full rounded-xl border-2 py-3.5 text-sm font-bold transition-all ${
                    added
                      ? "border-green-500 bg-green-50 text-green-600"
                      : "border-secondary text-secondary hover:bg-secondary hover:text-white"
                  }`}
                >
                  {added ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Adicionado à lista!
                    </>
                  ) : (
                    <>
                      <Heart className="h-4 w-4" />
                      Adicionar à Lista de Cotação
                    </>
                  )}
                </button>
              </div>

              {/* Share — shopingo product-share style */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-semibold text-muted-foreground">Partilhar:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${product.name} — Catálogo SAFRI\nhttps://safri.ao/loja/produto/${product.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Partilhar no WhatsApp"
                  className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Share2 className="h-3.5 w-3.5" />
                </a>
                <div className="ml-auto">
                  <Link
                    href="/loja/cotacao"
                    className="text-xs text-primary hover:underline font-semibold"
                  >
                    Ver Lista de Cotação →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products — shopingo style */}
      {relatedProducts.length > 0 && (
        <section className="py-10 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-border" />
              <h2 className="text-xl font-black text-secondary whitespace-nowrap">Produtos Relacionados</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
