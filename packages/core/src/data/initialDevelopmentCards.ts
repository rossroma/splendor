import { DevelopmentCard, GemType } from '../types'
import { DevelopmentCardImpl } from '../models/developmentCard'

const cardsTable: {
  level: number
  points: number
  cards: Record<string, number>
}[] = [
  { level: 1, points: 0, cards: { c: 3 } },
  { level: 1, points: 0, cards: { p: 1, n: 2 } },
  { level: 1, points: 0, cards: { p: 2, n: 2 } },
  { level: 1, points: 0, cards: { p: 2, n: 2, nn: 2 } },
  { level: 1, points: 0, cards: { p: 1, n: 1, c: 3 } },
  { level: 1, points: 0, cards: { p: 1, pp: 1, n: 1, nn: 1 } },
  { level: 1, points: 0, cards: { p: 1, pp: 1, n: 1, nn: 2 } },
  { level: 1, points: 1, cards: { c: 4 } },
  { level: 2, points: 1, cards: { c: 2, n: 3, pp: 3 } },
  { level: 2, points: 1, cards: { p: 2, pp: 2, nn: 3 } },
  { level: 2, points: 2, cards: { c: 5 } },
  { level: 2, points: 2, cards: { p: 3, pp: 5 } },
  { level: 2, points: 2, cards: { p: 2, pp: 4, nn: 1 } },
  { level: 2, points: 3, cards: { c: 6 } },
  { level: 3, points: 3, cards: { p: 3, pp: 5, n: 3, nn: 3 } },
  { level: 3, points: 4, cards: { c: 3, p: 6, pp: 3 } },
  { level: 3, points: 4, cards: { c: 7 } },
  { level: 3, points: 5, cards: { c: 3, p: 7 } }
]

const gemTypeArray: GemType[] = Object.values(GemType).filter(
  gemType => gemType !== GemType.GoldJoker
)

const rules: Record<string, number> = {
  n: 1,
  nn: 2,
  c: 0,
  p: -1,
  pp: -2
}

// 通过下标取值，兼容负值
const getElement = <T>(arr: T[], index: number): T => {
  if (index < 0) {
    index = arr.length + index
  }
  return arr[index]
}

const getCards = (
  index: number,
  cards: Record<string, number>
): Partial<Record<GemType, number>> => {
  const result: Partial<Record<GemType, number>> = {}
  for (const key in cards) {
    const offset: number = rules[key]
    const gemIndex = index + offset

    result[getElement(gemTypeArray, gemIndex)] = cards[key]
  }
  return result
}

export const initialDevelopmentCards = (): DevelopmentCard[] => {
  const result: DevelopmentCard[] = []
  cardsTable.forEach(({ level, points, cards }, cardIndex) => {
    gemTypeArray.forEach((gemType: GemType, gemIndex: number) => {
      const cardId = cardIndex * gemTypeArray.length + gemIndex
      const cardCost = getCards(gemIndex, cards)
      result.push(
        new DevelopmentCardImpl(cardId, level, cardCost, points, gemType)
      )
    })
  })
  return result
}
