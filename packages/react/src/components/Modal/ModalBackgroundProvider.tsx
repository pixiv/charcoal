import * as React from 'react'
import { ModalBackgroundContext } from './ModalBackgroundContext'

/**
 * ModalBackgroundのElementを利用するためのプロバイダー
 */
export function ModalBackgroundProvider(props: { children: React.ReactNode }) {
  const [element, setElement] = React.useState<HTMLElement | null>(null)
  return (
    <ModalBackgroundContext.Provider
      value={{
        element,
        setElement,
      }}
    >
      {props.children}
    </ModalBackgroundContext.Provider>
  )
}
