"use client";

import { companyInfo } from "@/lib/data";
import { Eye, ShieldCheck, Target } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="sobre" className="relative mx-auto w-full max-w-6xl px-4 py-18 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red)]">Identidade Institucional</p>
        <h2 className="mt-2 text-3xl font-extrabold text-[var(--foreground)] md:text-4xl">Visão, missão e valores</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
          Princípios que orientam decisões, execução e impacto da SAFRI em cada setor de atuação.
        </p>
      </motion.div>

      <div className="pointer-events-none absolute left-0 right-0 -z-10 mx-auto hidden h-[220px] max-w-6xl rounded-[48px] bg-gradient-to-r from-[var(--safri-red)]/8 via-white/20 to-[var(--safri-blue)]/10 blur-2xl md:block" />

      <div className="grid gap-5 md:grid-cols-3">
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.5, delay: 0.03 }}
          className="rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-[0_16px_32px_rgba(16,34,62,0.10)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_40px_rgba(16,34,62,0.18)]"
        >
          <div className="mb-4 inline-flex rounded-xl bg-[var(--background-alt)] p-2 text-[var(--safri-red-light)]">
            <Target className="h-5 w-5" />
          </div>
          <div className="mb-4 h-1 w-14 rounded-full bg-[var(--safri-red-light)]" />
          <h2 className="text-lg font-bold text-[var(--foreground)]">Missão</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{companyInfo.mission}</p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-[0_16px_32px_rgba(16,34,62,0.10)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_40px_rgba(16,34,62,0.18)]"
        >
          <div className="mb-4 inline-flex rounded-xl bg-[var(--background-alt)] p-2 text-[var(--safri-blue)]">
            <Eye className="h-5 w-5" />
          </div>
          <div className="mb-4 h-1 w-14 rounded-full bg-[var(--safri-blue)]" />
          <h2 className="text-lg font-bold text-[var(--foreground)]">Visão</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{companyInfo.vision}</p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.5, delay: 0.11 }}
          className="rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)] p-6 shadow-[0_16px_32px_rgba(16,34,62,0.10)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_40px_rgba(16,34,62,0.18)]"
        >
          <div className="mb-4 inline-flex rounded-xl bg-[var(--background-alt)] p-2 text-[var(--safri-red-light)]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="mb-4 h-1 w-14 rounded-full bg-[var(--safri-red-light)]" />
          <h2 className="text-lg font-bold text-[var(--foreground)]">Valores</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {companyInfo.values.map((value) => (
              <li key={value} className="rounded-lg border border-[var(--card-border)] bg-[var(--background-alt)] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)] transition hover:-translate-y-0.5 hover:border-[var(--safri-red-light)]/50 hover:text-[var(--foreground)]">
                {value}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
