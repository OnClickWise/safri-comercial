import Link from "next/link";

export function PageSummaries() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-md md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red)]">Resumo do Site</p>
        <h2 className="mt-3 text-2xl font-extrabold text-[var(--foreground)] md:text-3xl">Tudo em um só lugar</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">
          A home reúne os principais acessos da SAFRI: quem somos em <strong>/sobre</strong>, serviços em <strong>/arrows</strong>,
          áreas de atuação em <strong>/areas</strong>, projetos em <strong>/projetos</strong>, galeria em <strong>/galeria</strong> e
          atendimento em <strong>/contato</strong>.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/sobre"
            className="rounded-lg border border-[var(--card-border)] bg-[var(--background)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--safri-red)]"
          >
            Sobre
          </Link>
          <Link
            href="/arrows"
            className="rounded-lg border border-[var(--card-border)] bg-[var(--background)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--safri-red)]"
          >
            Arrows
          </Link>
          <Link
            href="/projetos"
            className="rounded-lg border border-[var(--card-border)] bg-[var(--background)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--safri-red)]"
          >
            Projetos
          </Link>
          <Link
            href="/contato"
            className="rounded-lg bg-[var(--safri-blue)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--safri-blue-dark)]"
          >
            Falar com a equipe
          </Link>
        </div>
      </div>
    </section>
  );
}
