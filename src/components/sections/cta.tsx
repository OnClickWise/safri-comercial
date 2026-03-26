import Link from "next/link";
import { contacts } from "@/lib/data";

export function Cta() {
  return (
    <section className="bg-[var(--safri-red)] py-16 text-white md:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-black md:text-4xl">Pronto para avançar com o seu projeto?</h2>
        <p className="mt-4 text-white/85">Fale com a equipa SAFRI para propostas comerciais, parcerias e soluções sob medida.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contato" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[var(--safri-red)] transition hover:bg-white/90">
            Ir para contato
          </Link>
          <Link href={`https://wa.me/${contacts.whatsapp}`} target="_blank" className="rounded-lg border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Falar no WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
