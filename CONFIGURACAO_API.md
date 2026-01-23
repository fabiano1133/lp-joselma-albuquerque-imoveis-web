# 🔧 Configuração da API - Backend Integration

## Variáveis de Ambiente Necessárias

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# URL do backend da API
# Padrão para desenvolvimento: http://localhost:3131
# Para produção, atualize com a URL real do backend
NEXT_PUBLIC_API_URL=http://localhost:3131

# Token de autenticação para a landing page
# Este token será enviado no header X-Lp-Token
NEXT_PUBLIC_LP_TOKEN=seu-token-de-autenticacao-aqui

# Identificador da fonte (source)
# Este valor será enviado no header X-Lp-Source
NEXT_PUBLIC_LP_SOURCE=lp-joselma-albuquerque-imoveis
```

## Estrutura da Requisição

### Endpoint
```
POST {NEXT_PUBLIC_API_URL}/leads
```

**Exemplo para desenvolvimento:**
```
POST http://localhost:3131/leads
```

### Headers
```
Content-Type: application/json
X-Lp-Token: {valor de NEXT_PUBLIC_LP_TOKEN}
X-Lp-Source: {valor de NEXT_PUBLIC_LP_SOURCE}
```

### Body (JSON)
```json
{
  "fullname": "Jose de Alencar",
  "email": "jose.alencar7@icloud.com",
  "mobileNumber": "92984600010",
  "message": "Olá, gostaria de agendar um atendimento"
}
```

### Resposta Esperada

**Sucesso (200 OK)**:
```json
{
  "success": true,
  "message": "Formulário recebido com sucesso"
}
```

**Erro (400/500)**:
```json
{
  "success": false,
  "message": "Mensagem de erro",
  "error": "Detalhes do erro (opcional)"
}
```

## Validações Implementadas

O frontend valida:
- ✅ Nome: mínimo 2 caracteres
- ✅ Email: formato válido
- ✅ Telefone: mínimo 10 caracteres (aceita formatação, mas envia apenas números)
- ✅ Mensagem: opcional

## Arquitetura Desacoplada

A implementação segue princípios de desacoplamento:

```
┌─────────────────────────────────┐
│  Componente (UI)                │
│  diagnostic-form-section.tsx    │
└──────────────┬──────────────────┘
               │
               ▼
┌─────────────────────────────────┐
│  Serviço (Lógica)               │
│  contact-service.ts              │
└──────────────┬──────────────────┘
               │
               ▼
┌─────────────────────────────────┐
│  Configuração                    │
│  config.ts                       │
└─────────────────────────────────┘
```

### Vantagens

- ✅ Fácil manutenção: altere apenas o serviço sem tocar no componente
- ✅ Fácil teste: mocke o serviço para testes
- ✅ Reutilizável: use o serviço em outros componentes
- ✅ Configurável: altere URLs/tokens sem mexer no código

## Como Testar

### 1. Teste Local com Mock

Use um serviço de mock como [MockAPI](https://mockapi.io/):

1. Crie um projeto no MockAPI
2. Configure `NEXT_PUBLIC_API_URL` para a URL do mock
3. O formulário funcionará normalmente

### 2. Teste com Backend Real

1. Configure as variáveis de ambiente
2. Inicie o servidor: `npm run dev`
3. Preencha e envie o formulário
4. Verifique o console do navegador para logs (se necessário)

## Troubleshooting

### Erro: "Erro ao enviar formulário"

- Verifique se `NEXT_PUBLIC_API_URL` está correto
- Verifique se o backend está acessível
- Verifique os headers (X-Lp-Token e X-Lp-Source)
- Verifique o console do navegador para detalhes

### Erro: "Network Error"

- Verifique CORS no backend
- Verifique se a URL está acessível
- Verifique se está usando HTTPS (se necessário)

### Formulário não envia

- Verifique se todas as validações passam
- Verifique o console do navegador
- Verifique se o botão não está desabilitado

## Próximos Passos

Após configurar:

1. ✅ Teste o formulário localmente
2. ✅ Configure as variáveis de ambiente no ambiente de produção
3. ✅ Teste em produção
4. ✅ Monitore logs do backend para garantir recebimento
