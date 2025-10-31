'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GameAccountConnector from '@/components/GameAccountConnector'
import BettingInterface from '@/components/BettingInterface'

export default function LeagueOfLegendsPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              League of Legends
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Suas ranqueadas com mais emoção! Ganhe por partida e adicione adrenalina aos seus jogos
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
              gameId="league-of-legends"
              gameName="League of Legends"
              onAccountConnected={handleAccountConnected}
            />
          )}

          {activeTab === 'bet' && player && (
            <BettingInterface
              gameId="league-of-legends"
              gameName="League of Legends"
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
            Como jogar League valendo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">⚔️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Conecte sua conta</h3>
              <p className="text-gray-400">Vincule sua conta Riot Games de forma segura</p>
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
            {['Ranked Solo/Duo', 'Ranked Flex', 'Normal Draft', 'ARAM'].map((mode) => (
              <div key={mode} className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                <p className="text-white font-medium">{mode}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mt-20">
          <div className="bg-yellow-900/20 border border-yellow-500 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              ⚠️ Requisitos para jogar
            </h3>
            <ul className="text-yellow-300 space-y-2">
              <li>• Mínimo de 10 vitórias na Solo/Duo na season atual</li>
              <li>• Conta verificada e ativa</li>
              <li>• Maior de 18 anos</li>
              <li>• Documento brasileiro válido</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
