"use client"
import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const GALLERY_FILES = [
  "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "2.jpg", "20.jpg",
  "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg",
  "29.jpg", "3.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg",
  "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "6.jpg",
  "7.jpg", "8.jpg", "9.jpg",
  "DSC09219.jpg", "DSC09233.jpg", "DSC09235.jpg", "DSC09236.jpg", "DSC09239.jpg",
  "DSC09240.jpg", "DSC09241.jpg", "DSC09243.jpg", "DSC09248.jpg", "DSC09250.jpg",
  "DSC09253.jpg", "DSC09255.jpg", "DSC09261.jpg", "DSC09262.jpg", "DSC09282.jpg",
  "DSC09285.jpg", "DSC09286.jpg", "DSC09288.jpg",
  "galeria1.jpg", "galeria3.jpg", "galeria7.jpg", "galeria8.jpg",
  "infra-strutura3.jpg", "infra-strutura4.jpg", "infra-strutura5.jpg", "infra-strutura6.jpg",
  "safri-industrial.jpg", "safri-intraestrutura.jpg",
]

const photos = GALLERY_FILES.map((file, i) => ({
  src: `/images/galeria/${file}`,
  alt: `Galeria SAFRI — foto ${i + 1}`,
}))

const TOTAL_PHOTOS = photos.length
const PER_PAGE = 12

export default function GaleriaPage() {
  const [visible, setVisible] = useState(PER_PAGE)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visible < TOTAL_PHOTOS) {
          setVisible((v) => Math.min(v + PER_PAGE, TOTAL_PHOTOS))
        }
      },
      { threshold: 0.1 }
    )
    if (sentinelRef.current) observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [visible])

  const navigate = useCallback((dir: 1 | -1) => {
    setLightboxIndex((idx) => {
      if (idx === null) return null
      return (idx + dir + photos.length) % photos.length
    })
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1)
      if (e.key === "ArrowRight") navigate(1)
      if (e.key === "Escape") setLightboxIndex(null)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightboxIndex, navigate])

  return (
    <>
      <PageHero title="Galeria" description="Registo fotográfico das nossas instalações, operações e marcos históricos da SAFRI." />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.slice(0, visible).map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={photo.alt}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-200" />
              </button>
            ))}
          </div>
          <div ref={sentinelRef} className="h-4" />
          {visible < TOTAL_PHOTOS && (
            <div className="text-center mt-6 text-sm text-muted-foreground">
              Carregando mais fotos…
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={() => setLightboxIndex(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden">
          {lightboxIndex !== null && (
            <div className="relative">
              <div className="relative aspect-video bg-black">
                <Image
                  src={photos[lightboxIndex].src}
                  alt={photos[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
              </div>
              <button
                onClick={() => navigate(-1)}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigate(1)}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Fechar"
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-2 text-center text-white/70 text-xs">
                {lightboxIndex + 1} de {photos.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
