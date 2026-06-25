"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { NAV_ITEMS, CONTACTS, SOCIAL, COMPANY } from "@/lib/constants"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Topbar */}
      <div className="hidden md:block bg-secondary text-white text-xs py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-white/70">
            <span>NIF: {COMPANY.nif}</span>
            <span>|</span>
            <span>Servindo Angola com excelência desde 1999</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${CONTACTS.phone2}`} className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="h-3 w-3" />
              {CONTACTS.phone2}
            </a>
            <a href={`mailto:${CONTACTS.email}`} className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="h-3 w-3" />
              {CONTACTS.email}
            </a>
            <div className="flex items-center gap-2 ml-2">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-white/70">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 dark:bg-background/95 backdrop-blur shadow-md"
            : "bg-white dark:bg-background shadow-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-primary">S</span>
                <span className="text-secondary dark:text-white">AFRI</span>
              </span>
              <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">
                Comercial, Lda.
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.label}
                    {"dropdown" in item && <ChevronDown className="h-3 w-3 opacity-60" />}
                  </Link>
                  {"dropdown" in item && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-1 z-50 min-w-[200px]">
                      <div className="bg-card rounded-xl shadow-xl border border-border overflow-hidden">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/loja"
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Catálogo
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="lg:hidden p-2 rounded-md hover:bg-muted" aria-label="Abrir menu">
                  <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/" onClick={() => setOpen(false)} className="flex flex-col leading-none">
                      <span className="text-xl font-black">
                        <span className="text-primary">S</span>
                        <span className="text-secondary">AFRI</span>
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Comercial, Lda.</span>
                    </Link>
                    <button onClick={() => setOpen(false)} aria-label="Fechar menu">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    {NAV_ITEMS.map((item) => (
                      <div key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block px-3 py-2.5 rounded-md font-medium text-sm transition-colors",
                            pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-muted hover:text-primary"
                          )}
                        >
                          {item.label}
                        </Link>
                        {"dropdown" in item && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                  <div className="p-4 border-t">
                    <Link
                      href="/loja"
                      onClick={() => setOpen(false)}
                      className="block w-full text-center rounded-full bg-primary py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                    >
                      Ver Catálogo
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
