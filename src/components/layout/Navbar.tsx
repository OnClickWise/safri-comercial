"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Building2, ChevronDown, Factory, Handshake, Landmark, Menu, Truck, Wrench, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (y / total) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/25 bg-[var(--background)]/72 shadow-[0_14px_42px_rgba(8,16,32,0.16)] backdrop-blur-2xl transition-all duration-500">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2.5 transition-all duration-500 md:px-8">
        <Link href="/" className="group inline-flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="SAFRI Comercial Logo"
            width={220}
            height={80}
            className="h-12 w-auto rounded-sm transition-all duration-500"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] lg:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2.5 transition hover:bg-white/65 hover:text-[var(--foreground)]"
          >
            Home
          </Link>

          <div className="group relative">
            <button className="inline-flex items-center gap-1 rounded-full px-4 py-2.5 transition hover:bg-white/65 hover:text-[var(--foreground)]">
              Empresa
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="pointer-events-none absolute left-0 top-full z-30 w-72 pt-3 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="translate-y-2 rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)]/95 p-3 shadow-2xl backdrop-blur transition duration-300 group-hover:translate-y-0">
                <Link href="/sobre" className="block rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">Sobre Nós</Link>
                <Link href="/sobre#direcao" className="block rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">Diretoria</Link>
                <Link href="/projetos" className="block rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">Projetos</Link>
                <Link href="/galeria" className="block rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">Galeria</Link>
                <Link href="/contato" className="block rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">Contacto</Link>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="inline-flex items-center gap-1 rounded-full px-4 py-2.5 transition hover:bg-white/65 hover:text-[var(--foreground)]">
              Serviços
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full z-30 w-[620px] -translate-x-1/2 pt-3 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="translate-y-2 rounded-2xl border border-[var(--card-border)] bg-[var(--off-white)]/95 p-5 shadow-2xl backdrop-blur transition duration-300 group-hover:translate-y-0">
                <div className="grid grid-cols-2 gap-3 text-[var(--text-secondary)]">
                  <Link href="/arrows" className="flex items-center gap-2 rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]"><Building2 className="h-4 w-4" /> Comércio & Fornecimento</Link>
                  <Link href="/arrows" className="flex items-center gap-2 rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]"><Truck className="h-4 w-4" /> Logística & Transportes</Link>
                  <Link href="/arrows" className="flex items-center gap-2 rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]"><Factory className="h-4 w-4" /> Indústria (SAFRI-METAL)</Link>
                  <Link href="/arrows" className="flex items-center gap-2 rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]"><Landmark className="h-4 w-4" /> Projeto Educacional</Link>
                  <Link href="/arrows" className="flex items-center gap-2 rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]"><Wrench className="h-4 w-4" /> Soluções Técnicas</Link>
                  <Link href="/arrows" className="flex items-center gap-2 rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]"><Handshake className="h-4 w-4" /> Parcerias Estratégicas</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Link href="/contato" className="hidden sm:inline-flex">
            <Button className="rounded-full bg-[#024f3c] px-7 shadow-lg shadow-[#024f3c]/30 transition hover:-translate-y-0.5 hover:bg-[#03624a]">Solicitar Proposta</Button>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--card-border)] bg-[var(--off-white)] text-[var(--foreground)] transition hover:border-[var(--safri-red)] lg:hidden"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-slate-950/40" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute left-0 right-0 top-full z-50 border-b border-[var(--card-border)] bg-[var(--off-white)]/95 p-4 shadow-2xl backdrop-blur-xl">
            <nav className="grid gap-2 text-sm font-semibold text-[var(--text-secondary)]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">
                Home
              </Link>
              <Link href="/sobre" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">
                Sobre Nós
              </Link>
              <Link href="/arrows" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">
                Arrows
              </Link>
              <Link href="/areas" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">
                Áreas
              </Link>
              <Link href="/projetos" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">
                Projetos
              </Link>
              <Link href="/galeria" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">
                Galeria
              </Link>
              <Link href="/contato" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2.5 transition hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]">
                Contato
              </Link>
            </nav>

            <Link href="/contato" onClick={() => setMobileMenuOpen(false)} className="mt-3 inline-flex w-full">
              <Button className="w-full rounded-xl bg-[#024f3c] py-3 text-center shadow-lg shadow-[#024f3c]/30 hover:bg-[#03624a]">
                Solicitar Proposta
              </Button>
            </Link>
          </div>
        </div>
      ) : null}

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[var(--safri-red)] via-[var(--safri-blue)] to-[var(--accent)] transition-[width] duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
