import { ContatoForm } from "@/components/contato/ContatoForm";
import ContatoHero from "@/components/contato/ContatoHero";
import MapSectionClient from "@/components/contato/MapSectionClient";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContatoPage() {
  return (
    <main className="bg-gradient-to-br from-[#8f0013] via-[#a30018] to-[#7a0012] dark:from-[#2b0b12] dark:via-[#1f1016] dark:to-[#120d14]">
      <div className="grid min-h-screen w-full grid-cols-1 overflow-hidden lg:grid-cols-2">
        <div
          className="
          order-1
          flex
          flex-col
          justify-center
          bg-gradient-to-r from-slate-100 to-slate-200
          dark:from-slate-900 dark:to-slate-800
          px-6
          py-10
          shadow-2xl
          [clip-path:none]
          md:px-10
          lg:order-2
          lg:px-16
          lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_70%)]
        "
        >
          <ContatoForm />
        </div>

        <div
          className="
          order-2
          min-h-[40vh]
          bg-gradient-to-r from-slate-50 to-slate-200
          dark:from-slate-900 dark:to-slate-800
          lg:order-1
          lg:min-h-screen
        "
        >
          <ContatoHero />
        </div>
      </div>

      <div className="bg-white/95 px-6 py-16 backdrop-blur dark:bg-slate-950/92 md:px-10 lg:px-16">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--safri-red)]">Localização</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-800 dark:text-slate-100 md:text-4xl">Nossa Localização</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-300">Visite nossa sede ou entre em contato conosco</p>
        </div>

        <div className="mx-auto h-[320px] w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200 shadow-[0_18px_42px_rgba(15,23,42,0.16)] dark:border-slate-700 dark:shadow-[0_18px_42px_rgba(0,0,0,0.45)] md:h-[420px] lg:h-[470px]" id="mapa">
          <MapSectionClient />
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 md:col-span-6">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <MapPin className="h-5 w-5 text-[var(--safri-red)]" />
              <h3 className="font-semibold">Nossas Unidades</h3>
            </div>

            <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100">Sede Central</p>
                <p className="mt-1">Província do Bié, Cidade do Kuito, Rua Diogo Cão.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100">Filial Huambo</p>
                <p className="mt-1">Cidade de Huambo, Avenida 5 de Outubro.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100">Filial Luanda</p>
                <p className="mt-1">Rua 1° Congresso MPLA, n° 19, 2° Andar, Apt L.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-slate-100">Complexo SAFRI-METAL</p>
                <p className="mt-1">Estrada Nacional N.250, Chissindo.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 md:col-span-3">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <Phone className="h-5 w-5 text-[var(--safri-red)]" />
              <h3 className="font-semibold">Telefone/WhatsApp</h3>
            </div>

            <p className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">+244 248 200 287</p>

            <div className="mt-4 grid gap-2">
              <a
                href="tel:+244248200287"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Ligar agora
              </a>
              <a
                href="https://wa.me/244248200287"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0e9f6e] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0c8b61]"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 md:col-span-3">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <Mail className="h-5 w-5 text-[var(--safri-red)]" />
              <h3 className="font-semibold">Email</h3>
            </div>

            <p className="mt-4 text-base font-medium text-slate-900 dark:text-slate-100">safri@safri.co.ao</p>

            <a
              href="mailto:safri@safri.co.ao"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Enviar email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
