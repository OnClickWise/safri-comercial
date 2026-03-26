import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { services, contacts } from "@/lib/data";

export default function ArrowsPage() {
  return (
    <main>
      <PageHero
        title="Nossas Áreas de Atuação"
        description="A SAFRI atua em múltiplos setores estratégicos com soluções integradas para clientes empresariais e institucionais."
        image="/banners/used/warehouse-operations.jpg"
      />

      <section className="mx-auto w-full max-w-6xl space-y-14 px-4 py-16 md:px-6 md:py-24">
        {services.map((service, index) => (
          <article key={service.title} className="grid gap-8 rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-lg md:grid-cols-2 md:p-8">
            <div className={`${index % 2 === 1 ? "md:order-2" : ""} relative min-h-[220px] overflow-hidden rounded-xl border border-[var(--card-border)]`}>
              <Image
                src={index % 2 === 0 ? "/banners/used/metal-fabrication.jpg" : "/banners/used/agro-drone.jpg"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">{service.title}</h2>
              <p className="mt-4 leading-8 text-[var(--text-secondary)]">{service.description}</p>
              <Link
                href={`https://wa.me/${contacts.whatsapp}`}
                target="_blank"
                className="mt-6 inline-flex rounded-lg bg-[var(--safri-red)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--safri-red-dark)]"
              >
                Solicitar Informações
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
