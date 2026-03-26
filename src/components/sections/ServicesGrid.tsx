import { services } from "@/lib/data";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesGrid() {
  return (
    <section id="servicos" className="bg-[var(--background)] py-18">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red-light)]">Portfólio Oficial</p>
        <h2 className="mt-2 text-3xl font-extrabold text-[var(--foreground)] md:text-4xl">Áreas de Atuação</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
          Portfólio multissetorial com operações em comércio, logística, indústria, turismo, educação e agronegócio.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
