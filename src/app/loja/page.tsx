import { LojaHeroCarousel } from "@/components/loja/banners/hero-carousel"
import { CategoryMenu } from "@/components/loja/layout/category-menu"
import { FeaturedProducts } from "@/components/loja/product/featured-products"
import { TabularProducts } from "@/components/loja/product/tabular-products"
import { TopCategories } from "@/components/loja/sections/top-categories"
import { InstitutionalBanner } from "@/components/loja/sections/institutional-banner"
import { PromoBanner } from "@/components/loja/sections/promo-banner"
import { FeaturesBar } from "@/components/loja/sections/features-bar"
import { Testimonials } from "@/components/loja/sections/testimonials"
import { Newsletter } from "@/components/loja/sections/newsletter"

export default function LojaPage() {
  return (
    <main>
      <LojaHeroCarousel />
      <CategoryMenu />
      <FeaturedProducts />
      <TopCategories />
      <TabularProducts />
      <InstitutionalBanner />
      <PromoBanner />
      <FeaturesBar />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
