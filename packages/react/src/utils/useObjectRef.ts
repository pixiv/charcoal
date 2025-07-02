import { useCallback, useRef } from 'react'

/**
 * Custom implementation of useObjectRef to replace @react-aria/utils
 * Converts any ref to a mutable ref object
 */
export function useObjectRef<T>(
  forwardedRef?: React.Ref<T>
): React.MutableRefObject<T | null> {
  const objRef = useRef<T | null>(null)

  const ref = useCallback(
    (value: T | null) => {
      objRef.current = value

      if (typeof forwardedRef === 'function') {
        forwardedRef(value)
      } else if (forwardedRef && typeof forwardedRef === 'object') {
        ;(forwardedRef as React.MutableRefObject<T | null>).current = value
      }
    },
    [forwardedRef]
  )

  // Return an object that can be used as both a callback ref and a mutable ref
  return {
    get current() {
      return objRef.current
    },
    set current(value: T | null) {
      ref(value)
    },
  }
}
