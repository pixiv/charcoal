import './index.css'

import {
  Children,
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import { mergeProps, useFocusRing, useKeyboard } from 'react-aria'
import { useClassNames } from '../../_lib/useClassNames'
import IconButton from '../IconButton'
import {
  CarouselCloneItem,
  CarouselItem as CarouselSlide,
} from './CarouselItem'
import {
  createCarouselStore,
  INITIAL_CAROUSEL_STATE,
  type CarouselState,
} from './carouselStore'
import { useCarouselScroller } from './useCarouselScroller'

const getServerSnapshot = (): CarouselState => INITIAL_CAROUSEL_STATE

export type ScrollAlign = 'left' | 'center' | 'right'

export type ScrollSnapType = 'none' | 'proximity' | 'mandatory'

export type ScrollSnapAlign = 'center' | 'start'

export type ScrollSnap = Readonly<{
  type?: ScrollSnapType
  align?: ScrollSnapAlign
}>

export type ScrollStepContext = Readonly<{
  clientWidth: number
  scrollWidth: number
  scrollLeft: number
  direction: 'prev' | 'next'
}>

export type ScrollStep = number | ((ctx: ScrollStepContext) => number)

// 命令的 API。ref 経由で初期位置へのリセットを公開する（react-sandbox 互換）。
export type CarouselHandlerRef = {
  resetScroll: () => void
}

export type CarouselDefaultScroll = Readonly<{
  align?: ScrollAlign
  offset?: number
}>

// loop 時は初期位置が centerItem（未指定なら実セット先頭）に固定されるため
// defaultScroll と両立しない（型で排他する）。
export type CarouselLoopProps =
  | Readonly<{ loop?: false; defaultScroll?: CarouselDefaultScroll }>
  | Readonly<{ loop: true; defaultScroll?: never }>

export type CarouselProps = Readonly<{
  className?: string
  hasGradient?: boolean
  fullWidth?: boolean
  navigationButtons?: boolean
  indicator?: boolean
  size?: 'S' | 'M'
  // 進む量。number は clientWidth に対する比率、function は進む px を直接返す。
  scrollStep?: ScrollStep
  // スクロールスナップ。未指定時は size 基準（M=none / S=mandatory）、align=center。
  // M の none は sandbox 同等に 0.75×表示幅ちょうど進む（スナップで着地を吸着しない）。
  scrollSnap?: ScrollSnap
  // react-sandbox 互換のコールバック。
  onScroll?: (left: number) => void
  onResize?: (width: number) => void
  onScrollStateChange?: (canScroll: boolean) => void
  // loop 時に初期表示で viewport 中央に置く実スライドの論理 index。非 loop では無効。
  centerItem?: number
  // 1 直接子要素 = 1 スライド（react-sandbox 互換）。
  children: ReactNode
}> &
  CarouselLoopProps

type Direction = 'prev' | 'next'

const DEFAULT_SCROLL_STEP = 0.75

const NAV_ICON = {
  prev: '24/Prev',
  next: '24/Next',
} as const

type NavigationButtonProps = Readonly<{
  direction: Direction
  canScroll: boolean
  onScroll: (direction: Direction) => void
}>

const CarouselNavigationButton = memo(function CarouselNavigationButton({
  direction,
  canScroll,
  onScroll,
}: NavigationButtonProps) {
  const handleClick = useCallback(() => {
    onScroll(direction)
  }, [onScroll, direction])
  return (
    <IconButton
      variant="Overlay"
      size="S"
      icon={NAV_ICON[direction]}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      disabled={!canScroll}
      onClick={handleClick}
      className="charcoal-carousel__navigation__item"
      data-direction={direction}
      data-hidden={!canScroll}
    />
  )
})

type IndicatorItemProps = Readonly<{
  index: number
  isActive: boolean
  onSelect: (index: number) => void
}>

const CarouselIndicatorItem = memo(function CarouselIndicatorItem({
  index,
  isActive,
  onSelect,
}: IndicatorItemProps) {
  const handleClick = useCallback(() => {
    onSelect(index)
  }, [onSelect, index])
  return (
    <button
      className="charcoal-carousel__indicator__item"
      data-active={isActive}
      aria-current={isActive || undefined}
      aria-label={`Go to slide ${index + 1}`}
      onClick={handleClick}
    />
  )
})

const Carousel = forwardRef<CarouselHandlerRef, CarouselProps>(function Render(
  {
    size = 'M',
    navigationButtons,
    indicator,
    hasGradient = false,
    fullWidth = false,
    scrollStep = DEFAULT_SCROLL_STEP,
    scrollSnap,
    onScroll,
    onResize,
    onScrollStateChange,
    loop = false,
    centerItem,
    defaultScroll: { align = 'left', offset = 0 } = {},
    children,
    ...props
  }: CarouselProps,
  ref,
) {
  const className = useClassNames('charcoal-carousel', props.className)
  const showNavigationButtons = navigationButtons ?? size === 'M'
  const showIndicator = indicator ?? size === 'S'
  const snapType = scrollSnap?.type ?? (size === 'S' ? 'mandatory' : 'none')
  const snapAlign = scrollSnap?.align ?? 'center'

  // 直接子要素 1 つを 1 スライドとして数える。key は子要素の key を引き継ぐ
  // （toArray が付与する接頭辞付き key。無ければ index）。
  // toArray は毎回新しい要素を作るため memo 化し、item 側の React.memo を効かせる。
  const slides = useMemo(() => Children.toArray(children), [children])
  const slideKeys = useMemo(
    () =>
      slides.map((slide, i) =>
        isValidElement(slide) && slide.key != null ? slide.key : i,
      ),
    [slides],
  )

  const scrollerRef = useRef<HTMLDivElement>(null)
  const [store] = useState(createCarouselStore)

  const { scrollByStep, onItemResize, resetScroll, loopCloneCount } =
    useCarouselScroller(scrollerRef, store, slides.length, {
      align,
      offset,
      scrollStep,
      loop,
      centerItem,
      onScroll,
      onResize,
      onScrollStateChange,
    })

  useImperativeHandle(ref, () => ({ resetScroll }), [resetScroll])

  const { activeIndex, canPrev, canNext } = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    getServerSnapshot,
  )

  const scrollToItem = useCallback(
    (index: number) => store.dispatch({ type: 'requestScroll', index }),
    [store],
  )

  const renderSlides = () =>
    slides.map((slide, i) => (
      <CarouselSlide
        key={slideKeys[i]}
        index={i}
        store={store}
        onResize={onItemResize}
      >
        {slide}
      </CarouselSlide>
    ))

  // loop 時は実セットの前後に clone を描画する（clone + 端テレポート方式）。
  // 枚数は「各端が 1 viewport を覆う分」だけ実測から決まる（初回 render は 0 枚）。
  const renderClones = (which: 'before' | 'after') => {
    if (loopCloneCount === 0) return null
    const indices = slides.map((_, i) => i)
    const cloneIndices =
      which === 'before'
        ? indices.slice(-loopCloneCount)
        : indices.slice(0, loopCloneCount)
    return cloneIndices.map((i) => (
      <CarouselCloneItem
        key={`~${which}~${slideKeys[i]}`}
        index={i}
        store={store}
      >
        {slides[i]}
      </CarouselCloneItem>
    ))
  }

  // ←/→ でスクロール。コンテナにフォーカスがある時のみ。
  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        scrollByStep('next')
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        scrollByStep('prev')
      } else {
        e.continuePropagation()
      }
    },
  })

  const {
    focusProps: scrollerFocusProps,
    isFocusVisible: scrollerFocusVisible,
  } = useFocusRing()

  // ナビゲーションボタン表示用。クリックで残留したフォーカス（pointer 由来）では
  // 表示し続けないよう、キーボード由来のフォーカスのみを検知する。
  const { focusProps: rootFocusProps, isFocusVisible: rootFocusVisible } =
    useFocusRing({ within: true })

  return (
    <div
      {...rootFocusProps}
      className={className}
      data-size={size}
      data-has-gradient={hasGradient}
      data-full-width={fullWidth}
      data-indicator={showIndicator}
      data-scroll-snap-type={snapType}
      data-scroll-snap-align={snapAlign}
      data-can-prev={canPrev}
      data-can-next={canNext}
      data-focus-visible-within={rootFocusVisible || undefined}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
    >
      {/* フォーカスリングは viewport に描く（理由は index.css の同セレクタ参照） */}
      <div
        className="charcoal-carousel__viewport"
        data-focus-visible={scrollerFocusVisible || undefined}
      >
        <div
          {...mergeProps(scrollerFocusProps, keyboardProps)}
          ref={scrollerRef}
          className="charcoal-carousel__scroller"
          tabIndex={0}
        >
          {loop && renderClones('before')}
          {renderSlides()}
          {loop && renderClones('after')}
        </div>

        <div
          className="charcoal-carousel__navigation"
          data-visible={showNavigationButtons}
          aria-hidden={!showNavigationButtons}
        >
          <CarouselNavigationButton
            direction="prev"
            canScroll={canPrev}
            onScroll={scrollByStep}
          />
          <CarouselNavigationButton
            direction="next"
            canScroll={canNext}
            onScroll={scrollByStep}
          />
        </div>
      </div>

      <div
        className="charcoal-carousel__indicator"
        data-visible={showIndicator}
        aria-hidden={!showIndicator}
      >
        {slides.map((_, i) => (
          <CarouselIndicatorItem
            key={slideKeys[i]}
            index={i}
            isActive={i === activeIndex}
            onSelect={scrollToItem}
          />
        ))}
      </div>
    </div>
  )
})

Carousel.displayName = 'Carousel'

export default memo(Carousel)
