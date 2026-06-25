import { HeroCarousel } from "@/components/home/hero-carousel"
import { AboutSection } from "@/components/home/about-section"
import { SectorsSection } from "@/components/home/sectors-section"
import { DifferentialsSection } from "@/components/home/differentials-section"
import { PartnersSection } from "@/components/home/partners-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <SectorsSection />
      <DifferentialsSection />
      <PartnersSection />
      <CtaSection />
    </>
  )
}
