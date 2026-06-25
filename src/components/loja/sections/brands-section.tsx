import Image from "next/image"

const brandCount = 10

const brands = Array.from({ length: brandCount }, (_, i) => ({
  src: `/images/loja/brands/${String(i + 1).padStart(2, "0")}.webp`,
  alt: `Parceiro ${i + 1}`,
}))

export function BrandsSection() {
  return (
    <section className="py-14 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Colaboramos com</span>
          <h2 className="text-2xl md:text-3xl font-black text-secondary mt-1">Os Nossos Parceiros</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.src}
              className="relative h-20 border border-border rounded-xl bg-card flex items-center justify-center p-3 hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                className="object-contain p-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
