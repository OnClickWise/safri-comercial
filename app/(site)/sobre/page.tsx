import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { companyInfo } from "@/lib/data";

export default function SobrePage() {
  return (
    <main>
      <PageHero
        title="Sobre a SAFRI Comercial"
        description="Um grupo empresarial multissetorial com mais de 25 anos de experiência, comprometido com qualidade, eficiência e desenvolvimento sustentável de Angola."
        image="/banners/used/leadership-team.jpg"
      />

      <section className="mx-auto grid w-full max-w-6xl gap-14 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] shadow-xl">
            <div className="relative h-[420px] w-full md:h-[560px]">
              <Image src="/banners/Design%20sem%20nome.png" alt={companyInfo.ceoName} fill className="object-cover object-top" />
            </div>
            <div className="border-t border-[var(--card-border)] p-5">
              <p className="text-lg font-bold text-[var(--foreground)]">{companyInfo.ceoName}</p>
              <p className="text-sm text-[var(--text-secondary)]">Direção Executiva</p>
            </div>
          </div>
        </div>

        <div className="order-1 space-y-8 md:order-2">
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">Quem Somos</h2>
            <p className="mt-4 leading-8 text-[var(--text-secondary)]">{companyInfo.legalName}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">Missão</h3>
            <p className="mt-2 leading-8 text-[var(--text-secondary)]">{companyInfo.mission}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">Visão</h3>
            <p className="mt-2 leading-8 text-[var(--text-secondary)]">{companyInfo.vision}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">Valores</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-[var(--text-secondary)] sm:grid-cols-2">
              {companyInfo.values.map((value) => (
                <li key={value} className="rounded-lg border border-[var(--card-border)] bg-[var(--background-alt)] px-3 py-2 text-sm font-medium">
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div id="direcao" className="rounded-xl border border-[var(--card-border)] bg-[var(--off-white)] p-5">
            <p className="text-sm uppercase tracking-[0.12em] text-[var(--safri-red)]">Mensagem da Direção</p>
            <blockquote className="mt-3 border-l-4 border-[var(--safri-red)] pl-4 text-sm leading-8 text-[var(--text-secondary)] md:text-base">
              &ldquo;{companyInfo.ceoMessage}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
