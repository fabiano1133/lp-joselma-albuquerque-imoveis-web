# 🔧 Troubleshooting: Google Analytics Não Detectado

## ❌ Problema: Tag do Google não foi detectada

**Mensagem:** "Sua tag do Google não foi detectada em lp-joselma-albuquerque-imoveis.sophos-tech-hub.com.br"

---

## 🔍 DIAGNÓSTICO PASSO A PASSO

### 1. Verificar se o Script Está Carregando

#### No Navegador (DevTools):

1. **Abra o DevTools** (F12 ou Cmd+Option+I)
2. Vá na aba **"Network"** (Rede)
3. Recarregue a página (F5)
4. Procure por: `gtag/js?id=G-YBRHVE3CRT`
5. Verifique:
   - ✅ Status: `200 OK` (script carregou)
   - ❌ Status: `404` ou erro (script não encontrado)
   - ❌ Bloqueado (adblocker ou política de segurança)

#### Verificar no Console:

1. Abra o **Console** no DevTools
2. Digite: `window.gtag`
3. Se aparecer `function gtag()`, o script está carregado ✅
4. Se aparecer `undefined`, o script não carregou ❌

---

### 2. Verificar Configuração no Google Analytics

#### Adicionar Domínio nas Configurações:

1. **Acesse Google Analytics**
   - Vá para [analytics.google.com](https://analytics.google.com)
   - Selecione a propriedade `G-YBRHVE3CRT`

2. **Configurar Streams de Dados**
   - Vá em **Admin (⚙️) → Fluxo de dados**
   - Clique no stream da Web
   - Em **"Domínios do site"**, adicione:
     - `lp-joselma-albuquerque-imoveis.sophos-tech-hub.com.br`
     - `joselmaalbuquerqueimv.com.br` (domínio de produção)

3. **Verificar Filtros**
   - Vá em **Admin → Visualizações de dados**
   - Verifique se há filtros bloqueando o domínio
   - Se houver, ajuste ou remova temporariamente

---

### 3. Verificar Código no Site

#### Inspecionar HTML:

1. **Abra o código-fonte** da página
   - Botão direito → "Ver código-fonte"
   - Ou DevTools → Elements

2. **Procure por:**
   ```html
   <script src="https://www.googletagmanager.com/gtag/js?id=G-YBRHVE3CRT"></script>
   ```
   
3. **Verifique se está presente:**
   - ✅ Se encontrar: Script está no HTML
   - ❌ Se não encontrar: Problema no build/deploy

#### Verificar dataLayer:

1. No **Console** do DevTools, digite:
   ```javascript
   window.dataLayer
   ```
2. Deve retornar um array com objetos
3. Se retornar `undefined`, há problema na inicialização

---

### 4. Testar com DebugView

#### Ativar DebugView no GA4:

1. **No Google Analytics:**
   - Vá em **Configurar → DebugView**
   - Ative o modo debug

2. **No Navegador:**
   - Instale a extensão [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
   - Ou adicione `?debug_mode=true` na URL

3. **Verificar Eventos:**
   - Navegue pelo site
   - Veja eventos aparecendo em tempo real no DebugView
   - Se aparecer: Script está funcionando ✅

---

## ✅ SOLUÇÕES

### Solução 1: Adicionar Domínio no GA4 (Mais Comum)

1. Acesse **Admin → Fluxo de dados**
2. Clique no stream da Web
3. Em **"Domínios do site"**, adicione:
   ```
   lp-joselma-albuquerque-imoveis.sophos-tech-hub.com.br
   ```
4. Salve as alterações
5. Aguarde 5-10 minutos
6. Teste novamente

### Solução 2: Verificar Bloqueadores

#### AdBlockers:
- Desative temporariamente para testar
- Adicione exceção para o domínio

#### Políticas de Segurança:
- Verifique se há políticas corporativas bloqueando
- Verifique firewall/proxy

### Solução 3: Verificar Build/Deploy

#### Se o script não aparece no HTML:

1. **Verificar build:**
   ```bash
   npm run build
   ```
   
2. **Verificar se há erros:**
   - Procure por erros relacionados ao GA4
   - Verifique se o Script do Next.js está correto

3. **Testar localmente:**
   ```bash
   npm run build
   npm start
   ```
   - Acesse `http://localhost:3000`
   - Verifique se o script carrega

### Solução 4: Configuração Manual (Alternativa)

Se o método automático não funcionar, adicione manualmente no `<head>`:

```html
<!-- No app/layout.tsx, adicione também no <head> se necessário -->
```

Mas isso não é necessário com Next.js Script component.

---

## 🧪 TESTE RÁPIDO

### Script de Teste no Console:

Cole no console do navegador:

```javascript
// Verificar se gtag existe
console.log("gtag existe?", typeof window.gtag !== "undefined");

// Verificar dataLayer
console.log("dataLayer:", window.dataLayer);

// Testar envio manual
if (typeof window.gtag !== "undefined") {
  window.gtag('event', 'test_event', {
    'event_category': 'test',
    'event_label': 'manual_test'
  });
  console.log("Evento de teste enviado!");
} else {
  console.error("gtag não está disponível!");
}
```

---

## 📋 CHECKLIST DE VERIFICAÇÃO

### No Site:
- [ ] Script aparece no código-fonte HTML
- [ ] Script carrega sem erros (Network tab)
- [ ] `window.gtag` existe no console
- [ ] `window.dataLayer` existe e tem dados
- [ ] Não há erros no console relacionados ao GA4

### No Google Analytics:
- [ ] Domínio está adicionado no stream
- [ ] Não há filtros bloqueando
- [ ] DebugView mostra eventos
- [ ] Relatório de tempo real mostra tráfego

### Ambiente:
- [ ] Não há adblockers ativos
- [ ] Não há políticas de segurança bloqueando
- [ ] Build está correto
- [ ] Deploy foi feito corretamente

---

## 🚨 PROBLEMAS COMUNS E SOLUÇÕES

### Problema: Script não aparece no HTML

**Causa:** Build não incluiu o script ou erro no código

**Solução:**
1. Verificar se há erros no build
2. Verificar se `app/layout.tsx` está correto
3. Fazer rebuild: `npm run build`

### Problema: Script carrega mas eventos não aparecem

**Causa:** Configuração incorreta ou domínio não autorizado

**Solução:**
1. Adicionar domínio no GA4
2. Verificar DebugView
3. Verificar console para erros

### Problema: "Tag não detectada" mesmo com script funcionando

**Causa:** Google ainda não processou ou domínio não configurado

**Solução:**
1. Aguardar 24-48 horas
2. Adicionar domínio explicitamente no GA4
3. Usar DebugView para confirmar funcionamento

---

## 📞 SUPORTE ADICIONAL

### Google Analytics Help:
- [Suporte do Google Analytics](https://support.google.com/analytics)
- [Fórum da Comunidade](https://support.google.com/analytics/community)

### Verificação de Tag:
- [Google Tag Assistant](https://tagassistant.google.com/)
- Instale a extensão do Chrome para verificar tags

---

## ✅ VERIFICAÇÃO FINAL

Após aplicar as soluções:

1. **Aguarde 5-10 minutos** após adicionar domínio
2. **Recarregue a página** várias vezes
3. **Verifique DebugView** no GA4
4. **Teste em modo anônimo** (sem extensões)
5. **Verifique em diferentes navegadores**

Se ainda não funcionar após 24-48h, pode ser necessário:
- Verificar configurações de servidor/hosting
- Verificar se há CDN bloqueando scripts
- Contatar suporte do Google Analytics

---

**Última atualização:** 2024
**Status:** Guia de troubleshooting completo
