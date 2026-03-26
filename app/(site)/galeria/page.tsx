import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { contacts } from "@/lib/data";

const images = [
  "/banners/used/leadership-team.jpg",
  "/banners/used/warehouse-operations.jpg",
  "/banners/used/metal-fabrication.jpg",
  "/banners/used/africa-network.jpg",
  "/banners/used/agro-drone.jpg",
  "/banners/Design%20sem%20nome.png",
];

export default function GaleriaPage() {
  return (
    <main>
      <PageHero
        title="Galeria Institucional"
        description="Registros visuais das operações, liderança e áreas estratégicas da SAFRI."
        image="/banners/used/leadership-team.jpg"
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div key={image} className="relative h-56 overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] shadow-md md:h-64">
              <Image src={image} alt="Galeria SAFRI" fill className="object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`https://wa.me/${contacts.whatsapp}`}
            target="_blank"
            className="inline-flex rounded-lg bg-[var(--safri-red)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--safri-red-dark)]"
          >
            Solicitar apresentação completa
          </Link>
        </div>
      </section>
    </main>
  );
}
