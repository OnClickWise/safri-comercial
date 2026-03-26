import Link from "next/link";
import { contacts } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--card-border)] bg-[var(--background)] pt-28 md:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(211,47,47,0.18),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(0,71,171,0.14),transparent_32%)]" />
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red)]">SAFRI Comercial</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-[var(--foreground)] md:text-6xl">
          Soluções multissetoriais para o crescimento sustentável de Angola.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
          Mais de 25 anos de experiência em comércio, logística, indústria, educação e agro-pecuária,
          com execução confiável e compromisso com resultados.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contato" className="rounded-lg bg-[var(--safri-red)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--safri-red-dark)]">
            Solicitar proposta
          </Link>
          <Link
            href={`https://wa.me/${contacts.whatsapp}`}
            target="_blank"
            className="rounded-lg border border-[var(--card-border)] bg-[var(--off-white)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--safri-red)]"
          >
            Falar no WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
