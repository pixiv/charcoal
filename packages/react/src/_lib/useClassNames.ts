import { useMemo } from 'react'

/**
 * Join some class names if propsClassName is defined.
 */
export function useClassNames(...classNames: (string | undefined)[]) {
  return useMemo(() => classNames.filter((v) => v).join(' '), [classNames])
}
