import { GameStateImpl } from '../src/services/gameService'
import { GemType } from '../src/types'

describe('GameService', () => {
  let gameState: GameStateImpl
  let developmentCardsLenght: number

  beforeEach(() => {
    gameState = new GameStateImpl(4)
    developmentCardsLenght = gameState.developmentCards.length
  })

  test('should distribute gems correctly', () => {
    gameState.distributeGems(0, { [GemType.Diamond]: 1, [GemType.Ruby]: 2 })

    expect(gameState.players[0].gems[GemType.Diamond]).toBe(1)
    expect(gameState.players[0].gems[GemType.Ruby]).toBe(2)
    expect(gameState.availableGems[GemType.Diamond]).toBe(6)
    expect(gameState.availableGems[GemType.Ruby]).toBe(5)
  })

  test('should allow player to buy card', () => {
    gameState.distributeGems(0, { [GemType.Diamond]: 1, [GemType.Ruby]: 1 })
    gameState.playerBuysCard(0, 1)

    expect(gameState.players[0].ownedCards.length).toBe(1)
    expect(gameState.players[0].ownedCards[0].id).toBe(1)
    expect(gameState.developmentCards.length).toBe(developmentCardsLenght - 1)
  })

  test('should allow reservation if Gold Joker gems are available', () => {
    gameState.playerReservesCard(0, 2)

    expect(gameState.players[0].reservedCards.length).toBe(1)
    expect(gameState.players[0].reservedCards[0].id).toBe(2)
    expect(gameState.players[0].gems[GemType.GoldJoker]).toBe(1)
    expect(gameState.availableGems[GemType.GoldJoker]).toBe(4)
    expect(gameState.developmentCards.length).toBe(developmentCardsLenght - 1)
  })
})
