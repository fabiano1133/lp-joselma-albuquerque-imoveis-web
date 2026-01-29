// Google Analytics Configuration
export const GA_MEASUREMENT_ID = "G-VC23VP75EM";

// Função para inicializar o Google Analytics
export function initGA() {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
}

// Função para trackear eventos customizados
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Função para trackear conversões (formulário enviado)
export function trackConversion() {
  trackEvent("conversion", "form", "formulario_contato_enviado", 1);
}

// Função para trackear cliques em botões
export function trackButtonClick(buttonName: string) {
  trackEvent("click", "button", buttonName);
}

/** Métodos de compartilhamento (usado no botão flutuante) */
export type ShareMethod = "whatsapp" | "copy_link" | "native";

/**
 * Envia evento de compartilhamento para o dataLayer (GTM) e para o gtag (GA4).
 * No GTM: crie um Acionador → Tipo "Evento personalizado" → Nome do evento: "share_click".
 * Use a variável "share_method" (Variável do Layer de Dados) para segmentar ou enviar ao Google Ads.
 */
export function trackShare(method: ShareMethod) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "share_click",
    share_method: method,
    event_category: "share",
    event_label: method,
    page_url: window.location.href,
  });
  trackEvent("share", "share", method);
}

// Função para trackear visualizações de seções
export function trackSectionView(sectionName: string) {
  trackEvent("view", "section", sectionName);
}

// Declaração de tipos para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
