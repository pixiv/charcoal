import * as React from 'react'
import { OverlayProvider } from './OverlayProvider'
import { SSRProvider } from './SSRProvider'

export type CharcoalProviderProps = {
  children: React.ReactNode
}

export function CharcoalProvider({ children }: CharcoalProviderProps): JSX.Element {
  return (
    <SSRProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </SSRProvider>
  )
}
