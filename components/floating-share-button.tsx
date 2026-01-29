"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { trackShare } from "@/lib/analytics";

const SHARE_TITLE = "Joselma Albuquerque Imóveis - Comprar ou alugar em Belém";
const SHARE_TEXT =
  "Consultoria imobiliária em Belém. Método que elimina riscos. Dá uma olhada:";

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

export function FloatingShareButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const url = typeof window !== "undefined" ? window.location.href : "";
  const canNativeShare =
    typeof navigator !== "undefined" && !!navigator.share;

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  const shareWhatsApp = () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const text = `${SHARE_TEXT} ${currentUrl}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    trackShare("whatsapp");
    setOpen(false);
  };

  const copyLink = async () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    if (!currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      trackShare("copy_link");
      setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1500);
    } catch {
      setOpen(false);
    }
  };

  const nativeShare = async () => {
    try {
      await navigator.share({
        title: SHARE_TITLE,
        text: SHARE_TEXT,
        url,
      });
      trackShare("native");
      setOpen(false);
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        copyLink();
      }
    }
  };

  return (
    <div
      ref={menuRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      aria-label="Compartilhar página"
    >
      {open && (
        <div
          className={cn(
            "mb-2 flex flex-col rounded-xl border border-[#0A2540]/10 bg-white py-2 shadow-lg",
            "min-w-[200px]"
          )}
          role="menu"
        >
          <button
            type="button"
            onClick={shareWhatsApp}
            className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-[#0A2540] transition-colors hover:bg-amber-50"
            role="menuitem"
          >
            <WhatsAppIcon className="text-[#25D366]" />
            <span className="text-sm font-medium">WhatsApp</span>
          </button>
          <button
            type="button"
            onClick={copyLink}
            className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-[#0A2540] transition-colors hover:bg-amber-50"
            role="menuitem"
          >
            <CopyIcon className="text-[#0A2540]" />
            <span className="text-sm font-medium">
              {copied ? "Link copiado!" : "Copiar link"}
            </span>
          </button>
          {canNativeShare && (
            <button
              type="button"
              onClick={nativeShare}
              className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-[#0A2540] transition-colors hover:bg-amber-50"
              role="menuitem"
            >
              <ShareIcon className="h-5 w-5 text-[#0A2540]" />
              <span className="text-sm font-medium">Compartilhar</span>
            </button>
          )}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-lg transition-all",
          "bg-[#C9A14A] text-white hover:bg-[#B8913F] focus:outline-none focus:ring-2 focus:ring-[#C9A14A] focus:ring-offset-2"
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={open ? "Fechar opções de compartilhar" : "Compartilhar esta página"}
      >
        <ShareIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
