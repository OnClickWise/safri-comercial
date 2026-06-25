import Link from "next/link"
import { Phone, MessageCircle, Mail, MapPin, ExternalLink } from "lucide-react"
import { COMPANY, CONTACTS, SOCIAL, SECTORS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Empresa */}
          <div>
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-primary">S</span>
                <span className="text-white">AFRI</span>
              </span>
              <span className="text-[10px] font-medium text-white/50 uppercase tracking-wider">Comercial, Lda.</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {COMPANY.description}
            </p>
            <p className="text-xs text-white/40 mb-4">NIF: {COMPANY.nif}</p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook SAFRI"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2 — Navegação */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Início", href: "/" },
                { label: "Empresa", href: "/empresa" },
                { label: "Áreas de Atuação", href: "/setores" },
                { label: "Galeria", href: "/galeria" },
                { label: "Visitantes", href: "/visitantes" },
                { label: "Projectos", href: "/projetos" },
                { label: "Contacto", href: "/contacto" },
                { label: "Catálogo", href: "/loja" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Sectores */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">Sectores</h4>
            <ul className="space-y-2.5">
              {SECTORS.map((s) => (
                <li key={s.id}>
                  <Link href={`/setores#${s.id}`} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-white/60">
                  <div>{CONTACTS.phone1}</div>
                  <div>{CONTACTS.phone2}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a
                  href={`https://wa.me/${CONTACTS.whatsappCommercialRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  {CONTACTS.whatsappCommercial}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${CONTACTS.email}`} className="text-sm text-white/60 hover:text-primary transition-colors">
                  {CONTACTS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">{CONTACTS.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SAFRI Comercial, Lda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacidade" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
