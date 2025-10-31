import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GameCard from '@/components/GameCard'
import VideoBackground from '@/components/VideoBackground'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  // Lista de jogos disponíveis na plataforma
  const games = [
    {
      title: "VALORANT",
      description: "Ranqueada",
      icon: "🎯",
      href: "/games/valorant",
      gradientFrom: "from-red-500",
      gradientTo: "to-pink-600",
      imageUrl: "/valorant-jett.jpg",
      isValorant: true,
      isActive: true
    },
    {
      title: "League of Legends",
      description: "Rankeada solo/duo",
      icon: "⚔️",
      href: "/games/lol",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-700",
      imageUrl: "/valorant-jett.jpg",
      isActive: true
    },
    {
      title: "Counter-Strike 2",
      description: "Competitivo",
      icon: "🔫",
      href: "/games/cs2",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-600",
      imageUrl: "/valorant-jett.jpg",
      isActive: true
    },
    {
      title: "ARAM",
      description: "Modo rápido",
      icon: "⚡",
      href: "/games/aram",
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-600",
      imageUrl: "/valorant-jett.jpg",
      isActive: false
    },
    {
      title: "Teamfight Tactics",
      description: "Auto Chess",
      icon: "🎲",
      href: "/games/tft",
      gradientFrom: "from-purple-500",
      gradientTo: "to-violet-600",
      imageUrl: "/valorant-jett.jpg",
      isActive: false
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fundo de vídeo para maior impacto visual */}
      <div className="fixed inset-0 w-full h-full">
        <VideoBackground 
          videoSrc="/videos/background-video.mp4"
          poster="/valorant-jett.jpg"
          className="w-full h-full"
        />
      </div>

      {/* Fundo animado alternativo caso o vídeo não carregue */}
      <div className="fixed inset-0 w-full h-full opacity-0" id="fallback-bg">
        <AnimatedBackground className="w-full h-full" />
      </div>

      {/* Efeitos visuais adicionais para profundidade */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />

        {/* Seção Hero - Principal da página */}
        <main className="container mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Jogue <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">valendo</span>
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Suas ranquedas com mais emoção! Simples e fácil: Ganhe por partida e adicione muito mais adrenalina nos seus jogos!
            </p>
            
            {/* Botões de ação principais */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link href="/games" className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-purple-500 hover:via-violet-500 hover:to-purple-600 transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/25">
                Jogar na web
              </Link>
              <Link href="/download" className="border-2 border-purple-400/50 text-purple-300 px-10 py-5 rounded-full text-lg font-semibold hover:bg-purple-500/10 hover:border-purple-300 hover:text-white transition-all backdrop-blur-sm">
                Disponível para Android
              </Link>
            </div>

            {/* Card de destaque com ícone */}
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg px-6 py-3 text-white backdrop-blur-sm">
              <span className="text-2xl mr-3">🎮</span>
              <span className="font-semibold">Jogue agora</span>
            </div>
          </div>

          {/* Seção de Jogos */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Escolha seu <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">jogo favorito</span>
              </h2>
              <p className="text-lg text-purple-300 max-w-2xl mx-auto">
                Conecte suas contas e comece a jogar valendo dinheiro de verdade
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
              {games.map((game, index) => (
                <div key={index} className="w-full sm:w-80 md:w-72 lg:w-80">
                  <GameCard
                    title={game.title}
                    description={game.description}
                    icon={game.icon}
                    href={game.href}
                    gradientFrom={game.gradientFrom}
                    gradientTo={game.gradientTo}
                    imageUrl={game.imageUrl}
                    isValorant={game.isValorant}
                    isActive={game.isActive}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Seção Comece a jogar valendo */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Comece a <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">jogar valendo</span>
              </h2>
              <p className="text-lg text-purple-300 max-w-2xl mx-auto">
                Recursos exclusivos para maximizar seus ganhos
              </p>
            </div>
            
            {/* Cards principais de funcionalidades */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card Missões */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group hover:scale-105">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg shadow-yellow-500/25 group-hover:shadow-yellow-500/40 transition-all duration-300">
                    🏆
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Missões</h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Complete desafios e ganhe recompensas exclusivas
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-left">
                      <p className="text-white font-medium">Ganhe 3 partidas</p>
                      <p className="text-gray-400 text-sm">Recompensa: R$ 50</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-left">
                      <p className="text-white font-medium">Faça 20 eliminações</p>
                      <p className="text-gray-400 text-sm">Recompensa: R$ 30</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-left">
                      <p className="text-white font-medium">Suba de patente</p>
                      <p className="text-gray-400 text-sm">Recompensa: R$ 100</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Ligas */}
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group hover:scale-105">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                    🏆
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ligas</h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Participe de campeonatos com premiações incríveis
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-left">
                      <p className="text-white font-medium">Liga Semanal</p>
                      <p className="text-gray-400 text-sm">Prêmio: R$ 1.000</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-left">
                      <p className="text-white font-medium">Torneio Mensal</p>
                      <p className="text-gray-400 text-sm">Prêmio: R$ 5.000</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-left">
                      <p className="text-white font-medium">Campeonato Anual</p>
                      <p className="text-gray-400 text-sm">Prêmio: R$ 25.000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Segurança */}
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-105">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                    🛡️
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Segurança</h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Jogos seguros e justos para todos os jogadores
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-left">
                      <p className="text-white font-medium">Anti-cheat rigoroso</p>
                      <p className="text-gray-400 text-sm">100% seguro</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-left">
                      <p className="text-white font-medium">Validação de identidade</p>
                      <p className="text-gray-400 text-sm">Maiores de 18 anos</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-left">
                      <p className="text-white font-medium">Integração oficial</p>
                      <p className="text-gray-400 text-sm">APIs oficiais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Credibilidade */}
          <section className="mb-32">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Por que escolher nossa plataforma?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">100% Seguro</h3>
                    <p className="text-gray-400 text-sm">Integração oficial com as APIs dos jogos</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Pagamentos Rápidos</h3>
                    <p className="text-gray-400 text-sm">Saque via PIX em até 3 dias úteis</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Matchmaking Justo</h3>
                    <p className="text-gray-400 text-sm">Jogue com pessoas do seu nível</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Premiações Altas</h3>
                    <p className="text-gray-400 text-sm">Multiplicadores de até 3x</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </main>

      <Footer />
      </div>
    </div>
  )
}
