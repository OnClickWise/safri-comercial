"use client"
import { MessageCircle } from "lucide-react"
import { buildWhatsAppLink } from "@/lib/utils"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  message: string
  phone?: string | undefined
  label?: string
  variant?: "primary" | "outline" | "ghost"
  className?: string
}

export function WhatsAppButton({
  message,
  phone,
  label = "Falar pelo WhatsApp",
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(message, phone)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200",
        variant === "primary" &&
          "bg-primary text-white hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25",
        variant === "outline" &&
          "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        variant === "ghost" && "text-primary hover:bg-primary/10",
        className
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  )
}
