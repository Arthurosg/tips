'use client'

import { useRef, useEffect, useState } from 'react'

interface VideoBackgroundProps {
  videoSrc: string
  poster?: string
  className?: string
}

export default function VideoBackground({ videoSrc, poster, className = '' }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    const handlePlay = () => {
      setIsPlaying(true)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    const handleError = () => {
      setHasError(true)
      setIsLoaded(false)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('error', handleError)

    // Tentar reproduzir automaticamente
    const playVideo = async () => {
      try {
        await video.play()
      } catch (error) {
        console.log('Autoplay não permitido, aguardando interação do usuário')
      }
    }

    if (isLoaded) {
      playVideo()
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('error', handleError)
    }
  }, [isLoaded])

  const handleClick = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      if (video.paused) {
        await video.play()
      } else {
        video.pause()
      }
    } catch (error) {
      console.error('Erro ao controlar vídeo:', error)
    }
  }

  // Se houver erro ou não carregar, mostrar fallback
  if (hasError) {
    return (
      <div className={`relative w-full h-full overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-violet-900/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-purple-300 text-sm">Vídeo não disponível</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        onClick={handleClick}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/webm" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
            <p className="text-purple-300 text-sm">Carregando vídeo...</p>
          </div>
        </div>
      )}

      {/* Play/Pause Overlay */}
      {isLoaded && (
        <div 
          className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
            isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
          }`}
          onClick={handleClick}
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-6 hover:bg-black/70 transition-all">
            <svg 
              className={`w-12 h-12 text-white transition-transform duration-200 ${
                isPlaying ? 'scale-90' : 'scale-100'
              }`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              {isPlaying ? (
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              ) : (
                <path d="M8 5v14l11-7z"/>
              )}
            </svg>
          </div>
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/20 to-violet-900/30"></div>
      
      {/* Additional Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-violet-600/10"></div>
    </div>
  )
}
