import {
  forwardRef,
  memo,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import { useObjectRef } from 'react-aria/useObjectRef'
import type { CarouselStore } from './carouselStore'
import { observeCenter } from './intersectionObserver'
import { observeResize } from './resizeObserver'

type CenterReportProviderProps = ComponentPropsWithoutRef<'div'> &
  Readonly<{
    store: CarouselStore
    index: number
  }>

// activeIndex: 自身が中央に来たら store に報告する（root は親=scroller から導出）。
// clone も同じ index を報告する（テレポート前の clone 帯域でも indicator が追従する）。
// className / data 属性などの div 属性はそのまま透過する。
const CenterReportProvider = forwardRef<
  HTMLDivElement,
  CenterReportProviderProps
>(function CenterReportProvider({ store, index, ...divProps }, forwardedRef) {
  const ref = useObjectRef(forwardedRef)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    return observeCenter(el, () => store.dispatch({ type: 'setActive', index }))
  }, [ref, index, store])

  return <div ref={ref} {...divProps} />
})

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
    <CenterReportProvider
      ref={ref}
      store={store}
      index={index}
      className="charcoal-carousel__item"
    >
      {children}
    </CenterReportProvider>
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
    <CenterReportProvider
      ref={ref}
      store={store}
      index={index}
      className="charcoal-carousel__item"
      data-clone
      aria-hidden
    >
      {children}
    </CenterReportProvider>
  )
})
