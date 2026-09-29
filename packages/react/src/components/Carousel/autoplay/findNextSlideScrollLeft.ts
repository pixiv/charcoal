import type { ScrollSnapAlign } from '../index'

type ItemRect = Readonly<{ offsetLeft: number; offsetWidth: number }>

export type NextSlideParams = Readonly<{
  // 起点。走行中は実座標ではなく「まだ到達していない目標位置」を渡す。
  scrollLeft: number
  clientWidth: number
  maxScroll: number
  align: ScrollSnapAlign
  loop: boolean
}>

// 静止位置の許容誤差(px)。mandatory snap は静止位置を数 px 補正するため、
// 起点が目標とわずかにずれていても 1 枚ぶん進めるようにする
// （carouselLoop の BAND_TOLERANCE と同じ事情。スライド幅がこの 2 倍を
// 下回る構成は想定しない）。
const PROGRESS_EPSILON = 4

const restPosition = (
  { offsetLeft, offsetWidth }: ItemRect,
  { clientWidth, maxScroll, align, loop }: NextSlideParams,
): number => {
  const raw =
    align === 'center'
      ? offsetLeft + offsetWidth / 2 - clientWidth / 2
      : offsetLeft
  // loop は clone 帯があるので物理端に触れない。非 loop だけ到達可能域へ丸める。
  return loop ? raw : Math.max(0, Math.min(raw, maxScroll))
}

// 次のスライドを静止させる scrollLeft。進める先が無ければ loop は null
// （滑走路の端。静止後テレポートが帯域中央へ戻すのを待つ）、非 loop は
// restPosition(先頭, params)（先頭スライドの静止位置。align=center かつ先頭が
// viewport より広い構成では 0 だと届かず着地が短くなるため、単純な巻き戻しではなく
// 他の候補と同じ計算式で求める）。
export function findNextSlideScrollLeft(
  items: readonly ItemRect[],
  params: NextSlideParams,
): number | null {
  const [first] = items
  if (first == null) return null
  // 静止位置は DOM 順で単調増加する。現在地を最近傍で特定してから隣を取る形にすると、
  // 非 loop + center でクランプに潰れた重複位置から前進できなくなる。
  const target = items
    .map((item) => restPosition(item, params))
    .find((pos) => pos > params.scrollLeft + PROGRESS_EPSILON)
  return target ?? (params.loop ? null : restPosition(first, params))
}
