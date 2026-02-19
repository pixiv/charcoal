import{j as e,M as o}from"./iframe-NqksIJAp.js";import{useMDXComponents as c}from"./index-BrAz869J.js";import"./preload-helper-C1FmrZbK.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"react/SSR Guide"}),`
`,e.jsx(n.h1,{id:"サーバーサイドレンダリング",children:"サーバーサイドレンダリング"}),`
`,e.jsxs(n.p,{children:["charcoal は ",e.jsx(n.a,{href:"https://nextjs.org/",rel:"nofollow",children:"Next.js"})," などのサーバーサイドレンダリングをサポートしています。"]}),`
`,e.jsx(n.h2,{id:"ssrprovider",children:"SSRProvider"}),`
`,e.jsxs(n.p,{children:["React18 以下で SSR を利用する際は",e.jsx(n.code,{children:"SSRProvider"}),"をアプリケーションに適用してください。",e.jsx(n.a,{href:"https://react-spectrum.adobe.com/react-aria/SSRProvider.html",rel:"nofollow",children:"react-aria の SSRProvider について"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { FC, ReactNode } from 'react'
import { SSRProvider } from '@charcoal-ui/react'

const YourAppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <SSRProvider>{children}</SSRProvider>
}
`})}),`
`,e.jsx(n.h2,{id:"ダークテーマ",children:"ダークテーマ"}),`
`,e.jsxs(n.p,{children:["ダークテーマを利用する場合は、",e.jsx(n.code,{children:"makeSetThemeScriptCode"}),"を用いてアプリケーションの起動前にテーマを変更するスクリプトを実行してください。これによりクライアントサイドのレンダリングによるテーマのチラつきを抑えることができます。Next.js の場合は ",e.jsx(n.code,{children:"_document.tsx"})," に下記のように記述することができます（",e.jsx(n.a,{href:"https://nextjs.org/docs/advanced-features/custom-document",rel:"nofollow",children:"Next.js の document.tsx について"}),"）。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export default class MyDocument extends Document {
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
`,e.jsx(n.h2,{id:"modal",children:"Modal"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/docs/react-modal--docs",children:"Modal"})," を利用する際は ",e.jsx(n.code,{children:"portalContainer"}),"に ",e.jsx(n.code,{children:"document.body"}),"を適用してください。このとき、サーバサイドでは",e.jsx(n.code,{children:"isOpen"}),"を ",e.jsx(n.code,{children:"true"})," にしないでください。",e.jsx(n.code,{children:"document"}),"を参照できずにエラーになります。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { FC, ReactNode } from 'react'
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
`})})]})}function a(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{a as default};
