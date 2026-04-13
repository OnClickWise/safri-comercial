"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Logo } from "../logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card mt-24">

      {/* CONTAINER */}
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-20">

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* EMPRESA */}
          <div>
            <Logo />

            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              A SAFRI é uma empresa angolana com mais de 25 anos de experiência,
              atuando em sectores estratégicos como comércio, indústria, logística,
              construção e investimento, garantindo execução eficiente e resultados consistentes.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              <SocialIcon href="https://facebook.com">
                <Facebook size={18} />
              </SocialIcon>

              <SocialIcon href="https://instagram.com">
                <Instagram size={18} />
              </SocialIcon>

              <SocialIcon href="https://linkedin.com">
                <Linkedin size={18} />
              </SocialIcon>
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">
              Navegação
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><FooterLink href="/">Início</FooterLink></li>
              <li><FooterLink href="/empresa">Empresa</FooterLink></li>
              <li><FooterLink href="/setores">Sectores</FooterLink></li>
              <li><FooterLink href="/projetos">Projetos</FooterLink></li>
              <li><FooterLink href="/contacto">Contacto</FooterLink></li>
            </ul>
          </div>

          {/* SECTORES */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">
              Sectores
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Comércio Geral</li>
              <li>Transportes & Logística</li>
              <li>Indústria (SAFRI-METAL)</li>
              <li>Importação & Comércio Internacional</li>
              <li>Construção & Obras Públicas</li>
              <li>Agro-Pecuária</li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">
              Contacto
            </h4>

            <ul className="space-y-4 text-sm text-muted-foreground">

              {/* TELEFONE */}
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-[2px]" />
                <a
                  href="tel:+244248200287"
                  className="hover:text-primary transition"
                >
                  +244 248 200 287
                </a>
              </li>

              {/* WHATSAPP */}
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-primary mt-[2px]" />
                <a
                  href="https://wa.me/244248200287"
                  target="_blank"
                  className="hover:text-primary transition"
                >
                  WhatsApp Comercial
                </a>
              </li>

              {/* EMAIL */}
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-[2px]" />
                <a
                  href="mailto:safri@safri.co.ao"
                  className="hover:text-primary transition"
                >
                  safri@safri.co.ao
                </a>
              </li>

              {/* ENDEREÇO */}
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-[2px]" />
                <span>
                  Estrada Nacional N.250, Chissindo<br />
                  Angola
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 sm:px-8 lg:px-12 xl:px-16 py-6 text-sm text-muted-foreground">

          <p>
            © {new Date().getFullYear()} SAFRI. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a className="hover:text-primary transition cursor-pointer">
              Política de Privacidade
            </a>

            <a className="hover:text-primary transition cursor-pointer">
              Termos de Uso
            </a>
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

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition"
    >
      {children}
    </Link>
  );
}