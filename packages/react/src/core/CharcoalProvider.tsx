import React from 'react'
import { ThemeProvider } from 'styled-components'
import ComponentAbstraction, { Components } from './ComponentAbstraction'
import { TokenInjector } from '@charcoal-ui/styled'
import { ThemeMap } from '@charcoal-ui/styled/src/TokenInjector'
import { CharcoalTheme } from '@charcoal-ui/theme'

import { OverlayProvider } from './OverlayProvider'
import { SSRProvider } from './SSRProvider'

export type CharcoalProviderProps = React.PropsWithChildren<{
  themeMap: ThemeMap<CharcoalTheme>
  defaultTheme?: CharcoalTheme
  injectTokens?: boolean
  components?: Partial<Components>
}>

export function CharcoalProvider({
  themeMap,
  defaultTheme = themeMap[':root'],
  components = {},
  injectTokens = true,
  children,
}: CharcoalProviderProps) {
  return (
    <SSRProvider>
      <ThemeProvider theme={defaultTheme}>
        {injectTokens && <TokenInjector theme={themeMap} />}
        <ComponentAbstraction components={components}>
          <OverlayProvider>{children}</OverlayProvider>
        </ComponentAbstraction>
      </ThemeProvider>
    </SSRProvider>
  )
}
