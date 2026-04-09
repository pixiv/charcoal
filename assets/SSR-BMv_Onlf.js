import{n as e}from"./chunk-BneVvdWh.js";import{c as t,nt as n,o as r}from"./iframe-BIP2GiWG.js";import{r as i}from"./react-C4gTv8ZR.js";import{t as a}from"./mdx-react-shim-ClMUdT0_.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`react/SSR Guide`}),`
`,(0,c.jsx)(t.h1,{id:`サーバーサイドレンダリング`,children:`サーバーサイドレンダリング`}),`
`,(0,c.jsxs)(t.p,{children:[`charcoal は `,(0,c.jsx)(t.a,{href:`https://nextjs.org/`,rel:`nofollow`,children:`Next.js`}),` などのサーバーサイドレンダリングをサポートしています。`]}),`
`,(0,c.jsx)(t.h2,{id:`ssrprovider`,children:`SSRProvider`}),`
`,(0,c.jsxs)(t.p,{children:[`React18 以下で SSR を利用する際は`,(0,c.jsx)(t.code,{children:`SSRProvider`}),`をアプリケーションに適用してください。`,(0,c.jsx)(t.a,{href:`https://react-spectrum.adobe.com/react-aria/SSRProvider.html`,rel:`nofollow`,children:`react-aria の SSRProvider について`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FC, ReactNode } from 'react'
import { SSRProvider } from '@charcoal-ui/react'

const YourAppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <SSRProvider>{children}</SSRProvider>
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`ダークテーマ`,children:`ダークテーマ`}),`
`,(0,c.jsxs)(t.p,{children:[`ダークテーマを利用する場合は、`,(0,c.jsx)(t.code,{children:`makeSetThemeScriptCode`}),`を用いてアプリケーションの起動前にテーマを変更するスクリプトを実行してください。これによりクライアントサイドのレンダリングによるテーマのチラつきを抑えることができます。Next.js の場合は `,(0,c.jsx)(t.code,{children:`_document.tsx`}),` に下記のように記述することができます（`,(0,c.jsx)(t.a,{href:`https://nextjs.org/docs/advanced-features/custom-document`,rel:`nofollow`,children:`Next.js の document.tsx について`}),`）。`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`export default class MyDocument extends Document {
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
`,(0,c.jsx)(t.h2,{id:`modal`,children:`Modal`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:`/docs/react-modal--docs`,children:`Modal`}),` を利用する際は `,(0,c.jsx)(t.code,{children:`portalContainer`}),`に `,(0,c.jsx)(t.code,{children:`document.body`}),`を適用してください。このとき、サーバサイドでは`,(0,c.jsx)(t.code,{children:`isOpen`}),`を `,(0,c.jsx)(t.code,{children:`true`}),` にしないでください。`,(0,c.jsx)(t.code,{children:`document`}),`を参照できずにエラーになります。`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FC, ReactNode } from 'react'
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
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),t()}))();export{s as default};