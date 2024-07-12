import { GameState, Player, DevelopmentCard, GemType } from '../types'
import { PlayerImpl } from '../models/player'
import { initialDevelopmentCards } from '../data/initialDevelopmentCards'
import { countGemsNumber } from '../utils/helper'

export class GameStateImpl implements GameState {
  players: Player[]
  availableGems: Record<GemType, number>
  developmentCards: DevelopmentCard[]

  constructor(playerCount: number) {
    this.players = Array.from(
      { length: playerCount },
      (_, index) => new PlayerImpl(index)
    )
    const gemsNumber = countGemsNumber(playerCount)
    this.availableGems = {
      [GemType.Diamond]: gemsNumber,
      [GemType.Sapphire]: gemsNumber,
      [GemType.Emerald]: gemsNumber,
      [GemType.Ruby]: gemsNumber,
      [GemType.Onyx]: gemsNumber,
      [GemType.GoldJoker]: 5
    }
    this.developmentCards = initialDevelopmentCards
  }

  distributeGems(playerId: number, gems: Partial<Record<GemType, number>>) {
    const player = this.players[playerId]
    player.addGems(gems)
    for (const [gemType, amount] of Object.entries(gems)) {
      this.availableGems[gemType as GemType] -= amount!
    }
  }

  playerBuysCard(playerId: number, cardId: number) {
    const player = this.players[playerId]
    const cardIndex = this.developmentCards.findIndex(
      card => card.id === cardId
    )
    if (cardIndex !== -1) {
      const card = this.developmentCards[cardIndex]
      player.buyCard(card)
      this.developmentCards.splice(cardIndex, 1) // Remove the bought card from available cards
    }
  }

  playerReservesCard(playerId: number, cardId: number) {
    const player = this.players[playerId]
    const cardIndex = this.developmentCards.findIndex(
      card => card.id === cardId
    )
    if (cardIndex !== -1) {
      const card = this.developmentCards[cardIndex]
      if (this.availableGems[GemType.GoldJoker] > 0) {
        player.reserveCard(card);
        this.availableGems[GemType.GoldJoker]--;
      } else {
        throw new Error("No Gold Joker gems available for reservation.");
      }
      this.developmentCards.splice(cardIndex, 1) // Remove the reserved card from available cards
    }
  }
}
