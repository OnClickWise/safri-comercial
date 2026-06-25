import { LojaHeader } from "@/components/loja/layout/loja-header"
import { Footer } from "@/components/layout/footer"

export default function LojaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <LojaHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
