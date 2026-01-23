// Schema.org Structured Data para SEO e IA
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.joselmaalbuquerqueimv.com.br#business",
  name: "Joselma Albuquerque Imóveis",
  description:
    "Corretora de imóveis em Belém, Pará. Especializada em compra, venda e aluguel de imóveis novos e usados com método estruturado e orientação especializada.",
  image: "https://www.joselmaalbuquerqueimv.com.br/perfil_1.jpg",
  url: "https://www.joselmaalbuquerqueimv.com.br",
  telephone: "+5591985161605",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tv. Dom Romualdo de Seixas, 1476 - Sala 1707",
    addressLocality: "Umarizal",
    addressRegion: "PA",
    postalCode: "66055-200",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-1.4558", // Verificar coordenadas exatas do escritório
    longitude: "-48.5044",
  },
  areaServed: {
    "@type": "City",
    name: "Belém",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  sameAs: [
    "https://www.joselmaalbuquerqueimv.com.br",
  ],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.joselmaalbuquerqueimv.com.br#person",
  name: "Joselma Albuquerque",
  jobTitle: "Corretora de Imóveis",
  description:
    "Corretora de imóveis registrada no CRECI-10611 PA/AP, especializada em consultoria imobiliária com método estruturado para compra, venda e aluguel de imóveis em Belém, Pará.",
  image: "https://www.joselmaalbuquerqueimv.com.br/perfil_1.jpg",
  url: "https://www.joselmaalbuquerqueimv.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belém",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Compra de Imóveis",
    "Venda de Imóveis",
    "Aluguel de Imóveis",
    "Consultoria Imobiliária",
    "Análise de Imóveis",
    "Documentação Imobiliária",
  ],
  memberOf: {
    "@type": "Organization",
    name: "CRECI-PA",
    identifier: "CRECI-10611 PA/AP",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.joselmaalbuquerqueimv.com.br#service",
  name: "Consultoria Imobiliária - Método Decisão Imobiliária Estruturada",
  description:
    "Serviço de consultoria imobiliária especializada para compra, venda e aluguel de imóveis em Belém, Pará. Método estruturado que garante decisão segura, criteriosa e organizada.",
  provider: {
    "@id": "https://www.joselmaalbuquerqueimv.com.br#business",
  },
  areaServed: {
    "@type": "City",
    name: "Belém",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  serviceType: "Real Estate Services",
  offers: {
    "@type": "Offer",
    description:
      "Consultoria imobiliária com método estruturado para compra, venda e aluguel de imóveis novos e usados em Belém, Pará.",
  },
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://www.joselmaalbuquerqueimv.com.br",
    },
  ],
};
