import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  description: string
  className?: string
}

export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section className={cn("relative bg-secondary py-24 md:py-32", className)}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">{description}</p>
      </div>
    </section>
  )
}
