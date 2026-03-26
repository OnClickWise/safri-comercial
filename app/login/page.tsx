import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-4 py-12 md:px-6">
      <section className="w-full max-w-xl rounded-lg border border-[var(--card-border)] bg-[var(--off-white)] p-8 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--safri-red)]">Acesso Institucional</p>
        <h1 className="mt-3 text-2xl font-extrabold text-[var(--safri-blue)]">Area em atualizacao</h1>
        <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
          Esta rota de login ainda nao faz parte da versao publica do site institucional. Para atendimento imediato,
          utilize o formulario de contato.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contato">
            <Button>Ir para Contato</Button>
          </Link>
          <Link href="/">
            <Button variant="secondary">Voltar para Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
