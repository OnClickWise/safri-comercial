"use client"
import { useState, useCallback, useEffect, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const TOTAL_PHOTOS = 24
const PER_PAGE = 12

const photos = Array.from({ length: TOTAL_PHOTOS }, (_, i) => ({
  src: `/images/galeria/foto-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Galeria SAFRI — foto ${i + 1}`,
}))

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
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={photo.alt}
              >
                <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                  <span className="text-white/40 text-xs font-mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
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
              <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                <span className="text-white/40 text-sm">Foto {lightboxIndex + 1} de {photos.length}</span>
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
                {photos[lightboxIndex].alt}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
