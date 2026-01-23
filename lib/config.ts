// Configurações da API/Backend
export const API_CONFIG = {
  // URL do backend - atualize com a URL real do seu backend
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3131",
  
  // Token de autenticação - configure via variável de ambiente
  lpToken: process.env.NEXT_PUBLIC_LP_TOKEN || "b9497d29-957d-4f90-9847-8a9a2808f4d6",
  
  // Source identifier - identifica de qual landing page vem a requisição
  lpSource: process.env.NEXT_PUBLIC_LP_SOURCE || "lp-joselma-albuquerque-imoveis",
  
  // Endpoint para envio do formulário
  endpoints: {
    contact: "/leads",
  },
};
