import Link from 'next/link'
import { ContentRoot } from '../../../components/ContentRoot'
import { SSRHighlight } from '../../../components/SSRHighlight'
import { dedent } from '../../../utils/string'
import { InlineCode } from '../../../components/InlineCode'

export default function InstallPage() {
  return (
    <ContentRoot>
      <h1>@charcoal-ui/tailwind-config クイックスタート</h1>
      <Link href="https://www.npmjs.com/package/@charcoal-ui/tailwind-config">
        <img
          alt="npm-badge"
          src="https://img.shields.io/npm/v/@charcoal-ui/tailwind-config?label=%40charcoal-ui%2Ftailwind-config&style=flat-square&logo=npm"
        />
      </Link>
      <h2>インストール</h2>
      <h3>npm</h3>
      <SSRHighlight
        code={dedent`
                    npm install --save-dev @charcoal-ui/tailwind-config
                `}
        lang="shell"
      />
      <h3>yarn</h3>
      <SSRHighlight
        code={dedent`
                    yarn add -D @charcoal-ui/tailwind-config
                `}
        lang="shell"
      />

      <hr />

      <h2>概要</h2>
      <p>
        <InlineCode>@charcoal-ui/tailwind-config</InlineCode>は、Tailwindに
        <InlineCode>@charcoal-ui/foundation</InlineCode>を適用します。
      </p>

      <h2>使い方</h2>
      <p>
        tailwind.config.js の中で <InlineCode>require</InlineCode>
        して使います。
      </p>

      <h3>デフォルトのconfigを使う</h3>
      <SSRHighlight
        code={dedent`
                const { config } = require('@charcoal-ui/tailwind-config')
                
                /** @type {import('tailwindcss').Config} */
                module.exports = {
                    content: [],
                    theme: {
                        extend: {},
                    },
                    plugins: [],
                    presets: [config]
                }
                `}
        lang="javascript"
      />
      <p>
        テーマの調整などが必要な場合は
        <Link href="/@charcoal-ui/tailwind-config/customize">
          カスタマイズする
        </Link>
        のページを見てください。
      </p>
    </ContentRoot>
  )
}
