# Configuração das APIs dos Jogos

Este documento explica como configurar as APIs necessárias para integrar com os jogos suportados.

## 🔑 Chaves de API Necessárias

### 1. Riot Games API (Valorant, League of Legends, TFT)

1. Acesse [Riot Developer Portal](https://developer.riotgames.com/)
2. Faça login com sua conta Riot
3. Crie uma nova aplicação
4. Copie sua API Key
5. Adicione no arquivo `.env.local`:

```env
NEXT_PUBLIC_RIOT_API_KEY=sua-chave-aqui
```

**Limitações da API:**
- 100 requests por minuto para desenvolvimento
- 100 requests por minuto para produção
- Rate limiting automático implementado

### 2. Steam Web API (Counter-Strike 2)

1. Acesse [Steam Web API](https://steamcommunity.com/dev/apikey)
2. Faça login com sua conta Steam
3. Gere uma nova API Key
4. Adicione no arquivo `.env.local`:

```env
NEXT_PUBLIC_STEAM_API_KEY=sua-chave-aqui
```

**Limitações da API:**
- 200 requests por dia para desenvolvimento
- Rate limiting implementado

## 🚀 Como Executar

1. **Clone o repositório:**
```bash
git clone <seu-repositorio>
cd minha-plataforma
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
```bash
cp config-example.env .env.local
# Edite o arquivo .env.local com suas chaves de API
```

4. **Execute o projeto:**
```bash
npm run dev
```

5. **Acesse:**
```
http://localhost:3000
```

## 🎮 Jogos Suportados

### ✅ Implementados
- **VALORANT** - Integração completa com Riot API
- **League of Legends** - Integração completa com Riot API  
- **Counter-Strike 2** - Integração com Steam API

### 🔄 Em Desenvolvimento
- **ARAM** - Modo rápido do League of Legends
- **Teamfight Tactics** - Auto Chess da Riot

## 🔧 Funcionalidades Implementadas

### Sistema de Apostas
- ✅ Conectar contas de jogos
- ✅ Sistema de desafios
- ✅ Cálculo de multiplicadores
- ✅ Interface de apostas
- ✅ Validação de contas

### APIs Integradas
- ✅ Busca de jogadores
- ✅ Histórico de partidas
- ✅ Dados de ranking
- ✅ Rate limiting
- ✅ Tratamento de erros

### Interface
- ✅ Design responsivo
- ✅ Temas por jogo
- ✅ Componentes reutilizáveis
- ✅ Feedback visual
- ✅ Validação de formulários

## 🛡️ Segurança

- ✅ Rate limiting implementado
- ✅ Validação de dados
- ✅ Tratamento de erros
- ✅ CORS configurado
- ✅ Timeout de requisições

## 📊 Monitoramento

O sistema inclui logs detalhados para:
- Requisições às APIs
- Erros de integração
- Rate limiting
- Validação de contas

## 🔄 Próximos Passos

1. **Banco de Dados:**
   - Implementar persistência de apostas
   - Sistema de usuários
   - Histórico de transações

2. **Pagamentos:**
   - Integração com PIX
   - Sistema de saques
   - Histórico financeiro

3. **Recursos Avançados:**
   - WebSockets para partidas ao vivo
   - Sistema de notificações
   - Dashboard de estatísticas
   - Sistema de ligas/torneios

## 🆘 Suporte

Para problemas com as APIs:
- [Riot Games Support](https://support.riotgames.com/)
- [Steam Support](https://help.steampowered.com/)

Para problemas com o código:
- Verifique os logs do console
- Confirme se as chaves de API estão corretas
- Verifique se as contas dos jogos estão ativas
