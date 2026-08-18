import { findMinCount } from './findMinCount'

export type LoopGeometry = Readonly<{
  // 実セット 1 周ぶんの幅（margin 込み）。clone-after 先頭と実セット先頭の offsetLeft 差
  setWidth: number
  // 維持帯域の下限。スクロール可能域の中央に帯域を置き、静止位置から両物理端まで
  // 常にマージンを確保する（テレポートは静止後にしか行わないため、強フリックでも
  // 走行中に物理端へ到達しないだけの余裕を持たせる）。
  bandLower: number
  clientWidth: number
}>

type ItemRect = Readonly<{ offsetLeft: number; offsetWidth: number }>

// 片側の clone 帯に要求する被覆幅（viewport 比）。帯域を中央配置すると静止位置から
// 物理端までの滑走路は (比 − 0.5) viewport になる。テレポートは静止後にしか行えず
// （走行中の scrollTo はスクロールアニメーション自体を打ち切る）、滑走路を使い切ると
// 物理端クランプで慣性が死んで「がくつき」に見えるため、1 ジェスチャの移動量として
// 現実的な 3 viewport を滑走路として確保する。
const CLONE_COVERAGE_RATIO = 3.5

export function measureLoopGeometry(
  scroller: HTMLElement,
  itemCount: number,
  cloneCount: number,
): LoopGeometry | null {
  const realFirst = scroller.children.item(cloneCount)
  const cloneAfterFirst = scroller.children.item(cloneCount + itemCount)
  if (
    !(realFirst instanceof HTMLElement) ||
    !(cloneAfterFirst instanceof HTMLElement)
  ) {
    return null
  }
  const setWidth = cloneAfterFirst.offsetLeft - realFirst.offsetLeft
  const maxScroll = scroller.scrollWidth - scroller.clientWidth
  return {
    setWidth,
    bandLower: Math.max(0, (maxScroll - setWidth) / 2),
    clientWidth: scroller.clientWidth,
  }
}

// ループが幾何的に成立するか。実セットが viewport より狭いとテレポートが破綻する。
export function isLoopActive(geometry: LoopGeometry): boolean {
  return geometry.setWidth > geometry.clientWidth
}

// 片側の clone 帯が CLONE_COVERAGE_RATIO viewport を覆うのに必要な実 item の
// 枚数（+1 は snap 途中の部分見え対策）。1 セットで足りない要求はセット丸ごとの
// 周回で埋めるため、戻り値は実 item 数を超えうる。
export function computeLoopCloneCount(
  items: readonly ItemRect[],
  clientWidth: number,
): number {
  const n = items.length
  if (n === 0) return 0
  const [first] = items
  const reversed = items.toReversed()
  const [last] = reversed
  // 末尾 item の後ろの間隔は実測できないため、セット幅はこの分だけ過小評価になる
  // （clone を余分に積む方向なので滑走路の保証は崩れない）。
  const setSpan = last.offsetLeft + last.offsetWidth - first.offsetLeft
  // 実セットが viewport を覆えない構成ではループ自体が成立しない（isLoopActive）。
  // clone を何枚積んでも無駄なので描画しない。
  if (setSpan <= clientWidth) return 0

  const coverage = clientWidth * CLONE_COVERAGE_RATIO
  const fullSets = Math.max(0, Math.ceil(coverage / setSpan) - 1)
  const rest = coverage - fullSets * setSpan
  const fromHead = findMinCount(
    items,
    (item) => item.offsetLeft + item.offsetWidth - first.offsetLeft >= rest,
  )
  const fromTail = findMinCount(
    reversed,
    (item) => last.offsetLeft + last.offsetWidth - item.offsetLeft >= rest,
  )
  return fullSets * n + Math.max(fromHead, fromTail) + 1
}

// 帯域判定の許容誤差(px)。setWidth は整数 offsetLeft 差の実測値で、ブラウザ内部の
// snap 周期とはサブピクセル単位でずれうる。そのためテレポート直後に mandatory snap が
// 静止位置を数 px 補正し、帯域境界のわずか外側に着地することがある。これを帯域外と
// 扱うと scrollend → teleport → snap 補正の ±setWidth 往復が無限連鎖する（左右振動）。
// テレポートで補正できる最小単位は setWidth なので、誤差スケールの逸脱は帯域内とみなす。
const BAND_TOLERANCE = 4

// 維持帯域は [bandLower, bandLower + setWidth)。帯域幅 = setWidth なので
// ±setWidth の補正後は必ず合同位置（描画がピクセル同一）になる。
// 帯域外なら合同位置へ丸めた scrollLeft を、帯域内なら null を返す。
export function computeLoopTeleport(
  scrollLeft: number,
  geometry: LoopGeometry,
): number | null {
  const { setWidth, bandLower } = geometry
  if (setWidth <= 0) return null
  const inBand =
    scrollLeft >= bandLower - BAND_TOLERANCE &&
    scrollLeft < bandLower + setWidth + BAND_TOLERANCE
  if (inBand) return null
  return (
    bandLower + ((((scrollLeft - bandLower) % setWidth) + setWidth) % setWidth)
  )
}

// 物理端クランプ判定の許容誤差(px)。scrollLeft はサブピクセル値を取りうる一方、
// maxScroll（scrollWidth − clientWidth）は整数丸めの影響で実際の端と 1px 未満ずれうる。
const WALL_EPSILON = 1

// 走行中に scrollLeft が物理端へクランプされたときの緊急テレポート先。
// 静止後テレポートと違い scroll イベントから呼ばれるため、「端に到達済み」かつ
// 「直前サンプルより端へ向かう向き（または張り付いたまま）」の場合だけ発火する。
// クランプ位置では motion は既に物理的に停止しているので、合同位置への補正は
// 描画上無変化のまま滑走路だけを回復する（momentum を殺す走行中テレポートとは別物）。
export function computeWallEscape(
  scrollLeft: number,
  prevScrollLeft: number,
  geometry: LoopGeometry,
): number | null {
  const { setWidth, bandLower } = geometry
  // 帯域は中央配置なので、物理端は帯域の両外側 bandLower ぶん先にある
  const maxScroll = bandLower * 2 + setWidth
  const atLeftWall = scrollLeft <= WALL_EPSILON && scrollLeft <= prevScrollLeft
  const atRightWall =
    scrollLeft >= maxScroll - WALL_EPSILON && scrollLeft >= prevScrollLeft
  if (!atLeftWall && !atRightWall) return null
  return computeLoopTeleport(scrollLeft, geometry)
}

// item の中央が viewport 中央になる scrollLeft（帯域へ正規化済み）。
export function computeCenterScrollLeft(
  item: ItemRect,
  geometry: LoopGeometry,
): number {
  const raw = item.offsetLeft + item.offsetWidth / 2 - geometry.clientWidth / 2
  return computeLoopTeleport(raw, geometry) ?? raw
}
