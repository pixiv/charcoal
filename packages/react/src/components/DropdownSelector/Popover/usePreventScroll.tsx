import { useEffect } from 'react'

export function usePreventScroll(
  element: HTMLElement | null,
  isOpen: boolean,
  useClip = false
): void {
  useEffect(() => {
    if (isOpen && element) {
      const defaultPaddingRight = element.style.paddingRight
      const defaultOverflow = element.style.overflow
      element.style.paddingRight = `${
        window.innerWidth - element.clientWidth
      }px`
      element.style.overflow = useClip ? 'clip' : 'hidden'
      return () => {
        element.style.paddingRight = defaultPaddingRight
        element.style.overflow = defaultOverflow
      }
    }
  }, [element, isOpen, useClip])
}
