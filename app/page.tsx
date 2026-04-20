import { AboutPreview } from "@/components/sections/about-preview";
import { BusinessAreas } from "@/components/sections/business-areas";
import { Cta } from "@/components/sections/cta";
import { Differentiators } from "@/components/sections/differentiators";
import { Hero } from "@/components/sections/hero";
//import { Partners } from "@/components/sections/partners";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutPreview />
      <BusinessAreas />
      <Differentiators />
      {/*<Partners />*/}
      <Cta />
    </div>
  );
}
