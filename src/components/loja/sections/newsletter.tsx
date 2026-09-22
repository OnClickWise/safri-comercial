"use client"
import { useState } from "react"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
  }

  return (
    <section className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-secondary text-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4 flex-1">
            <span className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-bold text-base md:text-lg">Receba as nossas novidades e promoções</h3>
              <p className="text-sm text-white/60">Seja o primeiro a saber sobre novos produtos e ofertas.</p>
            </div>
          </div>

          {sent ? (
            <p className="text-sm font-semibold text-white bg-white/10 rounded-full px-5 py-3">
              Obrigado! Entraremos em contacto em breve.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="O seu e-mail"
                className="flex-1 md:w-64 rounded-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 text-sm font-bold hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscrever
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
