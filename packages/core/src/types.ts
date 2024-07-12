// 定义宝石类型的枚举
export enum GemType {
  Diamond = 'Diamond',
  Sapphire = 'Sapphire',
  Emerald = 'Emerald',
  Ruby = 'Ruby',
  Onyx = 'Onyx',
  GoldJoker = 'GoldJoker'
}

// 定义发展卡片的接口
export interface DevelopmentCard {
  id: number
  level: number
  cost: Partial<Record<GemType, number>>
  points: number
  gemType: GemType
}

// 定义玩家的接口
export interface Player {
  id: number
  gems: Record<GemType, number>
  reservedCards: DevelopmentCard[]
  ownedCards: DevelopmentCard[]
  points: number
  addGems(gems: Partial<Record<GemType, number>>): void
  buyCard(card: DevelopmentCard): void
  reserveCard(card: DevelopmentCard): void
}

// 定义游戏状态的接口
export interface GameState {
  players: Player[]
  availableGems: Record<GemType, number>
  developmentCards: DevelopmentCard[]
}
