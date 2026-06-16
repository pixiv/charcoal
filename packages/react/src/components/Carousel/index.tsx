import './index.css'

import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { useFocusRing } from 'react-aria'
import { useClassNames } from '../../_lib/useClassNames'
import IconButton from '../IconButton'
import { createCarouselStore, type CarouselStore } from './carouselStore'
import { InitialScrollProvider } from './InitialScroll'
import { useSnapObserver } from './useSnapObserver'

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

type CarouselItemProps = Readonly<{
  index: number
  store: CarouselStore
  children: ReactNode
}>

const CarouselItem = ({ index, store, children }: CarouselItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  // store を購読し、自分が対象になった dispatch の時だけ自分自身の要素に
  // scrollIntoView を発行する。副作用なので render には反映せず、再レンダーは起きない。
  useEffect(
    () =>
      store.subscribe(() => {
        if (store.getSnapshot() !== index) return
        ref.current?.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        })
      }),
    [store, index],
  )
  return (
    <div ref={ref} className="charcoal-carousel__item">
      {children}
    </div>
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

  const rootRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  // スクロールコマンド用ストア。indicator は index を dispatch するだけで、
  // 実際の scrollIntoView は対象 item が自分自身に対して発行する。
  const [store] = useState(createCarouselStore)

  const { activeIndex, canPrev, canNext } = useSnapObserver(
    scrollerRef,
    props.items.length,
  )

  const scrollToItem = useCallback(
    (index: number) => {
      store.dispatch({ type: 'scrollTo', index })
    },
    [store],
  )

  const scrollByStep = useCallback(
    (direction: Direction) => {
      const el = scrollerRef.current
      if (!el) return
      const delta = el.clientWidth * scrollStepRatio
      el.scrollBy({
        left: direction === 'next' ? delta : -delta,
        behavior: 'smooth',
      })
    },
    [scrollStepRatio],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        scrollByStep('next')
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        scrollByStep('prev')
      }
    },
    [scrollByStep],
  )

  const {
    focusProps: scrollerFocusProps,
    isFocusVisible: scrollerFocusVisible,
  } = useFocusRing()

  return (
    <InitialScrollProvider
      scrollerRef={scrollerRef}
      rootRef={rootRef}
      align={align}
      offset={offset}
    >
      <div
        ref={rootRef}
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
            {...scrollerFocusProps}
            ref={scrollerRef}
            className="charcoal-carousel__scroller"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            data-focus-visible={scrollerFocusVisible || undefined}
          >
            {props.items.map((item, i) => (
              <CarouselItem key={item.id} index={i} store={store}>
                {item.children}
              </CarouselItem>
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
    </InitialScrollProvider>
  )
}

export default memo(Carousel)
