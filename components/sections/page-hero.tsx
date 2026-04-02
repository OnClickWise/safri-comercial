"use client"

import Image from "next/image"

interface PageHeroProps {
  title: string
  description?: string
  image?: string
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative h-[340px] md:h-[440px] flex items-center justify-center overflow-hidden rounded-b-[8rem]">

      {/* BACKGROUND IMAGE */}
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* CONTENT */}
      <div className="relative container mx-auto px-6 text-center text-white">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/80">
            {description}
          </p>
        )}

      </div>

      {/* DECORATIVE BLUR */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 blur-3xl rounded-full pointer-events-none" />

    </section>
  )
}