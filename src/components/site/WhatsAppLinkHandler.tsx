import { useEffect } from "react";
import { labelForAnchor, trackWhatsAppClick } from "@/lib/analytics";

/** Track WhatsApp CTA clicks while leaving navigation to the browser.
 * Native anchor navigation is important here: preview browsers can route an
 * external link to a real tab, while scripted window.open calls may try to
 * render WhatsApp inside the preview frame (which WhatsApp correctly blocks).
 */
export function WhatsAppLinkHandler() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.includes("wa.me")) return;

      trackWhatsAppClick(labelForAnchor(anchor as HTMLAnchorElement), { href });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
