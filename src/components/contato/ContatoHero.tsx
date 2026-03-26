import Image from "next/image";

export default function ContatoHero() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 px-8 dark:bg-slate-900 md:px-16">
      <Image
        src="/safri-metal.png"
        alt="SAFRI"
        width={800}
        height={800}
        className="pointer-events-none absolute bottom-0 right-0 opacity-10 dark:opacity-20"
      />

      <div className="relative z-10 max-w-xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Contato Comercial</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 dark:text-slate-100 md:text-5xl">SAFRI Comercial, Lda.</h1>

        <p className="mt-6 text-base text-gray-600 dark:text-slate-300 md:text-lg">
          Mais de 25 anos contribuindo para o desenvolvimento industrial e econômico de Angola.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 text-gray-800 dark:text-slate-200">
          <div>
            <p className="text-2xl font-bold text-red-600">+25</p>
            <p className="text-sm">anos de experiência</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-red-600">+10.000m²</p>
            <p className="text-sm">infraestrutura</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-red-600">8</p>
            <p className="text-sm">áreas de atuação</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-red-600">3</p>
            <p className="text-sm">províncias</p>
          </div>
        </div>

        <a href="#mapa">
          <button className="mt-10 bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 dark:bg-[var(--safri-red)] dark:hover:bg-[var(--safri-red-dark)]">
            Conheça Nossos Endereços
          </button>
        </a>
      </div>
    </div>
  );
}