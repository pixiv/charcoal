import { ContentRoot } from '../../../components/ContentRoot'
import styled from 'styled-components'

import { theme } from '../../../utils/theme'
import Link from 'next/link'
import { InlineCode } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'

export default function InstallPage() {
  return (
    <ContentRoot>
      <h1>サーバーサイドレンダリング</h1>
      <p>
        charcoal は<StyledLink href="https://nextjs.org/"> Next.js </StyledLink>
        などのサーバーサイドレンダリングをサポートしています。
      </p>
      <h2>SSRProvider</h2>
      <p>
        React 18 以下で SSRを利用する際は<InlineCode>SSRProvider</InlineCode>
        をアプリケーションに適用してください。
      </p>
      <SSRHighlight
        code={`
import { FC, ReactNode } from 'react'
import { SSRProvider } from '@charcoal-ui/react'

const YourAppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SSRProvider>
      {children}
    </SSRProvider>
  )
}`.trimStart()}
        lang="typescript"
      />
      <h2>ダークテーマ</h2>
      <p>
        ダークテーマを利用する場合は、
        <InlineCode>makeSetThemeScriptCode</InlineCode>
        を用いてアプリケーションの起動前にテーマを変更するスクリプトを実行してください。
        これによりクライアントサイドのレンダリングによるテーマのチラつきを抑えることができます。
        Next.js の場合は _document.tsx に下記のように記述することができます（
        <StyledLink href="https://nextjs.org/docs/advanced-features/custom-document">
          Next.js の document.tsx について
        </StyledLink>
        ）。
      </p>
      <SSRHighlight
        code={`
export default class MyDocument extends Document {
  render() {
    const setThemeScript = makeSetThemeScriptCode()
    return (
      <Html>
        <Head>
          <Script id="set-theme-script" strategy="beforeInteractive">
            {setThemeScript}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
`.trimStart()}
        lang="typescript"
      />
      <h2>Modal</h2>
      <p>
        <StyledLink href="/@charcoal-ui/react/modal">Modal</StyledLink>{' '}
        を利用する際は
        <InlineCode>portalContainer</InlineCode>に
        <InlineCode>document.body</InlineCode>を適用してください。
        このとき、サーバサイドでは<InlineCode>isOpen</InlineCode>を
        <InlineCode>true</InlineCode> にしないでください。
        <InlineCode>document</InlineCode>を参照できずにエラーになります。
      </p>
      <SSRHighlight
        code={`
import { FC, ReactNode } from 'react'
import { SSRProvider } from '@charcoal-ui/react'

const Example: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Modal
      title="modal"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      portalContainer={document.body}
    >
      {children}
    </Modal>
  )
}`.trimStart()}
        lang="typescript"
      />
    </ContentRoot>
  )
}
export const StyledLink = styled(Link)`
  ${theme((o) => o.font.link1)}
`
