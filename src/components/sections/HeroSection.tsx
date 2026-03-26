"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--card-border)] pt-28 md:pt-36">
      <Image
        src="/banners/used/warehouse-operations.jpg"
        alt="Background SAFRI"
        fill
        className="pointer-events-none object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/35" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[var(--safri-red)]/30 blur-[130px]" />
      <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-[var(--safri-blue)]/30 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-red-200 backdrop-blur">
              Solidez + 25 Anos
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] text-white md:text-6xl lg:text-7xl">
              Crescimento<br />
              <span className="text-red-400">Estratégico</span>
              <br />
              em Angola
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Solução multissetorial com expertise em comércio, logística, indústria, turismo, educação e agronegócio.
              Parceiro certo para o crescimento sustentável do seu negócio.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/contato" className="group">
                <Button className="flex items-center gap-2 bg-[var(--safri-red)] text-white shadow-xl shadow-[var(--safri-red)]/30 hover:bg-[var(--safri-red-dark)]">
                  Solicitar Proposta
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="https://wa.me/244248200287" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="border-white/30 bg-white/5 text-white backdrop-blur hover:border-white hover:bg-white/15">
                  Fale no WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block"
          >
            <div className="relative rounded-3xl border border-white/20 bg-slate-950/45 p-8 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">Áreas de Atuação</p>
              <div className="space-y-5">
                <div className="rounded-xl border border-white/15 bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg">
                  <p className="text-sm font-bold text-red-300">Comércio Geral</p>
                  <p className="mt-2 text-xs text-slate-200">6 estabelecimentos • +10.000m²</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg">
                  <p className="text-sm font-bold text-red-300">Logística & Transportes</p>
                  <p className="mt-2 text-xs text-slate-200">Frota própria • Entrega expressa</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg">
                  <p className="text-sm font-bold text-red-300">Educação</p>
                  <p className="mt-2 text-xs text-slate-200">Instituto Politécnico • +3.600 alunos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-16 border-t border-white/20 pt-10 pb-8">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 md:grid-cols-3 md:px-6">
          {[
            { value: "+25", label: "Anos de Experiência" },
            { value: "+10.000m²", label: "Capacidade de Armazenagem" },
            { value: "+3.600", label: "Alunos em Educação" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/20 bg-black/20 p-4 text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-black/30 hover:shadow-lg">
              <p className="text-3xl font-black text-red-300">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
