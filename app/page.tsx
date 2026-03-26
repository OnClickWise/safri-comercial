import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { BusinessAreas } from "@/components/sections/business-areas";
import { Differentiators } from "@/components/sections/differentiators";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Home estratégica da SAFRI Comercial com resumo das principais páginas, CTAs de alto impacto e rotas orientadas para geração de leads em Angola.",
  keywords: [
    "SAFRI Comercial",
    "empresa em Angola",
    "comércio e logística",
    "serviços industriais",
    "projetos empresariais",
    "captação de leads",
    "contato comercial",
  ],
  openGraph: {
    title: "SAFRI Comercial | Home Estratégica",
    description:
      "Resumo completo das áreas, projetos e páginas da SAFRI com foco em geração de oportunidades comerciais.",
    url: "https://www.safri.co.ao",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SAFRI Comercial, Lda.",
  url: "https://www.safri.co.ao",
  email: "safri@safri.co.ao",
  telephone: "00244 248 200 287",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Diogo Cão",
    addressLocality: "Kuito",
    addressRegion: "Bié",
    addressCountry: "AO",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SAFRI Comercial, Lda.",
  url: "https://www.safri.co.ao",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.safri.co.ao/contato",
    "query-input": "required name=lead",
  },
  hasPart: [
    { "@type": "WebPage", name: "Sobre", url: "https://www.safri.co.ao/sobre" },
    { "@type": "WebPage", name: "Arrows", url: "https://www.safri.co.ao/arrows" },
    { "@type": "WebPage", name: "Áreas", url: "https://www.safri.co.ao/areas" },
    { "@type": "WebPage", name: "Projetos", url: "https://www.safri.co.ao/projetos" },
    { "@type": "WebPage", name: "Galeria", url: "https://www.safri.co.ao/galeria" },
    { "@type": "WebPage", name: "Contato", url: "https://www.safri.co.ao/contato" },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <AboutPreview />
      <BusinessAreas />
      <Differentiators />
      <Cta />
    </main>
  );
}
