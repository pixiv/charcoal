import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from 'react'

export type SnapState = Readonly<{
  activeIndex: number
  canPrev: boolean
  canNext: boolean
}>

const ITEM_SELECTOR = '.charcoal-carousel__item'

function centerItemScrollLeft(el: HTMLElement, item: HTMLElement): number {
  const targetLeft = item.offsetLeft + item.offsetWidth / 2 - el.clientWidth / 2
  return Math.max(0, targetLeft)
}

/**
 * カルーセルのスクロール状態を観測する。
 *
 * - `activeIndex`: `IntersectionObserver`（root=scroller、中央ラインの rootMargin）で
 *   「中央に重なっている item」を検出する。DOM の子要素走査や中央距離の手計算をしない。
 * - `canPrev`/`canNext`: スクロール位置から判定する（端判定に子要素は不要）。
 * - リサイズ時: 直前まで見ていたアイテムが画面外に出ないよう補正する。先頭/末尾では
 *   その端を維持し、中間では IntersectionObserver が追跡した active 要素を再センタリング
 *   する（`children[index]` に依存しない）。
 */
export function useSnapObserver(
  scrollerRef: RefObject<HTMLElement | null>,
  itemCount: number,
): SnapState {
  const [state, setState] = useState<SnapState>({
    activeIndex: 0,
    canPrev: false,
    canNext: false,
  })

  const canPrevRef = useRef(false)
  const canNextRef = useRef(false)
  const activeItemRef = useRef<HTMLElement | null>(null)

  // canPrev / canNext: スクロール位置から判定。
  useLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el
      const canPrev = scrollLeft > 1
      const canNext = scrollLeft < scrollWidth - clientWidth - 1
      // 変化が無ければ setState 自体を呼ばない（スクロールごとの無駄な dispatch を避ける）。
      if (canPrev === canPrevRef.current && canNext === canNextRef.current) {
        return
      }
      canPrevRef.current = canPrev
      canNextRef.current = canNext
      setState((prev) => ({ ...prev, canPrev, canNext }))
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    return () => el.removeEventListener('scroll', update)
  }, [scrollerRef])

  // activeIndex: 各 item を中央ラインで監視し、中央に重なっている item を active にする。
  useEffect(() => {
    const el = scrollerRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const items = Array.from(el.querySelectorAll<HTMLElement>(ITEM_SELECTOR))
    const indexOf = new Map<Element, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const index = indexOf.get(entry.target)
          if (index === undefined) continue
          activeItemRef.current = entry.target as HTMLElement
          setState((prev) =>
            prev.activeIndex === index ? prev : { ...prev, activeIndex: index },
          )
        }
      },
      { root: el, rootMargin: '0px -50% 0px -50%', threshold: 0 },
    )

    for (const [i, item] of items.entries()) {
      indexOf.set(item, i)
      observer.observe(item)
    }
    return () => observer.disconnect()
  }, [scrollerRef, itemCount])

  // リサイズ時: 直前まで見ていたアイテムを画面外に出さないよう補正する。
  useEffect(() => {
    const el = scrollerRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    let lastWidth = el.clientWidth
    const observer = new ResizeObserver(() => {
      if (el.clientWidth === lastWidth) return
      lastWidth = el.clientWidth
      // 端にいた場合はその端を維持し、中間にいた場合のみ active 要素を再センタリング。
      if (!canPrevRef.current) {
        el.scrollTo({ left: 0, behavior: 'auto' })
      } else if (!canNextRef.current) {
        el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: 'auto' })
      } else if (activeItemRef.current) {
        el.scrollTo({
          left: centerItemScrollLeft(el, activeItemRef.current),
          behavior: 'auto',
        })
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [scrollerRef])

  return state
}
