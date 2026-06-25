import type { Metadata } from "next"
import Link from "next/link"
import { HardHat } from "lucide-react"

export const metadata: Metadata = {
  title: "Projetos & Parcerias — SAFRI Comercial, Lda.",
}

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 mx-auto mb-6">
          <HardHat className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
          Projetos & Parcerias
        </h1>
        <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-primary" />
        <p className="text-white/60 leading-relaxed mb-8">
          Em breve apresentaremos os nossos principais projetos, contratos e parcerias estratégicas. Estamos a preparar este espaço para si.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary/90 hover:scale-105 transition-all shadow-lg"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}
