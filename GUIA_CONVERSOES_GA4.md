# 📊 Guia Completo: Configuração de Eventos de Conversão no GA4

**Baseado na documentação oficial do Google Analytics 4 (2024)**

---

## 🎯 O QUE SÃO EVENTOS DE CONVERSÃO (KEY EVENTS)?

No Google Analytics 4, **"Eventos Principais" (Key Events)** são o novo termo para o que era chamado de "Conversões" no Universal Analytics. Representam ações valiosas dos usuários que se alinham com seus objetivos de negócio.

**Exemplos:**
- Envio de formulário de contato
- Compra de produto
- Inscrição em newsletter
- Download de material
- Agendamento de consulta
- Clique em botão CTA importante

---

## ✅ EVENTOS PRINCIPAIS PADRÃO DO GA4

O GA4 marca automaticamente estes eventos como principais (não requerem configuração):

- ✅ `purchase` (web e app)
- ✅ `first_open` (apenas app)
- ✅ `in_app_purchase` (apenas app)
- ✅ `app_store_subscription_convert` (apenas app)
- ✅ `app_store_subscription_renew` (apenas app)

---

## 📋 COMO MARCAR EVENTOS EXISTENTES COMO CONVERSÃO

### Método 1: Interface do GA4 (Recomendado)

#### Passo a Passo:

1. **Acesse o Google Analytics 4**
   - Vá para [Google Analytics](https://analytics.google.com)
   - Selecione sua propriedade GA4

2. **Navegue até Eventos**
   - No menu lateral, clique em **"Configurar"** (⚙️)
   - Clique em **"Eventos"**

3. **Localize o Evento**
   - Na tabela "Eventos existentes", encontre o evento que deseja marcar
   - Exemplo: `conversion` (formulário enviado)

4. **Marque como Conversão**
   - Localize a coluna **"Marcar como conversão"**
   - Ative o **toggle/switch** para o evento desejado
   - O evento será marcado como "Evento principal" automaticamente

5. **Verificação**
   - O evento aparecerá em **"Configurar" → "Eventos principais"**
   - Você verá um ícone de estrela (⭐) ao lado do evento

#### Limites:
- ✅ **Máximo de 30 eventos principais** por propriedade GA4
- ✅ Pode desmarcar e remarcar eventos a qualquer momento

---

## 🆕 COMO CRIAR NOVO EVENTO DE CONVERSÃO

### Método 1: Criar Evento Personalizado

#### Passo a Passo:

1. **Acesse Eventos Principais**
   - Vá para **"Configurar" → "Eventos principais"**
   - Clique em **"Novo evento de conversão"**

2. **Configure o Evento**
   - **Nome do evento:** Digite o nome (ex: `formulario_contato_enviado`)
   - **Descrição:** (Opcional) Adicione uma descrição
   - Clique em **"Salvar"**

3. **Marque como Principal**
   - O evento criado aparecerá na lista
   - Ative o toggle **"Marcar como conversão"**

### Método 2: Criar Evento com Condições

Para eventos mais complexos baseados em condições:

1. **Acesse Eventos**
   - Vá para **"Configurar" → "Eventos"**
   - Clique em **"Criar evento"**

2. **Configure Condições**
   - **Nome do evento personalizado:** Ex: `conversao_formulario`
   - **Condições de correspondência:**
     ```
     Evento correspondente: conversion
     Parâmetro: event_category
     Operador: igual a
     Valor: form
     ```

3. **Parâmetros (Opcional)**
   - Adicione parâmetros personalizados se necessário
   - Ex: `form_type`, `form_value`

4. **Salvar e Marcar**
   - Clique em **"Criar"**
   - Depois marque como conversão no método anterior

---

## 🎯 EVENTOS DE CONVERSÃO PARA ESTA LANDING PAGE

### Eventos Já Implementados no Código

#### 1. **Conversão do Formulário** ⭐ PRIORIDADE ALTA
- **Nome do evento:** `conversion`
- **Categoria:** `form`
- **Label:** `formulario_contato_enviado`
- **Quando dispara:** Formulário enviado com sucesso

**Como marcar no GA4:**
1. Vá em **Configurar → Eventos**
2. Procure por `conversion`
3. Ative o toggle "Marcar como conversão"

#### 2. **Cliques em CTAs** ⭐ PRIORIDADE MÉDIA
- **Nome do evento:** `click`
- **Categoria:** `button`
- **Labels:**
  - `hero_cta_orientacao`
  - `tipos_imoveis_ver_todos`
  - `formulario_explorar_imoveis`

**Como marcar no GA4:**
1. Vá em **Configurar → Eventos**
2. Procure por `click`
3. Crie eventos personalizados para cada label importante
4. Marque os mais importantes como conversão

---

## 📊 CONFIGURAÇÃO PASSO A PASSO COMPLETA

### Passo 1: Acessar Google Analytics

1. Acesse [analytics.google.com](https://analytics.google.com)
2. Faça login com sua conta Google
3. Selecione a propriedade GA4 (ID: `G-YBRHVE3CRT`)

### Passo 2: Verificar Eventos Existentes

1. No menu lateral, clique em **"Relatórios"**
2. Vá em **"Engajamento" → "Eventos"**
3. Verifique se os eventos estão sendo coletados:
   - `conversion`
   - `click`
   - `page_view` (automático)

### Passo 3: Marcar Evento de Conversão Principal

1. Vá em **"Configurar" (⚙️) → "Eventos"**
2. Na tabela "Eventos existentes", encontre `conversion`
3. Ative o toggle na coluna **"Marcar como conversão"**
4. Confirme que aparece em **"Eventos principais"**

### Passo 4: Criar Eventos Personalizados (Opcional)

Para rastrear conversões mais específicas:

1. **Evento: Formulário Enviado com Sucesso**
   - Nome: `formulario_contato_enviado`
   - Condição: `event_name = "conversion" AND event_category = "form"`

2. **Evento: CTA Principal Clicado**
   - Nome: `cta_hero_clicado`
   - Condição: `event_name = "click" AND event_label = "hero_cta_orientacao"`

### Passo 5: Verificar em Tempo Real

1. Vá em **"Relatórios" → "Tempo real"**
2. Envie um formulário de teste
3. Verifique se o evento `conversion` aparece
4. Confirme que está marcado como conversão (ícone ⭐)

---

## 📈 CONFIGURAR RELATÓRIOS DE CONVERSÃO

### 1. Relatório de Conversões

1. Vá em **"Relatórios" → "Engajamento" → "Eventos"**
2. Filtre por **"Eventos principais"**
3. Visualize:
   - Total de conversões
   - Taxa de conversão
   - Conversões por evento

### 2. Relatório de Aquisição

1. Vá em **"Relatórios" → "Aquisição"**
2. Veja conversões por:
   - Fonte de tráfego
   - Campanha
   - Canal
   - Dispositivo

### 3. Explorar Conversões

1. Vá em **"Explorar" → "Análise de conversão"**
2. Crie análises personalizadas:
   - Funil de conversão
   - Caminho para conversão
   - Segmentação de conversões

---

## 🎯 CONFIGURAÇÕES AVANÇADAS

### 1. Configurar Parâmetros de Valor

Para eventos com valor monetário:

```javascript
gtag('event', 'conversion', {
  'event_category': 'form',
  'event_label': 'formulario_contato_enviado',
  'value': 100, // Valor estimado do lead
  'currency': 'BRL'
});
```

**No GA4:**
1. Vá em **"Configurar" → "Eventos personalizados"**
2. Configure o parâmetro `value` como monetário
3. Isso permitirá calcular ROI

### 2. Criar Audiences de Conversão

1. Vá em **"Configurar" → "Audiences"**
2. Clique em **"Nova audiência"**
3. Configure:
   - **Nome:** "Convertidos - Formulário"
   - **Condição:** `event_name = "conversion"`
   - **Período:** Últimos 30 dias
4. Use para remarketing no Google Ads

### 3. Importar para Google Ads

1. No Google Ads, vá em **"Ferramentas" → "Conversões"**
2. Clique em **"Importar"**
3. Selecione **"Google Analytics 4"**
4. Escolha os eventos principais que deseja importar
5. Isso permite usar conversões para otimização de lances

---

## 📊 MÉTRICAS IMPORTANTES

### KPIs de Conversão

1. **Taxa de Conversão**
   - Fórmula: (Conversões / Sessões) × 100
   - Meta: 3-5% para landing pages

2. **Custo por Conversão**
   - Fórmula: Investimento em Ads / Total de Conversões
   - Use para otimizar campanhas

3. **Valor por Conversão**
   - Soma de todos os valores de conversão
   - Útil para calcular ROI

4. **Taxa de Conversão por Fonte**
   - Compare orgânico vs. pago
   - Identifique canais mais eficazes

---

## 🔍 TROUBLESHOOTING

### Problema: Evento não aparece no GA4

**Soluções:**
1. Verifique se o script do GA4 está carregando (DevTools → Network)
2. Use **DebugView** no GA4 para ver eventos em tempo real
3. Verifique se o evento está sendo disparado corretamente no código
4. Aguarde 24-48h para processamento completo

### Problema: Conversão não está sendo contada

**Soluções:**
1. Verifique se o evento está marcado como "Evento principal"
2. Confirme que o evento está sendo disparado (DebugView)
3. Verifique filtros de visualização (se houver)
4. Confirme que não há duplicação de eventos

### Problema: Valores não aparecem

**Soluções:**
1. Verifique se o parâmetro `value` está sendo enviado
2. Configure o parâmetro como monetário no GA4
3. Verifique formato do valor (número, não string)

---

## ✅ CHECKLIST DE CONFIGURAÇÃO

### Configuração Inicial
- [ ] Acessar Google Analytics 4
- [ ] Verificar se eventos estão sendo coletados
- [ ] Marcar `conversion` como evento principal
- [ ] Verificar em tempo real

### Configuração Avançada
- [ ] Criar eventos personalizados (se necessário)
- [ ] Configurar parâmetros de valor
- [ ] Criar audiences de conversão
- [ ] Importar conversões para Google Ads

### Monitoramento
- [ ] Configurar relatórios personalizados
- [ ] Configurar alertas (queda de conversão)
- [ ] Criar dashboards
- [ ] Agendar relatórios automáticos

---

## 📚 REFERÊNCIAS OFICIAIS

### Documentação Google

1. **Eventos no GA4**
   - [developers.google.com/analytics/devguides/collection/ga4/events](https://developers.google.com/analytics/devguides/collection/ga4/events)

2. **Marcar Eventos como Principais**
   - [support.google.com/analytics/answer/13128484](https://support.google.com/analytics/answer/13128484)

3. **Eventos Recomendados**
   - [developers.google.com/analytics/devguides/collection/ga4/reference/events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)

4. **Parâmetros de Evento**
   - [developers.google.com/analytics/devguides/collection/ga4/event-parameters](https://developers.google.com/analytics/devguides/collection/ga4/event-parameters)

---

## 🎯 RESUMO RÁPIDO

### Para Esta Landing Page:

1. **Evento Principal:** `conversion`
   - Marcar como conversão em: **Configurar → Eventos → Marcar como conversão**

2. **Verificar Coleta:**
   - **Relatórios → Tempo real** (verificar se eventos aparecem)

3. **Monitorar:**
   - **Relatórios → Engajamento → Eventos** (filtrar por "Eventos principais")

4. **Otimizar:**
   - **Explorar → Análise de conversão** (criar análises personalizadas)

---

**Última atualização:** 2024
**Baseado em:** Documentação oficial do Google Analytics 4
**Status:** ✅ Guia completo e atualizado
