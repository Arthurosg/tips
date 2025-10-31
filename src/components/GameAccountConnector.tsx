'use client'

import { useState } from 'react'
import { gameService } from '@/lib/gameService'

// Interface para as propriedades do conector de conta
interface GameAccountConnectorProps {
  gameId: string
  gameName: string
  onAccountConnected: (player: any) => void
}

export default function GameAccountConnector({ gameId, gameName, onAccountConnected }: GameAccountConnectorProps) {
  // Estado para as credenciais do jogador
  const [credentials, setCredentials] = useState({
    gameName: '',
    tagLine: '',
    puuid: '',
    steamId: ''
  })
  
  // Estados para controle da interface
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Função para conectar a conta do jogador
  const handleConnect = async () => {
    setIsLoading(true)
    setError('')

    try {
      // Fazer requisição para a API de jogadores
      const response = await fetch('/api/games/player', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gameId,
          credentials
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao conectar conta')
      }

      // Notificar o componente pai sobre a conexão bem-sucedida
      onAccountConnected(data.player)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setIsLoading(false)
    }
  }

  // Função para renderizar campos de entrada específicos de cada jogo
  const getInputFields = () => {
    switch (gameId) {
      case 'valorant':
      case 'league-of-legends':
        return (
          <>
            {/* Campo para nome do jogador (Riot Games) */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nome do Jogador
              </label>
              <input
                type="text"
                value={credentials.gameName}
                onChange={(e) => setCredentials({ ...credentials, gameName: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Ex: PlayerName"
              />
            </div>
            {/* Campo para tag do jogador (Riot Games) */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tag
              </label>
              <input
                type="text"
                value={credentials.tagLine}
                onChange={(e) => setCredentials({ ...credentials, tagLine: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Ex: BR1"
              />
            </div>
          </>
        )
      case 'counter-strike-2':
        return (
          <div className="mb-4">
            {/* Campo para Steam ID (Counter-Strike 2) */}
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Steam ID
            </label>
            <input
              type="text"
              value={credentials.steamId}
              onChange={(e) => setCredentials({ ...credentials, steamId: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Ex: 76561198000000000"
            />
            <p className="text-xs text-gray-400 mt-1">
              Encontre seu Steam ID em: <a href="https://steamid.io/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">steamid.io</a>
            </p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-4">
        Conectar conta do {gameName}
      </h3>
      
      {getInputFields()}

      {error && (
        <div className="mb-4 p-3 bg-red-900/20 border border-red-500 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <button
        onClick={handleConnect}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        {isLoading ? 'Conectando...' : 'Conectar Conta'}
      </button>

      <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500 rounded-lg">
        <p className="text-blue-400 text-sm">
          <strong>Seguro:</strong> Suas credenciais são usadas apenas para verificar sua conta. 
          Não armazenamos senhas ou dados sensíveis.
        </p>
      </div>
    </div>
  )
}
