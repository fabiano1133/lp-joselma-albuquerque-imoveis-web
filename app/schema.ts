// Schema.org Structured Data para SEO e IA
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://www.joselmaalbuquerqueimv.com.br#business",
  name: "Joselma Albuquerque Imóveis",
  description:
    "Corretora de imóveis em Belém, Pará. Especializada em compra, venda e aluguel de imóveis novos e usados (apartamentos, casas, sobrados, terrenos) com método estruturado, análise criteriosa de documentação, verificação de riscos jurídicos e orientação especializada. Atendimento em Umarizal, Centro, Batista Campos, Nazaré e toda Belém.",
  image: [
    "https://www.joselmaalbuquerqueimv.com.br/perfil-image-hero.jpeg",
    "https://www.joselmaalbuquerqueimv.com.br/perfil-image-manifesto.jpeg",
  ],
  url: "https://www.joselmaalbuquerqueimv.com.br",
  telephone: "+5591985161605",
  email: "contato@joselmaalbuquerqueimv.com.br",
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
    latitude: "-1.4558",
    longitude: "-48.5044",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Belém",
      addressRegion: "PA",
      addressCountry: "BR",
    },
    {
      "@type": "State",
      name: "Pará",
      addressCountry: "BR",
    },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Imobiliários",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Compra de Imóveis em Belém",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluguel de Imóveis em Belém",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Venda de Imóveis em Belém",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consultoria Imobiliária em Belém",
        },
      },
    ],
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
    "Corretora de imóveis registrada no CRECI-10611 PA/AP, especializada em consultoria imobiliária com método estruturado para compra, venda e aluguel de imóveis em Belém, Pará. Expertise em análise de documentação, avaliação imobiliária, financiamento, investimento imobiliário e segurança jurídica.",
  image: [
    "https://www.joselmaalbuquerqueimv.com.br/perfil-image-hero.jpeg",
    "https://www.joselmaalbuquerqueimv.com.br/perfil-image-manifesto.jpeg",
  ],
  url: "https://www.joselmaalbuquerqueimv.com.br",
  telephone: "+5591985161605",
  email: "contato@joselmaalbuquerqueimv.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tv. Dom Romualdo de Seixas, 1476 - Sala 1707",
    addressLocality: "Umarizal",
    addressRegion: "PA",
    postalCode: "66055-200",
    addressCountry: "BR",
  },
  worksFor: {
    "@id": "https://www.joselmaalbuquerqueimv.com.br#business",
  },
  knowsAbout: [
    // Serviços Principais
    "Compra de Imóveis",
    "Venda de Imóveis",
    "Aluguel de Imóveis",
    "Consultoria Imobiliária",
    "Análise de Imóveis",
    "Documentação Imobiliária",
    "Financiamento Imobiliário",
    "Avaliação Imobiliária",
    "Corretagem Imobiliária",
    "Intermediação Imobiliária",
    
    // Tipos de Imóveis
    "Apartamento",
    "Casa",
    "Sobrado",
    "Kitnet",
    "Studio",
    "Cobertura",
    "Terreno",
    "Sala Comercial",
    "Loja",
    "Galpão",
    "Imóvel Residencial",
    "Imóvel Comercial",
    "Imóvel Novo",
    "Imóvel Usado",
    "Imóvel na Planta",
    "Lançamento Imobiliário",
    
    // Localização
    "Imóveis em Belém",
    "Imóveis no Pará",
    "Imóveis em Umarizal",
    "Imóveis no Centro de Belém",
    "Imóveis em Batista Campos",
    "Imóveis em Nazaré Belém",
    "Imóveis no Marco Belém",
    
    // Ações e Serviços
    "Comprar imóvel em Belém",
    "Alugar imóvel em Belém",
    "Vender imóvel em Belém",
    "Corretora de imóveis Belém",
    "Corretor de imóveis Belém",
    "Imobiliária Belém",
    
    // Investimento e Financiamento
    "Investimento Imobiliário",
    "Financiamento Imobiliário Belém",
    "Consórcio Imobiliário",
    "FGTS para compra de imóvel",
    
    // Especialidades
    "Análise de Documentação Imobiliária",
    "Verificação de Débitos Imobiliários",
    "Avaliação de Imóveis Belém",
    "Segurança Jurídica Imobiliária",
  ],
  memberOf: {
    "@type": "Organization",
    name: "CRECI-PA",
    identifier: "CRECI-10611 PA/AP",
  },
  alumniOf: {
    "@type": "Organization",
    name: "CRECI-PA",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.joselmaalbuquerqueimv.com.br#service",
  name: "Consultoria Imobiliária - Método Decisão Imobiliária Estruturada",
  description:
    "Serviço de consultoria imobiliária especializada para compra, venda e aluguel de imóveis (apartamentos, casas, sobrados, terrenos, salas comerciais) em Belém, Pará. Método estruturado que garante decisão segura, criteriosa e organizada. Análise de documentação, verificação de débitos, avaliação de riscos jurídicos e financeiros.",
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
    availability: "https://schema.org/InStock",
    priceCurrency: "BRL",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
    bestRating: "5",
    worstRating: "1",
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

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como comprar imóvel em Belém com segurança?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para comprar imóvel em Belém com segurança, é essencial contar com uma corretora de imóveis registrada no CRECI que realize análise criteriosa da documentação, verificação de riscos jurídicos e financeiros, e orientação especializada em cada etapa do processo. O método estruturado elimina surpresas e garante decisão informada.",
      },
    },
    {
      "@type": "Question",
      name: "Como alugar imóvel em Belém?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para alugar imóvel em Belém, recomenda-se buscar uma corretora especializada que analise o perfil do locatário, apresente opções validadas, verifique documentação do imóvel e do proprietário, e acompanhe todo o processo de locação com segurança jurídica.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a melhor corretora de imóveis em Belém?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A melhor corretora de imóveis em Belém é aquela que possui registro no CRECI, oferece método estruturado de análise, transparência total no processo, verificação criteriosa de documentação e acompanhamento especializado. Joselma Albuquerque CRECI-10611 PA/AP oferece consultoria imobiliária com método que elimina riscos.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto custa consultoria imobiliária em Belém?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O custo da consultoria imobiliária em Belém varia conforme o serviço. A consultoria inicial para análise de perfil e orientação especializada pode ser oferecida sem custo. Entre em contato para conhecer os serviços disponíveis e valores.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a compra de imóvel usado em Belém?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A compra de imóvel usado em Belém requer análise criteriosa da documentação (matrícula, IPTU, certidões), verificação de débitos, avaliação do estado físico do imóvel, análise de localização e potencial de valorização. Uma corretora especializada realiza todas essas verificações antes da decisão final.",
      },
    },
    {
      "@type": "Question",
      name: "O que verificar ao comprar apartamento em Belém?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ao comprar apartamento em Belém, verifique: documentação do imóvel e do condomínio, débitos pendentes (IPTU, condomínio, água), estado físico do apartamento e áreas comuns, regulamento do condomínio, taxa de condomínio, localização e acessibilidade, potencial de valorização e documentação do vendedor.",
      },
    },
  ],
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Comprar ou Alugar Imóvel em Belém com Segurança",
  description:
    "Guia completo sobre como comprar ou alugar imóvel em Belém, Pará, com método estruturado que elimina riscos e garante decisão segura.",
  author: {
    "@id": "https://www.joselmaalbuquerqueimv.com.br#person",
  },
  publisher: {
    "@id": "https://www.joselmaalbuquerqueimv.com.br#business",
  },
  datePublished: new Date().toISOString(),
  dateModified: new Date().toISOString(),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.joselmaalbuquerqueimv.com.br",
  },
  image: [
    "https://www.joselmaalbuquerqueimv.com.br/perfil-image-hero.jpeg",
  ],
  keywords: [
    // Primárias com Belém
    "comprar imóvel em Belém",
    "alugar imóvel em Belém",
    "corretora de imóveis Belém",
    "corretora de imóveis em Belém",
    "consultoria imobiliária Belém",
    "consultoria imobiliária em Belém",
    "imóveis em Belém",
    "imóveis em Belém PA",
    "imóveis no Pará",
    
    // Tipos de Imóveis + Belém
    "apartamento em Belém",
    "casa em Belém",
    "sobrado em Belém",
    "kitnet em Belém",
    "terreno em Belém",
    "sala comercial Belém",
    
    // Ações + Belém
    "comprar apartamento Belém",
    "alugar apartamento Belém",
    "comprar casa Belém",
    "alugar casa Belém",
    "vender imóvel Belém",
    "imóveis à venda Belém",
    "imóveis para alugar Belém",
    
    // Bairros de Belém
    "imóveis Umarizal Belém",
    "imóveis Centro Belém",
    "imóveis Batista Campos",
    "imóveis Nazaré Belém",
    "imóveis Marco Belém",
    "apartamento Umarizal",
    "casa Batista Campos",
    
    // Serviços + Belém
    "avaliação imobiliária Belém",
    "financiamento imobiliário Belém",
    "documentação imobiliária Belém",
    "corretor de imóveis Belém",
    "imobiliária Belém",
    
    // Longa Cauda
    "como comprar imóvel em Belém",
    "como alugar imóvel em Belém",
    "melhor corretora de imóveis Belém",
    "comprar imóvel usado Belém",
    "comprar imóvel novo Belém",
    "alugar imóvel sem fiador Belém",
    "investir em imóveis Belém",
    
    // Genéricas (sem localização)
    "comprar imóvel",
    "alugar imóvel",
    "corretora de imóveis",
    "consultoria imobiliária",
    "imóveis à venda",
    "imóveis para alugar",
  ],
  inLanguage: "pt-BR",
  articleSection: "Consultoria Imobiliária",
};
