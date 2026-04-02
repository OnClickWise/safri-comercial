"use client";

import Link from "next/link";
import { useState } from "react";

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
  Building2,
  Truck,
  Factory,
  Wheat,
  Hammer,
  Settings,
  Menu,
  X,
  Globe,
  GraduationCap,
  Store,
} from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      
      <div className="flex w-full h-16 items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-16">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">

              <NavigationMenuItem>
                <NavLink href="/">Home</NavLink>
              </NavigationMenuItem>

              {/* EMPRESA */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Empresa</NavigationMenuTrigger>

                <NavigationMenuContent className="bg-card border border-border rounded-xl shadow-lg">
                  <div className="w-[260px] p-6 space-y-3">
                    <DropdownLink href="/empresa" label="Sobre a SAFRI" />
                    <DropdownLink href="/empresa#missao" label="Missão, Visão e Valores" />
                    <DropdownLink href="/empresa#direcao" label="Direção & Liderança" />
                    <DropdownLink href="/empresa#infraestrutura" label="Infraestrutura" />
                    <DropdownLink href="/empresa#parceiros" label="Parceiros" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* SETORES */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Setores</NavigationMenuTrigger>

                <NavigationMenuContent className="bg-card border border-border rounded-xl shadow-lg">
                  <div className="grid grid-cols-2 gap-10 p-10 w-[720px]">

                    <Mega
                      icon={Globe}
                      title="Comércio & Importação"
                      items={[
                        "Comércio Geral",
                        "Importação & Distribuição",
                        "Fornecimento Estratégico",
                      ]}
                    />

                    <Mega
                      icon={Truck}
                      title="Logística & Operações"
                      items={[
                        "Transportes",
                        "Gestão Logística",
                        "Distribuição",
                      ]}
                    />

                    <Mega
                      icon={Factory}
                      title="Indústria & Produção"
                      items={[
                        "SAFRI-METAL",
                        "Produção Industrial",
                        "Transformação de Materiais",
                      ]}
                    />

                    <Mega
                      icon={Hammer}
                      title="Construção & Engenharia"
                      items={[
                        "Obras Públicas",
                        "Construção Civil",
                        "Infraestruturas",
                      ]}
                    />

                    <Mega
                      icon={Settings}
                      title="Soluções Técnicas"
                      items={[
                        "Manutenção",
                        "Instalações",
                        "Serviços Técnicos",
                      ]}
                    />

                    <Mega
                      icon={Wheat}
                      title="Agro & Desenvolvimento"
                      items={[
                        "Agro-Pecuária",
                        "Produção Agrícola",
                        "Projetos Sustentáveis",
                      ]}
                    />

                  </div>

                  <div className="border-t border-border p-6">
                    <Link
                      href="/setores"
                      className="text-primary font-semibold hover:underline"
                    >
                      Ver todos os setores →
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="/projetos">Projetos</NavLink>
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

           <Link
            href="#"
            target="_blank"
            className="hidden md:block"
            >
            <Button className="rounded-full px-6 shadow-sm flex items-center gap-2">
              <Store size={18} />
              Visitar à Loja
            </Button>
            </Link>

          {/* MOBILE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col space-y-6 px-6 py-8">
            <MobileLink href="/">Home</MobileLink>
            <MobileLink href="/empresa">Empresa</MobileLink>
            <MobileLink href="/setores">Setores</MobileLink>
            <MobileLink href="/projetos">Projetos</MobileLink>
            <MobileLink href="/galeria">Galeria</MobileLink>
            <MobileLink href="/contacto">Contacto</MobileLink>

            <Link href="#" target="_blank">
              <Button className="w-full rounded-full flex items-center justify-center gap-2">
                <Store size={18} />
                Loja
                </Button>
            </Link>

            <Link href="https://wa.me/244923019166" target="_blank">
              <Button className="w-full rounded-full">
                Solicitar Proposta
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* COMPONENTES AUXILIARES */

function NavLink({ href, children }: any) {
  return (
    <Link href={href} className="text-sm font-medium hover:text-primary transition">
      {children}
    </Link>
  );
}

function DropdownLink({ href, label }: any) {
  return (
    <Link href={href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition">
      {label}
    </Link>
  );
}

function Mega({ icon: Icon, title, items }: any) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-primary" />
        <h4 className="font-semibold">{title}</h4>
      </div>

      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item: string, i: number) => (
          <li key={i} className="hover:text-primary transition cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileLink({ href, children }: any) {
  return (
    <Link href={href} className="text-lg font-medium hover:text-primary transition">
      {children}
    </Link>
  );
}