import { API_CONFIG } from "@/lib/config";

export interface ContactFormData {
  fullname: string;
  email: string;
  mobileNumber: string;
  message?: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Serviço para envio de formulário de contato ao backend
 * Lógica desacoplada para facilitar manutenção e testes
 */
export class ContactService {
  private baseUrl: string;
  private lpToken: string;
  private lpSource: string;

  constructor() {
    this.baseUrl = API_CONFIG.baseUrl;
    this.lpToken = API_CONFIG.lpToken;
    this.lpSource = API_CONFIG.lpSource;
  }

  /**
   * Envia os dados do formulário para o backend
   * @param data - Dados do formulário de contato
   * @returns Promise com a resposta do backend
   */
  async submitContactForm(data: ContactFormData): Promise<ContactResponse> {
    try {
      // Validação básica dos dados
      this.validateContactData(data);

      // Prepara o body da requisição
      const body = {
        fullname: data.fullname.trim(),
        email: data.email.trim().toLowerCase(),
        mobileNumber: this.formatPhoneNumber(data.mobileNumber),
        message: data.message?.trim() || "",
      };

      // Faz a requisição HTTP
      const response = await fetch(`${this.baseUrl}${API_CONFIG.endpoints.contact}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Lp-Token": this.lpToken,
          "X-Lp-Source": this.lpSource,
        },
        body: JSON.stringify(body),
      });

      // Verifica se a resposta foi bem-sucedida (status 200-299)
      if (!response.ok) {
        const errorData = await this.parseErrorResponse(response);
        throw new Error(errorData.message || `Erro ${response.status}: ${response.statusText}`);
      }

      // Parse da resposta de sucesso
      // Tenta fazer parse do JSON, mas trata caso a resposta seja vazia ou inválida
      let responseData: any = {};
      const contentType = response.headers.get("content-type");
      
      // Se o status é de sucesso (200-299), tenta fazer parse do JSON
      if (response.status >= 200 && response.status < 300) {
        if (contentType && contentType.includes("application/json")) {
          try {
            const text = await response.text();
            if (text.trim()) {
              responseData = JSON.parse(text);
            }
          } catch (parseError) {
            // Se não conseguir fazer parse, assume sucesso (backend pode retornar vazio ou formato diferente)
            // Não é um erro crítico se o lead foi cadastrado
            console.warn("Resposta do backend não é JSON válido, mas status indica sucesso:", parseError);
          }
        } else {
          // Se não é JSON, pode ser texto simples ou vazio - ainda é sucesso se status é 200-299
          try {
            const text = await response.text();
            if (text.trim()) {
              responseData = { message: text };
            }
          } catch {
            // Resposta vazia ou não legível - ainda é sucesso se status é 200-299
          }
        }
      }

      // Se o lead foi cadastrado (status 200-299), considera sucesso
      return {
        success: true,
        message: responseData?.message || responseData?.success || "Formulário enviado com sucesso! Entraremos em contato em breve.",
      };
    } catch (error) {
      // Tratamento de erros
      return this.handleError(error);
    }
  }

  /**
   * Valida os dados do formulário antes do envio
   */
  private validateContactData(data: ContactFormData): void {
    if (!data.fullname || data.fullname.trim().length < 2) {
      throw new Error("Nome deve ter pelo menos 2 caracteres");
    }

    if (!data.email || !this.isValidEmail(data.email)) {
      throw new Error("E-mail inválido");
    }

    if (!data.mobileNumber || data.mobileNumber.trim().length < 10) {
      throw new Error("Telefone inválido");
    }
  }

  /**
   * Valida formato de e-mail
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Formata o número de telefone removendo caracteres não numéricos
   */
  private formatPhoneNumber(phone: string): string {
    // Remove tudo que não é número
    return phone.replace(/\D/g, "");
  }

  /**
   * Tenta fazer parse da resposta de erro do backend
   */
  private async parseErrorResponse(response: Response): Promise<{ message: string }> {
    try {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const text = await response.text();
        if (text.trim()) {
          const data = JSON.parse(text);
          return { message: data.message || data.error || "Erro desconhecido" };
        }
      }
      return { message: `Erro ${response.status}: ${response.statusText}` };
    } catch (parseError) {
      // Se não conseguir fazer parse, retorna mensagem genérica
      return { message: `Erro ${response.status}: ${response.statusText}` };
    }
  }

  /**
   * Trata erros e retorna resposta padronizada
   */
  private handleError(error: unknown): ContactResponse {
    if (error instanceof Error) {
      // Erro de validação ou erro conhecido
      return {
        success: false,
        error: error.message,
      };
    }

    // Erro desconhecido
    return {
      success: false,
      error: "Erro ao enviar formulário. Por favor, tente novamente mais tarde.",
    };
  }
}

// Instância singleton do serviço
export const contactService = new ContactService();
