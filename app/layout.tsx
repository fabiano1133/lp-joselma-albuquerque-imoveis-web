import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  localBusinessSchema,
  personSchema,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
  articleSchema,
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

// Palavras-chave principais para SEO
const PRIMARY_KEYWORD = "comprar ou alugar imóvel em Belém";
const SECONDARY_KEYWORDS = [
  "imóveis em Belém",
  "corretora de imóveis Belém",
  "consultoria imobiliária Belém",
  "apartamento em Belém",
  "casa em Belém",
  "imóveis à venda Belém",
  "imóveis para alugar Belém",
];

export function generateMetadata(): Metadata {
  const title = `${PRIMARY_KEYWORD} | Joselma Albuquerque CRECI-10611 PA/AP`;
  const description =
    `Corretora de imóveis em Belém, Pará. Especializada em compra e aluguel de imóveis novos e usados. Método estruturado que elimina riscos. Análise criteriosa. Decisão segura. CRECI-10611 PA/AP.`;
  const url = "https://www.joselmaalbuquerqueimv.com.br";
  const ogImage = `${url}/perfil-image-hero.jpeg`;
  const now = new Date();
  const publishedTime = now.toISOString();
  const modifiedTime = now.toISOString();

  return {
    metadataBase: new URL(url),
    title,
    description,
    keywords: getPrioritizedKeywords(),
    authors: [{ name: "Joselma Albuquerque", url }],
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
      url,
      title,
      description,
      siteName: "Joselma Albuquerque Imóveis",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Joselma Albuquerque CRECI-10611 PA/AP - Corretora de Imóveis em Belém, Pará",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@joselmaalbuquerqueimoveis",
    },
    alternates: {
      canonical: url,
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
    other: {
      "google-site-verification": "bPEUITpQl_3tYTZF2i1N5F88qw-lRJQcgCr2MVEZfEE",
      "article:published_time": publishedTime,
      "article:modified_time": modifiedTime,
    },
  };
}

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
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <Script
          id="article-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
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
                page_location: window.location.href,
                send_page_view: true,
                cookie_flags: 'SameSite=None;Secure',
              });
            `,
          }}
        />
        
        {children}
      </body>
    </html>
  );
}
