import axios from 'axios'
import { Game, GameStats, Match, RiotPlayer, RiotMatch, LiveMatch, Bet, BetChallenge } from '@/types/game'

// Configuração da API da Riot Games
const RIOT_API_BASE = 'https://americas.api.riotgames.com'
const RIOT_API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY || 'demo-key'

// Configuração da API do Steam
const STEAM_API_BASE = 'https://api.steampowered.com'
const STEAM_API_KEY = process.env.NEXT_PUBLIC_STEAM_API_KEY || 'demo-key'

// Rate limiting
const RATE_LIMITS = {
  riot: 100, // requests per minute
  steam: 200 // requests per minute
}

// Cache para rate limiting
const requestCache = new Map<string, { count: number; resetTime: number }>()

class GameService {
  private riotClient = axios.create({
    baseURL: RIOT_API_BASE,
    headers: {
      'X-Riot-Token': RIOT_API_KEY,
    },
    timeout: 10000,
  })

  private steamClient = axios.create({
    baseURL: STEAM_API_BASE,
    timeout: 10000,
  })

  // Rate limiting helper
  private async checkRateLimit(api: 'riot' | 'steam'): Promise<boolean> {
    const now = Date.now()
    const key = `${api}_${Math.floor(now / 60000)}` // Reset every minute
    
    const cached = requestCache.get(key)
    if (!cached || now > cached.resetTime) {
      requestCache.set(key, { count: 1, resetTime: now + 60000 })
      return true
    }
    
    if (cached.count >= RATE_LIMITS[api]) {
      return false
    }
    
    cached.count++
    return true
  }

  // Error handling helper
  private handleApiError(error: any, context: string): null {
    console.error(`Erro em ${context}:`, error.response?.data || error.message)
    return null
  }

  // ===== VALORANT =====
  
  async getValorantPlayer(puuid: string): Promise<RiotPlayer | null> {
    try {
      if (!await this.checkRateLimit('riot')) {
        throw new Error('Rate limit exceeded for Riot API')
      }

      const [accountResponse, mmrResponse] = await Promise.all([
        this.riotClient.get(`/riot/account/v1/accounts/by-puuid/${puuid}`),
        this.riotClient.get(`/val/ranked/v1/by-puuid/${puuid}`).catch(() => null)
      ])

      const account = accountResponse.data
      const mmr = mmrResponse?.data

      return {
        puuid: account.puuid,
        gameName: account.gameName,
        tagLine: account.tagLine,
        card: account.card,
        rank: mmr ? {
          tier: mmr.currenttierpatched || 'Unranked',
          rank: mmr.currenttier || 'UNRANKED',
          points: mmr.ranking_in_tier || 0
        } : undefined
      }
    } catch (error) {
      return this.handleApiError(error, 'buscar jogador do Valorant')
    }
  }

  async getValorantPlayerByName(gameName: string, tagLine: string): Promise<RiotPlayer | null> {
    try {
      if (!await this.checkRateLimit('riot')) {
        throw new Error('Rate limit exceeded for Riot API')
      }

      const accountResponse = await this.riotClient.get(
        `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`
      )

      const account = accountResponse.data
      
      // Buscar dados de ranking do Valorant
      const mmrResponse = await this.riotClient.get(
        `/val/ranked/v1/by-puuid/${account.puuid}`
      ).catch(() => null)

      const mmr = mmrResponse?.data

      return {
        puuid: account.puuid,
        gameName: account.gameName,
        tagLine: account.tagLine,
        card: account.card,
        rank: mmr ? {
          tier: mmr.currenttierpatched || 'Unranked',
          rank: mmr.currenttier || 'UNRANKED',
          points: mmr.ranking_in_tier || 0
        } : undefined
      }
    } catch (error) {
      return this.handleApiError(error, 'buscar jogador do Valorant por nome')
    }
  }

  async getValorantMatchHistory(puuid: string, startIndex = 0, endIndex = 10): Promise<RiotMatch[]> {
    try {
      const response = await this.riotClient.get(
        `/val/match/v1/matchlists/by-puuid/${puuid}?startIndex=${startIndex}&endIndex=${endIndex}`
      )
      
      const matchIds = response.data.history
      const matches = await Promise.all(
        matchIds.map((match: any) => this.getValorantMatch(match.matchId))
      )
      
      return matches.filter(match => match !== null) as RiotMatch[]
    } catch (error) {
      console.error('Erro ao buscar histórico de partidas do Valorant:', error)
      return []
    }
  }

  async getValorantMatch(matchId: string): Promise<RiotMatch | null> {
    try {
      const response = await this.riotClient.get(`/val/match/v1/matches/${matchId}`)
      return response.data
    } catch (error) {
      console.error('Erro ao buscar partida do Valorant:', error)
      return null
    }
  }

  // ===== LEAGUE OF LEGENDS =====
  
  async getLeaguePlayer(gameName: string, tagLine: string): Promise<RiotPlayer | null> {
    try {
      if (!await this.checkRateLimit('riot')) {
        throw new Error('Rate limit exceeded for Riot API')
      }

      const accountResponse = await this.riotClient.get(
        `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`
      )
      
      const account = accountResponse.data
      
      // Buscar dados de ranking do LoL
      const rankedResponse = await this.riotClient.get(
        `/lol/league/v4/entries/by-summoner/${account.puuid}`
      ).catch(() => null)

      const rankedData = rankedResponse?.data?.[0]

      return {
        puuid: account.puuid,
        gameName: account.gameName,
        tagLine: account.tagLine,
        card: account.card,
        rank: rankedData ? {
          tier: rankedData.tier || 'UNRANKED',
          rank: rankedData.rank || 'UNRANKED',
          points: rankedData.leaguePoints || 0
        } : undefined
      }
    } catch (error) {
      return this.handleApiError(error, 'buscar jogador do League of Legends')
    }
  }

  async getLeagueMatchHistory(puuid: string, count = 10): Promise<any[]> {
    try {
      if (!await this.checkRateLimit('riot')) {
        throw new Error('Rate limit exceeded for Riot API')
      }

      // Primeiro, buscar o summoner ID
      const summonerResponse = await this.riotClient.get(
        `/lol/summoner/v4/summoners/by-puuid/${puuid}`
      )
      
      const summoner = summonerResponse.data
      
      // Buscar histórico de partidas
      const matchHistoryResponse = await this.riotClient.get(
        `/lol/match/v4/matchlists/by-account/${summoner.accountId}?endIndex=${count}`
      )
      
      return matchHistoryResponse.data.matches || []
    } catch (error) {
      return this.handleApiError(error, 'buscar histórico do League of Legends') || []
    }
  }

  // ===== COUNTER-STRIKE 2 =====
  
  async getCS2Player(steamId: string): Promise<any> {
    try {
      if (!await this.checkRateLimit('steam')) {
        throw new Error('Rate limit exceeded for Steam API')
      }

      const response = await this.steamClient.get(
        `/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${steamId}`
      )
      
      return response.data.response.players[0] || null
    } catch (error) {
      return this.handleApiError(error, 'buscar jogador do CS2')
    }
  }

  async getCS2PlayerStats(steamId: string): Promise<any> {
    try {
      if (!await this.checkRateLimit('steam')) {
        throw new Error('Rate limit exceeded for Steam API')
      }

      const response = await this.steamClient.get(
        `/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=${STEAM_API_KEY}&steamid=${steamId}`
      )
      
      return response.data.playerstats || null
    } catch (error) {
      return this.handleApiError(error, 'buscar estatísticas do CS2')
    }
  }

  // ===== BETTING SYSTEM (Similar to Tipspace) =====
  
  async createBet(userId: string, gameId: string, amount: number, challenge: BetChallenge): Promise<Bet | null> {
    try {
      const bet: Bet = {
        id: `bet_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        userId,
        accountId: '', // Will be set when account is linked
        gameId,
        amount,
        multiplier: this.calculateMultiplier(challenge),
        potentialWin: amount * this.calculateMultiplier(challenge),
        status: 'pending',
        challenge,
        createdAt: new Date()
      }

      // Here you would save to database
      // await this.saveBet(bet)
      
      return bet
    } catch (error) {
      console.error('Erro ao criar aposta:', error)
      return null
    }
  }

  private calculateMultiplier(challenge: BetChallenge): number {
    const baseMultipliers = {
      'win_match': 2.0,
      'get_kills': 1.5,
      'achieve_score': 1.8,
      'survive_rounds': 2.2,
      'rank_up': 3.0
    }

    const difficultyMultipliers = {
      'easy': 1.0,
      'medium': 1.5,
      'hard': 2.0
    }

    return baseMultipliers[challenge.type] * difficultyMultipliers[challenge.difficulty]
  }

  async getAvailableChallenges(gameId: string): Promise<BetChallenge[]> {
    const challenges: BetChallenge[] = [
      {
        type: 'win_match',
        target: 1,
        description: 'Ganhe 1 partida',
        difficulty: 'easy'
      },
      {
        type: 'get_kills',
        target: 20,
        description: 'Faça 20 eliminações',
        difficulty: 'medium'
      },
      {
        type: 'achieve_score',
        target: 200,
        description: 'Alcance 200 pontos',
        difficulty: 'medium'
      },
      {
        type: 'survive_rounds',
        target: 10,
        description: 'Sobreviva 10 rounds',
        difficulty: 'hard'
      }
    ]

    return challenges
  }

  // ===== GAME STATS PROCESSING =====
  
  calculateGameStats(matches: Match[]): GameStats {
    const totalMatches = matches.length
    const wins = matches.filter(m => m.result === 'win').length
    const losses = matches.filter(m => m.result === 'loss').length
    const winRate = totalMatches > 0 ? (wins / totalMatches) * 100 : 0
    
    const totalKills = matches.reduce((sum, m) => sum + m.kills, 0)
    const totalDeaths = matches.reduce((sum, m) => sum + m.deaths, 0)
    const kdRatio = totalDeaths > 0 ? totalKills / totalDeaths : totalKills
    
    const latestMatch = matches.sort((a, b) => 
      new Date(b.playedAt).getTime() - new Date(a.playedAt).getTime()
    )[0]

    return {
      accountId: matches[0]?.accountId || '',
      gameId: matches[0]?.gameId || '',
      totalMatches,
      wins,
      losses,
      winRate,
      kills: totalKills,
      deaths: totalDeaths,
      assists: matches.reduce((sum, m) => sum + (m.assists || 0), 0),
      kdRatio,
      avgScore: matches.reduce((sum, m) => sum + m.score, 0) / totalMatches,
      rank: latestMatch?.rank || 'Unranked',
      lastMatchDate: latestMatch?.playedAt || new Date(),
      updatedAt: new Date()
    }
  }

  // ===== LIVE MATCH TRACKING =====
  
  async trackLiveMatch(accountId: string, gameId: string): Promise<LiveMatch | null> {
    try {
      // Simular tracking de partida ao vivo
      // Em produção, isso seria conectado a WebSockets ou APIs em tempo real
      const mockLiveMatch: LiveMatch = {
        accountId,
        gameId,
        matchId: `live_${Date.now()}`,
        map: 'Bind',
        mode: 'Competitive',
        status: 'in_progress',
        score: Math.floor(Math.random() * 20) + 5,
        kills: Math.floor(Math.random() * 15) + 3,
        deaths: Math.floor(Math.random() * 12) + 2,
        assists: Math.floor(Math.random() * 10) + 1,
        rank: 'Gold 2',
        duration: Math.floor(Math.random() * 1800) + 600, // 10-40 minutos
        startTime: new Date(Date.now() - Math.floor(Math.random() * 1800) * 1000)
      }

      return mockLiveMatch
    } catch (error) {
      console.error('Erro ao rastrear partida ao vivo:', error)
      return null
    }
  }

  // ===== GAME CONFIGURATION =====
  
  getSupportedGames(): Game[] {
    return [
      {
        id: 'valorant',
        name: 'VALORANT',
        slug: 'valorant',
        apiEndpoint: 'https://americas.api.riotgames.com',
        isActive: true,
        supportedModes: ['Competitive', 'Unrated', 'Spike Rush', 'Deathmatch'],
        supportedChallenges: ['win_match', 'get_kills', 'achieve_score', 'survive_rounds'],
        icon: '🎯',
        color: 'from-red-500 to-pink-500'
      },
      {
        id: 'league-of-legends',
        name: 'League of Legends',
        slug: 'lol',
        apiEndpoint: 'https://americas.api.riotgames.com',
        isActive: true,
        supportedModes: ['Ranked Solo/Duo', 'Ranked Flex', 'Normal Draft', 'ARAM'],
        supportedChallenges: ['win_match', 'get_kills', 'achieve_score'],
        icon: '⚔️',
        color: 'from-blue-500 to-blue-600'
      },
      {
        id: 'counter-strike-2',
        name: 'Counter-Strike 2',
        slug: 'cs2',
        apiEndpoint: 'https://api.steampowered.com',
        isActive: true,
        supportedModes: ['Competitive', 'Wingman', 'Deathmatch', 'Casual'],
        supportedChallenges: ['win_match', 'get_kills', 'achieve_score', 'survive_rounds'],
        icon: '🔫',
        color: 'from-orange-500 to-red-500'
      },
      {
        id: 'teamfight-tactics',
        name: 'Teamfight Tactics',
        slug: 'tft',
        apiEndpoint: 'https://americas.api.riotgames.com',
        isActive: true,
        supportedModes: ['Ranked', 'Normal', 'Hyper Roll'],
        supportedChallenges: ['win_match', 'achieve_score'],
        icon: '🎲',
        color: 'from-purple-500 to-indigo-500'
      }
    ]
  }

  // ===== UTILITY METHODS =====
  
  async validateGameAccount(gameId: string, credentials: any): Promise<boolean> {
    try {
      switch (gameId) {
        case 'valorant':
          const player = await this.getValorantPlayer(credentials.puuid)
          return player !== null
        case 'league-of-legends':
          const lolPlayer = await this.getLeaguePlayer(credentials.gameName, credentials.tagLine)
          return lolPlayer !== null
        case 'counter-strike-2':
          const cs2Player = await this.getCS2Player(credentials.steamId)
          return cs2Player !== null
        default:
          return false
      }
    } catch (error) {
      console.error('Erro ao validar conta do jogo:', error)
      return false
    }
  }
}

export const gameService = new GameService()
