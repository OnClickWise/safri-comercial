export function BannerSlotsSection() {
  return (
    <section id="banners" className="bg-white py-14">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red)]">Espaço para Mídia</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[var(--safri-blue)] md:text-4xl">Banners institucionais</h2>
          </div>
          <p className="hidden text-xs font-semibold text-slate-500 md:block">Substituir os blocos por imagens WebP via next/image</p>
        </div>

        <div className="grid gap-4">
          <div className="flex aspect-[16/6] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-[var(--off-white)] p-4 text-center shadow-sm">
            <div>
              <p className="text-sm font-bold text-slate-700">Banner Principal</p>
              <p className="mt-1 text-xs text-slate-500">Resolução sugerida: 1920x720 (WebP)</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex aspect-[16/7] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-[var(--off-white)] p-4 text-center shadow-sm">
              <div>
                <p className="text-sm font-bold text-slate-700">Banner Secundario A</p>
                <p className="mt-1 text-xs text-slate-500">Resolução sugerida: 1200x525 (WebP)</p>
              </div>
            </div>

            <div className="flex aspect-[16/7] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-[var(--off-white)] p-4 text-center shadow-sm">
              <div>
                <p className="text-sm font-bold text-slate-700">Banner Secundario B</p>
                <p className="mt-1 text-xs text-slate-500">Resolução sugerida: 1200x525 (WebP)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
