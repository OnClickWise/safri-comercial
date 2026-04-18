import CategoryMenu from "@/components/loja/layout/category-menu";
import HeroCarousel from "@/components/loja/banners/hero-carousel";
import ProductSection from "@/components/loja/product/product-section";

export default function LojaPage() {
  return (
    <div>
      <CategoryMenu />

      <HeroCarousel />

      <ProductSection title="Sacos Industriais" category="sacos" />

      <ProductSection title="Carteiras Escolares" category="carteiras" />

      <ProductSection title="Cadernos Escolares" category="cadernos" />
    </div>
  );
}
