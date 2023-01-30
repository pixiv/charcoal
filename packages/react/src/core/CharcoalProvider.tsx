import React from 'react'
import { ThemeProvider } from 'styled-components'
import ComponentAbstraction, { Components } from './ComponentAbstraction'
import { TokenInjector } from '@charcoal-ui/styled'
import { ThemeMap } from '@charcoal-ui/styled/src/TokenInjector'
import { CharcoalTheme } from '@charcoal-ui/theme'

import { OverlayProvider } from '@react-aria/overlays'
import { SSRProvider } from '@react-aria/ssr'

interface Props {
  themeMap: ThemeMap<CharcoalTheme>
  defaultTheme?: CharcoalTheme
  injectTokens?: boolean
  components?: Partial<Components>
}

export function CharcoalProvider({
  themeMap,
  defaultTheme = themeMap[':root'],
  components = {},
  injectTokens = true,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {injectTokens && <TokenInjector theme={themeMap} />}
      <SSRProvider>
        <ComponentAbstraction components={components}>
          <OverlayProvider>{children}</OverlayProvider>
        </ComponentAbstraction>
      </SSRProvider>
    </ThemeProvider>
  )
}
