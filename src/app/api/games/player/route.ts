import { NextRequest, NextResponse } from 'next/server'
import { gameService } from '@/lib/gameService'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { gameId, credentials } = await request.json()

    if (!gameId || !credentials) {
      return NextResponse.json(
        { error: 'Game ID e credenciais são obrigatórios' },
        { status: 400 }
      )
    }

    let player = null

    switch (gameId) {
      case 'valorant':
        if (credentials.puuid) {
          player = await gameService.getValorantPlayer(credentials.puuid)
        } else if (credentials.gameName && credentials.tagLine) {
          player = await gameService.getValorantPlayerByName(credentials.gameName, credentials.tagLine)
        }
        break

      case 'league-of-legends':
        if (credentials.gameName && credentials.tagLine) {
          player = await gameService.getLeaguePlayer(credentials.gameName, credentials.tagLine)
        }
        break

      case 'counter-strike-2':
        if (credentials.steamId) {
          player = await gameService.getCS2Player(credentials.steamId)
        }
        break

      default:
        return NextResponse.json(
          { error: 'Jogo não suportado' },
          { status: 400 }
        )
    }

    if (!player) {
      return NextResponse.json(
        { error: 'Jogador não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json({ player })
  } catch (error) {
    console.error('Erro na API de jogador:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
