import { useEffect, useRef, type ReactNode } from 'react'
import type { CarouselStore } from './carouselStore'
import { observeCenter } from './intersectionObserver'
import { observeResize } from './resizeObserver'

export type CarouselItemProps = Readonly<{
  index: number
  store: CarouselStore
  onResize: () => void
  children: ReactNode
}>

export const CarouselItem = ({
  index,
  store,
  onResize,
  children,
}: CarouselItemProps) => {
  const ref = useRef<HTMLDivElement>(null)

  // activeIndex: 自分が中央に来たら store に報告する（root は親=scroller から導出）。
  useEffect(() => {
    const el = ref.current
    if (!el) return
    return observeCenter(el, () => store.dispatch({ type: 'setActive', index }))
  }, [index, store])

  // scrollToItem: 自分宛ての命令でだけ自己スクロールする（再レンダーしない）。
  useEffect(() => {
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
  }, [index, store])

  // 遅延コンテンツ: 自分のサイズ変化を onResize で通知する。
  useEffect(() => {
    const el = ref.current
    if (!el) return
    return observeResize(el, onResize)
  }, [onResize])

  return (
    <div ref={ref} className="charcoal-carousel__item">
      {children}
    </div>
  )
}
