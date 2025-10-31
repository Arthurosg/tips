import { NextRequest, NextResponse } from 'next/server'
import { gameService } from '@/lib/gameService'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const gameId = searchParams.get('gameId')

    if (!gameId) {
      return NextResponse.json(
        { error: 'Game ID é obrigatório' },
        { status: 400 }
      )
    }

    const challenges = await gameService.getAvailableChallenges(gameId)

    return NextResponse.json({ challenges })
  } catch (error) {
    console.error('Erro na API de desafios:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
