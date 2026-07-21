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

// 片側の clone 帯に要求する被覆幅（viewport 比）。帯域を中央配置したとき、
// 静止位置から両物理端まで 1 viewport 以上残すには 1.5 viewport の被覆が必要。
const CLONE_COVERAGE_RATIO = 1.5

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
// 最小枚数を、実セットの両端から数えて求める（+1 は snap 途中の部分見え対策）。
export function computeLoopCloneCount(
  items: readonly ItemRect[],
  clientWidth: number,
): number {
  const n = items.length
  if (n === 0) return 0
  const coverage = clientWidth * CLONE_COVERAGE_RATIO
  const first = items[0]
  const last = items[n - 1]
  const counts = Array.from({ length: n }, (_, i) => i + 1)
  const fromHead =
    counts.find(
      (m) =>
        items[m - 1].offsetLeft + items[m - 1].offsetWidth - first.offsetLeft >=
        coverage,
    ) ?? n
  const fromTail =
    counts.find(
      (m) =>
        last.offsetLeft + last.offsetWidth - items[n - m].offsetLeft >=
        coverage,
    ) ?? n
  return Math.min(n, Math.max(fromHead, fromTail) + 1)
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

// item の中央が viewport 中央になる scrollLeft（帯域へ正規化済み）。
export function computeCenterScrollLeft(
  item: ItemRect,
  geometry: LoopGeometry,
): number {
  const raw = item.offsetLeft + item.offsetWidth / 2 - geometry.clientWidth / 2
  return computeLoopTeleport(raw, geometry) ?? raw
}
