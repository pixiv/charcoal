import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-COhmrcFc.js";import{c as n,nt as r,o as i}from"./iframe-BqMtNU_q.js";import{t as a}from"./mdx-react-shim-CZ1RYzrX.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`react/SSR Guide`}),`
`,(0,c.jsx)(n.h1,{id:`サーバーサイドレンダリング`,children:`サーバーサイドレンダリング`}),`
`,(0,c.jsxs)(n.p,{children:[`charcoal は `,(0,c.jsx)(n.a,{href:`https://nextjs.org/`,rel:`nofollow`,children:`Next.js`}),` などのサーバーサイドレンダリングをサポートしています。`]}),`
`,(0,c.jsx)(n.h2,{id:`ssrprovider`,children:`SSRProvider`}),`
`,(0,c.jsxs)(n.p,{children:[`React18 以下で SSR を利用する際は`,(0,c.jsx)(n.code,{children:`SSRProvider`}),`をアプリケーションに適用してください。`,(0,c.jsx)(n.a,{href:`https://react-spectrum.adobe.com/react-aria/SSRProvider.html`,rel:`nofollow`,children:`react-aria の SSRProvider について`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FC, ReactNode } from 'react'
import { SSRProvider } from '@charcoal-ui/react'

const YourAppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <SSRProvider>{children}</SSRProvider>
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`ダークテーマ`,children:`ダークテーマ`}),`
`,(0,c.jsxs)(n.p,{children:[`ダークテーマを利用する場合は、`,(0,c.jsx)(n.code,{children:`makeSetThemeScriptCode`}),`を用いてアプリケーションの起動前にテーマを変更するスクリプトを実行してください。これによりクライアントサイドのレンダリングによるテーマのチラつきを抑えることができます。Next.js の場合は `,(0,c.jsx)(n.code,{children:`_document.tsx`}),` に下記のように記述することができます（`,(0,c.jsx)(n.a,{href:`https://nextjs.org/docs/advanced-features/custom-document`,rel:`nofollow`,children:`Next.js の document.tsx について`}),`）。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`export default class MyDocument extends Document {
  render() {
    const setThemeScript = makeSetThemeScriptCode()
    return (
      <Html>
        <Head>
          <Script id="set-theme-script" strategy="beforeInteractive">
            {setThemeScript}
          <\/Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`modal`,children:`Modal`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:`/docs/react-modal--docs`,children:`Modal`}),` を利用する際は `,(0,c.jsx)(n.code,{children:`portalContainer`}),`に `,(0,c.jsx)(n.code,{children:`document.body`}),`を適用してください。このとき、サーバサイドでは`,(0,c.jsx)(n.code,{children:`isOpen`}),`を `,(0,c.jsx)(n.code,{children:`true`}),` にしないでください。`,(0,c.jsx)(n.code,{children:`document`}),`を参照できずにエラーになります。`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FC, ReactNode } from 'react'
import { Modal } from '@charcoal-ui/react'

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
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};