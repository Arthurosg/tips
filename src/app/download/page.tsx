import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DownloadPage() {
  const features = [
    {
      icon: "🎮",
      title: "Jogue em Qualquer Lugar",
      description: "Acesse suas apostas e partidas de qualquer lugar, a qualquer hora"
    },
    {
      icon: "⚡",
      title: "Notificações Instantâneas",
      description: "Receba alertas em tempo real sobre suas partidas e resultados"
    },
    {
      icon: "💰",
      title: "Controle Total",
      description: "Gerencie seu saldo, histórico e saques diretamente do app"
    },
    {
      icon: "🏆",
      title: "Ligas Exclusivas",
      description: "Participe de ligas especiais disponíveis apenas no mobile"
    },
    {
      icon: "📊",
      title: "Estatísticas Avançadas",
      description: "Acompanhe sua performance com gráficos e análises detalhadas"
    },
    {
      icon: "🔒",
      title: "100% Seguro",
      description: "Seus dados protegidos com criptografia de nível bancário"
    }
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Diamond VALORANT",
      avatar: "👤",
      text: "O app mudou completamente minha experiência! Agora posso apostar até no trabalho durante o intervalo."
    },
    {
      name: "Ana Santos",
      role: "Platinum LoL",
      avatar: "👤",
      text: "Interface super intuitiva e as notificações me ajudam a não perder nenhuma oportunidade."
    },
    {
      name: "Pedro Costa",
      role: "Global Elite CS2",
      avatar: "👤",
      text: "As estatísticas do app são incríveis! Consigo ver exatamente onde preciso melhorar."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-pink-500/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
                  ProPhase
                </span> Mobile
              </h1>
              <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                Leve a emoção das apostas gaming para qualquer lugar. 
                Baixe o app e transforme cada partida em uma oportunidade de ganhar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <button className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-500 hover:via-violet-500 hover:to-purple-600 transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/25 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Baixar para Android
                </button>
                <button className="border-2 border-purple-400/50 text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 hover:border-purple-300 hover:text-white transition-all backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  Em breve para iOS
                </button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Sem anúncios</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Offline</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-purple-500/20 p-8 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-2xl p-6 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-6xl">📱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">ProPhase Mobile</h3>
                  <p className="text-purple-200 mb-4">Versão 1.0.0</p>
                  <div className="flex justify-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">4.8/5 (2.3k avaliações)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-black/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Por que escolher o app?</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Recursos exclusivos que fazem a diferença na sua experiência de apostas gaming
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-purple-500/20 p-6 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 group">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Veja o app em ação</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Interface intuitiva e recursos poderosos em um design moderno
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-purple-500/20 p-6 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-xl p-4 mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">📊</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dashboard Inteligente</h3>
              <p className="text-gray-300">Acompanhe suas estatísticas e performance em tempo real</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-purple-500/20 p-6 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-xl p-4 mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🎮</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Apostas Rápidas</h3>
              <p className="text-gray-300">Configure suas apostas em segundos com interface otimizada</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-purple-500/20 p-6 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-xl p-4 mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🏆</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ligas Exclusivas</h3>
              <p className="text-gray-300">Participe de competições especiais disponíveis apenas no mobile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-black/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">O que nossos usuários dizem</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Milhares de gamers já transformaram sua experiência com o ProPhase Mobile
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-purple-500/20 p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para transformar sua experiência gaming?
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Baixe o ProPhase Mobile agora e leve a emoção das apostas para qualquer lugar
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-purple-500 hover:via-violet-500 hover:to-purple-600 transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/25 flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Baixar Agora - Grátis
              </button>
              <Link 
                href="/how-it-works"
                className="border-2 border-purple-400/50 text-purple-300 px-10 py-5 rounded-full text-lg font-semibold hover:bg-purple-500/10 hover:border-purple-300 hover:text-white transition-all backdrop-blur-sm flex items-center justify-center"
              >
                Como Funciona
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Compatível com Android 8.0+ • 50MB • Sem anúncios
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
