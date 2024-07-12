import { DevelopmentCard, GemType } from '../types'
import { DevelopmentCardImpl } from '../models/developmentCard'

export const initialDevelopmentCards: DevelopmentCard[] = [
  // Level 1 cards
  new DevelopmentCardImpl(
    1,
    1,
    { [GemType.Diamond]: 1, [GemType.Ruby]: 1 },
    0,
    GemType.Emerald
  ),
  new DevelopmentCardImpl(
    2,
    1,
    { [GemType.Emerald]: 2, [GemType.Onyx]: 1 },
    1,
    GemType.Diamond
  ),
  new DevelopmentCardImpl(3, 1, { [GemType.Sapphire]: 3 }, 0, GemType.Onyx),
  new DevelopmentCardImpl(
    12,
    1,
    { [GemType.Diamond]: 2, [GemType.Emerald]: 2 },
    1,
    GemType.Sapphire
  ),

  // Level 2 cards
  new DevelopmentCardImpl(
    4,
    2,
    { [GemType.Diamond]: 2, [GemType.Sapphire]: 2, [GemType.Ruby]: 2 },
    2,
    GemType.Emerald
  ),
  new DevelopmentCardImpl(
    5,
    2,
    { [GemType.Emerald]: 3, [GemType.Onyx]: 2 },
    1,
    GemType.Ruby
  ),
  new DevelopmentCardImpl(6, 2, { [GemType.Diamond]: 5 }, 2, GemType.Sapphire),
  new DevelopmentCardImpl(
    13,
    2,
    { [GemType.Diamond]: 3, [GemType.Emerald]: 3 },
    2,
    GemType.Ruby
  ),

  // Level 3 cards
  new DevelopmentCardImpl(
    7,
    3,
    { [GemType.Ruby]: 4, [GemType.Sapphire]: 4, [GemType.Onyx]: 3 },
    3,
    GemType.Diamond
  ),
  new DevelopmentCardImpl(
    8,
    3,
    { [GemType.Diamond]: 6, [GemType.Emerald]: 3 },
    4,
    GemType.Onyx
  ),
  new DevelopmentCardImpl(9, 3, { [GemType.Sapphire]: 7 }, 5, GemType.Emerald),
  new DevelopmentCardImpl(
    14,
    3,
    { [GemType.Diamond]: 4, [GemType.Emerald]: 4 },
    3,
    GemType.Sapphire
  )
]
// 一类卡40张
// 二类卡30张
// 三类卡20张
// 贵族卡10张
// id 自增，level 1-3，points 0-5，cost {[gemType]: amount}，gemType random
