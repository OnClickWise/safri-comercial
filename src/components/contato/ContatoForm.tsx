"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function ContatoForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, company, subject, message }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };
      if (data.success) {
        setStatus("Mensagem enviada com sucesso.");
        setEmail("");
        setName("");
        setCompany("");
        setSubject("");
        setMessage("");
      } else {
        setStatus(`Erro: ${data.error ?? "Falha ao enviar mensagem."}`);
      }
    } catch {
      setStatus("Erro ao enviar mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full">
      <form onSubmit={handleSubmit} className="mx-auto grid w-full max-w-[720px] items-center gap-5 rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.14)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/75 dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)] md:p-8">
        <h2 className={`${inter.className} text-[40px] font-[600] leading-tight tracking-[-0.02em] text-slate-900 dark:text-slate-100 md:text-[48px]`}>
          Envie sua mensagem
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[var(--safri-red)] focus:ring-4 focus:ring-red-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-red-900/50"
            required
          />

          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[var(--safri-red)] focus:ring-4 focus:ring-red-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-red-900/50"
            required
          />

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[var(--safri-red)] focus:ring-4 focus:ring-red-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-red-900/50"
            required
          />

          <input
            type="text"
            placeholder="Assunto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[var(--safri-red)] focus:ring-4 focus:ring-red-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-red-900/50"
            required
          />
        </div>

        <textarea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[var(--safri-red)] focus:ring-4 focus:ring-red-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-red-900/50"
          required
        />

        <div className="flex w-full justify-end">
          <button
            type="submit"
            className={`
              ${inter.className}
              w-full rounded-xl bg-slate-900 px-6 py-3 text-[13px] font-[600] leading-tight tracking-[-0.02em] text-white
              transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--safri-red)]
              dark:bg-[var(--safri-red)] dark:hover:bg-[var(--safri-red-dark)]
              md:w-auto
              ${loading ? "cursor-not-allowed opacity-70" : ""}
            `}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </div>

        {status ? (
          <p
            className={`mt-4 rounded-lg p-3 text-center ${
              status.includes("sucesso") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </p>
        ) : null}
      </form>

      <span className="mt-4 inline-block text-sm font-medium text-slate-700 dark:text-slate-300">Se preferir ligar: +244 248 200 287</span>
    </main>
  );
}