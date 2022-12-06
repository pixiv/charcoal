import {
  useReducer,
  useLayoutEffect,
  useMemo,
  useState,
  useDebugValue,
} from 'react'
import { unreachable } from '../../_lib'

export type Direction = 'Up' | 'Down'

export interface PopupPositionOptions {
  direction?: Direction
  forceDirection?: boolean
  getRect(): Rect
  deps?: unknown[]
  tooltipMargin?: number
  padding?:
  | number
  | [number, number]
  | [number, number, number]
  | [number, number, number, number]
}

export interface ElementSize {
  width: number
  height: number
}

function measure(ref: Element | null): ElementSize | undefined {
  return ref !== null ? ref.getBoundingClientRect() : undefined
}

export function useElementSize(
  ref: React.RefObject<Element>,
  deps: unknown[] = []
) {
  const [size, setSize] = useReducer(
    (
      state: ElementSize | undefined,
      next: ElementSize | undefined
    ): ElementSize | undefined => {
      // width, height, etc are not own properties but getters in the prototype
      // can't use shallowEqual or other iterative checks
      if (state === undefined || next === undefined) {
        return next
      }
      if (state.height === next.height && state.width === next.width) {
        return state
      }
      return next
    },
    undefined
  )
  const [watch, setWatch] = useState<Element | null>(null)
  useLayoutEffect(() => {
    if (watch === null) {
      return
    }

    const observer = new ResizeObserver(() => {
      // NOTE: the ResizeObserverCallback receives a rect,
      // but it's not measured in the same way as getBoundingClientRect,
      // which causes unstable layout
      const newSize = measure(watch)
      setSize(newSize)
    })

    // The ResizeObserver is supposed to call handleResize on observe
    observer.observe(watch)

    return () => {
      // this will correctly unobserve if either the observer
      // or the current changes, and even on unmount
      // no need for an observer.disconnect() 🎉
      observer.unobserve(watch)
      setSize(undefined)
    }
  }, [watch])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    if (ref.current !== watch) {
      setWatch(ref.current)
    }
  })

  useLayoutEffect(() => {
    if (deps.length > 0) {
      // Sync measuring
      setSize(measure(ref.current))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useDebugValue(size)

  return size
}

type Rect = Pick<
  DOMRect,
  'top' | 'bottom' | 'left' | 'right' | 'width' | 'height'
>

function useMemoClientRect(getRect: () => Rect) {
  const [rect, setRect] = useReducer(
    (state: Rect | undefined, next: Rect | undefined): Rect | undefined => {
      if (state === undefined || next === undefined) {
        return next
      }
      if (state.height === next.height && state.width === next.width) {
        return state
      }
      return next
    },
    undefined
  )

  useLayoutEffect(() => {
    setRect(getRect())
  })

  return rect
}


export function usePopupPosition(
  ref: React.RefObject<Element>,
  {
    getRect,
    direction: preferredDirection,
    forceDirection = false,
    deps,
    padding = 16,
    tooltipMargin = 16,
  }: PopupPositionOptions
) {
  const size = useElementSize(ref, deps)
  const clientRect = useMemoClientRect(getRect)
  const width = size && size.width
  const height = size && size.height

  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = useMemo<
    [number, number, number, number]
  >(() => {
    if (!Array.isArray(padding)) return [padding, padding, padding, padding]
    const [p1, p2, p3, p4] = padding
    if (p3 === undefined && p4 === undefined) return [p1, p2, p1, p2]
    else if (p3 !== undefined && p4 === undefined) return [p1, p2, p3, p2]
    else if (p3 !== undefined && p4 !== undefined) return [p1, p2, p3, p4]
    else unreachable()
  }, [padding])
  const windowHeight = window.innerHeight
  const windowWidth = document.body.clientWidth || window.innerWidth

  const position = useMemo<
    | (Record<'left' | 'height', number> & {
      top?: number
      bottom?: number
      maxHeight?: number
      direction?: Direction
    })
    | undefined
  >(() => {
    if (
      width === undefined ||
      height === undefined ||
      clientRect === undefined
    ) {
      return undefined
    }

    const direction = (() => {
      if (forceDirection && preferredDirection !== undefined) {
        return preferredDirection
      }
      switch (preferredDirection) {
        case 'Down': {
          return windowHeight -
            clientRect.top -
            clientRect.height -
            tooltipMargin -
            height -
            paddingBottom <
            0
            ? 'Up'
            : 'Down'
        }
        case 'Up':
        case undefined: {
          return clientRect.top - height - paddingTop - tooltipMargin < 0
            ? 'Down'
            : 'Up'
        }
        default: {
          return unreachable(preferredDirection)
        }
      }
    })()

    const minLeft = -clientRect.left + paddingLeft
    const maxLeft = windowWidth - width - paddingRight - clientRect.left
    const tooltipLeft = -((width - clientRect.width) / 2)

    const left = Math.floor(Math.min(maxLeft, Math.max(minLeft, tooltipLeft)))


    if (direction === 'Up') {
      return {
        left,
        top: -height - tooltipMargin,
        height,
        direction,
      }
    } else {
      return {
        left,
        bottom: -height - tooltipMargin,
        height,
        direction,
      }
    }
  }, [
    width,
    height,
    clientRect,
    paddingLeft,
    windowWidth,
    paddingRight,
    windowHeight,
    forceDirection,
    preferredDirection,
    tooltipMargin,
    paddingBottom,
    paddingTop,
  ])

  return position
}
