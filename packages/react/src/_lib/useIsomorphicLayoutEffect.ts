import { useEffect, useLayoutEffect } from 'react'

/**
 * SSR では useLayoutEffect が警告を出すため、サーバーでは useEffect にフォールバックする
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
