import { GemType } from '../src/types'
import { DevelopmentCardImpl } from '../src/models/developmentCard'
import { initialDevelopmentCards } from '../src/data/initialDevelopmentCards'

describe('DevelopmentCardImpl', () => {
  it('should create a DevelopmentCardImpl instance correctly', () => {
    const card = new DevelopmentCardImpl(
      1,
      1,
      { [GemType.Diamond]: 3 },
      1,
      GemType.Diamond
    )
    expect(card.id).toBe(1)
    expect(card.level).toBe(1)
    expect(card.cost).toEqual({ [GemType.Diamond]: 3 })
    expect(card.points).toBe(1)
    expect(card.gemType).toBe(GemType.Diamond)
  })
})

describe('initialDevelopmentCards', () => {
  const developmentCards = initialDevelopmentCards()

  it('should create the correct number of development cards', () => {
    const expectedCardCount = 18 * 5 // cardsTable.length * (gemTypeArray.length)
    expect(developmentCards.length).toBe(expectedCardCount)
  })

  it('should create cards with valid gem types', () => {
    const validGemTypes = Object.values(GemType).filter(
      gemType => gemType !== GemType.GoldJoker
    )
    developmentCards.forEach(card => {
      expect(validGemTypes).toContain(card.gemType)
    })
  })

  it('should create cards with correct levels and points', () => {
    const cardMap = new Map()
    developmentCards.forEach(card => {
      if (!cardMap.has(card.level)) {
        cardMap.set(card.level, new Set())
      }
      cardMap.get(card.level).add(card.points)
    })

    expect(cardMap.get(1).size).toBe(2) // level 1 has 0 and 1 points
    expect(cardMap.get(2).size).toBe(3) // level 2 has 1, 2, and 3 points
    expect(cardMap.get(3).size).toBe(3) // level 3 has 3, 4, and 5 points
  })

  it('should create cards with correct costs', () => {
    // Example test for a specific card's cost
    const specificCard = developmentCards.find(card => card.id === 0)
    expect(specificCard?.cost).toEqual({ [GemType.Diamond]: 3 })
  })
})
