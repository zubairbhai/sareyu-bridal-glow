import { BRAND } from "@/lib/site-data";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href={BRAND.whatsappBook}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary text-primary-foreground shadow-elegant hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
      <MessageCircle className="w-6 h-6 relative" />
    </a>
  );
}