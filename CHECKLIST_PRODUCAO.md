# ✅ Checklist de Produção

## 🔴 CRÍTICO - Atualizar Antes do Deploy

### 1. **Schema.ts - Informações de Contato**
- [ ] **Telefone**: Atualizar `+5591999999999` para o telefone real em `app/schema.ts` (linha 11)
- [ ] **Coordenadas GPS**: Verificar se as coordenadas de Belém estão corretas (linhas 20-21)
- [ ] **Endereço completo**: Adicionar endereço real se disponível (atualmente só cidade/estado)

### 2. **Formulário de Contato**
- [ ] **Integração com API**: O formulário atualmente usa `console.log` e `alert`
  - Implementar integração real com backend/API
  - Ou configurar serviço de email (ex: EmailJS, Resend, etc.)
  - Localização: `components/sections/diagnostic-form-section.tsx` (linha 36-41)

### 3. **URLs e Domínio**
- [ ] Verificar se todas as URLs no código apontam para o domínio correto
- [ ] Atualizar `robots.txt` se o domínio for diferente
- [ ] Atualizar sitemap se necessário

## 🟡 IMPORTANTE - Recomendado Antes do Deploy

### 4. **Imagens**
- [ ] Verificar se todas as imagens estão otimizadas
- [ ] Confirmar que `/perfil_1.jpg`, `/perfil_2.jpg`, `/perfil_3.jpg` existem
- [ ] Confirmar que `/venda.jpg`, `/aluguel.jpg`, `/novos.jpg`, `/usados.jpg` existem
- [ ] Remover comentário sobre placeholder no hero-section (linha 19-22) se não for usar imagem de fundo

### 5. **SEO**
- [ ] Testar structured data no [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submeter sitemap no Google Search Console após deploy
- [ ] Verificar meta tags no [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Verificar Twitter Cards no [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 6. **Performance**
- [ ] Testar Core Web Vitals no [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verificar se todas as imagens têm tamanhos apropriados
- [ ] Testar em diferentes dispositivos e navegadores

## 🟢 OPCIONAL - Melhorias Futuras

### 7. **Funcionalidades Adicionais**
- [ ] Adicionar Google Analytics
- [ ] Adicionar pixel do Facebook (se usar)
- [ ] Implementar sistema de tracking de conversões
- [ ] Adicionar chat online (ex: WhatsApp Business)

### 8. **Conteúdo**
- [ ] Adicionar depoimentos/testimonials
- [ ] Adicionar seção de FAQ
- [ ] Criar blog para SEO de conteúdo

## ✅ Verificações Técnicas

### Build e Deploy
- [x] Sem erros de lint
- [ ] Build de produção funciona (`npm run build`)
- [ ] Testar localmente em produção (`npm run build && npm start`)
- [ ] Verificar se todas as rotas funcionam

### Segurança
- [ ] Verificar se não há informações sensíveis no código
- [ ] Configurar HTTPS no servidor
- [ ] Verificar headers de segurança (CSP, etc.)

### Acessibilidade
- [ ] Testar com leitor de tela
- [ ] Verificar contraste de cores
- [ ] Testar navegação por teclado

## 📝 Notas

- O formulário atualmente mostra um `alert` após envio - considerar UX melhor
- Comentários sobre placeholders podem ser removidos após confirmar imagens finais
- Schema.org está configurado mas precisa de dados reais (telefone, endereço completo)
