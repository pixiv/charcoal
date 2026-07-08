import { memo, useEffect, useRef, type ReactNode, type RefObject } from 'react'
import type { CarouselStore } from './carouselStore'
import { observeCenter } from './intersectionObserver'
import { observeResize } from './resizeObserver'

type CenterReportProviderProps = Readonly<{
  target: RefObject<HTMLDivElement | null>
  store: CarouselStore
  index: number
  children: ReactNode
}>

// activeIndex: target が中央に来たら store に報告する（root は親=scroller から導出）。
// clone も同じ index を報告する（テレポート前の clone 帯域でも indicator が追従する）。
const CenterReportProvider = ({
  target,
  store,
  index,
  children,
}: CenterReportProviderProps) => {
  useEffect(() => {
    const el = target.current
    if (!el) return
    return observeCenter(el, () => store.dispatch({ type: 'setActive', index }))
  }, [target, index, store])

  return <>{children}</>
}

export type CarouselItemProps = Readonly<{
  index: number
  store: CarouselStore
  onResize: () => void
  children: ReactNode
}>

export const CarouselItem = memo(function CarouselItem({
  index,
  store,
  onResize,
  children,
}: CarouselItemProps) {
  const ref = useRef<HTMLDivElement>(null)

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
      <CenterReportProvider target={ref} store={store} index={index}>
        {children}
      </CenterReportProvider>
    </div>
  )
})

export type CarouselCloneItemProps = Readonly<{
  index: number
  store: CarouselStore
  children: ReactNode
}>

// loop 用の複製スライド。中央検出は実セットと同じ論理 index を報告し、
// scroll 命令・resize 通知には参加しない。
export const CarouselCloneItem = memo(function CarouselCloneItem({
  index,
  store,
  children,
}: CarouselCloneItemProps) {
  const ref = useRef<HTMLDivElement>(null)

  // React 18 は inert prop 未対応のため property で付与する。
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.inert = true
  }, [])

  return (
    <div ref={ref} className="charcoal-carousel__item" data-clone aria-hidden>
      <CenterReportProvider target={ref} store={store} index={index}>
        {children}
      </CenterReportProvider>
    </div>
  )
})
