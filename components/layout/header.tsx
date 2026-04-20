"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Menu,
  X,
  Store,
} from "lucide-react";

const sectors = [
  {
    title: "Comércio & Importação",
    desc: "Rede comercial, armazéns e fornecimento estratégico",
    image: "/images/services/comercio.jpg",
  },
  {
    title: "Transportes & Logística",
    desc: "Frota pesada e distribuição nacional",
    image: "/images/services/logistica.jpg",
  },
  {
    title: "Indústria (SAFRI-METAL)",
    desc: "Produção de mobiliário e soluções industriais",
    image: "/images/services/industria.jpg",
  },
  {
    title: "Hotelaria & Turismo",
    desc: "Centro turístico e investimentos em lazer",
    image: "/images/services/turismo.jpg",
  },
  {
    title: "Educação & Projetos Académicos",
    desc: "Instituto Superior e formação técnica",
    image: "/images/services/educacao2.jpeg",
  },
  {
    title: "Agro-Pecuária",
    desc: "Produção agrícola e investigação científica",
    image: "/images/services/agro.jpg",
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(sectors[0].image);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl">

      <div className="flex w-full h-16 items-center justify-between px-6 lg:px-12">

        {/* LOGO */}
        <Link href="/">
          <Logo />
        </Link>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-10">

          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                <NavLink href="/">Home</NavLink>
              </NavigationMenuItem>

              {/* EMPRESA */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Empresa</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="w-[280px] p-6 space-y-3">
                    <DropdownLink href="/empresa" label="Sobre a SAFRI" />
                    <DropdownLink href="/empresa#missao" label="Missão, Visão e Valores" />
                    <DropdownLink href="/empresa#direcao" label="Direção" />
                    <DropdownLink href="/empresa#infraestrutura" label="Infraestrutura" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* SETORES COM IMAGEM DINÂMICA */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Áreas de Atuação</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid grid-cols-2 w-[820px]">

                    {/* LEFT */}
                    <div className="p-6 space-y-4">
                      {sectors.map((sector, i) => (
                        <div
                          key={i}
                          onMouseEnter={() => setActiveImage(sector.image)}
                          className="cursor-pointer group"
                        >
                          <h4 className="font-semibold group-hover:text-primary transition">
                            {sector.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {sector.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative h-full min-h-[320px]">
                      <Image
                        src={activeImage}
                        alt="Setor SAFRI"
                        fill
                        className="object-cover transition-all duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                  </div>

                  <div className="border-t p-4">
                    <Link
                      href="/setores"
                      className="text-primary font-semibold hover:underline"
                    >
                      Ver todas as áreas →
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="/galeria">Galeria</NavLink>
              </NavigationMenuItem>

              

              <NavigationMenuItem>
                <NavLink href="/contacto">Contacto</NavLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">

          <ThemeToggle />

          <Link href="/loja" className="hidden md:block">
            <Button className="rounded-full px-6 flex items-center gap-2">
              <Store size={18} />
              Catálogo
            </Button>
          </Link>

          {/* MOBILE BTN */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE */}
      {mobileOpen && (
        <div className="lg:hidden border-t px-6 py-6 space-y-4">
          <MobileLink href="/">Home</MobileLink>
          <MobileLink href="/empresa">Empresa</MobileLink>
          <MobileLink href="/setores">Áreas</MobileLink>
          <MobileLink href="/galeria">Galeria</MobileLink>

          <MobileLink href="/contacto">Contacto</MobileLink>
          <MobileLink href="/loja" className="hidden md:block">
            <Button className="rounded-full px-6 flex items-center gap-2">
              <Store size={18} />
              Catálogo
            </Button>
          </MobileLink>
        </div>
      )}
    </header>
  );
}

/* COMPONENTES */

function NavLink({ href, children }: any) {
  return (
    <Link href={href} className="text-sm font-medium hover:text-primary transition">
      {children}
    </Link>
  );
}

function DropdownLink({ href, label }: any) {
  return (
    <Link href={href} className="block text-sm text-muted-foreground hover:text-primary transition">
      {label}
    </Link>
  );
}

function MobileLink({ href, children }: any) {
  return (
    <Link href={href} className="block text-base font-medium">
      {children}
    </Link>
  );
}