import {
  useReducer,
  useLayoutEffect,
  useMemo,
  useState,
  useDebugValue,
} from 'react'
import { unreachable } from '../../_lib'

export enum Direction {
  Up,
  Down,
}

export interface PopupPositionOptions {
  direction?: Direction
  forceDirection?: boolean
  relative: boolean
  isTooltip?: boolean
  stickyLeft?: boolean
  getRect(): Rect
  deps?: any[]
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
  deps: any[] = []
) {
  // _don't_ call measure synchronously here even if you somehow can
  // measurement has to be done outside the render phase, either
  // as the resize observer callback or as a layout effect

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

  useLayoutEffect(() => {
    setRect(getRect())
  })

  return rect
}

const EdgeMargin = 8

export function usePopupPosition(
  ref: React.RefObject<Element>,
  {
    getRect,
    direction: preferredDirection,
    relative,
    isTooltip,
    forceDirection,
    stickyLeft,
    deps,
  }: PopupPositionOptions
) {
  const size = useElementSize(ref, deps)
  const clientRect = useMemoClientRect(getRect)
  // TODO: use a hook to read these in the layout phase, not in the render phase
  // although window is not something we can change in the render phase,
  // so this works ok for now
  const {
    scrollX: offsetX,
    scrollY: offsetY,
    innerHeight: windowHeight,
    innerWidth: windowWidth,
  } = window
  const width = size && size.width
  const height = size && size.height
  const nonRelativeWidth = relative
    ? undefined
    : document.body.clientWidth || window.innerWidth

  const position = useMemo<
    | (Record<'left' | 'tipLeft' | 'height', number> & {
      top?: number
      bottom?: number
      direction: Direction
      maxHeight?: number
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

    const direction =
      forceDirection === true && preferredDirection !== undefined
        ? preferredDirection
        : preferredDirection === Direction.Down
          ? clientRect.bottom + height > windowHeight - EdgeMargin
            ? Direction.Up
            : Direction.Down
          : preferredDirection === undefined ||
            preferredDirection === Direction.Up
            ? clientRect.top - height < EdgeMargin
              ? Direction.Down
              : Direction.Up
            : unreachable(preferredDirection)

    if (relative) {
      const candidateLeft = Math.floor(clientRect.width / 2 - width / 2)
      const candidateTipLeft = Math.floor(width / 2)
      // ポップアップが画面右側にはみ出る場合ははみ出ないように右側に余白を入れるよう補正
      const rawLeft = stickyLeft
        ? Math.min(windowWidth - 16 - width - clientRect.left, 0)
        : Math.min(windowWidth - 16 - width - clientRect.left, candidateLeft)
      // ポップアップが画面左側にはみ出る場合ははみ出ないように左側に余白を入れるよう補正
      const left =
        clientRect.left + rawLeft >= 0 ? rawLeft : 16 - clientRect.left
      const tipLeft = candidateTipLeft - (left - candidateLeft)
      // 下にポップアップが出るときに高さ制限をする
      const maxHeight = windowHeight - clientRect.top - clientRect.height - 16

      if (direction === Direction.Up) {
        return {
          left,
          bottom: clientRect.height,
          tipLeft,
          direction,
          height,
        }
      } else {
        return {
          left,
          top: clientRect.height,
          tipLeft,
          direction,
          height,
          maxHeight,
        }
      }
    } else if (nonRelativeWidth !== undefined) {
      const left = Math.floor(
        Math.min(
          offsetX + nonRelativeWidth - width - 8,
          Math.max(
            offsetX + 8,
            offsetX + clientRect.left + clientRect.width / 2 - width / 2
          )
        )
      )
      const tipLeft = Math.min(
        width - 20,
        Math.max(20, offsetX + clientRect.left - left + clientRect.width / 2)
      )

      if (direction === Direction.Up) {
        return {
          left,
          top: offsetY + clientRect.top - height - ((isTooltip ?? false) ? 0 : 3),
          tipLeft,
          direction,
          height,
        }
      } else {
        return {
          left,
          top: offsetY + clientRect.top + clientRect.height,
          tipLeft,
          direction,
          height,
        }
      }
    }
  }, [
    width,
    height,
    clientRect,
    forceDirection,
    preferredDirection,
    windowHeight,
    relative,
    nonRelativeWidth,
    stickyLeft,
    windowWidth,
    offsetX,
    offsetY,
    isTooltip,
  ])

  return position
}
