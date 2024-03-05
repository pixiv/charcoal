import Link from 'next/link'
import { ContentRoot } from '../../../components/ContentRoot'

import { InlineCode } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'

export default function InstallPage() {
  return (
    <ContentRoot>
      <h1>@charcoal-ui/styled クイックスタート</h1>
      <Link href="https://www.npmjs.com/package/@charcoal-ui/styled">
        <img
          alt="npm-badge"
          src="https://img.shields.io/npm/v/@charcoal-ui/styled?label=%40charcoal-ui%2Fstyled&style=flat-square&logo=npm"
        />
      </Link>
      <h2>インストール</h2>
      <h3>npm</h3>
      <SSRHighlight code="npm install @charcoal-ui/styled" lang="shell" />
      <h3>yarn</h3>
      <SSRHighlight code="yarn add @charcoal-ui/styled" lang="shell" />
      <h2>使い方</h2>
      <p>
        <InlineCode>ThemeProvider</InlineCode>
        <InlineCode>TokenInjector</InlineCode>を使用してください。
      </p>
      <SSRHighlight
        code={`
import { FC, ReactNode } from 'react'
import { light, dark } from '@charcoal-ui/theme'
import { TokenInjector, useTheme, useThemeSetter, themeSelector, prefersColorScheme } from '@charcoal-ui/styled'

const ExampleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme] = useTheme()
  useThemeSetter()
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <TokenInjector
        theme={{
          ':root': light,
          [themeSelector('light')]: light,
          [themeSelector('dark')]: dark,
          [prefersColorScheme('dark')]: dark,
        }}
        background="background1"
      />
      {children}
    </ThemeProvider>
  )
}`.trimStart()}
        lang="typescript"
      />
    </ContentRoot>
  )
}
