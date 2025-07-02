import React from 'react'

/**
 * Custom implementation of mergeRefs to replace @react-aria/utils
 * Merges multiple refs into a single ref callback
 */
export function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (ref == null) {
        return
      }

      if (typeof ref === 'function') {
        ref(value)
      } else if (typeof ref === 'object') {
        ;(ref as React.MutableRefObject<T | null>).current = value
      }
    })
  }
}
