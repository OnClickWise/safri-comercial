"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X, Store } from "lucide-react"

const sectors = [
  {
    title: "Comércio & Importação",
    desc: "Rede comercial, armazéns e fornecimento estratégico",
    image: "/images/services/comercio.jpg",
  },
  {
    title: "Transportes & Logística",
    desc: "Frota para apoio logístico interno e distribuição nacional",
    image: "/images/services/logistica.jpg",
  },
  {
    title: "Indústria SAFRI-METAL",
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
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(sectors[0].image)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="flex h-[72px] w-full items-center justify-between px-4 sm:px-5 lg:px-6 xl:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Logo />
        </Link>

        <div className="hidden flex-1 items-center justify-center px-6 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
              <NavigationMenuItem>
                <NavLink href="/">Home</NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 text-[13px] font-semibold">
                  Empresa
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="w-[300px] space-y-1 p-4">
                    <DropdownLink href="/empresa" label="Sobre a SAFRI" />
                    <DropdownLink
                      href="/empresa#missao"
                      label="Missão, Visão e Valores"
                    />
                    <DropdownLink href="/empresa#direcao" label="Direção" />
                    <DropdownLink
                      href="/empresa#infraestrutura"
                      label="Infraestrutura"
                    />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 text-[13px] font-semibold">
                  Áreas de Atuação
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="overflow-hidden rounded-xl">
                    <div className="grid w-[860px] grid-cols-[1.05fr_0.95fr]">
                      <div className="space-y-1 p-5">
                        {sectors.map((sector) => (
                          <Link
                            key={sector.title}
                            href="/setores"
                            onMouseEnter={() => setActiveImage(sector.image)}
                            className="group block rounded-xl px-4 py-3 transition hover:bg-muted"
                          >
                            <h4 className="text-[14px] font-semibold leading-snug text-foreground transition group-hover:text-primary">
                              {sector.title}
                            </h4>

                            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                              {sector.desc}
                            </p>
                          </Link>
                        ))}
                      </div>

                      <div className="relative min-h-[350px] overflow-hidden bg-muted">
                        <Image
                          src={activeImage}
                          alt="Setor SAFRI"
                          fill
                          className="object-cover transition-all duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      </div>
                    </div>

                    <div className="border-t border-border bg-card px-6 py-4">
                      <Link
                        href="/setores"
                        className="inline-flex text-[13px] font-semibold text-primary transition hover:underline"
                      >
                        Ver todas as áreas →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="/galeria">Galeria</NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="/visitantes">Visitantes</NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink href="/contacto">Contacto</NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />

          <Link href="/loja" className="hidden md:block">
            <Button className="h-10 rounded-full px-5 text-[13px] font-semibold">
              <Store size={16} />
              Catálogo
            </Button>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-5 sm:px-5 lg:hidden">
          <nav className="flex w-full flex-col gap-1">
            <MobileLink href="/">Home</MobileLink>
            <MobileLink href="/empresa">Empresa</MobileLink>
            <MobileLink href="/setores">Áreas de Atuação</MobileLink>
            <MobileLink href="/galeria">Galeria</MobileLink>
            <MobileLink href="/visitantes">Visitantes</MobileLink>
            <MobileLink href="/contacto">Contacto</MobileLink>

            <Link href="/loja" className="mt-4">
              <Button className="h-11 w-full rounded-full text-sm font-semibold">
                <Store size={17} />
                Catálogo
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-10 items-center rounded-full px-4 text-[13px] font-semibold text-foreground/85 transition hover:bg-muted hover:text-primary"
    >
      {children}
    </Link>
  )
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2.5 text-[13px] font-medium leading-snug text-muted-foreground transition hover:bg-muted hover:text-primary"
    >
      {label}
    </Link>
  )
}

function MobileLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl px-4 py-3 text-[15px] font-semibold text-foreground transition hover:bg-muted hover:text-primary"
    >
      {children}
    </Link>
  )
}