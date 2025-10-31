'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { GameAccount, GameStats, Match, Bet, LiveMatch, Game } from '@/types/game'
import { gameService } from './gameService'

interface GameContextType {
  // Game Accounts
  gameAccounts: GameAccount[]
  addGameAccount: (account: Omit<GameAccount, 'id' | 'createdAt' | 'updatedAt'>) => Promise<boolean>
  removeGameAccount: (accountId: string) => void
  
  // Game Stats
  gameStats: Record<string, GameStats>
  refreshGameStats: (accountId: string) => Promise<void>
  
  // Matches
  matches: Record<string, Match[]>
  refreshMatches: (accountId: string) => Promise<void>
  
  // Live Tracking
  liveMatches: Record<string, LiveMatch>
  startLiveTracking: (accountId: string) => void
  stopLiveTracking: (accountId: string) => void
  
  // Bets
  activeBets: Bet[]
  placeBet: (bet: Omit<Bet, 'id' | 'createdAt'>) => Promise<boolean>
  cancelBet: (betId: string) => void
  
  // Games
  supportedGames: Game[]
  
  // Loading states
  isLoading: boolean
  isTracking: boolean
}

const GameContext = createContext<GameContextType | undefined>(undefined)

interface GameProviderProps {
  children: ReactNode
}

export function GameProvider({ children }: GameProviderProps) {
  const [gameAccounts, setGameAccounts] = useState<GameAccount[]>([])
  const [gameStats, setGameStats] = useState<Record<string, GameStats>>({})
  const [matches, setMatches] = useState<Record<string, Match[]>>({})
  const [liveMatches, setLiveMatches] = useState<Record<string, LiveMatch>>({})
  const [activeBets, setActiveBets] = useState<Bet[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isTracking, setIsTracking] = useState(false)
  
  const supportedGames = gameService.getSupportedGames()

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    const loadData = () => {
      try {
        const savedAccounts = localStorage.getItem('game_accounts')
        const savedStats = localStorage.getItem('game_stats')
        const savedMatches = localStorage.getItem('game_matches')
        const savedBets = localStorage.getItem('active_bets')

        if (savedAccounts) {
          setGameAccounts(JSON.parse(savedAccounts))
        }
        if (savedStats) {
          setGameStats(JSON.parse(savedStats))
        }
        if (savedMatches) {
          setMatches(JSON.parse(savedMatches))
        }
        if (savedBets) {
          setActiveBets(JSON.parse(savedBets))
        }
      } catch (error) {
        console.error('Erro ao carregar dados dos jogos:', error)
      }
    }

    loadData()
  }, [])

  // Salvar dados no localStorage quando mudarem
  useEffect(() => {
    localStorage.setItem('game_accounts', JSON.stringify(gameAccounts))
  }, [gameAccounts])

  useEffect(() => {
    localStorage.setItem('game_stats', JSON.stringify(gameStats))
  }, [gameStats])

  useEffect(() => {
    localStorage.setItem('game_matches', JSON.stringify(matches))
  }, [matches])

  useEffect(() => {
    localStorage.setItem('active_bets', JSON.stringify(activeBets))
  }, [activeBets])

  const addGameAccount = async (accountData: Omit<GameAccount, 'id' | 'createdAt' | 'updatedAt'>): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Validar conta com a API do jogo
      const isValid = await gameService.validateGameAccount(accountData.gameId, {
        puuid: accountData.gameId === 'valorant' ? accountData.gameId : undefined,
        gameName: accountData.gameUsername,
        tagLine: accountData.gameUsername,
        steamId: accountData.gameId === 'counter-strike-2' ? accountData.gameId : undefined
      })

      if (!isValid) {
        return false
      }

      const newAccount: GameAccount = {
        ...accountData,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date(),
        updatedAt: new Date()
      }

      setGameAccounts(prev => [...prev, newAccount])
      
      // Buscar estatísticas iniciais
      await refreshGameStats(newAccount.id)
      await refreshMatches(newAccount.id)
      
      return true
    } catch (error) {
      console.error('Erro ao adicionar conta do jogo:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const removeGameAccount = (accountId: string) => {
    setGameAccounts(prev => prev.filter(account => account.id !== accountId))
    
    // Remover dados relacionados
    const newStats = { ...gameStats }
    delete newStats[accountId]
    setGameStats(newStats)

    const newMatches = { ...matches }
    delete newMatches[accountId]
    setMatches(newMatches)

    const newLiveMatches = { ...liveMatches }
    delete newLiveMatches[accountId]
    setLiveMatches(newLiveMatches)

    // Cancelar apostas relacionadas
    setActiveBets(prev => prev.filter(bet => bet.accountId !== accountId))
  }

  const refreshGameStats = async (accountId: string) => {
    try {
      const account = gameAccounts.find(acc => acc.id === accountId)
      if (!account) return

      // Simular busca de estatísticas (em produção, isso viria da API)
      const mockStats: GameStats = {
        accountId,
        gameId: account.gameId,
        totalMatches: Math.floor(Math.random() * 100) + 20,
        wins: Math.floor(Math.random() * 50) + 10,
        losses: Math.floor(Math.random() * 40) + 5,
        winRate: Math.floor(Math.random() * 40) + 40,
        kills: Math.floor(Math.random() * 500) + 100,
        deaths: Math.floor(Math.random() * 400) + 80,
        assists: Math.floor(Math.random() * 300) + 60,
        kdRatio: Math.random() * 2 + 0.5,
        avgScore: Math.floor(Math.random() * 20) + 10,
        rank: 'Gold 2',
        lastMatchDate: new Date(),
        updatedAt: new Date()
      }

      setGameStats(prev => ({
        ...prev,
        [accountId]: mockStats
      }))
    } catch (error) {
      console.error('Erro ao atualizar estatísticas:', error)
    }
  }

  const refreshMatches = async (accountId: string) => {
    try {
      const account = gameAccounts.find(acc => acc.id === accountId)
      if (!account) return

      // Simular busca de partidas (em produção, isso viria da API)
      const mockMatches: Match[] = Array.from({ length: 10 }, (_, i) => ({
        id: `${accountId}_match_${i}`,
        accountId,
        gameId: account.gameId,
        matchId: `match_${Date.now()}_${i}`,
        map: ['Bind', 'Haven', 'Split', 'Ascent', 'Icebox'][Math.floor(Math.random() * 5)],
        mode: 'Competitive',
        result: ['win', 'loss'][Math.floor(Math.random() * 2)] as 'win' | 'loss',
        score: Math.floor(Math.random() * 25) + 5,
        kills: Math.floor(Math.random() * 20) + 3,
        deaths: Math.floor(Math.random() * 18) + 2,
        assists: Math.floor(Math.random() * 15) + 1,
        duration: Math.floor(Math.random() * 1800) + 600,
        rank: 'Gold 2',
        playedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
        createdAt: new Date()
      }))

      setMatches(prev => ({
        ...prev,
        [accountId]: mockMatches
      }))
    } catch (error) {
      console.error('Erro ao atualizar partidas:', error)
    }
  }

  const startLiveTracking = (accountId: string) => {
    setIsTracking(true)
    
    const trackMatch = async () => {
      const liveMatch = await gameService.trackLiveMatch(accountId, gameAccounts.find(acc => acc.id === accountId)?.gameId || '')
      
      if (liveMatch) {
        setLiveMatches(prev => ({
          ...prev,
          [accountId]: liveMatch
        }))
      }
    }

    // Iniciar tracking
    trackMatch()
    
    // Atualizar a cada 30 segundos
    const interval = setInterval(trackMatch, 30000)
    
    return () => {
      clearInterval(interval)
      setIsTracking(false)
    }
  }

  const stopLiveTracking = (accountId: string) => {
    const newLiveMatches = { ...liveMatches }
    delete newLiveMatches[accountId]
    setLiveMatches(newLiveMatches)
  }

  const placeBet = async (betData: Omit<Bet, 'id' | 'createdAt'>): Promise<boolean> => {
    try {
      const newBet: Bet = {
        ...betData,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date()
      }

      setActiveBets(prev => [...prev, newBet])
      return true
    } catch (error) {
      console.error('Erro ao fazer aposta:', error)
      return false
    }
  }

  const cancelBet = (betId: string) => {
    setActiveBets(prev => prev.filter(bet => bet.id !== betId))
  }

  const value: GameContextType = {
    gameAccounts,
    addGameAccount,
    removeGameAccount,
    gameStats,
    refreshGameStats,
    matches,
    refreshMatches,
    liveMatches,
    startLiveTracking,
    stopLiveTracking,
    activeBets,
    placeBet,
    cancelBet,
    supportedGames,
    isLoading,
    isTracking
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export function useGame() {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame deve ser usado dentro de um GameProvider')
  }
  return context
}
