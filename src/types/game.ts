export interface GameAccount {
  id: string
  gameId: string
  userId: string
  gameUsername: string
  region: string
  rank?: string
  level?: number
  isVerified: boolean
  lastSync: Date
  createdAt: Date
  updatedAt: Date
}

export interface GameStats {
  accountId: string
  gameId: string
  totalMatches: number
  wins: number
  losses: number
  winRate: number
  kills: number
  deaths: number
  assists?: number
  kdRatio: number
  avgScore?: number
  rank: string
  rankPoints?: number
  lastMatchDate: Date
  updatedAt: Date
}

export interface Match {
  id: string
  accountId: string
  gameId: string
  matchId: string
  map: string
  mode: string
  result: 'win' | 'loss' | 'draw'
  score: number
  kills: number
  deaths: number
  assists?: number
  duration: number
  rank: string
  playedAt: Date
  createdAt: Date
}

export interface Bet {
  id: string
  userId: string
  accountId: string
  gameId: string
  matchId?: string
  amount: number
  multiplier: number
  potentialWin: number
  status: 'pending' | 'won' | 'lost' | 'cancelled'
  challenge: BetChallenge
  createdAt: Date
  completedAt?: Date
}

export interface BetChallenge {
  type: 'win_match' | 'get_kills' | 'achieve_score' | 'survive_rounds' | 'rank_up'
  target: number
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface Game {
  id: string
  name: string
  slug: string
  apiEndpoint: string
  isActive: boolean
  supportedModes: string[]
  supportedChallenges: BetChallenge['type'][]
  icon: string
  color: string
}

export interface LiveMatch {
  accountId: string
  gameId: string
  matchId: string
  map: string
  mode: string
  status: 'waiting' | 'in_progress' | 'finished'
  score: number
  kills: number
  deaths: number
  assists?: number
  rank: string
  duration: number
  startTime: Date
  endTime?: Date
}

export interface RiotPlayer {
  puuid: string
  gameName: string
  tagLine: string
  card?: {
    id: string
    large: string
    small: string
    wide: string
  }
  rank?: {
    tier: string
    rank: string
    points: number
  }
}

export interface RiotMatch {
  matchInfo: {
    matchId: string
    gameStartMillis: number
    gameLengthMillis: number
    gameMode: string
    mapId: string
  }
  players: RiotPlayer[]
  teams: Array<{
    teamId: string
    won: boolean
    roundsWon: number
    roundsPlayed: number
  }>
}
