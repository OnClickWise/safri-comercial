"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { MessageCircle } from "lucide-react"

export default function ProductCard({ product }: any) {
  const router = useRouter()

  const handleWhatsApp = () => {
    const phone = "244923019166"

    const message = `Olá, gostaria de solicitar cotação para:\n\n• ${product.name}`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition">

      {/* IMAGE */}
      <div
        onClick={() => router.push(`/loja/produto/${product.slug}`)}
        className="bg-muted aspect-square flex items-center justify-center cursor-pointer"
      >
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain p-4 group-hover:scale-105 transition"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-3">

        <h3 className="font-semibold text-sm line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xs text-muted-foreground capitalize">
          {product.category}
        </p>

        <div className="flex gap-2">

          <button
            onClick={() => router.push(`/loja/produto/${product.slug}`)}
            className="flex-1 border py-2 rounded-lg text-xs hover:bg-muted"
          >
            Ver detalhes
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center gap-1 bg-primary text-white py-2 rounded-lg text-xs"
          >
            <MessageCircle size={14} />
            Cotar
          </button>

        </div>

      </div>
    </div>
  )
}