import {
  useCallback,
  useDebugValue,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import ReactDOM from 'react-dom'
import { useTheme } from 'styled-components'
import { maxWidth } from '@charcoal-ui/utils'

declare const __TEST__: object | undefined // actually object|false, but using undefined allows ! assertion

declare module 'react-dom' {
  export function flushSync<R>(callback: () => R): R
}

/**
 * 現在の画面幅がモバイル幅かどうかを返す
 */
export function useMediaScreen1() {
  return useMedia(maxWidth(useTheme().breakpoint.screen1))
}

/**
 * Returns a dynamically-updating media query result.
 *
 * When the media query's matching state changes, this hook's result
 * will update with sync priority.
 *
 * @param query A full media query (the string written between `@media` and the `{` in CSS)
 * @returns true if the query matches, false if it doesn't
 */
export function useMedia(query: string) {
  const matcher = useMemo(
    () =>
      __TEST__
        ? {
            matches: false,
            addListener: () => {
              // do nothing
            },
            removeListener: () => {
              // do nothing
            },
          }
        : matchMedia(query),
    [query]
  )
  const [matches, setMatches] = useState<boolean>(matcher.matches)

  // can only happen if/when the query changes
  if (matcher.matches !== matches) {
    setMatches(matcher.matches)
  }

  const callback = (e: MediaQueryListEvent) => {
    // We're not on a React event listener, so React doesn't know the priority of the setState call
    // Media query updates _are_ very high priority to avoid FOUC
    // so we need to emit a sync priority update
    try {
      // However, flushSync may throw if the matcher is triggered by a
      // forced relayout that happens during a React lifecycle handler.
      // Try to be resilient and retry without flushSync if flushSync throws.
      ReactDOM.flushSync(() => {
        setMatches(e.matches)
      })
    } catch {
      setMatches(e.matches)
    }
  }

  useLayoutEffect(() => {
    matcher.addListener(callback)
    // sync update
    setMatches(matcher.matches)
    return () => {
      matcher.removeListener(callback)
    }
  }, [matcher])

  useDebugValue(`${query}: ${matches.toString()}`)

  return matches
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

/**
 * Debounce version of setState with `requestAnimationFrame`
 *
 * @param defaultValue Default value for `useState`
 */
export function useDebounceAnimationState<T>(defaultValue: T) {
  const [state, setState] = useState(defaultValue)
  const timer = useRef<ReturnType<typeof requestAnimationFrame>>()
  // typescript bug? (any when omitting type annotation)
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const setDebounceState = useCallback((value: T, force: boolean = false) => {
    if (force) {
      setState(value)
      return
    }
    if (timer.current !== undefined) {
      return
    }
    timer.current = requestAnimationFrame(() => {
      setState(value)
      if (timer.current !== undefined) {
        timer.current = undefined
      }
    })
  }, [])
  return [state, setDebounceState] as [typeof state, typeof setDebounceState]
}
