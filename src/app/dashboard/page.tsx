'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import { useGame } from '@/lib/GameContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoading, isAuthenticated, logout } = useAuth()
  const { gameAccounts, gameStats, supportedGames } = useGame()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Bem-vindo, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{user?.fullName}</span>!
            </h1>
            <p className="text-gray-300">
              Sua conta está pronta para começar a jogar valendo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Saldo */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Saldo Atual</h3>
                <span className="text-2xl">💰</span>
              </div>
              <p className="text-3xl font-bold text-green-400">R$ 0,00</p>
              <p className="text-sm text-gray-400 mt-2">Adicione saldo para começar</p>
            </div>

            {/* Contas Conectadas */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Contas Conectadas</h3>
                <span className="text-2xl">🎮</span>
              </div>
              <p className="text-3xl font-bold text-blue-400">{gameAccounts.length}</p>
              <p className="text-sm text-gray-400 mt-2">
                {gameAccounts.length === 0 ? 'Conecte uma conta para começar' : 'Jogos vinculados'}
              </p>
            </div>

            {/* Total de Vitórias */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Total de Vitórias</h3>
                <span className="text-2xl">🏆</span>
              </div>
              <p className="text-3xl font-bold text-yellow-400">
                {Object.values(gameStats).reduce((total, stats) => total + stats.wins, 0)}
              </p>
              <p className="text-sm text-gray-400 mt-2">Em todos os jogos</p>
            </div>
          </div>

          {/* Game Accounts Section */}
          {gameAccounts.length > 0 ? (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Contas Conectadas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gameAccounts.map((account) => {
                  const game = supportedGames.find(g => g.id === account.gameId)
                  const stats = gameStats[account.id]
                  
                  return (
                    <div key={account.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{game?.icon}</span>
                          <div>
                            <h3 className="text-white font-semibold">{game?.name}</h3>
                            <p className="text-gray-400 text-sm">{account.gameUsername}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          account.isVerified 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {account.isVerified ? 'Verificado' : 'Pendente'}
                        </span>
                      </div>
                      
                      {stats && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Rank:</span>
                            <span className="text-white">{stats.rank}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Win Rate:</span>
                            <span className="text-green-400">{stats.winRate.toFixed(1)}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">K/D:</span>
                            <span className="text-blue-400">{stats.kdRatio.toFixed(2)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center mb-12">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-white mb-2">Nenhuma conta conectada</h3>
              <p className="text-gray-400 mb-6">
                Conecte suas contas de jogos para começar a apostar e ganhar dinheiro
              </p>
              <button
                onClick={() => router.push('/connect-account')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Conectar Primeira Conta
              </button>
            </div>
          )}

          {/* Informações da Conta */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Informações da Conta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Nome Completo</label>
                <p className="text-white">{user?.fullName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <p className="text-white">{user?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Nome de Usuário</label>
                <p className="text-white">{user?.username}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Idade</label>
                <p className="text-white">{user?.age} anos</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">CPF</label>
                <p className="text-white">{user?.cpf}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Telefone</label>
                <p className="text-white">{user?.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Status da Conta</label>
                <div className="flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user?.isVerified 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {user?.isVerified ? 'Verificada' : 'Pendente'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {gameAccounts.length > 0 ? (
              <button 
                onClick={() => router.push('/games')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Começar a Jogar
              </button>
            ) : (
              <button 
                onClick={() => router.push('/connect-account')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Conectar Conta do Jogo
              </button>
            )}
            <button 
              onClick={() => router.push('/profile')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Editar Perfil
            </button>
            <button 
              onClick={logout}
              className="border-2 border-red-500 text-red-400 px-8 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all"
            >
              Sair
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
