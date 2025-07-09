import { type Ref, type RefCallback, type MutableRefObject } from 'react'

/**
 * Custom implementation of mergeRefs to replace @react-aria/utils
 * Merges multiple refs into a single ref callback
 */
export function mergeRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> {
  return (value: T | null) => {
    for (const ref of refs) {
      if (ref == null) {
        continue
      }

      if (typeof ref === 'function') {
        ref(value)
      } else if (typeof ref === 'object') {
        ;(ref as MutableRefObject<T | null>).current = value
      }
    }
  }
}
