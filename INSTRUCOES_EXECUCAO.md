# 🚀 Instruções de Execução - Plataforma de Apostas em Jogos

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta Riot Games (para API do Valorant/LoL)
- Conta Steam (para API do CS2)
- Editor de código (VS Code recomendado)

## 🔧 Configuração Inicial

### 1. Instalar Dependências
```bash
cd minha-plataforma
npm install
```

### 2. Configurar Variáveis de Ambiente
```bash
# Copie o arquivo de exemplo
cp config-example.env .env.local

# Edite o arquivo .env.local com suas chaves de API
```

**Conteúdo do .env.local:**
```env
# APIs dos Jogos
NEXT_PUBLIC_RIOT_API_KEY=sua-chave-riot-aqui
NEXT_PUBLIC_STEAM_API_KEY=sua-chave-steam-aqui

# Outras configurações
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua-chave-secreta-aqui
```

### 3. Obter Chaves de API

#### Riot Games API (Valorant, League of Legends)
1. Acesse: https://developer.riotgames.com/
2. Faça login com sua conta Riot
3. Crie uma nova aplicação
4. Copie a API Key
5. Cole no arquivo `.env.local`

#### Steam Web API (Counter-Strike 2)
1. Acesse: https://steamcommunity.com/dev/apikey
2. Faça login com sua conta Steam
3. Gere uma nova API Key
4. Cole no arquivo `.env.local`

## 🎮 Executar o Projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm start
```

### Acessar
Abra seu navegador em: http://localhost:3000

## 🧪 Testar Integrações

### Teste Automático
```bash
node test-integration.js
```

### Teste Manual
1. Acesse http://localhost:3000/games
2. Clique em um jogo ativo (VALORANT, LoL, CS2)
3. Tente conectar uma conta
4. Teste o sistema de apostas

## 🎯 Funcionalidades Disponíveis

### ✅ Implementadas
- **Página inicial** com lista de jogos
- **Conectar contas** de jogos
- **Sistema de apostas** com desafios
- **Integração com APIs** oficiais
- **Interface responsiva** e moderna
- **Rate limiting** automático
- **Tratamento de erros**

### 🎮 Jogos Suportados
- **VALORANT** - Ranqueada competitiva
- **League of Legends** - Solo/Duo ranked
- **Counter-Strike 2** - Modo competitivo

### 💰 Sistema de Apostas
- Conectar conta do jogo
- Escolher valor da aposta (mín. R$ 10)
- Selecionar desafio
- Calcular ganho potencial
- Fazer aposta

## 🔍 Estrutura do Projeto

```
src/
├── app/
│   ├── api/games/          # APIs de integração
│   ├── games/              # Páginas dos jogos
│   └── page.tsx            # Página inicial
├── components/
│   ├── GameAccountConnector.tsx
│   ├── BettingInterface.tsx
│   └── GameCard.tsx
├── lib/
│   └── gameService.ts      # Serviço principal
└── types/
    └── game.ts             # Tipos TypeScript
```

## 🛠️ Desenvolvimento

### Adicionar Novo Jogo
1. Adicione no `gameService.ts`
2. Crie página em `app/games/[jogo]/`
3. Atualize lista em `app/games/page.tsx`

### Modificar Sistema de Apostas
1. Edite `BettingInterface.tsx`
2. Atualize `gameService.ts`
3. Modifique tipos em `types/game.ts`

## 🐛 Solução de Problemas

### Erro de API
- Verifique se as chaves estão corretas
- Confirme se as contas dos jogos estão ativas
- Verifique rate limiting

### Erro de Build
```bash
npm run lint
npm run build
```

### Erro de Conexão
- Verifique se o servidor está rodando
- Confirme se a porta 3000 está livre
- Verifique logs do console

## 📊 Monitoramento

### Logs
- Console do navegador
- Terminal do Node.js
- Logs de API automáticos

### Métricas
- Rate limiting por API
- Sucesso/falha de conexões
- Tempo de resposta das APIs

## 🚀 Próximos Passos

1. **Banco de Dados**
   - Implementar persistência
   - Sistema de usuários
   - Histórico de apostas

2. **Pagamentos**
   - Integração PIX
   - Sistema de saques
   - Controle financeiro

3. **Recursos Avançados**
   - Partidas ao vivo
   - Notificações
   - Dashboard completo

## 📞 Suporte

- **APIs:** Documentação oficial dos jogos
- **Código:** Verifique logs e console
- **Configuração:** Siga este guia passo a passo

---

🎮 **Divirta-se desenvolvendo sua plataforma de apostas em jogos!**
