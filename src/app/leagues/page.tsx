'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function LeaguesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden">
      <Header />
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-violet-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent animate-pulse">
              Ligas ProPhase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Competição, Diversão & Premiação!
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Participe de ligas exclusivas com programação semanal, onde você pontua a cada partida e divide a premiação entre os melhores colocados.
            </p>
          </div>
          
          {/* Floating Game Icons */}
          <div className="absolute top-10 left-5 animate-gentle-drift-1 delay-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 backdrop-blur-sm border border-blue-400/20">
              <span className="text-3xl filter drop-shadow-lg">🎮</span>
            </div>
          </div>
          <div className="absolute top-16 right-5 animate-gentle-drift-2 delay-700">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 backdrop-blur-sm border border-green-400/20">
              <span className="text-3xl filter drop-shadow-lg">🏆</span>
            </div>
          </div>
          <div className="absolute bottom-10 left-5 animate-gentle-drift-3 delay-1000">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/30 backdrop-blur-sm border border-orange-400/20">
              <span className="text-3xl filter drop-shadow-lg">🔫</span>
            </div>
          </div>
          <div className="absolute bottom-16 right-5 animate-gentle-drift-4 delay-500">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/30 backdrop-blur-sm border border-red-400/20">
              <span className="text-3xl filter drop-shadow-lg">⚡</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Play Our Leagues Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            Por que jogar nossas ligas?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Duração */}
            <div 
              className="text-center p-8 bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {hoveredCard === 1 && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-green-400 rounded-full animate-ping z-10"></div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">Duração</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Diferente de torneios que levam dias, as nossas ligas são diárias, e duram de 2 a 4 horas, em média.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full group-hover:w-32 transition-all duration-300"></div>
              </div>
            </div>

            {/* Pontuação */}
            <div 
              className="text-center p-8 bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                {hoveredCard === 2 && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-green-400 rounded-full animate-ping z-10"></div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">Pontuação</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Não é mata-mata! Nossas ligas são por pontos obtidos, onde vence quem tiver a maior pontuação no fim da duração.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full group-hover:w-32 transition-all duration-300"></div>
              </div>
            </div>

            {/* Premiação */}
            <div 
              className="text-center p-8 bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                {hoveredCard === 3 && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-green-400 rounded-full animate-ping z-10"></div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">Premiação</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Todos que ficam no topo da tabela levam uma parte do prêmio! São premiações a partir de R$500 em bônus!
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full group-hover:w-32 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            Escolha sua liga e jogue!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  01
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse z-10"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">Escolha sua liga</h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                Escolha sua liga, pague a inscrição, confira a data e modo de jogo para participar
              </p>
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                    <span className="text-3xl filter drop-shadow-md">🎮</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Tela de ligas</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  02
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">Jogue as partidas</h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                Jogue as partidas e pontue nas ligas
              </p>
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/25">
                    <span className="text-3xl filter drop-shadow-md">⚡</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Tela de ranking de ligas</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  03
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse z-10"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">Confira sua posição</h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                Confira sua posição e premiação da liga
              </p>
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25">
                    <span className="text-3xl filter drop-shadow-md">🏆</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Tela de premiação de ligas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Leagues Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            Ligas Disponíveis
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* League of Legends 5v5 */}
            <div className="bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-6 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl animate-free-float-1">🎮</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">League of Legends 5v5</h3>
                    <p className="text-purple-300 text-sm group-hover:text-purple-200 transition-colors">Ranked Solo/Duo</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Prêmio:</span>
                    <span className="text-green-400 font-bold animate-pulse">R$ 500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Duração:</span>
                    <span className="text-white">3 horas</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Participantes:</span>
                    <span className="text-white">50/100</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25 transform group-hover:scale-105">
                  Participar
                </button>
              </div>
            </div>

            {/* Counter-Strike 2 */}
            <div className="bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 p-6 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl animate-free-float-2">🔫</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-200 transition-colors">Counter-Strike 2</h3>
                    <p className="text-purple-300 text-sm group-hover:text-purple-200 transition-colors">Competitive</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Prêmio:</span>
                    <span className="text-green-400 font-bold animate-pulse">R$ 750</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Duração:</span>
                    <span className="text-white">4 horas</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Participantes:</span>
                    <span className="text-white">30/50</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25 transform group-hover:scale-105">
                  Participar
                </button>
              </div>
            </div>

            {/* VALORANT */}
            <div className="bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 p-6 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-red-500/25 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl animate-free-float-3">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-200 transition-colors">VALORANT</h3>
                    <p className="text-purple-300 text-sm group-hover:text-purple-200 transition-colors">Unrated</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Prêmio:</span>
                    <span className="text-green-400 font-bold animate-pulse">R$ 600</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Duração:</span>
                    <span className="text-white">2.5 horas</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Participantes:</span>
                    <span className="text-white">40/80</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25 transform group-hover:scale-105">
                  Participar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent animate-pulse">
            Cadastre-se na ProPhase e participe das ligas
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 animate-glow">
              Criar Conta
            </Link>
            <Link href="/login" className="border border-purple-500 text-purple-300 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:border-purple-400">
              Entrar
            </Link>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-violet-400 rounded-full animate-float delay-1000 opacity-60"></div>
          <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float delay-2000 opacity-60"></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-300 rounded-full animate-float delay-500 opacity-60"></div>
        </div>
      </section>

      {/* Responsible Gaming Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            Jogue com responsabilidade
          </h2>
          
          <div className="bg-gray-900/50 rounded-2xl border border-purple-500/20 p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-300">Boas práticas para manter o jogo leve</h3>
            <p className="text-gray-300 mb-6">
              Para manter a integridade da plataforma, nós só permitimos que maiores de idade joguem. Validamos os documentos no cadastro para isso.
            </p>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">1.</span>
                <p>Trate o jogo apenas como diversão. Veja o jogar valendo apenas como uma forma de entretenimento.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">2.</span>
                <p>Seja cuidadoso com suas despesas. Nunca use dinheiro de outras contas (como aluguel, comida ou boletos) para jogar valendo</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">3.</span>
                <p>Coloque limites: Estabeleça um valor máximo para fazer suas tips.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">4.</span>
                <p>Não tente recuperar percas: Se você não está em um bom dia, tente novamente em outro momento.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">5.</span>
                <p>Jogue com responsabilidade: evite fazer tips quando você estiper irritado, chateado ou se sentindo mal.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">6.</span>
                <p>Diversifique seu entretenimento: tenha outros hobbies, jogue outros jogos e faça outras atividades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
