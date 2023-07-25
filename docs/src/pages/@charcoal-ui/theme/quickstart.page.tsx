import Link from 'next/link'
import { ContentRoot } from '../../../components/ContentRoot'

import { InlineCode } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'

export default function InstallPage() {
  return (
    <ContentRoot>
      <h1>@charcoal-ui/theme クイックスタート</h1>
      <Link href="https://www.npmjs.com/package/@charcoal-ui/theme">
        <img
          alt="npm-badge"
          src="https://img.shields.io/npm/v/@charcoal-ui/theme?label=%40charcoal-ui%2Ftheme&style=flat-square&logo=npm"
        />
      </Link>
      <h2>インストール</h2>
      <h3>npm</h3>
      <SSRHighlight
        code="npm install --save-dev @charcoal-ui/theme"
        lang="shell"
      />
      <h3>yarn</h3>
      <SSRHighlight code="yarn add -D @charcoal-ui/theme" lang="shell" />

      <hr />

      <h2>概要</h2>
      <p>
        <InlineCode>@charcoal-ui/theme</InlineCode>
        は、全体で使われるテーマ型と、デフォルトのライト・ダークテーマを提供します。
      </p>

      <h2>使い方</h2>
      <p>
        <InlineCode>styled-components</InlineCode>と合わせて使用できます。
      </p>
      <p>
        デフォルトのテーマとして提供している<InlineCode>light</InlineCode>、
        <InlineCode>dark</InlineCode>をそのまま使うこともできます。
      </p>
      <SSRHighlight code={sampleCode} lang="typescript" />
    </ContentRoot>
  )
}

const sampleCode = `
  import { light, dark } from '@charcoal-ui/theme'
  import { ThemeProvider } from 'styled-components'
  import { FC, ReactNode } from 'react'

  const LightExample: FC<{ children: ReactNode }> = ({ children }) => (
    <ThemeProvider theme={light}>
      {children}
    </ThemeProvider>
  )

  const DarkExample: FC<{ children: ReactNode }> = ({ children }) => (
    <ThemeProvider theme={dark}>
      {children}
    </ThemeProvider>
  )
`
