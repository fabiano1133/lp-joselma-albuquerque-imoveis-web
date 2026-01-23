# 📊 Google Analytics - Configuração e Tracking

## ✅ Google Analytics Implementado

O Google Analytics (gtag.js) foi implementado seguindo as **melhores práticas do Next.js** e a **documentação oficial do Google**.

---

## 📋 Implementação

### Scripts Adicionados

Os scripts do Google Analytics foram adicionados no `app/layout.tsx` usando o componente `Script` do Next.js com estratégia `afterInteractive`:

```typescript
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
      gtag('config', 'G-YBRHVE3CRT', {
        page_path: window.location.pathname,
      });
    `,
  }}
/>
```

### ID de Medição
- **GA Measurement ID:** `G-YBRHVE3CRT`
- **Configurado em:** `lib/analytics.ts`

---

## 🎯 Eventos Customizados Implementados

### 1. **Conversão (Formulário Enviado)**
**Localização:** `components/sections/diagnostic-form-section.tsx`

```typescript
trackConversion(); // Dispara quando formulário é enviado com sucesso
```

**Evento enviado:**
- **Ação:** `conversion`
- **Categoria:** `form`
- **Label:** `formulario_contato_enviado`
- **Value:** `1`

### 2. **Cliques em Botões**

#### Hero Section
- `hero_cta_orientacao` - Botão "Quero orientação especializada"
- `hero_cta_ver_imoveis` - Botão "Ver imóveis disponíveis" (se houver)

#### Tipos de Imóveis
- `tipos_imoveis_ver_todos` - Botão "Ver todos os imóveis disponíveis"

#### Formulário
- `formulario_explorar_imoveis` - Link "Ou explore os imóveis disponíveis"

**Evento enviado:**
- **Ação:** `click`
- **Categoria:** `button`
- **Label:** `[nome_do_botao]`

---

## 📊 Métricas que Serão Rastreadas

### Automáticas (Google Analytics)
- ✅ **Pageviews** - Visualizações de página
- ✅ **Sessions** - Sessões de usuários
- ✅ **Users** - Usuários únicos
- ✅ **Bounce Rate** - Taxa de rejeição
- ✅ **Session Duration** - Duração da sessão
- ✅ **Pages per Session** - Páginas por sessão
- ✅ **Traffic Sources** - Fontes de tráfego
- ✅ **Devices** - Dispositivos (mobile, desktop, tablet)
- ✅ **Locations** - Localização geográfica

### Customizadas (Eventos)
- ✅ **Conversões** - Formulários enviados
- ✅ **Cliques em CTAs** - Botões principais
- ✅ **Interações** - Engajamento do usuário

---

## 🔍 Como Visualizar os Dados

### 1. Acessar Google Analytics
1. Acesse [Google Analytics](https://analytics.google.com)
2. Selecione a propriedade `G-YBRHVE3CRT`
3. Navegue pelos relatórios

### 2. Relatórios Importantes

#### Real-Time
- **Localização:** Relatórios → Tempo Real
- **Mostra:** Usuários ativos no momento
- **Útil para:** Verificar se o tracking está funcionando

#### Conversões
- **Localização:** Relatórios → Engajamento → Eventos
- **Filtro:** `event_name = "conversion"`
- **Mostra:** Quantos formulários foram enviados

#### Comportamento
- **Localização:** Relatórios → Engajamento → Eventos
- **Filtro:** `event_name = "click"`
- **Mostra:** Quais botões são mais clicados

#### Aquisição
- **Localização:** Relatórios → Aquisição
- **Mostra:** De onde vem o tráfego (orgânico, pago, direto, etc.)

---

## 🎯 Configurações Recomendadas no GA4

### 1. Configurar Eventos como Conversões
1. Vá em **Admin** → **Eventos**
2. Marque `conversion` como evento de conversão
3. Isso permitirá criar relatórios de conversão

### 2. Criar Audiences
1. Vá em **Admin** → **Audiences**
2. Crie audiences baseadas em:
   - Usuários que visualizaram formulário
   - Usuários que clicaram em CTA
   - Usuários que não converteram (para remarketing)

### 3. Configurar Goals
1. Vá em **Admin** → **Eventos**
2. Configure eventos como goals:
   - `conversion` (formulário enviado)
   - `click` com label `hero_cta_orientacao`

---

## 📈 KPIs para Monitorar

### Conversão
- **Taxa de conversão:** % de visitantes que enviam formulário
- **Meta:** 3-5% (média do setor: 2-3%)
- **Fórmula:** (Conversões / Sessões) × 100

### Engajamento
- **Taxa de rejeição:** % de sessões com apenas 1 página
- **Meta:** < 50%
- **Duração média da sessão:** Meta > 2 minutos

### Tráfego
- **Sessões orgânicas:** Crescimento mês a mês
- **Sessões pagas:** ROI das campanhas
- **Taxa de retorno:** % de visitantes recorrentes

### CTAs
- **Taxa de clique em CTAs:** % de visitantes que clicam
- **CTA mais eficaz:** Comparar performance dos botões

---

## 🔧 Funções Disponíveis

### `trackEvent(action, category, label?, value?)`
Rastreia eventos customizados genéricos.

**Exemplo:**
```typescript
trackEvent("download", "resource", "ebook_imoveis", 1);
```

### `trackConversion()`
Rastreia conversão (formulário enviado).

**Exemplo:**
```typescript
trackConversion(); // Já implementado no formulário
```

### `trackButtonClick(buttonName)`
Rastreia cliques em botões.

**Exemplo:**
```typescript
trackButtonClick("hero_cta_orientacao"); // Já implementado
```

### `trackSectionView(sectionName)`
Rastreia visualizações de seções (útil para scroll tracking).

**Exemplo:**
```typescript
// Pode ser implementado com Intersection Observer
trackSectionView("metodo_section");
```

---

## 🚀 Próximos Passos

### Imediato
- [x] Google Analytics implementado
- [x] Tracking de conversão configurado
- [x] Tracking de cliques em CTAs
- [ ] Verificar dados em tempo real após deploy

### Curto Prazo (1-2 semanas)
- [ ] Configurar eventos como conversões no GA4
- [ ] Criar dashboards personalizados
- [ ] Configurar alertas (ex: queda de conversão)
- [ ] Implementar scroll tracking (opcional)

### Médio Prazo (1-3 meses)
- [ ] Analisar dados e identificar padrões
- [ ] A/B testar diferentes CTAs baseado em dados
- [ ] Otimizar baseado em comportamento do usuário
- [ ] Criar relatórios automáticos

---

## 📝 Checklist de Verificação

Após o deploy:

- [ ] Verificar se o script está carregando (DevTools → Network)
- [ ] Verificar eventos em tempo real no GA4
- [ ] Testar envio de formulário e verificar evento de conversão
- [ ] Testar cliques em botões e verificar eventos
- [ ] Verificar se dados estão aparecendo nos relatórios (pode levar 24-48h)

---

## 🔗 Links Úteis

- [Google Analytics](https://analytics.google.com)
- [Documentação GA4](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Script Component](https://nextjs.org/docs/app/api-reference/components/script)

---

**Status:** ✅ Implementado e pronto para produção
**Última atualização:** 2024
