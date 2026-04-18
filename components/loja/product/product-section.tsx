"use client";

import { useRouter } from "next/navigation";
import ProductCarousel from "./product-carousel";

export default function ProductSection({ title, category }: any) {
  const router = useRouter();

  return (
    <section className="py-10">
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          "
      >
        <div
          className="
          flex
          items-center
          justify-between
          mb-6
          "
        >
          <div>
            <h2
              className="
              text-xl
              md:text-2xl
              font-bold
              "
            >
              {title}
            </h2>

            <p
              className="
              text-sm
              text-muted-foreground
              "
            >
              Produtos em destaque
            </p>
          </div>

          <button
            onClick={() => router.push(`/loja?categoria=${category}`)}
            className="
            text-sm
            font-medium
            text-primary
            ">
            Ver Todos
          </button>
        </div>

        <ProductCarousel category={category} />
      </div>
    </section>
  );
}
