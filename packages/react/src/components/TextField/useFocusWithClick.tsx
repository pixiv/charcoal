import { useEffect } from 'react'
import * as React from 'react'

export function useFocusWithClick(
  containerRef: React.RefObject<HTMLDivElement | null>,
  inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>,
) {
  useEffect(() => {
    const el = containerRef.current
    if (el) {
      const handleDown = (e: MouseEvent) => {
        if (e.target !== inputRef.current) {
          inputRef.current?.focus()
        }
      }
      el.addEventListener('click', handleDown)
      return () => {
        el.removeEventListener('click', handleDown)
      }
    }
  })
}
