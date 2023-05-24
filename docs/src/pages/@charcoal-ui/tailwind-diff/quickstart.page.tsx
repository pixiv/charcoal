import Link from 'next/link'
import { ContentRoot } from '../../../components/ContentRoot'

import { InlineCode } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'
import { dedent } from '../../../utils/string'

export default function InstallPage() {
  return (
    <ContentRoot>
      <h1>@charcoal-ui/tailwind-diff クイックスタート</h1>
      <Link href="https://www.npmjs.com/package/@charcoal-ui/tailwind-diff">
        <img
          alt="npm-badge"
          src="https://img.shields.io/npm/v/@charcoal-ui/tailwind-diff?label=%40charcoal-ui%2Ficons&style=flat-square&logo=npm"
        />
      </Link>
      <h2>インストール</h2>
      <h3>npm</h3>
      <SSRHighlight
        code="npm install @charcoal-ui/tailwind-diff"
        lang="shell"
      />
      <h3>yarn</h3>
      <SSRHighlight code="yarn add @charcoal-ui/tailwind-diff" lang="shell" />

      <hr />

      <h2>概要</h2>
      <p>
        <InlineCode>@charcoal-ui/tailwind-diff</InlineCode>は、Tailwind
        CSSをアップデートした際、または設定をアップデートした際に吐き出されるクラスの差分を表示するCLIツールです。
        <br />
        <InlineCode>@charcoal-ui/tailwind-config</InlineCode>
        をアップデートした際のみならず、<InlineCode>tailwind-diff</InlineCode>
        はそのままに、Tailwind
        CSSをアップデートした際に起こる変化を検出し、アップデートを補助します。
      </p>

      <h2>使い方</h2>
      <p>WIP</p>
      <SSRHighlight
        code={dedent`
        $ npx @charcoal-ui/tailwind-diff check --packages @charcoal-ui/tailwind-config@latest --config tailwind.config.js --json true

        [
          {
            "className":"w-fit",
            "status":"added",
            "css": [
              ".w-fit { width: fit-content; }"
            ]
          }
        ]`}
        lang="shell"
      />
    </ContentRoot>
  )
}
