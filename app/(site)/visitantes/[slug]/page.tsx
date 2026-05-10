import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays, Images, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getVisitBySlug, visits } from "@/lib/visitas"

type VisitDetailsPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return visits.map((visit) => ({
    slug: visit.slug,
  }))
}

export default async function VisitDetailsPage({
  params,
}: VisitDetailsPageProps) {
  const { slug } = await params
  const visit = getVisitBySlug(slug)

  if (!visit) {
    notFound()
  }

  const Icon = visit.icon

  return (
    <main>
      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image
          src={visit.cover}
          alt={visit.title}
          fill
          priority
          className="object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-6 py-24 lg:px-12">
          <Link
            href="/visitantes"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Voltar para visitantes
          </Link>

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            <Icon size={14} />
            {visit.category}
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {visit.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            {visit.description}
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="h-fit rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h2 className="text-xl font-bold">Resumo da visita</h2>

              <div className="mt-6 space-y-5 text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <Users className="mt-0.5 text-primary" size={18} />
                  <div>
                    <p className="font-semibold text-foreground">Categoria</p>
                    <p>{visit.category}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CalendarDays className="mt-0.5 text-primary" size={18} />
                  <div>
                    <p className="font-semibold text-foreground">
                      Tipo de visita
                    </p>
                    <p>Visita institucional e estratégica</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Images className="mt-0.5 text-primary" size={18} />
                  <div>
                    <p className="font-semibold text-foreground">
                      Registo fotográfico
                    </p>
                    <p>{visit.photos.length} imagens da visita</p>
                  </div>
                </div>
              </div>

              <Link href="https://wa.me/244923019166" target="_blank">
                <Button className="mt-8 w-full">Solicitar contacto</Button>
              </Link>
            </aside>

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Detalhes da visita
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl">
                Um momento de aproximação, confiança e cooperação
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {visit.content}
              </p>

              <div className="mt-10 rounded-3xl border border-border bg-muted/40 p-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  A SAFRI valoriza cada visita como uma oportunidade para demonstrar
                  a sua capacidade operacional, fortalecer relações institucionais e
                  apresentar a sua contribuição para o desenvolvimento económico e
                  social de Angola.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Galeria
                </span>

                <h2 className="mt-3 text-3xl font-bold">Fotos da visita</h2>
              </div>

              <p className="max-w-xl text-sm text-muted-foreground">
                Registos visuais da receção, apresentação das instalações e momentos
                institucionais realizados durante a visita.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visit.photos.map((photo, index) => (
                <div
                  key={photo}
                  className={`relative overflow-hidden rounded-3xl bg-muted shadow-sm ${
                    index === 0 ? "h-[420px] lg:col-span-2" : "h-[300px]"
                  }`}
                >
                  <Image
                    src={photo}
                    alt={`${visit.title} - foto ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}