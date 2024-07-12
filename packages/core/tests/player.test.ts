import { PlayerImpl } from '../src/models/player'
import { DevelopmentCardImpl } from '../src/models/developmentCard'
import { GemType } from '../src/types'

describe('Player', () => {
  let player: PlayerImpl

  beforeEach(() => {
    player = new PlayerImpl(0)
  })

  test('should add gems correctly', () => {
    player.addGems({ [GemType.Diamond]: 1, [GemType.Ruby]: 2 })

    expect(player.gems[GemType.Diamond]).toBe(1)
    expect(player.gems[GemType.Ruby]).toBe(2)
  })

  test('should buy card correctly', () => {
    const card = new DevelopmentCardImpl(
      1,
      1,
      { [GemType.Diamond]: 1, [GemType.Ruby]: 1 },
      0,
      GemType.Emerald
    )
    player.addGems({ [GemType.Diamond]: 1, [GemType.Ruby]: 1 })
    player.buyCard(card)

    expect(player.ownedCards.length).toBe(1)
    expect(player.ownedCards[0].id).toBe(1)
    expect(player.gems[GemType.Diamond]).toBe(0)
    expect(player.gems[GemType.Ruby]).toBe(0)
  })

  test('should reserve card correctly', () => {
    const card = new DevelopmentCardImpl(
      1,
      1,
      { [GemType.Diamond]: 1, [GemType.Ruby]: 1 },
      0,
      GemType.Emerald
    )
    player.reserveCard(card)

    expect(player.reservedCards.length).toBe(1)
    expect(player.reservedCards[0].id).toBe(1)
    expect(player.gems[GemType.GoldJoker]).toBe(1)
  })
})
