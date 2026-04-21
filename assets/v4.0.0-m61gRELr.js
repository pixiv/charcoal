import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Cfys1ArR.js";import{c as n,nt as r,o as i}from"./iframe-CKoxdw4A.js";import{t as a}from"./mdx-react-shim-BQ2amRuD.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`v4.0.0`}),`
`,(0,c.jsx)(n.h1,{id:`charcoal-uireactv400`,children:`@charcoal-ui/react@v4.0.0`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`v4.0.0`}),`では多くの破壊的な変更があります。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styled-components`}),`への依存を無くし、css ファイルを読み込む方式に変更しました。`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { CharcoalProvider, Button } from '@charcoal-ui/react'

import '@charcoal-ui/react/dist/index.css'

function App() {
  return (
    <CharcoalProvider>
      <Button>Charcoal</Button>
    </CharcoalProvider>
  )
}
`})}),`
`,(0,c.jsx)(n.p,{children:`※ styled 廃止した影響で classname の優先度が変わるケースがあります。`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { Button } from '@charcoal-ui/react'
import styled from 'styled-components'

// 今ままでと違う見た目になる可能性がある
const NewButton = styled(Button)\`
  color: red;
\`
`})}),`
`,(0,c.jsx)(n.p,{children:`この場合 @layer 版の利用をおすすめしますが、サポート対象が iOS 15.4+ になります。`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-diff`,children:`- import '@charcoal-ui/react/dist/index.css'
+ import '@charcoal-ui/react/dist/layered.css'
`})}),`
`,(0,c.jsx)(n.h2,{id:`componentabstraction`,children:`ComponentAbstraction`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ComponentAbstraction`}),`が削除されました。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useComponentAbstraction`}),`が削除されました。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type LinkProps`}),`が削除されました。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`charcoalprovider`,children:`CharcoalProvider`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`テーマに関する属性が削除されました。`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`themeMap`}),`, `,(0,c.jsx)(n.code,{children:`defaultTheme`}),`, `,(0,c.jsx)(n.code,{children:`injectTokens`}),`, `,(0,c.jsx)(n.code,{children:`components`}),`, `,(0,c.jsx)(n.code,{children:`background`})]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Before`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`// ...

<CharcoalProvider themeMap={themeMap}>
  <YourApp />
</CharcoalProvider>
`})}),`
`,(0,c.jsx)(n.p,{children:`After`}),`
`,(0,c.jsx)(n.p,{children:`styled を継続して利用する場合`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`// ...
import { TokenInjector } from '@charcoal-ui/styled'
import { ThemeProvider } from 'styled-components'
<CharcoalProvider>
  <TokenInjector theme={themeMap} />
  <ThemeProvider theme={themeMap[':root']}>
    <YourApp />
  </ThemeProvider>
</CharcoalProvider>
`})}),`
`,(0,c.jsx)(n.p,{children:`tailwind単体で利用可能にするためにデフォルトでcss変数v1を提供するようになりました。
TokenInjectorと併用する場合falseに指定してください。`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-diff`,children:`module.exports = {
  ...
  presets: [
    createTailwindConfig({
      version: 'v3',
      theme: {
        ':root': light,
        '[data-dark="true"]': dark,
      },
+     cssVariablesV1: false,
      unstableTokenV2: true,
    }),
  ],
  ...
}

`})}),`
`,(0,c.jsx)(n.h2,{id:`button`,children:`Button`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ComponentAbstraction`}),`と`,(0,c.jsx)(n.code,{children:`to`}),`を用いたカスタム要素の設定を、`,(0,c.jsx)(n.code,{children:`component`}),`に`,(0,c.jsx)(n.code,{children:`React.ElementType`}),`を指定することによって行えるように変更しました。`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Before`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`<ComponentAbstraction components={{ Link: RouterLink }}>
  <Button to="...">Link</Button>
</ComponentAbstraction>
`})}),`
`,(0,c.jsx)(n.p,{children:`After`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`<Button component="a" href="...">Link</Button>
<Button component={RouterLink} to="...">Link</Button>
<Button component={NextLink} href="...">Link</Button>
`})}),`
`,(0,c.jsx)(n.h3,{id:`buttonのgeneric-propsについて`,children:`ButtonのGeneric propsについて`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:`https://github.com/styled-components/styled-components/issues/1803`,rel:`nofollow`,children:`Styled Componentの制限`}),`により`,(0,c.jsx)(n.code,{children:`styled(Button)`}),`で拡張する場合propsがうまく推論されない場合があります。
Charcoal v4.1.0から過剰なpropsを検出する処理を追加したが、`,(0,c.jsx)(n.code,{children:`component`}),` propと合わせて使う時の型を配慮する必要があります。`]}),`
`,(0,c.jsx)(n.p,{children:`サンプル`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`// allow component
const StyledButton = styled(Button)\`\` as typeof Button
<StyledButton component={Link} to="#" />

// preserve component type
const StyledButtonA = styled(Button<'a'>)\`\`
<StyledButtonA component="a" href="#" />
`})}),`
`,(0,c.jsxs)(n.p,{children:[`その他のケースは `,(0,c.jsx)(n.a,{href:`https://github.com/pixiv/charcoal/blob/main/packages/react/src/components/Button/styledButtonTypeTest.d.tsx`,rel:`nofollow`,children:`styledButtonTypeTest.d.tsx`}),` を参考してください。`]}),`
`,(0,c.jsx)(n.h2,{id:`checkbox`,children:`Checkbox`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Checkbox`}),`の`,(0,c.jsx)(n.code,{children:`input`}),`要素を`,(0,c.jsx)(n.code,{children:`children`}),`がない場合に label で囲わないようにしました。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`React.HTMLProps<HTMLInputElement>`}),`を継承するように変更しました。`]}),`
`,(0,c.jsx)(n.li,{children:`アイコンを CSS を用いて表示するように変更しました。`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`clickable`,children:`Clickable`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Button`}),`と同様に`,(0,c.jsx)(n.code,{children:`to`}),`による指定を削除し、`,(0,c.jsx)(n.code,{children:`component`}),`によってカスタムできるように変更しました。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type ClickableElement`}),`が削除されました。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`dropdownselector`,children:`DropdownSelector`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aria-labelledby`}),`,`,(0,c.jsx)(n.code,{children:`aria-describedby`}),`を適用するように変更しました。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`iconbutton`,children:`IconButton`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Button`}),`と同様に`,(0,c.jsx)(n.code,{children:`to`}),`による指定を削除し、`,(0,c.jsx)(n.code,{children:`component`}),`によってカスタムできるように変更しました。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`multiselect`,children:`MultiSelect`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`overlay`}),`の代替として`,(0,c.jsx)(n.code,{children:`Checkbox`}),`の`,(0,c.jsx)(n.code,{children:`rounded`}),`が追加されました。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`radiogroup`,children:`RadioGroup`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aria-labelledby`}),`, `,(0,c.jsx)(n.code,{children:`aria-orientation`}),`をプロパティに追加しました。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label`}),`をオプショナルに変更しました。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`switch`,children:`Switch`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Checkbox`}),`の`,(0,c.jsx)(n.code,{children:`input`}),`要素を常に`,(0,c.jsx)(n.code,{children:`label`}),`で囲わないようにしました。`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`React.HTMLProps<HTMLInputElement>`}),`を継承するように変更しました。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tagitem`,children:`TagItem`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Button`}),`と同様に`,(0,c.jsx)(n.code,{children:`to`}),`による指定を削除し、`,(0,c.jsx)(n.code,{children:`component`}),`によってカスタムできるように変更しました。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`textarea`,children:`TextArea`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`textarea`}),`要素の`,(0,c.jsx)(n.code,{children:`props`}),`を継承するように変更しました。`]}),`
`,(0,c.jsxs)(n.li,{children:[`文字数の計算ロジックを`,(0,c.jsx)(n.code,{children:`getCount`}),`プロパティで上書きできるように変更しました。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`textfield`,children:`TextField`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`input`}),`要素の`,(0,c.jsx)(n.code,{children:`props`}),`を継承するように変更しました。`]}),`
`,(0,c.jsxs)(n.li,{children:[`文字数の計算ロジックを`,(0,c.jsx)(n.code,{children:`getCount`}),`プロパティで上書きできるように変更しました。`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`その他`,children:`その他`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`PixivIcon.extend`}),` に渡す内容が sanitize されなくなります。必要な場合事前に sanitize するか、dompurify などを挟んでください `,(0,c.jsx)(n.a,{href:`https://github.com/pixiv/charcoal/pull/643`,rel:`nofollow`,children:`fix!(@charcoal-ui/icons): remove dompurify from v4. #643`})]}),`
`]}),`
`,(0,c.jsx)(n.h1,{id:`design-token-20-の実験的サポート`,children:`Design Token 2.0 の実験的サポート`}),`
`,(0,c.jsx)(n.h2,{id:`styled-components`,children:`styled-components`}),`
`,(0,c.jsxs)(n.p,{children:[`実装例: `,(0,c.jsx)(n.a,{href:`https://github.com/pixiv/charcoal/pull/655`,rel:`nofollow`,children:`feat: token v2 demo styled #655`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`import React, { useState } from 'react'
import styled from 'styled-components'
import tokens from '@charcoal-ui/theme/unstable-tokens/css-variables.json'

const User = styled.a\`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: calc(\${tokens.radius.oval} * 1px);
  cursor: pointer;
  color: \${tokens.color.icon.default};
  background-color: \${tokens.color.container.secondary.default};
  &:hover {
    color: \${tokens.color.icon.hover};
    background-color: \${tokens.color.container.secondary.hover};
  }
  &:active {
    color: \${tokens.color.icon.press};
    background-color: \${tokens.color.container.secondary.press};
  }
\`
`})}),`
`,(0,c.jsx)(n.h2,{id:`tailwindcss`,children:`tailwindcss`}),`
`,(0,c.jsxs)(n.p,{children:[`実装例: `,(0,c.jsx)(n.a,{href:`https://github.com/pixiv/charcoal/pull/650`,rel:`nofollow`,children:`feat: allow design token v2 in tailwind config #650`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-diff`,children:`const { light, dark } = require('@charcoal-ui/theme')
const {
  createTailwindConfig,
} = require('@charcoal-ui/tailwind-config')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: false,
  content: ['**/*.tsx'],
  presets: [
    createTailwindConfig({
      version: 'v3',
      theme: {
        ':root': light,
        '[data-dark="true"]': dark,
      },
+     unstableTokenV2: true,
    }),
  ],
  corePlugins: {
`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<a
  className="rounded-oval text-icon hover:text-icon-hover active:text-icon-press bg-container-secondary hover:bg-container-hover active:bg-container-press grid h-[40px] w-[40px] cursor-pointer place-items-center"
  aria-label="UserIcon"
>
  <Icon name="24/FaceEdit" />
</a>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};