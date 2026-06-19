"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">

      {/* TOP ACCENT */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* CONTAINER */}
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-20">

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* EMPRESA */}
          <div>
            <Image
              src="/images/logo-light.png"
              alt="SAFRI Comercial"
              width={120}
              height={40}
              className="object-contain"
            />

            <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-sm">
              A SAFRI é uma empresa angolana com mais de 25 anos de experiência,
              atuando em sectores estratégicos como comércio, indústria, logística,
              construção e investimento, garantindo execução eficiente e resultados consistentes.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-7">
              <SocialIcon href="https://www.facebook.com/share/1CYHXjwSt5/">
                <Facebook size={16} />
              </SocialIcon>

              <SocialIcon href="https://www.instagram.com/safricomercial/">
                <Instagram size={16} />
              </SocialIcon>

              <SocialIcon href="https://linkedin.com">
                <Linkedin size={16} />
              </SocialIcon>
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <h4 className="font-semibold text-white/90 mb-6 text-sm uppercase tracking-widest">
              Navegação
            </h4>

            <ul className="space-y-3 text-sm">
              <li><FooterLink href="/">Início</FooterLink></li>
              <li><FooterLink href="/empresa">Empresa</FooterLink></li>
              <li><FooterLink href="/setores">Sectores</FooterLink></li>
              <li><FooterLink href="/projetos">Projetos</FooterLink></li>
              <li><FooterLink href="/contacto">Contacto</FooterLink></li>
            </ul>
          </div>

          {/* SECTORES */}
          <div>
            <h4 className="font-semibold text-white/90 mb-6 text-sm uppercase tracking-widest">
              Sectores
            </h4>

            <ul className="space-y-3 text-sm text-white/50">
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
            <h4 className="font-semibold text-white/90 mb-6 text-sm uppercase tracking-widest">
              Contacto
            </h4>

            <ul className="space-y-4 text-sm text-white/50">

              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-[2px]" />
                <a href="tel:+244936324116" className="hover:text-white transition">
                  +244 936 324 116
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-primary mt-[2px]" />
                <a
                  href="https://wa.me/244922100548"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  WhatsApp Comercial
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-[2px]" />
                <a href="mailto:safri@safri.co.ao" className="hover:text-white transition">
                  safri@safri.co.ao
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-[2px]" />
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
      <div className="border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 sm:px-8 lg:px-12 xl:px-16 py-6 text-xs text-white/30">

          <p>
            © {new Date().getFullYear()} SAFRI Comercial, Lda. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a className="hover:text-white/60 transition cursor-pointer">
              Política de Privacidade
            </a>

            <a className="hover:text-white/60 transition cursor-pointer">
              Termos de Uso
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-white/50 hover:text-white transition">
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
      className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 hover:border-primary hover:bg-primary hover:text-white transition-all duration-200"
    >
      {children}
    </Link>
  );
}
