import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GameCard from '@/components/GameCard'

export default function GamesPage() {
  const games = [
    {
      title: "VALORANT",
      description: "Ranqueada",
      icon: "🎯",
      href: "/games/valorant",
      gradientFrom: "from-red-500",
      gradientTo: "to-pink-500",
      isActive: true
    },
    {
      title: "League of Legends",
      description: "Rankeada solo/duo",
      icon: "⚔️",
      href: "/games/lol",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600",
      isActive: true
    },
    {
      title: "Counter-Strike 2",
      description: "Competitivo",
      icon: "🔫",
      href: "/games/cs2",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
      isActive: true
    },
    {
      title: "ARAM",
      description: "Modo rápido",
      icon: "⚡",
      href: "/games/aram",
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-500",
      isActive: false
    },
    {
      title: "Teamfight Tactics",
      description: "Auto Chess",
      icon: "🎲",
      href: "/games/tft",
      gradientFrom: "from-purple-500",
      gradientTo: "to-indigo-500",
      isActive: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Escolha seu <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">jogo</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Conecte sua conta e comece a jogar valendo dinheiro de verdade
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <div key={index} className="w-full sm:w-80 md:w-72 lg:w-80">
              <GameCard
                title={game.title}
                description={game.description}
                icon={game.icon}
                href={game.href}
                gradientFrom={game.gradientFrom}
                gradientTo={game.gradientTo}
                isActive={game.isActive}
              />
            </div>
          ))}
        </div>

        {/* How it works section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Como funciona
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Conecte sua conta</h3>
              <p className="text-gray-400">Vincule sua conta do jogo de forma segura</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Faça sua aposta</h3>
              <p className="text-gray-400">Escolha o valor e o desafio que quer completar</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Jogue e ganhe</h3>
              <p className="text-gray-400">Complete o desafio e receba seu dinheiro</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
