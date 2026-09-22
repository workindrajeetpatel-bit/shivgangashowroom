import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/business";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shivganga Sanitary Ware and Panels on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-4 py-4 text-whatsapp-foreground shadow-[var(--shadow-float)] transition-all duration-300 hover:-translate-y-1 sm:px-5"
    >

      <span
        aria-hidden
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.8s]"
      />
      <MessageCircle className="h-6 w-6" aria-hidden />
      <span className="hidden text-sm font-bold sm:inline">WhatsApp Us</span>
    </a>
  );
}
