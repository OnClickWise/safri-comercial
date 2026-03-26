import { metrics, companyInfo } from "@/lib/data";

export function Differentiators() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-8 rounded-3xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 md:grid-cols-2 md:p-10">
        <div>
          <h2 className="text-3xl font-extrabold text-[var(--foreground)] md:text-4xl">Nossos números</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-[var(--card-border)] bg-[var(--background)] p-4">
                <p className="text-2xl font-black text-[var(--safri-red)]">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[var(--text-secondary)]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[var(--foreground)]">Valores</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {companyInfo.values.map((value) => (
              <li key={value} className="rounded-full border border-[var(--card-border)] bg-[var(--background)] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)]">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
