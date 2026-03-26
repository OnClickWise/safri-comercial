import Image from "next/image";
import { companyInfo } from "@/lib/data";

export function CeoMessage() {
  return (
    <section id="direcao" className="bg-[var(--background)] py-18">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <article className="overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--off-white)] shadow-2xl">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative min-h-[460px] md:min-h-[620px]">
              <Image
                src="/banners/Design%20sem%20nome.png"
                alt="Foto da direção da SAFRI"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <p className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                Diretoria Executiva
              </p>
            </div>

            <div className="p-7 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red-light)]">Mensagem da Direção</p>
              <h3 className="mt-3 text-2xl font-black text-[var(--foreground)] md:text-3xl">Visão estratégica para o futuro da SAFRI</h3>
              <blockquote className="mt-5 border-l-4 border-[var(--safri-red-light)] pl-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                &ldquo;{companyInfo.ceoMessage}&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-bold text-[var(--foreground)]">{companyInfo.ceoName}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
