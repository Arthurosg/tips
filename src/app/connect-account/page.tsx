'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import { useGame } from '@/lib/GameContext'
import { useForm } from '@/hooks/useForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ConnectAccountPage() {
  const router = useRouter()
  const { user } = useAuth()
  const { supportedGames, addGameAccount, isLoading } = useGame()
  const [selectedGame, setSelectedGame] = useState('')
  const [message, setMessage] = useState('')

  const { values, errors, setValue, handleSubmit, setErrors } = useForm({
    initialValues: {
      gameUsername: '',
      region: 'BR1',
      rank: '',
      level: ''
    },
    validate: (values) => {
      const errors: Record<string, string> = {}
      
      if (!values.gameUsername) {
        errors.gameUsername = 'Nome de usuário é obrigatório'
      }
      
      if (!selectedGame) {
        setErrors({ ...errors, game: 'Selecione um jogo' })
      }
      
      return errors
    },
    onSubmit: async (values) => {
      if (!user || !selectedGame) return
      
      setMessage('')
      const success = await addGameAccount({
        gameId: selectedGame,
        userId: user.id,
        gameUsername: values.gameUsername,
        region: values.region,
        rank: values.rank,
        level: values.level ? parseInt(values.level) : undefined,
        isVerified: false,
        lastSync: new Date()
      })
      
      if (success) {
        setMessage('Conta conectada com sucesso!')
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      } else {
        setMessage('Erro ao conectar conta. Verifique os dados e tente novamente.')
      }
    }
  })

  const currentGame = supportedGames.find(game => game.id === selectedGame)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Conectar <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Conta do Jogo</span>
            </h1>
            <p className="text-gray-300">
              Vincule sua conta para começar a jogar valendo
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {message && (
                <div className={`p-4 rounded-lg ${
                  message.includes('sucesso') 
                    ? 'bg-green-500/10 border border-green-500/20' 
                    : 'bg-red-500/10 border border-red-500/20'
                }`}>
                  <p className={`text-center ${
                    message.includes('sucesso') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {message}
                  </p>
                </div>
              )}

              {/* Seleção do Jogo */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Escolha seu jogo
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {supportedGames.map((game) => (
                    <div
                      key={game.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedGame === game.id
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      onClick={() => setSelectedGame(game.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{game.icon}</span>
                        <div>
                          <h3 className="text-white font-semibold">{game.name}</h3>
                          <p className="text-gray-400 text-sm">
                            {game.supportedModes.slice(0, 2).join(', ')}
                            {game.supportedModes.length > 2 && '...'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.game && (
                  <p className="mt-1 text-sm text-red-400">{errors.game}</p>
                )}
              </div>

              {currentGame && (
                <>
                  <div>
                    <label htmlFor="gameUsername" className="block text-sm font-medium text-gray-300 mb-2">
                      {currentGame.id === 'valorant' ? 'Nome de Usuário (Riot ID)' : 
                       currentGame.id === 'league-of-legends' ? 'Nome de Usuário (Riot ID)' :
                       currentGame.id === 'counter-strike-2' ? 'Steam ID' :
                       'Nome de Usuário'}
                      *
                    </label>
                    <input
                      type="text"
                      id="gameUsername"
                      value={values.gameUsername}
                      onChange={(e) => setValue('gameUsername', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      placeholder={
                        currentGame.id === 'valorant' ? 'Exemplo: Player#1234' :
                        currentGame.id === 'league-of-legends' ? 'Exemplo: Player#1234' :
                        currentGame.id === 'counter-strike-2' ? 'Exemplo: 76561198000000000' :
                        'Seu nome de usuário'
                      }
                    />
                    {errors.gameUsername && (
                      <p className="mt-1 text-sm text-red-400">{errors.gameUsername}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-300 mb-2">
                        Região
                      </label>
                      <select
                        id="region"
                        value={values.region}
                        onChange={(e) => setValue('region', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      >
                        <option value="BR1">Brasil</option>
                        <option value="NA1">América do Norte</option>
                        <option value="EUW1">Europa Oeste</option>
                        <option value="EUN1">Europa Norte/Leste</option>
                        <option value="KR">Coreia</option>
                        <option value="JP1">Japão</option>
                        <option value="OCE1">Oceania</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="rank" className="block text-sm font-medium text-gray-300 mb-2">
                        Rank Atual (opcional)
                      </label>
                      <input
                        type="text"
                        id="rank"
                        value={values.rank}
                        onChange={(e) => setValue('rank', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        placeholder="Exemplo: Gold 2, Immortal 1"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Como encontrar seu ID:</h4>
                    <div className="text-sm text-gray-300 space-y-2">
                      {currentGame.id === 'valorant' && (
                        <>
                          <p>• No VALORANT, vá em Configurações → Geral</p>
                          <p>• Seu Riot ID aparece no formato: Nome#Tag</p>
                          <p>• Exemplo: Player#1234</p>
                        </>
                      )}
                      {currentGame.id === 'league-of-legends' && (
                        <>
                          <p>• No League of Legends, vá em Configurações → Geral</p>
                          <p>• Seu Riot ID aparece no formato: Nome#Tag</p>
                          <p>• Exemplo: Player#1234</p>
                        </>
                      )}
                      {currentGame.id === 'counter-strike-2' && (
                        <>
                          <p>• No Steam, vá em Perfil → Editar Perfil</p>
                          <p>• Copie seu Steam ID64 da URL do perfil</p>
                          <p>• Exemplo: 76561198000000000</p>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={isLoading || !selectedGame}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Conectando...' : 'Conectar Conta'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Ao conectar sua conta, você concorda em compartilhar dados públicos do jogo para validação de apostas.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
