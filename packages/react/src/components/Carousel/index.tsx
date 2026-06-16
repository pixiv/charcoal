import './index.css'

import { memo, useCallback, useRef, type ReactNode } from 'react'
import { mergeProps, useFocusRing, useKeyboard } from 'react-aria'
import { useClassNames } from '../../_lib/useClassNames'
import IconButton from '../IconButton'
import { useCarousel } from './useCarousel'

export type CarouselItem = {
  id: string
  children: ReactNode
}

export type ScrollAlign = 'left' | 'center' | 'right'

export type CarouselProps = Readonly<{
  className?: string
  hasGradient?: boolean
  fullWidth?: boolean
  navigationButtons?: boolean
  indicator?: boolean
  size?: 'S' | 'M'
  scrollStepRatio?: number
  defaultScroll?: { align?: ScrollAlign; offset?: number }
  items: CarouselItem[]
}>

type Direction = 'prev' | 'next'

const DEFAULT_SCROLL_STEP_RATIO = 0.75

const NAV_ICON = {
  prev: '24/Prev',
  next: '24/Next',
} as const

type NavigationButtonProps = Readonly<{
  direction: Direction
  canScroll: boolean
  onScroll: (direction: Direction) => void
}>

const CarouselNavigationButton = ({
  direction,
  canScroll,
  onScroll,
}: NavigationButtonProps) => {
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
}

type IndicatorItemProps = Readonly<{
  index: number
  isActive: boolean
  onSelect: (index: number) => void
}>

const CarouselIndicatorItem = ({
  index,
  isActive,
  onSelect,
}: IndicatorItemProps) => {
  const handleClick = useCallback(() => {
    onSelect(index)
  }, [onSelect, index])
  return (
    <button
      className="charcoal-carousel__indicator__item"
      data-active={isActive}
      aria-label={`Go to slide ${index + 1}`}
      onClick={handleClick}
    />
  )
}

const Carousel = ({
  size = 'M',
  navigationButtons,
  indicator,
  hasGradient = false,
  fullWidth = false,
  scrollStepRatio = DEFAULT_SCROLL_STEP_RATIO,
  defaultScroll: { align = 'left', offset = 0 } = {},
  ...props
}: CarouselProps) => {
  const className = useClassNames('charcoal-carousel', props.className)
  const showNavigationButtons = navigationButtons ?? size === 'M'
  const showIndicator = indicator ?? size === 'S'

  const scrollerRef = useRef<HTMLDivElement>(null)

  const { activeIndex, canPrev, canNext, scrollToItem, scrollByStep } =
    useCarousel(scrollerRef, props.items.length, {
      align,
      offset,
      scrollStepRatio,
    })

  // ←/→ でスクロール。コンテナにフォーカスがある時のみ。react-aria の useKeyboard で
  // イベントを正規化する（既定で propagation 停止。未処理キーは継続させる）。
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

  return (
    <div
      className={className}
      data-size={size}
      data-has-gradient={hasGradient}
      data-full-width={fullWidth}
      data-indicator={showIndicator}
      data-can-prev={canPrev}
      data-can-next={canNext}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
    >
      <div className="charcoal-carousel__viewport">
        <div
          {...mergeProps(scrollerFocusProps, keyboardProps)}
          ref={scrollerRef}
          className="charcoal-carousel__scroller"
          tabIndex={0}
          data-focus-visible={scrollerFocusVisible || undefined}
        >
          {props.items.map((item) => (
            <div key={item.id} className="charcoal-carousel__item">
              {item.children}
            </div>
          ))}
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

      {/* CSS Scroll Markers 非対応ブラウザ向けの JS インジケーター（fallback）。
          対応ブラウザでは CSS の @supports が display:none で隠す。 */}
      <div
        className="charcoal-carousel__indicator"
        data-visible={showIndicator}
        aria-hidden={!showIndicator}
      >
        {props.items.map((item, i) => (
          <CarouselIndicatorItem
            key={item.id}
            index={i}
            isActive={i === activeIndex}
            onSelect={scrollToItem}
          />
        ))}
      </div>
    </div>
  )
}

export default memo(Carousel)
