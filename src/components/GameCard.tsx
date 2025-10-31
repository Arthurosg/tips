import Link from 'next/link'
import Image from 'next/image'

// Interface para as propriedades do card de jogo
interface GameCardProps {
  title: string
  description: string
  icon: string
  href: string
  gradientFrom: string
  gradientTo: string
  imageUrl?: string
  isValorant?: boolean
  isActive?: boolean
}

export default function GameCard({ 
  title, 
  description, 
  icon, 
  href, 
  gradientFrom, 
  gradientTo,
  imageUrl,
  isValorant = false,
  isActive = true
}: GameCardProps) {
  return (
    <Link href={href} className="block group w-full">
      <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10 transform group-hover:scale-105 w-full">
        {/* Imagem de fundo do jogo */}
        {imageUrl && (
          <div className="absolute inset-0 z-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-violet-900/60"></div>
          </div>
        )}
        
        {/* Conteúdo principal do card */}
        <div className="relative z-10 p-8 h-80 flex flex-col justify-between">
          {/* Seção superior com ícone e informações */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              {/* Ícone do jogo com gradiente */}
              <div className={`w-12 h-12 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25`}>
                <span className="text-2xl">{icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                <p className="text-purple-300 text-sm">{description}</p>
              </div>
            </div>
            
            {/* Botão de play que aparece no hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Seção inferior com status e ação */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {isActive ? (
                <>
                  {/* Indicador de disponibilidade */}
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-medium">Disponível</span>
                </>
              ) : (
                <>
                  {/* Indicador de em breve */}
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-yellow-400 text-xs font-medium">Em breve</span>
                </>
              )}
            </div>
            
            {/* Texto de ação */}
            <div className="text-purple-300 text-sm font-medium group-hover:text-purple-200 transition-colors">
              {isActive ? 'Jogar →' : 'Em breve'}
            </div>
          </div>
        </div>
        
        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </Link>
  )
}
