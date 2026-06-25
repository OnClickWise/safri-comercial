import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CONTACTS } from "./constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildWhatsAppLink(message: string, phone: string = CONTACTS.whatsappCommercialRaw): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function buildProductQuoteMessage(productName: string, variant?: string): string {
  return `Olá, gostaria de solicitar cotação para:\n\n• ${productName}${variant ? `\n• Variante: ${variant}` : ""}`
}

export function buildMultiQuoteMessage(
  items: Array<{ name: string; variant?: string; quantity: number }>
): string {
  const lines = items.map(
    (i) => `• ${i.name}${i.variant ? ` (${i.variant})` : ""} x${i.quantity}`
  )
  return `Olá, gostaria de solicitar uma cotação:\n\n${lines.join("\n")}`
}
