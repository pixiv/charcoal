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
        code={dedent`
          npm install --save-dev @charcoal-ui/tailwind-diff
          npx tailwind-diff --help
        `}
        lang="shell"
      />
      <h3>yarn</h3>
      <SSRHighlight
        code={dedent`
          yarn add -D @charcoal-ui/tailwind-diff
          yarn tailwind-diff --help
        `}
        lang="shell"
      />

      <p>あるいは、ローカルにインストールせずに実行するのも良いでしょう。</p>
      <SSRHighlight code="npx @charcoal-ui/tailwind-diff --help" lang="shell" />

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
      <p>
        以下のコマンドが実行できます。
        <InlineCode>check</InlineCode>と<InlineCode>dump</InlineCode>
        については各ページを参照してください。
      </p>

      <dl>
        <dt>
          <Link href="/@charcoal-ui/tailwind-diff/check">check</Link>
        </dt>
        <dd>アップデートの結果生じるクラスの差分を出力する</dd>
      </dl>
      <dl>
        <dt>
          <Link href="/@charcoal-ui/tailwind-diff/dump">dump</Link>
        </dt>
        <dd>現在の設定からできあがるCSSを出力する</dd>
      </dl>

      <p>また、サブコマンドなしでも以下のオプションを利用できます</p>
      <dl>
        <dt>--version</dt>
        <dd>パッケージのバージョンを出力する</dd>
      </dl>
      <dl>
        <dt>--help</dt>
        <dd>使い方のヘルプを出力する</dd>
      </dl>

      <SSRHighlight
        code={dedent`
        $ npx @charcoal-ui/tailwind-diff --help

        tailwind-diff <command>

        Commands:
          tailwind-diff check  checks diffs due to package updates
          tailwind-diff dump   dump Tailwind CSS with config

        Options:
          --version  Show version number                                       [boolean]
          --help     Show help                                                 [boolean]
`}
        lang="shell"
      />
    </ContentRoot>
  )
}
