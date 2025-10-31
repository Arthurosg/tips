'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GameAccountConnector from '@/components/GameAccountConnector'
import BettingInterface from '@/components/BettingInterface'

export default function CounterStrike2Page() {
  const [player, setPlayer] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<'connect' | 'bet'>('connect')

  const handleAccountConnected = (connectedPlayer: any) => {
    setPlayer(connectedPlayer)
    setActiveTab('bet')
  }

  const handleBetPlaced = (bet: any) => {
    alert(`Aposta criada com sucesso! ID: ${bet.id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Counter-Strike 2
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Suas partidas competitivas com mais emoção! Ganhe por eliminação e domine o mapa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('connect')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'connect'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Conectar Conta
              </button>
              <button
                onClick={() => setActiveTab('bet')}
                disabled={!player}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'bet'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                Fazer Aposta
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'connect' && (
            <GameAccountConnector
              gameId="counter-strike-2"
              gameName="Counter-Strike 2"
              onAccountConnected={handleAccountConnected}
            />
          )}

          {activeTab === 'bet' && player && (
            <BettingInterface
              gameId="counter-strike-2"
              gameName="Counter-Strike 2"
              player={player}
              onBetPlaced={handleBetPlaced}
            />
          )}

          {activeTab === 'bet' && !player && (
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <p className="text-gray-400 mb-4">
                Você precisa conectar sua conta primeiro
              </p>
              <button
                onClick={() => setActiveTab('connect')}
                className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Conectar Conta
              </button>
            </div>
          )}
        </div>

        {/* Game Info */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Como jogar CS2 valendo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🔫</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Conecte sua conta</h3>
              <p className="text-gray-400">Vincule sua conta Steam de forma segura</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Escolha seu desafio</h3>
              <p className="text-gray-400">Selecione o valor e o desafio que quer completar</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Jogue e ganhe</h3>
              <p className="text-gray-400">Complete o desafio e receba seu dinheiro</p>
            </div>
          </div>
        </section>

        {/* Supported Modes */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Modos suportados
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Competitive', 'Wingman', 'Deathmatch', 'Casual'].map((mode) => (
              <div key={mode} className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                <p className="text-white font-medium">{mode}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CS2 Specific Info */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">
                🎯 Desafios disponíveis
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Ganhe partidas competitivas</li>
                <li>• Faça eliminações específicas</li>
                <li>• Alcançe pontuação mínima</li>
                <li>• Sobreviva rounds consecutivos</li>
                <li>• Suba de patente</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">
                🛡️ Segurança garantida
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Integração oficial com Steam API</li>
                <li>• Dados públicos apenas</li>
                <li>• Sem acesso a senhas</li>
                <li>• Verificação de identidade</li>
                <li>• Anti-fraude rigoroso</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
