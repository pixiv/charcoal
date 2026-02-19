import{j as n,M as s}from"./iframe-Czr9xm4W.js";import{useMDXComponents as r}from"./index-DEIIjSGd.js";import"./preload-helper-C1FmrZbK.js";function c(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"v4.0.0"}),`
`,n.jsx(e.h1,{id:"charcoal-uireactv400",children:"@charcoal-ui/react@v4.0.0"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"v4.0.0"}),"では多くの破壊的な変更があります。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styled-components"}),"への依存を無くし、css ファイルを読み込む方式に変更しました。"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { CharcoalProvider, Button } from '@charcoal-ui/react'

import '@charcoal-ui/react/dist/index.css'

function App() {
  return (
    <CharcoalProvider>
      <Button>Charcoal</Button>
    </CharcoalProvider>
  )
}
`})}),`
`,n.jsx(e.p,{children:"※ styled 廃止した影響で classname の優先度が変わるケースがあります。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@charcoal-ui/react'
import styled from 'styled-components'

// 今ままでと違う見た目になる可能性がある
const NewButton = styled(Button)\`
  color: red;
\`
`})}),`
`,n.jsx(e.p,{children:"この場合 @layer 版の利用をおすすめしますが、サポート対象が iOS 15.4+ になります。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`- import '@charcoal-ui/react/dist/index.css'
+ import '@charcoal-ui/react/dist/layered.css'
`})}),`
`,n.jsx(e.h2,{id:"componentabstraction",children:"ComponentAbstraction"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ComponentAbstraction"}),"が削除されました。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useComponentAbstraction"}),"が削除されました。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type LinkProps"}),"が削除されました。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"charcoalprovider",children:"CharcoalProvider"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["テーマに関する属性が削除されました。",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"themeMap"}),", ",n.jsx(e.code,{children:"defaultTheme"}),", ",n.jsx(e.code,{children:"injectTokens"}),", ",n.jsx(e.code,{children:"components"}),", ",n.jsx(e.code,{children:"background"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"Before"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ...

<CharcoalProvider themeMap={themeMap}>
  <YourApp />
</CharcoalProvider>
`})}),`
`,n.jsx(e.p,{children:"After"}),`
`,n.jsx(e.p,{children:"styled を継続して利用する場合"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ...
import { TokenInjector } from '@charcoal-ui/styled'
import { ThemeProvider } from 'styled-components'
<CharcoalProvider>
  <TokenInjector theme={themeMap} />
  <ThemeProvider theme={themeMap[':root']}>
    <YourApp />
  </ThemeProvider>
</CharcoalProvider>
`})}),`
`,n.jsx(e.p,{children:`tailwind単体で利用可能にするためにデフォルトでcss変数v1を提供するようになりました。
TokenInjectorと併用する場合falseに指定してください。`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`module.exports = {
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
`,n.jsx(e.h2,{id:"button",children:"Button"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ComponentAbstraction"}),"と",n.jsx(e.code,{children:"to"}),"を用いたカスタム要素の設定を、",n.jsx(e.code,{children:"component"}),"に",n.jsx(e.code,{children:"React.ElementType"}),"を指定することによって行えるように変更しました。"]}),`
`]}),`
`,n.jsx(e.p,{children:"Before"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<ComponentAbstraction components={{ Link: RouterLink }}>
  <Button to="...">Link</Button>
</ComponentAbstraction>
`})}),`
`,n.jsx(e.p,{children:"After"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button component="a" href="...">Link</Button>
<Button component={RouterLink} to="...">Link</Button>
<Button component={NextLink} href="...">Link</Button>
`})}),`
`,n.jsx(e.h3,{id:"buttonのgeneric-propsについて",children:"ButtonのGeneric propsについて"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://github.com/styled-components/styled-components/issues/1803",rel:"nofollow",children:"Styled Componentの制限"}),"により",n.jsx(e.code,{children:"styled(Button)"}),`で拡張する場合propsがうまく推論されない場合があります。
Charcoal v4.1.0から過剰なpropsを検出する処理を追加したが、`,n.jsx(e.code,{children:"component"})," propと合わせて使う時の型を配慮する必要があります。"]}),`
`,n.jsx(e.p,{children:"サンプル"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// allow component
const StyledButton = styled(Button)\`\` as typeof Button
<StyledButton component={Link} to="#" />

// preserve component type
const StyledButtonA = styled(Button<'a'>)\`\`
<StyledButtonA component="a" href="#" />
`})}),`
`,n.jsxs(e.p,{children:["その他のケースは ",n.jsx(e.a,{href:"https://github.com/pixiv/charcoal/blob/main/packages/react/src/components/Button/styledButtonTypeTest.d.tsx",rel:"nofollow",children:"styledButtonTypeTest.d.tsx"})," を参考してください。"]}),`
`,n.jsx(e.h2,{id:"checkbox",children:"Checkbox"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Checkbox"}),"の",n.jsx(e.code,{children:"input"}),"要素を",n.jsx(e.code,{children:"children"}),"がない場合に label で囲わないようにしました。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"React.HTMLProps<HTMLInputElement>"}),"を継承するように変更しました。"]}),`
`,n.jsx(e.li,{children:"アイコンを CSS を用いて表示するように変更しました。"}),`
`]}),`
`,n.jsx(e.h2,{id:"clickable",children:"Clickable"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Button"}),"と同様に",n.jsx(e.code,{children:"to"}),"による指定を削除し、",n.jsx(e.code,{children:"component"}),"によってカスタムできるように変更しました。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type ClickableElement"}),"が削除されました。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"dropdownselector",children:"DropdownSelector"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-labelledby"}),",",n.jsx(e.code,{children:"aria-describedby"}),"を適用するように変更しました。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"iconbutton",children:"IconButton"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Button"}),"と同様に",n.jsx(e.code,{children:"to"}),"による指定を削除し、",n.jsx(e.code,{children:"component"}),"によってカスタムできるように変更しました。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"multiselect",children:"MultiSelect"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"overlay"}),"の代替として",n.jsx(e.code,{children:"Checkbox"}),"の",n.jsx(e.code,{children:"rounded"}),"が追加されました。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"radiogroup",children:"RadioGroup"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-labelledby"}),", ",n.jsx(e.code,{children:"aria-orientation"}),"をプロパティに追加しました。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"label"}),"をオプショナルに変更しました。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"switch",children:"Switch"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Checkbox"}),"の",n.jsx(e.code,{children:"input"}),"要素を常に",n.jsx(e.code,{children:"label"}),"で囲わないようにしました。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"React.HTMLProps<HTMLInputElement>"}),"を継承するように変更しました。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"tagitem",children:"TagItem"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Button"}),"と同様に",n.jsx(e.code,{children:"to"}),"による指定を削除し、",n.jsx(e.code,{children:"component"}),"によってカスタムできるように変更しました。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"textarea",children:"TextArea"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"textarea"}),"要素の",n.jsx(e.code,{children:"props"}),"を継承するように変更しました。"]}),`
`,n.jsxs(e.li,{children:["文字数の計算ロジックを",n.jsx(e.code,{children:"getCount"}),"プロパティで上書きできるように変更しました。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"textfield",children:"TextField"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"input"}),"要素の",n.jsx(e.code,{children:"props"}),"を継承するように変更しました。"]}),`
`,n.jsxs(e.li,{children:["文字数の計算ロジックを",n.jsx(e.code,{children:"getCount"}),"プロパティで上書きできるように変更しました。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"その他",children:"その他"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"PixivIcon.extend"})," に渡す内容が sanitize されなくなります。必要な場合事前に sanitize するか、dompurify などを挟んでください ",n.jsx(e.a,{href:"https://github.com/pixiv/charcoal/pull/643",rel:"nofollow",children:"fix!(@charcoal-ui/icons): remove dompurify from v4. #643"})]}),`
`]}),`
`,n.jsx(e.h1,{id:"design-token-20-の実験的サポート",children:"Design Token 2.0 の実験的サポート"}),`
`,n.jsx(e.h2,{id:"styled-components",children:"styled-components"}),`
`,n.jsxs(e.p,{children:["実装例: ",n.jsx(e.a,{href:"https://github.com/pixiv/charcoal/pull/655",rel:"nofollow",children:"feat: token v2 demo styled #655"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import React, { useState } from 'react'
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
`,n.jsx(e.h2,{id:"tailwindcss",children:"tailwindcss"}),`
`,n.jsxs(e.p,{children:["実装例: ",n.jsx(e.a,{href:"https://github.com/pixiv/charcoal/pull/650",rel:"nofollow",children:"feat: allow design token v2 in tailwind config #650"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`const { light, dark } = require('@charcoal-ui/theme')
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<a
  className="rounded-oval text-icon hover:text-icon-hover active:text-icon-press bg-container-secondary hover:bg-container-hover active:bg-container-press grid h-[40px] w-[40px] cursor-pointer place-items-center"
  aria-label="UserIcon"
>
  <Icon name="24/FaceEdit" />
</a>
`})})]})}function d(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}export{d as default};
