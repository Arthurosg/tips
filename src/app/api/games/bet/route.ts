import { NextRequest, NextResponse } from 'next/server'
import { gameService } from '@/lib/gameService'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { userId, gameId, amount, challenge } = await request.json()

    if (!userId || !gameId || !amount || !challenge) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    if (amount < 10) {
      return NextResponse.json(
        { error: 'Valor mínimo da aposta é R$ 10,00' },
        { status: 400 }
      )
    }

    const bet = await gameService.createBet(userId, gameId, amount, challenge)

    if (!bet) {
      return NextResponse.json(
        { error: 'Erro ao criar aposta' },
        { status: 500 }
      )
    }

    return NextResponse.json({ bet })
  } catch (error) {
    console.error('Erro na API de apostas:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
