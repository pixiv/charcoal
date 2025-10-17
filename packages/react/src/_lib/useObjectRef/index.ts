import {
  useCallback,
  useMemo,
  useRef,
  type MutableRefObject,
  type Ref,
} from 'react'
import { mergeRefs } from '../mergeRefs'

/**
 * Custom implementation of useObjectRef to replace @react-aria/utils
 * Converts any ref to a mutable ref object
 */
export function useObjectRef<T>(
  forwardedRef?: Ref<T>
): MutableRefObject<T | null> {
  const objRef = useRef<T | null>(null)
  const _ref = useMemo(() => mergeRefs(objRef, forwardedRef), [forwardedRef])

  const ref = useCallback((value: T | null) => _ref(value), [_ref])

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
