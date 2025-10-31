'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HowItWorksPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-violet-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent animate-pulse">
              Tips = Jogue valendo!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Chegou sua vez de jogar seus games favoritos valendo uma grana! Use suas habilidades e garanta sua vitória no jogo para sua partida valer muito mais!
            </p>
            <p className="text-lg text-purple-300 mb-12 max-w-3xl mx-auto font-semibold">
              Simples assim: Entre na partida, faça sua tip depois não tem segredo: Vitória no jogo? Grana no bolso!
            </p>
          </div>
          
          {/* Floating Game Icons */}
          <div className="absolute top-10 left-5 animate-gentle-drift-1 delay-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 backdrop-blur-sm border border-blue-400/20">
              <span className="text-3xl filter drop-shadow-lg">🎮</span>
            </div>
          </div>
          <div className="absolute top-16 right-5 animate-gentle-drift-2 delay-700">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/30 backdrop-blur-sm border border-red-400/20">
              <span className="text-3xl filter drop-shadow-lg">⚡</span>
            </div>
          </div>
          <div className="absolute bottom-10 left-5 animate-gentle-drift-3 delay-1000">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/30 backdrop-blur-sm border border-orange-400/20">
              <span className="text-3xl filter drop-shadow-lg">🔫</span>
            </div>
          </div>
          <div className="absolute bottom-16 right-5 animate-gentle-drift-4 delay-500">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 backdrop-blur-sm border border-green-400/20">
              <span className="text-3xl filter drop-shadow-lg">🏆</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who Wins Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Quem vence bota no bolso!
          </h2>
          <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-purple-500/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-green-500/30 backdrop-blur-sm border border-green-400/20">
                <span className="text-4xl filter drop-shadow-lg">💰</span>
              </div>
              <span className="text-gray-400 text-lg">Imagem ilustrativa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Simple, Safe and Real Money Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            Simples, seguro e com grana real!
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
            Tudo fácil e muito intuitivo para você só se preocupar em aproveitar e jogar: deposite e resgate seu saldo no pix, com grana de verdade.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Badge ProPhase */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-white">P</span>
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-2">Badge ProPhase</h3>
            </div>

            {/* Lightning Icon */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/25 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl animate-gentle-drift-2">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Rapidez</h3>
            </div>

            {/* Security */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-green-300 mb-2">Segurança</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Favorite Games Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            FAÇA GRANA NOS SEUS JOGOS FAVORITOS
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Jogue suas ranqueadas e modos exclusivos
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* League of Legends */}
            <div className="bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-8 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🎮</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">League of Legends</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">5v5 Ranked Solo/Duo</p>
              </div>
            </div>

            {/* Teamfight Tactics */}
            <div className="bg-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 p-8 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">♟️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Teamfight Tactics</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Auto Chess Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Leagues Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            LIGAS EXCLUSIVAS COM PROGRAMAÇÃO SEMANAL
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Pontue a cada partida e receba premiações
          </p>
          
          <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-purple-500/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-drift-3 shadow-2xl shadow-purple-500/30 backdrop-blur-sm border border-purple-400/20">
                <span className="text-4xl filter drop-shadow-lg">🏆</span>
              </div>
              <span className="text-gray-400 text-lg">Estampa logotipo das ligas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            Você a poucos passos de jogar, valendo grana!
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div 
              className="text-center group cursor-pointer"
              onMouseEnter={() => setHoveredStep(1)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  01
                </div>
                {hoveredStep === 1 && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-green-400 rounded-full animate-ping z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                Crie sua conta, faça o download e adicione saldo para jogar!
              </h3>
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-gentle-drift-1 shadow-lg shadow-blue-500/25">
                    <span className="text-3xl filter drop-shadow-md">📱</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Tela de Tip</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              className="text-center group cursor-pointer"
              onMouseEnter={() => setHoveredStep(2)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  02
                </div>
                {hoveredStep === 2 && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                Vincule sua conta, escolha seu modo de jogo e defina sua tip
              </h3>
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-gentle-drift-2 shadow-lg shadow-green-500/25">
                    <span className="text-3xl filter drop-shadow-md">🔗</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Tela de login</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              className="text-center group cursor-pointer"
              onMouseEnter={() => setHoveredStep(3)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  03
                </div>
                {hoveredStep === 3 && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-orange-400 rounded-full animate-ping z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                Encontre sua partida e use suas habilidades! Vai com tudo!
              </h3>
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-gentle-drift-3 shadow-lg shadow-red-500/25">
                    <span className="text-3xl filter drop-shadow-md">⚡</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Tela de partida em andamento</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div 
              className="text-center group cursor-pointer"
              onMouseEnter={() => setHoveredStep(4)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  04
                </div>
                {hoveredStep === 4 && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-green-400 rounded-full animate-ping z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                Vitória no jogo, dinheiro no bolso!
              </h3>
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-gentle-drift-4 shadow-lg shadow-yellow-500/25">
                    <span className="text-3xl filter drop-shadow-md">💰</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Tela de resultado de partida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/register" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-full text-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 animate-glow">
            Jogue agora
          </Link>
          
          {/* Floating particles */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-violet-400 rounded-full animate-float delay-1000 opacity-60"></div>
          <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float delay-2000 opacity-60"></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-300 rounded-full animate-float delay-500 opacity-60"></div>
        </div>
      </section>

      {/* Responsible Gaming Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative z-10">
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

      {/* Help Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            Precisa de Ajuda?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Saiba que se algum dia você precisar falar com alguém sobre um problemas de Jogo você pode contatar centros de ajuda:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="https://jogadoresanonimos.com.br/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 p-4 group">
              <div className="text-purple-300 group-hover:text-purple-200 transition-colors">Jogadores Anônimos</div>
            </a>
            <a href="https://www.gamblersanonymous.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 p-4 group">
              <div className="text-purple-300 group-hover:text-purple-200 transition-colors">Gamblers Anonymous</div>
            </a>
            <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 p-4 group">
              <div className="text-purple-300 group-hover:text-purple-200 transition-colors">Gamble Aware</div>
            </a>
            <a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 p-4 group">
              <div className="text-purple-300 group-hover:text-purple-200 transition-colors">Gambling Therapy</div>
            </a>
          </div>
        </div>
      </section>

      {/* Legal Notice Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            Aviso Legal
          </h2>
          <p className="text-gray-300 mb-8">
            A ProPhase não é endossada pelas empresas Riot Games e Valve Corporation, e por isso, nosso produto não reflete as opiniões ou pontos de vista dessas marcas. Declaramos que não existe vinculo de negócio ou qualquer pessoa oficialmente envolvida na produção ou gestão dos jogos desenvolvidos. League of Legends©, Valorant©, Teamfight Tactics© e Counter-Strike© são marcas comerciais ou/e registradas da Riot Games e da Valve Corporation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Compatibilidade</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">R</span>
                  </div>
                  <span className="text-gray-300">Riot Games API</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">V</span>
                  </div>
                  <span className="text-gray-300">Valve</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Disponibilidade</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">🌐</span>
                  </div>
                  <span className="text-gray-300">Jogar na web</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">📱</span>
                  </div>
                  <span className="text-gray-300">Disponível para Android</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
