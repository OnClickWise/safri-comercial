import LojaHeader from "@/components/loja/layout/loja-header"

export default function LojaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <LojaHeader />
      {children}
    </div>
  )
}