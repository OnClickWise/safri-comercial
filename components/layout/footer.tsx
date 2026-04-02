"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Logo } from "../logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card mt-24">
      {/* CONTAINER */}

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* EMPRESA */}

          <div>
            <Logo />

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Empresa angolana com mais de 25 anos de experiência,
              impulsionando o desenvolvimento económico através de
              soluções integradas em comércio, indústria, logística
              e investimento estratégico.
            </p>

            {/* SOCIAL */}

            <div className="flex gap-3 mt-6">
              <SocialIcon>
                <Facebook size={18} />
              </SocialIcon>

              <SocialIcon>
                <Instagram size={18} />
              </SocialIcon>

              <SocialIcon>
                <Linkedin size={18} />
              </SocialIcon>
            </div>
          </div>

          {/* NAVEGAÇÃO */}

          <div>
            <h4 className="font-semibold text-foreground mb-5">Navegação</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <FooterLink href="/">Início</FooterLink>
              </li>

              <li>
                <FooterLink href="/empresa">Empresa</FooterLink>
              </li>

              <li>
                <FooterLink href="/setores">Sectores</FooterLink>
              </li>

              <li>
                <FooterLink href="/projetos">Projetos</FooterLink>
              </li>

              <li>
                <FooterLink href="/contacto">Contacto</FooterLink>
              </li>
            </ul>
          </div>

          {/* SECTORES */}

          <div>
            <h4 className="font-semibold text-foreground mb-5">Sectores</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Comércio Geral</li>
              <li>Transportes & Logística</li>
              <li>Indústria (SAFRI-METAL)</li>
              <li>Importação</li>
              <li>Construção & Obras Públicas</li>
              <li>Agro-Pecuária</li>
            </ul>
          </div>

          {/* CONTACTO */}

          <div>
            <h4 className="font-semibold text-foreground mb-5">Contacto</h4>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />

                <a
                  href="https://wa.me/244923019166"
                  target="_blank"
                  className="hover:text-primary transition"
                >
                  WhatsApp: +244 923 019 166
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                geral@safri.ao
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                Angola • Presença Nacional
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:px-16 py-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} SAFRI. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a className="hover:text-primary transition">
              Política de Privacidade
            </a>

            <a className="hover:text-primary transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* COMPONENTES AUXILIARES */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="hover:text-primary transition">
      {children}
    </Link>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition cursor-pointer">
      {children}
    </div>
  );
}