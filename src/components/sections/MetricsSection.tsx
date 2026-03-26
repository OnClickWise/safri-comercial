import { metrics } from "@/lib/data";

export function MetricsSection() {
  return (
    <section className="border-y border-[var(--card-border)] bg-[var(--background-alt)] py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 md:grid-cols-3 md:px-6">
        {metrics.map((item) => (
          <article key={item.label} className="rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 text-center shadow-lg">
            <p className="text-3xl font-extrabold text-[var(--safri-red-light)]">{item.value}</p>
            <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
