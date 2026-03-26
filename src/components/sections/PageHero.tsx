import Image from "next/image";

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
};

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--card-border)] pt-28 md:pt-36">
      <Image src={image} alt={title} fill className="pointer-events-none object-cover" />
      <div className="absolute inset-0 bg-slate-950/72" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/72 to-slate-950/38" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
        <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-red-200 backdrop-blur">
          SAFRI Comercial
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-200 md:text-lg">{description}</p>
      </div>
    </section>
  );
}
