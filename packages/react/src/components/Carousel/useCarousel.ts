import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type RefObject,
} from 'react'
import {
  createCarouselEngine,
  type CarouselEngine,
  type CarouselEngineOptions,
  type CarouselState,
} from './carouselEngine'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const SERVER_STATE: CarouselState = {
  activeIndex: 0,
  canPrev: false,
  canNext: false,
}

const noopSubscribe = () => () => undefined
const getServerState = () => SERVER_STATE

export type UseCarouselResult = CarouselState &
  Readonly<{
    scrollToItem: (index: number) => void
    scrollByStep: (direction: 'prev' | 'next') => void
  }>

/**
 * `CarouselEngine`（framework 非依存）への薄い React バインディング。
 * scroller 要素から engine を生成し、状態を `useSyncExternalStore` で購読、
 * 操作を安定したコールバックとして返す。
 */
export function useCarousel(
  scrollerRef: RefObject<HTMLElement | null>,
  itemCount: number,
  options: CarouselEngineOptions,
): UseCarouselResult {
  const [engine, setEngine] = useState<CarouselEngine | null>(null)
  const engineRef = useRef<CarouselEngine | null>(null)

  const { align, offset, scrollStepRatio, trackActiveIndex } = options

  useIsomorphicLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const created = createCarouselEngine(el, {
      align,
      offset,
      scrollStepRatio,
      trackActiveIndex,
    })
    engineRef.current = created
    setEngine(created)
    return () => {
      created.destroy()
      engineRef.current = null
      setEngine(null)
    }
  }, [scrollerRef, itemCount, align, offset, scrollStepRatio, trackActiveIndex])

  const state = useSyncExternalStore(
    engine?.subscribe ?? noopSubscribe,
    engine?.getState ?? getServerState,
    getServerState,
  )

  const scrollToItem = useCallback((index: number) => {
    engineRef.current?.scrollToItem(index)
  }, [])
  const scrollByStep = useCallback((direction: 'prev' | 'next') => {
    engineRef.current?.scrollByStep(direction)
  }, [])

  return { ...state, scrollToItem, scrollByStep }
}
