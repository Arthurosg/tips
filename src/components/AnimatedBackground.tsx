'use client'

import Image from 'next/image'

interface AnimatedBackgroundProps {
  className?: string
}

export default function AnimatedBackground({ className = '' }: AnimatedBackgroundProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/valorant-jett.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Animated Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/30 to-violet-900/40"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Moving Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-violet-500/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent h-1 animate-pulse"></div>
    </div>
  )
}
