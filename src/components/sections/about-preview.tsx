import Link from "next/link";
import { companyInfo } from "@/lib/data";

export function AboutPreview() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-8 rounded-3xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-xl md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red)]">Sobre a Safri</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--foreground)] md:text-4xl">Quem somos</h2>
          <p className="mt-4 leading-8 text-[var(--text-secondary)]">{companyInfo.legalName}</p>
          <Link href="/sobre" className="mt-6 inline-flex rounded-lg bg-[var(--safri-red)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--safri-red-dark)]">
            Conhecer mais
          </Link>
        </div>

        <div className="space-y-4 rounded-2xl border border-[var(--card-border)] bg-[var(--background)] p-5">
          <h3 className="text-lg font-bold text-[var(--foreground)]">Diferenciais</h3>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">{companyInfo.vision}</p>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">Compromisso com qualidade, eficiência e transparência em todos os projetos.</p>
        </div>
      </div>
    </section>
  );
}
