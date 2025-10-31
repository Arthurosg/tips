// Script de teste para verificar integração das APIs
// Execute com: node test-integration.js

const axios = require('axios');

// Configuração
const RIOT_API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY || 'demo-key';
const STEAM_API_KEY = process.env.NEXT_PUBLIC_STEAM_API_KEY || 'demo-key';

const riotClient = axios.create({
  baseURL: 'https://americas.api.riotgames.com',
  headers: {
    'X-Riot-Token': RIOT_API_KEY,
  },
  timeout: 10000,
});

const steamClient = axios.create({
  baseURL: 'https://api.steampowered.com',
  timeout: 10000,
});

async function testRiotAPI() {
  console.log('🎮 Testando Riot Games API...');
  
  try {
    // Teste com um jogador conhecido (exemplo)
    const testGameName = 'Riot';
    const testTagLine = 'Riot';
    
    const response = await riotClient.get(
      `/riot/account/v1/accounts/by-riot-id/${testGameName}/${testTagLine}`
    );
    
    console.log('✅ Riot API funcionando!');
    console.log('Dados do jogador:', {
      gameName: response.data.gameName,
      tagLine: response.data.tagLine,
      puuid: response.data.puuid
    });
    
    return true;
  } catch (error) {
    console.log('❌ Erro na Riot API:', error.response?.data || error.message);
    return false;
  }
}

async function testSteamAPI() {
  console.log('🎮 Testando Steam API...');
  
  try {
    // Teste com um Steam ID conhecido (exemplo)
    const testSteamId = '76561198000000000';
    
    const response = await steamClient.get(
      `/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${testSteamId}`
    );
    
    if (response.data.response.players.length > 0) {
      console.log('✅ Steam API funcionando!');
      console.log('Dados do jogador:', {
        steamid: response.data.response.players[0].steamid,
        personaname: response.data.response.players[0].personaname
      });
      return true;
    } else {
      console.log('⚠️ Steam API funcionando, mas jogador não encontrado');
      return true;
    }
  } catch (error) {
    console.log('❌ Erro na Steam API:', error.response?.data || error.message);
    return false;
  }
}

async function testGameService() {
  console.log('🔧 Testando GameService...');
  
  try {
    // Simular teste do GameService
    const { gameService } = require('./src/lib/gameService.ts');
    
    const games = gameService.getSupportedGames();
    console.log('✅ GameService funcionando!');
    console.log('Jogos suportados:', games.map(g => g.name));
    
    return true;
  } catch (error) {
    console.log('❌ Erro no GameService:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Iniciando testes de integração...\n');
  
  const results = {
    riot: await testRiotAPI(),
    steam: await testSteamAPI(),
    gameService: await testGameService()
  };
  
  console.log('\n📊 Resultados dos testes:');
  console.log('Riot API:', results.riot ? '✅' : '❌');
  console.log('Steam API:', results.steam ? '✅' : '❌');
  console.log('GameService:', results.gameService ? '✅' : '❌');
  
  const allPassed = Object.values(results).every(result => result);
  
  if (allPassed) {
    console.log('\n🎉 Todos os testes passaram! Sua integração está funcionando.');
  } else {
    console.log('\n⚠️ Alguns testes falharam. Verifique as configurações das APIs.');
  }
  
  return allPassed;
}

// Executar testes se chamado diretamente
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { runTests, testRiotAPI, testSteamAPI, testGameService };
