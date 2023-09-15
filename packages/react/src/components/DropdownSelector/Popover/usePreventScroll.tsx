import { useEffect } from 'react'

export function usePreventScroll(element: HTMLElement | null, isOpen: boolean) {
  useEffect(() => {
    if (isOpen && element) {
      const defaultPaddingRight = element.style.paddingRight
      const defaultOverflow = element.style.overflow
      element.style.paddingRight = document.documentElement.style.paddingRight
      element.style.overflow = 'hidden'
      return () => {
        element.style.paddingRight = defaultPaddingRight
        element.style.overflow = defaultOverflow
      }
    }
  }, [element, isOpen])
}
