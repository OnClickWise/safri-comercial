import { LojaHeroCarousel } from "@/components/loja/banners/hero-carousel"
import { CategoryMenu } from "@/components/loja/layout/category-menu"
import { FeaturedProducts } from "@/components/loja/product/featured-products"
import { TabularProducts } from "@/components/loja/product/tabular-products"
import { FeaturesBar } from "@/components/loja/sections/features-bar"
import { PromoBanner } from "@/components/loja/sections/promo-banner"
import { BrandsSection } from "@/components/loja/sections/brands-section"
import { TopCategories } from "@/components/loja/sections/top-categories"

export default function LojaPage() {
  return (
    <main>
      <LojaHeroCarousel />
      <CategoryMenu />
      <FeaturedProducts />
      <TabularProducts />
      <FeaturesBar />
      <PromoBanner />
      <BrandsSection />
      <TopCategories />
    </main>
  )
}
