import * as React from 'react'

export function useForwardedRef<T>(ref: React.ForwardedRef<T>) {
  const innerRef = React.useRef<T>(null)

  React.useEffect(() => {
    if (!ref) return
    if (typeof ref === 'function') {
      ref(innerRef.current)
      return () => ref(null)
    } else {
      // eslint-disable-next-line react-compiler/react-compiler
      ref.current = innerRef.current
      return () => {
        ref.current = null
      }
    }
  }, [ref])

  return innerRef
}
