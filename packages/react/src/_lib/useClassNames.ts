import { useMemo } from 'react'

/**
 * Join two class names if propsClassName is defined.
 */
export function useClassNames(
  defaultClassName: string,
  propsClassName?: string
) {
  return useMemo(
    () => [defaultClassName, propsClassName].filter((v) => v).join(' '),
    [defaultClassName, propsClassName]
  )
}
