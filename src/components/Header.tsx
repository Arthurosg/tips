'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/lib/AuthContext'

export default function Header() {
  // Estado para controlar o menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Hook de autenticação
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <header className="flex items-center justify-between p-6 relative z-50">
      {/* Logo da plataforma */}
      <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-violet-700 to-purple-900 rounded-lg shadow-lg shadow-purple-500/25"></div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">ProPhase</span>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/games" className="text-gray-300 hover:text-white transition-colors">
          Jogos
        </Link>
        <Link href="/leagues" className="text-gray-300 hover:text-white transition-colors">
          Ligas
        </Link>
        <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
          Como Funciona
        </Link>
        <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
          Blog
        </Link>
        <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
          FAQ
        </Link>
      </nav>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/download" className="text-gray-300 hover:text-white transition-colors">
          Download
        </Link>
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Olá, {user?.fullName}</span>
            <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <button 
              onClick={logout}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sair
            </button>
          </div>
        ) : (
          <>
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
              Entrar
            </Link>
            <Link href="/register" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all">
              Criar Conta
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 md:hidden">
          <nav className="flex flex-col p-6 space-y-4">
            <Link href="/games" className="text-gray-300 hover:text-white transition-colors">
              Jogos
            </Link>
            <Link href="/leagues" className="text-gray-300 hover:text-white transition-colors">
              Ligas
            </Link>
            <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
              Como Funciona
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
            <div className="pt-4 border-t border-gray-800">
              <Link href="/download" className="block text-gray-300 hover:text-white transition-colors mb-4">
                Download
              </Link>
              {isAuthenticated ? (
                <>
                  <div className="text-gray-300 mb-4">Olá, {user?.fullName}</div>
                  <Link href="/dashboard" className="block text-gray-300 hover:text-white transition-colors mb-4">
                    Dashboard
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-gray-300 hover:text-white transition-colors text-center"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block text-gray-300 hover:text-white transition-colors mb-4">
                    Entrar
                  </Link>
                  <Link href="/register" className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all text-center">
                    Criar Conta
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
