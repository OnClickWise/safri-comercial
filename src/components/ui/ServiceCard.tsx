import { Store, Truck, Factory, Hotel, ShoppingCart, BookOpen, Leaf } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: string;
};

const iconMap: Record<string, React.ReactNode> = {
  commerce: <Store className="h-8 w-8" />,
  transport: <Truck className="h-8 w-8" />,
  industry: <Factory className="h-8 w-8" />,
  hotel: <Hotel className="h-8 w-8" />,
  import: <ShoppingCart className="h-8 w-8" />,
  education: <BookOpen className="h-8 w-8" />,
  agro: <Leaf className="h-8 w-8" />,
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[var(--safri-red-light)] hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--safri-red-light)]/0 to-[var(--safri-red-light)]/0 transition group-hover:from-[var(--safri-red-light)]/5 group-hover:to-transparent" />

      <div className="relative z-10">
        <div className="inline-flex rounded-lg bg-gradient-to-br from-[var(--safri-red-light)] to-[var(--safri-red)] p-3 text-white">
          {icon ? iconMap[icon as keyof typeof iconMap] : iconMap.commerce}
        </div>

        <h3 className="mt-4 text-lg font-bold text-[var(--foreground)]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>

        <p className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-[var(--safri-red-light)]">
          Unidade de Negócio
          <span className="ml-2 transition group-hover:translate-x-1">→</span>
        </p>
      </div>
    </article>
  );
}
