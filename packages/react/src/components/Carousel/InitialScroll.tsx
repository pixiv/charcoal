import {
  useEffect,
  useLayoutEffect,
  type ReactNode,
  type RefObject,
} from 'react'
import type { ScrollAlign } from '.'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const INTERACTION_EVENTS = [
  'pointerdown',
  'keydown',
  'wheel',
  'touchstart',
] as const

export type InitialScrollProviderProps = Readonly<{
  scrollerRef: RefObject<HTMLElement | null>
  rootRef: RefObject<HTMLElement | null>
  align?: ScrollAlign
  offset?: number
  children: ReactNode
}>

/**
 * 初期スクロール位置を適用する Provider。
 *
 * 位置はコンテンツ全体の幅（scrollWidth）に依存するが、画像など遅延読み込みの
 * スロットでは、マウント時点ではまだ幅が確定していないことがある。そのため、
 * コンテンツのサイズが後から変化した場合は初期位置を再適用する。ただしユーザーが
 * 一度でも操作（ポインタ／ホイール／キー／タッチ）したら、それ以降は上書きしない。
 *
 * 副作用のみで戻り値を持たないため、hook ではなく Provider として表現する。
 */
export const InitialScrollProvider = ({
  scrollerRef,
  rootRef,
  align = 'left',
  offset = 0,
  children,
}: InitialScrollProviderProps) => {
  useIsomorphicLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const interactionTarget = rootRef.current ?? el
    let active = true
    let observer: ResizeObserver | undefined

    const apply = () => {
      if (!active) return
      const maxScroll = el.scrollWidth - el.clientWidth
      let left = offset
      if (align === 'center') {
        left = maxScroll / 2 + offset
      } else if (align === 'right') {
        left = maxScroll + offset
      }
      el.scrollLeft = Math.max(0, Math.min(left, maxScroll))
    }

    // ユーザー操作を検知したら以降の再適用を止める。
    const stop = () => {
      active = false
    }

    apply()

    // コンテンツ（各アイテム）のサイズが確定・変化したら初期位置を再適用する。
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => apply())
      for (const child of Array.from(el.children)) {
        observer.observe(child)
      }
    }

    for (const type of INTERACTION_EVENTS) {
      interactionTarget.addEventListener(type, stop, true)
    }

    return () => {
      observer?.disconnect()
      for (const type of INTERACTION_EVENTS) {
        interactionTarget.removeEventListener(type, stop, true)
      }
    }
  }, [align, offset, scrollerRef, rootRef])

  return <>{children}</>
}
