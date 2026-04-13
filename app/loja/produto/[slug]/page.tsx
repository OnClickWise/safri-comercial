"use client"

import { useParams } from "next/navigation"
import { products } from "@/lib/products"
import Image from "next/image"
import { useState } from "react"

export default function ProdutoPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)

  if (!product) return <div>Produto não encontrado</div>

  const handleWhatsApp = () => {
    const phone = "244923019166"

    const message = `Olá, gostaria de solicitar cotação para:

• ${product.name}
${selectedVariant ? `• Variante: ${selectedVariant}` : ""}`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid md:grid-cols-2 gap-10">

      {/* GALERIA */}
      <div className="space-y-4">

        {/* IMAGEM PRINCIPAL */}
        <div className="bg-muted rounded-2xl p-6 flex items-center justify-center">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-3">
          {product.images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`
                border rounded-lg p-2 cursor-pointer
                ${selectedImage === index ? "border-primary" : "border-border"}
              `}
            >
              <Image
                src={img}
                alt="thumb"
                width={60}
                height={60}
              />
            </div>
          ))}
        </div>

      </div>

      {/* INFO */}
      <div className="space-y-6">

        <h1 className="text-2xl md:text-3xl font-bold">
          {product.name}
        </h1>

        <p className="text-muted-foreground">
          {product.description}
        </p>

        {/* VARIANTES */}
        {product.variants && (
          <div>
            <p className="text-sm font-medium mb-2">Opções:</p>

            <div className="flex gap-2 flex-wrap">
              {product.variants.map((v) => (
                <button
                  key={v.value}
                  onClick={() => setSelectedVariant(v.value)}
                  className={`
                    px-4 py-2 rounded-lg border text-sm
                    ${selectedVariant === v.value
                      ? "bg-primary text-white border-primary"
                      : "border-border"}
                  `}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ESPECIFICAÇÕES */}
        {product.specs && (
          <div>
            <h3 className="font-semibold mb-2">Especificações</h3>

            <div className="space-y-2 text-sm">
              {product.specs.map((s, i) => (
                <div key={i} className="flex justify-between border-b pb-1">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={handleWhatsApp}
          className="bg-primary text-white px-6 py-3 rounded-lg"
        >
          Solicitar Cotação
        </button>

      </div>

    </div>
  )
}