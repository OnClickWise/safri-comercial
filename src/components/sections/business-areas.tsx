import Link from "next/link";
import { services } from "@/lib/data";

export function BusinessAreas() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red)]">Arrows</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[var(--foreground)] md:text-4xl">Áreas de Atuação</h2>
        </div>
        <Link href="/arrows" className="text-sm font-semibold text-[var(--safri-blue)] hover:underline">Ver todas</Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {services.slice(0, 4).map((service) => (
          <article key={service.title} className="rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-5 shadow-sm">
            <h3 className="text-lg font-bold text-[var(--foreground)]">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
