import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  localBusinessSchema,
  personSchema,
  serviceSchema,
  breadcrumbSchema,
} from "./schema";
import { getPrioritizedKeywords } from "@/lib/seo-keywords";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joselmaalbuquerqueimv.com.br"),
  title: "Compra e Aluguel de Imóveis em Belém | Joselma Albuquerque CRECI-10611 PA/AP",
  description:
    "Corretora de imóveis em Belém, Pará. Método estruturado para compra e aluguel de imóveis novos e usados. Decisão segura, criteriosa e organizada com orientação especializada. CRECI-10611 PA/AP.",
  keywords: getPrioritizedKeywords(),
  authors: [{ name: "Joselma Albuquerque", url: "https://www.joselmaalbuquerqueimv.com.br" }],
  creator: "Joselma Albuquerque CRECI-10611 PA/AP",
  publisher: "Joselma Albuquerque CRECI-10611 PA/AP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.joselmaalbuquerqueimv.com.br",
    title: "Compra e Aluguel de Imóveis em Belém | Joselma Albuquerque CRECI-10611 PA/AP",
    description:
      "Corretora de imóveis em Belém, Pará. Método estruturado para compra e aluguel de imóveis novos e usados. Decisão segura e criteriosa.",
    siteName: "Joselma Albuquerque Imóveis",
    images: [
      {
        url: "/perfil_1.jpg",
        width: 1200,
        height: 630,
        alt: "Joselma Albuquerque CRECI-10611 PA/AP - Corretora de Imóveis em Belém",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compra e Aluguel de Imóveis em Belém | Joselma Albuquerque",
    description:
      "Corretora de imóveis em Belém, Pará. Método estruturado para decisão imobiliária segura e criteriosa.",
    images: ["/perfil_1.jpg"],
  },
  alternates: {
    canonical: "https://www.joselmaalbuquerqueimv.com.br",
  },
  category: "Real Estate",
  classification: "Business",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  verification: {
    google: "bPEUITpQl_3tYTZF2i1N5F88qw-lRJQcgCr2MVEZfEE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}
      >
        {/* Schema.org Structured Data */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        
        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        {children}
      </body>
    </html>
  );
}
