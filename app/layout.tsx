import { Poppins, Inter } from "next/font/google"
import "./globals.css"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "next-themes"
import { WhatsAppButton } from "@/components/whatsapp-button"
import TopBar from "@/components/layout/TopBar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`
          ${poppins.variable}
          ${inter.variable}
          font-body
          bg-background
          text-foreground
          antialiased
          min-h-screen
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* APP WRAPPER */}
          <div className="flex min-h-screen flex-col">

            {/* TOPO */}
            <TopBar />

            {/* HEADER */}
            <Header />

            {/* CONTEÚDO */}
            <main className="flex-1">
              {children}
            </main>

            {/* FLOAT ACTION */}
            <WhatsAppButton />

            {/* FOOTER */}
            <Footer />

          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}