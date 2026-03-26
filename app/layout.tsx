import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.safri.co.ao"),
  title: {
    default: "SAFRI Comercial, Lda.",
    template: "%s | SAFRI Comercial",
  },
  description:
    "Empresa angolana com mais de 25 anos de experiência em comércio geral, transportes, indústria, hotelaria, importação e agro-pecuária.",
  applicationName: "SAFRI Comercial",
  keywords: [
    "SAFRI Comercial",
    "comércio geral",
    "transportes",
    "indústria",
    "hotelaria",
    "importação",
    "agro-pecuária",
    "Angola",
    "Bié",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "https://www.safri.co.ao",
    siteName: "SAFRI Comercial",
    title: "SAFRI Comercial, Lda.",
    description:
      "Soluções multissetoriais com solidez de mais de 25 anos para apoiar o desenvolvimento de Angola.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAFRI Comercial, Lda.",
    description:
      "Soluções multissetoriais com solidez de mais de 25 anos para apoiar o desenvolvimento de Angola.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
