import { CharcoalProvider } from '@charcoal-ui/react'
import { prefersColorScheme, themeSelector } from '@charcoal-ui/styled'
import { dark, light } from '@charcoal-ui/theme'
import { FC, ReactNode } from 'react'

export const CharcoalProviderExample: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <CharcoalProvider>{children}</CharcoalProvider>
}
