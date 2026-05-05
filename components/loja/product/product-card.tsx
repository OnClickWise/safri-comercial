"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";

type ProductCardProps = {
  product: {
    name: string;
    slug: string;
    category: string;
    description?: string;
    images?: string[];
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const handleWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const phone = "244923019166";

    const message = `Olá, gostaria de solicitar cotação para:

• ${product.name}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleDetails = () => {
    router.push(`/loja/produto/${product.slug}`);
  };

  return (
    <div
      className="
        group
        relative
        overflow-visible
        rounded-2xl
        bg-card
        border
        border-border
        transition-all
        duration-300
        hover:shadow-2xl
        hover:z-30
        flex
        flex-col
      "
    >
      {/* ÁREA DA IMAGEM COM ESPAÇAMENTO */}
      <div
        onClick={handleDetails}
        className="
          relative
          w-full
          cursor-pointer
          pt-4 px-4   /* 🔥 espaçamento topo + laterais */
        "
      >
        <div
          className="
            relative
            aspect-square
            rounded-xl
            bg-muted
            overflow-visible
          "
        >
          <div
            className="
              absolute
              inset-0
              rounded-xl
              overflow-hidden
            "
          >
            <Image
              src={product.images?.[0] || "/placeholder.png"}
              alt={product.name}
              fill
              className="
                object-cover
                transition-all
                duration-500
                ease-out
                group-hover:scale-[1.35]
              "
            />
          </div>

          {/* leve overlay para depth */}
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />
        </div>
      </div>

      {/* CONTEÚDO */}
      <div
        className="
          relative
          z-10
          bg-card
          px-4 pb-4 pt-3   /* 🔥 padding ajustado */
          flex
          flex-col
          flex-1
          rounded-b-2xl
        "
      >
        <p className="text-[11px] uppercase tracking-wide text-primary mb-2 font-medium">
          {product.category}
        </p>

        <h3
          onClick={handleDetails}
          className="
            cursor-pointer
            font-semibold
            text-sm
            md:text-base
            line-clamp-2
            min-h-[48px]
            hover:text-primary
            transition
          "
        >
          {product.name}
        </h3>

        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* BOTÕES COM RESPIRO */}
        <div className="flex gap-2 mt-5 pt-3">
          <button
            onClick={handleDetails}
            className="
              flex-1
              border
              border-border
              py-2.5
              rounded-xl
              text-xs
              font-medium
              hover:bg-muted
              transition
            "
          >
            Ver Detalhes
          </button>

          <button
            onClick={handleWhatsApp}
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              bg-primary
              text-primary-foreground
              py-2.5
              rounded-xl
              text-xs
              font-medium
              hover:opacity-90
              transition
            "
          >
            <MessageCircle size={14} />
            Cotar
          </button>
        </div>
      </div>
    </div>
  );
}