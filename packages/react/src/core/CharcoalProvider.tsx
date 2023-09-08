import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import ComponentAbstraction, { Components } from './ComponentAbstraction'
import { TokenInjector } from '@charcoal-ui/styled'
import { ThemeMap } from '@charcoal-ui/styled/src/TokenInjector'
import { CharcoalTheme, ThemeColor } from '@charcoal-ui/theme'

import { OverlayProvider } from './OverlayProvider'
import { SSRProvider } from './SSRProvider'

export type CharcoalProviderProps = React.PropsWithChildren<{
  themeMap: ThemeMap<CharcoalTheme>
  defaultTheme?: CharcoalTheme
  injectTokens?: boolean
  components?: Partial<Components>
  background?: keyof ThemeColor
}>

export function CharcoalProvider({
  themeMap,
  defaultTheme = themeMap[':root'],
  components = {},
  injectTokens = true,
  children,
  background,
}: CharcoalProviderProps) {
  return (
    <SSRProvider>
      <ThemeProvider theme={defaultTheme}>
        {injectTokens && (
          <TokenInjector theme={themeMap} background={background} />
        )}
        <ComponentAbstraction components={components}>
          <OverlayProvider>{children}</OverlayProvider>
        </ComponentAbstraction>
      </ThemeProvider>
    </SSRProvider>
  )
}
