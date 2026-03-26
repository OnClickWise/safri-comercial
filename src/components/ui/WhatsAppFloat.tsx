import { MessageCircle } from "lucide-react";
import { contacts } from "@/lib/data";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${contacts.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#11a167] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#11a167]/40 transition hover:-translate-y-0.5 hover:bg-[#0f8f5b]"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </a>
  );
}
