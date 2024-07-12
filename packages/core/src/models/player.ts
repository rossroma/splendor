import { Player, DevelopmentCard, GemType } from '../types'

export class PlayerImpl implements Player {
  id: number
  gems: Record<GemType, number>
  reservedCards: DevelopmentCard[]
  ownedCards: DevelopmentCard[]
  points: number

  constructor(id: number) {
    this.id = id
    this.gems = {
      [GemType.Diamond]: 0,
      [GemType.Sapphire]: 0,
      [GemType.Emerald]: 0,
      [GemType.Ruby]: 0,
      [GemType.Onyx]: 0,
      [GemType.GoldJoker]: 0
    }
    this.reservedCards = []
    this.ownedCards = []
    this.points = 0
  }

  addGems(gems: Partial<Record<GemType, number>>) {
    for (const [gemType, amount] of Object.entries(gems)) {
      this.gems[gemType as GemType] += amount!
    }
  }

  buyCard(card: DevelopmentCard) {
    this.ownedCards.push(card)
    this.points += card.points
    for (const [gemType, cost] of Object.entries(card.cost)) {
      this.gems[gemType as GemType] -= cost
    }
  }

  reserveCard(card: DevelopmentCard) {
    this.reservedCards.push(card)
    this.gems[GemType.GoldJoker]++
  }
}
