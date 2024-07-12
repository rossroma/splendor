import { DevelopmentCard, GemType } from '../types'

export class DevelopmentCardImpl implements DevelopmentCard {
  id: number
  level: number
  cost: Partial<Record<GemType, number>>
  points: number
  gemType: GemType

  constructor(
    id: number,
    level: number,
    cost: Partial<Record<GemType, number>>,
    points: number,
    gemType: GemType
  ) {
    this.id = id
    this.level = level
    this.cost = cost
    this.points = points
    this.gemType = gemType
  }
}
