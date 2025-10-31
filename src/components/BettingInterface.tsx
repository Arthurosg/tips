'use client'

import { useState, useEffect } from 'react'
import { BetChallenge } from '@/types/game'

// Interface para as propriedades da interface de apostas
interface BettingInterfaceProps {
  gameId: string
  gameName: string
  player: any
  onBetPlaced: (bet: any) => void
}

export default function BettingInterface({ gameId, gameName, player, onBetPlaced }: BettingInterfaceProps) {
  // Estados para controle da interface de apostas
  const [challenges, setChallenges] = useState<BetChallenge[]>([])
  const [selectedChallenge, setSelectedChallenge] = useState<BetChallenge | null>(null)
  const [amount, setAmount] = useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const loadChallenges = async () => {
    try {
      const response = await fetch(`/api/games/challenges?gameId=${gameId}`)
      const data = await response.json()
      
      if (response.ok) {
        setChallenges(data.challenges)
      }
    } catch (err) {
      console.error('Erro ao carregar desafios:', err)
    }
  }

  useEffect(() => {
    loadChallenges()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId])

  const handlePlaceBet = async () => {
    if (!selectedChallenge) {
      setError('Selecione um desafio')
      return
    }

    if (amount < 10) {
      setError('Valor mínimo é R$ 10,00')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/games/bet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'user_123', // This would come from auth context
          gameId,
          amount,
          challenge: selectedChallenge
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao fazer aposta')
      }

      onBetPlaced(data.bet)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setIsLoading(false)
    }
  }

  const calculatePotentialWin = () => {
    if (!selectedChallenge) return 0
    
    const multipliers = {
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

    const multiplier = multipliers[selectedChallenge.type] * difficultyMultipliers[selectedChallenge.difficulty]
    return amount * multiplier
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400 bg-green-900/20'
      case 'medium': return 'text-yellow-400 bg-yellow-900/20'
      case 'hard': return 'text-red-400 bg-red-900/20'
      default: return 'text-gray-400 bg-gray-900/20'
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-4">
        Fazer aposta - {gameName}
      </h3>

      {player && (
        <div className="mb-6 p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center space-x-4">
            {player.card && (
              <img 
                src={player.card.small} 
                alt="Player card" 
                className="w-12 h-12 rounded-lg"
              />
            )}
            <div>
              <h4 className="text-white font-semibold">
                {player.gameName}#{player.tagLine}
              </h4>
              {player.rank && (
                <p className="text-gray-300 text-sm">
                  {player.rank.tier} {player.rank.points && `(${player.rank.points} pontos)`}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Valor da aposta (R$)
        </label>
        <input
          type="number"
          min="10"
          max="1000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Escolha um desafio
        </label>
        <div className="space-y-2">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              onClick={() => setSelectedChallenge(challenge)}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                selectedChallenge === challenge
                  ? 'border-purple-500 bg-purple-900/20'
                  : 'border-gray-600 bg-gray-700 hover:border-gray-500'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white font-medium">{challenge.description}</p>
                  <p className="text-gray-400 text-sm">Meta: {challenge.target}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedChallenge && (
        <div className="mb-6 p-4 bg-purple-900/20 border border-purple-500 rounded-lg">
          <h4 className="text-white font-semibold mb-2">Resumo da aposta</h4>
          <div className="space-y-1 text-sm">
            <p className="text-gray-300">
              <span className="text-gray-400">Valor:</span> R$ {amount.toFixed(2)}
            </p>
            <p className="text-gray-300">
              <span className="text-gray-400">Desafio:</span> {selectedChallenge.description}
            </p>
            <p className="text-gray-300">
              <span className="text-gray-400">Multiplicador:</span> {calculatePotentialWin() / amount}x
            </p>
            <p className="text-green-400 font-semibold">
              <span className="text-gray-400">Ganho potencial:</span> R$ {calculatePotentialWin().toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-900/20 border border-red-500 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <button
        onClick={handlePlaceBet}
        disabled={isLoading || !selectedChallenge}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        {isLoading ? 'Fazendo aposta...' : 'Fazer Aposta'}
      </button>

      <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-500 rounded-lg">
        <p className="text-yellow-400 text-sm">
          <strong>Jogue com responsabilidade:</strong> Aposte apenas o que pode perder. 
          Se você tem problemas com jogos, procure ajuda.
        </p>
      </div>
    </div>
  )
}
