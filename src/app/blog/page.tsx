import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Como Dominar o VALORANT: Dicas dos Pro Players",
      excerpt: "Descubra as estratégias secretas dos melhores jogadores de VALORANT e eleve seu jogo para o próximo nível.",
      author: "ProPhase Team",
      date: "15 Jan 2024",
      readTime: "8 min",
      category: "VALORANT",
      image: "/valorant-jett.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Guia Completo de Ranked no League of Legends",
      excerpt: "Tudo que você precisa saber para subir de elo no LoL: meta atual, picks mais fortes e estratégias de jogo.",
      author: "ProPhase Team",
      date: "12 Jan 2024",
      readTime: "12 min",
      category: "League of Legends",
      image: "/valorant-jett.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Counter-Strike 2: Novidades e Mudanças",
      excerpt: "Explore as principais mudanças do CS2 e como elas afetam o meta competitivo do jogo.",
      author: "ProPhase Team",
      date: "10 Jan 2024",
      readTime: "6 min",
      category: "Counter-Strike",
      image: "/valorant-jett.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Psicologia do Gaming: Como Manter o Foco",
      excerpt: "Técnicas mentais para melhorar sua performance e manter a concentração durante partidas importantes.",
      author: "ProPhase Team",
      date: "8 Jan 2024",
      readTime: "10 min",
      category: "Psicologia",
      image: "/valorant-jett.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Sistema de Apostas: Como Funciona",
      excerpt: "Entenda como funciona nosso sistema de apostas e como maximizar seus ganhos de forma segura.",
      author: "ProPhase Team",
      date: "5 Jan 2024",
      readTime: "7 min",
      category: "Sistema",
      image: "/valorant-jett.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Meta Atual: Melhores Agentes VALORANT",
      excerpt: "Análise detalhada dos agentes mais fortes na meta atual e como utilizá-los efetivamente.",
      author: "ProPhase Team",
      date: "3 Jan 2024",
      readTime: "9 min",
      category: "VALORANT",
      image: "/valorant-jett.jpg",
      featured: false
    }
  ]

  const categories = ["Todos", "VALORANT", "League of Legends", "Counter-Strike", "Psicologia", "Sistema"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-pink-500/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
              Blog
            </span> ProPhase
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dicas, estratégias e insights dos melhores jogadores para elevar seu game
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-6 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Destaque da Semana</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-purple-500/20 overflow-hidden backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-purple-500/20 to-violet-500/20 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-500 hover:to-violet-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
                  >
                    Ler Artigo
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 bg-black/10">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Últimos Artigos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-purple-500/20 overflow-hidden backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-violet-500/20 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    Ler mais
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Fique por dentro das novidades
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Receba as melhores dicas e estratégias diretamente no seu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-4 rounded-full bg-gray-800/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 backdrop-blur-sm"
              />
              <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-500 hover:to-violet-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
