import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/AuthContext'
import { GameProvider } from '@/lib/GameContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProPhase - Jogue Valendo',
  description: 'A melhor plataforma para jogar valendo dinheiro de verdade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <GameProvider>
            {children}
          </GameProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
