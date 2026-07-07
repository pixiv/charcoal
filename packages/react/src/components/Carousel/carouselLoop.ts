export type LoopGeometry = Readonly<{
  // 実セット 1 周ぶんの幅（margin 込み）。clone-after 先頭と実セット先頭の offsetLeft 差
  setWidth: number
  clientWidth: number
  maxScroll: number
}>

// 維持帯域は [0.5 * setWidth, 1.5 * setWidth)。帯域幅 = setWidth なので
// ±setWidth の補正後は必ず合同位置（描画がピクセル同一）になる。
const BAND_LOWER_RATIO = 0.5

export function measureLoopGeometry(
  scroller: HTMLElement,
  itemCount: number,
): LoopGeometry | null {
  const realFirst = scroller.children.item(itemCount)
  const cloneAfterFirst = scroller.children.item(itemCount * 2)
  if (
    !(realFirst instanceof HTMLElement) ||
    !(cloneAfterFirst instanceof HTMLElement)
  ) {
    return null
  }
  return {
    setWidth: cloneAfterFirst.offsetLeft - realFirst.offsetLeft,
    clientWidth: scroller.clientWidth,
    maxScroll: scroller.scrollWidth - scroller.clientWidth,
  }
}

// ループが幾何的に成立するか。実セットが viewport より狭いとテレポートが破綻する。
export function isLoopActive(geometry: LoopGeometry): boolean {
  return geometry.setWidth > geometry.clientWidth
}

// 帯域外なら合同位置へ丸めた scrollLeft を、帯域内なら null を返す。
export function computeLoopTeleport(
  scrollLeft: number,
  geometry: LoopGeometry,
): number | null {
  const { setWidth } = geometry
  if (setWidth <= 0) return null
  const lower = setWidth * BAND_LOWER_RATIO
  const wrapped =
    lower + ((((scrollLeft - lower) % setWidth) + setWidth) % setWidth)
  return wrapped === scrollLeft ? null : wrapped
}

// item の中央が viewport 中央になる scrollLeft（帯域へ正規化済み）。
export function computeCenterScrollLeft(
  item: Readonly<{ offsetLeft: number; offsetWidth: number }>,
  geometry: LoopGeometry,
): number {
  const raw = item.offsetLeft + item.offsetWidth / 2 - geometry.clientWidth / 2
  return computeLoopTeleport(raw, geometry) ?? raw
}
