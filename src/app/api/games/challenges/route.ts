import { NextRequest, NextResponse } from 'next/server'
import { gameService } from '@/lib/gameService'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
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
