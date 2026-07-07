import { useEffect, useRef, type ReactNode } from 'react'
import type { CarouselStore } from './carouselStore'
import { observeCenter } from './intersectionObserver'
import { observeResize } from './resizeObserver'

export type CarouselItemProps = Readonly<{
  index: number
  store: CarouselStore
  // loop 用の複製スライド。中央検出は実セットと同じ論理 index を報告し、
  // scroll 命令・resize 通知には参加しない。
  clone?: boolean
  onResize: () => void
  children: ReactNode
}>

export const CarouselItem = ({
  index,
  store,
  clone = false,
  onResize,
  children,
}: CarouselItemProps) => {
  const ref = useRef<HTMLDivElement>(null)

  // activeIndex: 自分が中央に来たら store に報告する（root は親=scroller から導出）。
  // clone も同じ index を報告する（テレポート前の clone 帯域でも indicator が追従する）。
  useEffect(() => {
    const el = ref.current
    if (!el) return
    return observeCenter(el, () => store.dispatch({ type: 'setActive', index }))
  }, [index, store])

  // scrollToItem: 自分宛ての命令でだけ自己スクロールする（再レンダーしない）。
  useEffect(() => {
    if (clone) return
    let lastNonce = store.getSnapshot().scroll?.nonce ?? 0
    return store.subscribe(() => {
      const scroll = store.getSnapshot().scroll
      if (!scroll || scroll.index !== index || scroll.nonce === lastNonce)
        return
      lastNonce = scroll.nonce
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    })
  }, [index, store, clone])

  // 遅延コンテンツ: 自分のサイズ変化を onResize で通知する。clone は実セットと
  // 同一内容なので実セット側に集約する。
  useEffect(() => {
    if (clone) return
    const el = ref.current
    if (!el) return
    return observeResize(el, onResize)
  }, [onResize, clone])

  // React 18 は inert prop 未対応のため property で付与する。
  useEffect(() => {
    const el = ref.current
    if (!el || !clone) return
    el.inert = true
  }, [clone])

  return (
    <div
      ref={ref}
      className="charcoal-carousel__item"
      data-clone={clone || undefined}
      aria-hidden={clone || undefined}
    >
      {children}
    </div>
  )
}
