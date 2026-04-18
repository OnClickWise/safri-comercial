"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";

export default function ProductCard({ product }: any) {
  const router = useRouter();

  const handleWhatsApp = () => {
    const phone = "244923019166";

    const message = `Olá, gostaria de solicitar cotação para:

• ${product.name}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div
      className="
group
bg-card
border
border-border
rounded-2xl
overflow-hidden
hover:shadow-xl
transition
flex
flex-col
"
    >
      <div
        onClick={() => router.push(`/loja/produto/${product.slug}`)}
        className="
relative
aspect-square
bg-muted
cursor-pointer
flex
items-center
justify-center
"
      >
        <Image
          src={product.images?.[0] || "/placeholder.png"}
          alt={product.name}
          fill
          className="
object-contain
p-6
group-hover:scale-105
transition
"
        />
      </div>

      <div
        className="
p-4
flex
flex-col
flex-1
"
      >
        <p
          className="
text-[11px]
uppercase
tracking-wide
text-primary
mb-2
"
        >
          {product.category}
        </p>

        <h3
          className="
font-semibold
text-sm
md:text-base
line-clamp-2
min-h-[48px]
"
        >
          {product.name}
        </h3>

        <p
          className="
text-xs
text-muted-foreground
mt-2
line-clamp-2
"
        >
          {product.description}
        </p>

        <div
          className="
flex
gap-2
mt-4
pt-3
"
        >
          <button
            onClick={() => router.push(`/loja/produto/${product.slug}`)}
            className="
flex-1
border
py-2.5
rounded-xl
text-xs
font-medium
hover:bg-muted
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
text-white
py-2.5
rounded-xl
text-xs
font-medium
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
