import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { contacts } from "@/lib/data";

const projects = [
  {
    title: "Expansão de Infraestrutura Comercial",
    description: "Ampliação da rede de armazenagem e pontos de distribuição no Bié e Huambo.",
  },
  {
    title: "Projeto Educacional Ndunduma",
    description: "Estruturação e crescimento da capacidade educacional para mais de 3.600 alunos.",
  },
  {
    title: "Desenvolvimento SAFRI-METAL",
    description: "Fortalecimento industrial com foco em produção metálica e suporte ao agronegócio.",
  },
];

export default function ProjetosPage() {
  return (
    <main>
      <PageHero
        title="Projetos Estratégicos"
        description="Conheça iniciativas da SAFRI que geram impacto econômico, educacional e industrial em Angola."
        image="/banners/used/africa-network.jpg"
      />

      <section className="mx-auto w-full max-w-6xl space-y-6 px-4 py-16 md:px-6 md:py-24">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-lg md:p-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">{project.title}</h2>
            <p className="mt-3 leading-8 text-[var(--text-secondary)]">{project.description}</p>
            <Link
              href={`https://wa.me/${contacts.whatsapp}`}
              target="_blank"
              className="mt-5 inline-flex rounded-lg bg-[var(--safri-red)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--safri-red-dark)]"
            >
              Falar sobre este projeto
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
