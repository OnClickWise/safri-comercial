"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";

/* DATA SOURCE (futuro: API/CMS) */
const galleryItems = [
  "/images/galeria/galeria1.jpg",
  "/images/galeria/galeria2.jpg",
  "/images/galeria/galeria3.jpg",
  "/images/galeria/galeria4.jpg",
  "/images/galeria/galeria5.jpg",
  "/images/galeria/galeria6.jpg",
  "/images/galeria/galeria7.jpg",
  "/images/galeria/galeria8.jpg",
  "/images/galeria/galeria9.jpg",
  "/images/galeria/galeria10.jpg",
  "/images/galeria/galeria11.jpg",
  "/images/galeria/galeria12.jpg",
  "/images/galeria/galeria13.jpg",
  "/images/galeria/galeria14.jpg",
  "/images/galeria/galeria15.jpg",
  "/images/galeria/galeria16.jpg",
  "/images/galeria/galeria17.jpg",
  "/images/galeria/galeria18.jpg",
  "/images/galeria/galeria19.jpg",
  "/images/galeria/galeria20.jpg",
  "/images/galeria/galeria21.jpg",
  "/images/galeria/galeria22.jpg",
  "/images/galeria/galeria23.jpg",
  "/images/galeria/galeria24.jpg",
];

const ITEMS_PER_LOAD = 14;

export default function GalleryPage() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  /* 🔁 Infinite Scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + ITEMS_PER_LOAD, galleryItems.length)
          );
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  /* ⌨️ Keyboard Navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % galleryItems.length : null
        );
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev !== null
            ? (prev - 1 + galleryItems.length) % galleryItems.length
            : null
        );
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  const visibleItems = galleryItems.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-background">

      {/* HERO */}
      <PageHero
        title="Galeria SAFRI"
        description="Conheça a dimensão real das nossas operações, infraestruturas e projetos em todo o território nacional."
        image="/images/safri-metal.png"
      />

      {/* GRID */}
      <section className="px-6 lg:px-16 xl:px-24 py-16">

        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Operações & Infraestrutura
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma visão real da capacidade operacional e execução de projectos da SAFRI.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[260px]">

          {visibleItems.map((src, index) => {
            const isLarge = index % 7 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                onClick={() => setSelectedIndex(index)}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  isLarge ? "sm:row-span-2" : ""
                }`}
              >
                <Image
                  src={src}
                  alt="Galeria SAFRI"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
              </motion.div>
            );
          })}

        </div>

        {/* Loader trigger */}
        <div ref={loaderRef} className="h-10 mt-10" />

      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* CLOSE */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            {/* PREV */}
            <button
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + galleryItems.length) %
                    galleryItems.length
                )
              }
              className="absolute left-6 text-white"
            >
              <ChevronLeft size={40} />
            </button>

            {/* NEXT */}
            <button
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex + 1) % galleryItems.length
                )
              }
              className="absolute right-6 text-white"
            >
              <ChevronRight size={40} />
            </button>

            {/* IMAGE */}
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="max-w-6xl w-full"
            >
              <Image
                src={galleryItems[selectedIndex]}
                alt="Preview"
                width={1400}
                height={900}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}