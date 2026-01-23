// Palavras-chave SEO otimizadas para imóveis no Brasil
// Organizadas por categoria e prioridade

export const SEO_KEYWORDS = {
  // PALAVRAS-CHAVE PRIMÁRIAS (Alto volume, alta intenção)
  primary: [
    // Compra
    "comprar imóvel",
    "comprar apartamento",
    "comprar casa",
    "imóveis à venda",
    "apartamento à venda",
    "casa à venda",
    "imóveis para compra",
    "comprar imóvel financiado",
    "imóvel financiado",
    
    // Venda
    "vender imóvel",
    "vender apartamento",
    "vender casa",
    "venda de imóveis",
    "como vender imóvel",
    "avaliar imóvel",
    "preço de imóvel",
    
    // Aluguel
    "alugar imóvel",
    "alugar apartamento",
    "alugar casa",
    "imóveis para alugar",
    "apartamento para alugar",
    "casa para alugar",
    "aluguel de imóveis",
    "imóveis em aluguel",
    
    // Genéricas
    "imóveis",
    "imobiliária",
    "corretor de imóveis",
    "corretora de imóveis",
    "consultoria imobiliária",
  ],

  // PALAVRAS-CHAVE SECUNDÁRIAS (Médio volume, boa conversão)
  secondary: [
    // Por tipo de imóvel
    "apartamento",
    "casa",
    "casa de condomínio",
    "sobrado",
    "kitnet",
    "studio",
    "cobertura",
    "penthouse",
    "terreno",
    "lote",
    "sala comercial",
    "loja",
    "galpão",
    "imóvel comercial",
    "imóvel residencial",
    
    // Por condição
    "imóvel novo",
    "imóvel usado",
    "imóvel na planta",
    "imóvel pronto",
    "lançamento imobiliário",
    "imóvel usado",
    "imóvel seminovo",
    
    // Por finalidade
    "imóvel para investimento",
    "imóvel para morar",
    "imóvel para alugar",
    "imóvel para vender",
    "imóvel para locação",
    
    // Serviços
    "avaliação imobiliária",
    "documentação imobiliária",
    "financiamento imobiliário",
    "consórcio imobiliário",
    "seguro residencial",
  ],

  // PALAVRAS-CHAVE DE CAUDA LONGA (Alta conversão, baixa competição)
  longTail: [
    // Compra
    "como comprar imóvel pela primeira vez",
    "comprar imóvel financiado pela caixa",
    "comprar imóvel com FGTS",
    "comprar imóvel usado ou novo",
    "melhor imóvel para comprar",
    "imóvel barato para comprar",
    "comprar imóvel em condomínio fechado",
    
    // Venda
    "como vender imóvel rápido",
    "vender imóvel sem corretor",
    "vender imóvel com financiamento",
    "quanto vale meu imóvel",
    "avaliar imóvel para venda",
    "vender imóvel usado",
    
    // Aluguel
    "alugar imóvel sem fiador",
    "alugar imóvel com pets",
    "alugar imóvel mobiliado",
    "alugar imóvel próximo ao trabalho",
    "melhor bairro para alugar",
    "imóvel para alugar temporada",
    
    // Investimento
    "melhor imóvel para investir",
    "imóvel para alugar e ganhar renda",
    "investir em imóveis",
    "imóvel como investimento",
    "retorno sobre investimento imobiliário",
  ],

  // PALAVRAS-CHAVE POR REGIÃO (Nacional + Local)
  regional: [
    // Regiões do Brasil
    "imóveis no Brasil",
    "imóveis em São Paulo",
    "imóveis no Rio de Janeiro",
    "imóveis em Belo Horizonte",
    "imóveis em Curitiba",
    "imóveis em Porto Alegre",
    "imóveis em Brasília",
    "imóveis em Salvador",
    "imóveis em Recife",
    "imóveis em Fortaleza",
    "imóveis em Manaus",
    "imóveis em Belém",
    "imóveis no Pará",
    "imóveis no Norte",
    "imóveis no Nordeste",
    "imóveis no Sudeste",
    "imóveis no Sul",
    "imóveis no Centro-Oeste",
    
    // Belém e Pará (foco local)
    "imóveis em Belém",
    "imóveis em Belém PA",
    "imóveis no Pará",
    "comprar imóvel em Belém",
    "alugar imóvel em Belém",
    "vender imóvel em Belém",
    "corretor de imóveis Belém",
    "corretora de imóveis Belém",
    "imobiliária Belém",
    "apartamento em Belém",
    "casa em Belém",
    "imóveis Umarizal Belém",
    "imóveis Centro Belém",
    "imóveis Batista Campos",
    "imóveis Nazaré Belém",
  ],

  // PALAVRAS-CHAVE POR INTENÇÃO
  transactional: [
    "comprar imóvel agora",
    "vender imóvel urgente",
    "alugar imóvel hoje",
    "imóveis disponíveis",
    "imóveis à venda",
    "imóveis para alugar",
    "contato corretor",
    "falar com corretor",
    "agendar visita",
    "simular financiamento",
  ],

  informational: [
    "como comprar imóvel",
    "como vender imóvel",
    "como alugar imóvel",
    "dicas para comprar imóvel",
    "documentos para comprar imóvel",
    "o que verificar ao comprar imóvel",
    "financiamento imobiliário como funciona",
    "taxa de juros financiamento imobiliário",
  ],

  // PALAVRAS-CHAVE ESPECÍFICAS DO NEGÓCIO
  brand: [
    "Joselma Albuquerque",
    "Joselma Albuquerque imóveis",
    "Joselma Albuquerque CRECI",
    "CRECI-10611 PA/AP",
    "corretora Joselma Albuquerque",
  ],
};

// Função para gerar array completo de keywords para metadata
export function getAllKeywords(): string[] {
  return [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.secondary,
    ...SEO_KEYWORDS.longTail,
    ...SEO_KEYWORDS.regional,
    ...SEO_KEYWORDS.transactional,
    ...SEO_KEYWORDS.informational,
    ...SEO_KEYWORDS.brand,
  ];
}

// Função para gerar keywords priorizadas (para metadata limitada)
export function getPrioritizedKeywords(): string[] {
  return [
    // Brand + Local (maior prioridade)
    ...SEO_KEYWORDS.brand,
    
    // Primary + Regional (Belém)
    ...SEO_KEYWORDS.primary.filter(kw => 
      kw.includes("comprar") || 
      kw.includes("vender") || 
      kw.includes("alugar") ||
      kw.includes("imóvel")
    ),
    ...SEO_KEYWORDS.regional.filter(kw => 
      kw.includes("Belém") || 
      kw.includes("Pará")
    ),
    
    // Secondary (tipos de imóveis)
    ...SEO_KEYWORDS.secondary.slice(0, 15),
    
    // Transactional (alta conversão)
    ...SEO_KEYWORDS.transactional,
  ];
}
