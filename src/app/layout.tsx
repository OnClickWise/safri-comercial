import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SAFRI Comercial, Lda. — Soluções Industriais em Angola",
  description:
    "Mais de 25 anos a executar projetos de grande escala. Comércio, Logística, Indústria, Importação e Agro-Pecuária em Angola.",
  keywords: ["SAFRI", "Angola", "Kuito", "Bié", "comércio", "logística", "industria", "importação"],
  openGraph: {
    title: "SAFRI Comercial, Lda.",
    description: "Parceiro estratégico para projetos de grande escala em Angola.",
    locale: "pt_AO",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
