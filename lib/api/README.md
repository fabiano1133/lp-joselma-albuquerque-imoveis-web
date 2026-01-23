# API Integration - Documentação

## Estrutura Desacoplada

A integração com o backend foi implementada seguindo princípios de desacoplamento:

### Arquivos

- **`lib/config.ts`**: Configurações centralizadas (URLs, tokens, endpoints)
- **`lib/api/contact-service.ts`**: Serviço de contato (lógica de negócio)
- **`components/sections/diagnostic-form-section.tsx`**: Componente UI (apresentação)

## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com:

```env
NEXT_PUBLIC_API_URL=https://sua-api.com
NEXT_PUBLIC_LP_TOKEN=seu-token-de-autenticacao
NEXT_PUBLIC_LP_SOURCE=joselma-albuquerque-imoveis
```

### Endpoint Esperado

O backend deve ter um endpoint que aceita:

**URL**: `{NEXT_PUBLIC_API_URL}/api/contact`

**Método**: `POST`

**Headers**:
```
Content-Type: application/json
X-Lp-Token: {NEXT_PUBLIC_LP_TOKEN}
X-Lp-Source: {NEXT_PUBLIC_LP_SOURCE}
```

**Body**:
```json
{
  "fullname": "Jose de Alencar",
  "email": "jose.alencar7@icloud.com",
  "mobileNumber": "92984600010",
  "message": "Olá, gostaria de agendar um atendimento"
}
```

**Resposta de Sucesso** (200):
```json
{
  "success": true,
  "message": "Formulário recebido com sucesso"
}
```

**Resposta de Erro** (400/500):
```json
{
  "success": false,
  "message": "Mensagem de erro",
  "error": "Detalhes do erro"
}
```

## Uso

O serviço é usado automaticamente pelo componente do formulário:

```typescript
import { contactService } from "@/lib/api/contact-service";

const response = await contactService.submitContactForm({
  fullname: "Nome Completo",
  email: "email@exemplo.com",
  mobileNumber: "92984600010",
  message: "Mensagem opcional"
});
```

## Validações

O serviço valida automaticamente:
- Nome: mínimo 2 caracteres
- Email: formato válido
- Telefone: mínimo 10 caracteres (apenas números são enviados)

## Tratamento de Erros

O serviço trata:
- Erros de rede
- Erros de validação
- Erros do backend
- Retorna mensagens amigáveis ao usuário

## Testes

Para testar localmente sem backend:

1. Use um serviço como [MockAPI](https://mockapi.io/) ou [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
2. Configure `NEXT_PUBLIC_API_URL` apontando para o mock
3. O serviço funcionará normalmente

## Manutenção

Para alterar a lógica de envio:
- Edite apenas `lib/api/contact-service.ts`
- O componente UI não precisa ser alterado

Para alterar a URL ou configurações:
- Edite apenas `lib/config.ts`
- Todos os serviços usarão automaticamente
