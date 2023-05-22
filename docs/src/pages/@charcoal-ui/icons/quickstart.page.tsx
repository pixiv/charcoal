import Link from 'next/link'
import { ContentRoot } from '../../../components/ContentRoot'

import { InlineCode, TagName } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'
import { dedent } from '../../../utils/string'

export default function InstallPage() {
  return (
    <ContentRoot>
      <h1>@charcoal-ui/icons クイックスタート</h1>
      <Link href="https://www.npmjs.com/package/@charcoal-ui/icons">
        <img
          alt="npm-badge"
          src="https://img.shields.io/npm/v/@charcoal-ui/icons?label=%40charcoal-ui%2Ficons&style=flat-square&logo=npm"
        />
      </Link>
      <h2>インストール</h2>
      <h3>npm</h3>
      <SSRHighlight code="npm install @charcoal-ui/icons" lang="shell" />
      <h3>yarn</h3>
      <SSRHighlight code="yarn add @charcoal-ui/icons" lang="shell" />

      <hr />

      <h2>使い方</h2>
      <p>
        アプリケーションのエントリポイントで<InlineCode>import</InlineCode>
        します。
        <br />
        Storybookの場合は<InlineCode>preview.(js|ts)</InlineCode>
        に書くと良いでしょう。
      </p>
      <p>
        <strong>
          <InlineCode>@charcoal-ui/react</InlineCode>の{' '}
          <Link href="/@charcoal-ui/react/Icon">
            <TagName>Icon</TagName>
          </Link>
          コンポーネントを利用している場合、このimportは内部で自動的に行われます。
        </strong>
      </p>
      <SSRHighlight
        code={dedent`import '@charcoal-ui/icons'`}
        lang="typescript"
      />
      <p>
        これだけで、<TagName>pixiv-icon</TagName>という
        HTMLタグが利用可能になります。
        TypeScriptの型定義がグローバルにインストールされるので、JSX で
        <TagName>pixiv-icon</TagName>
        を書く際にも型チェックが効きます。
      </p>
      <h2>収録アイコン</h2>
      <p>
        <InlineCode>@charcoal-ui/react</InlineCode>の
        <Link href="/@charcoal-ui/react/Icon/">
          <TagName>Icon</TagName>
        </Link>
        のページを見てください。
      </p>
      <hr />
      <h2>各種バンドラとの組み合わせ</h2>
      <p>
        <InlineCode>@charcoal-ui/icons@v2.0.0</InlineCode>
        以前、このライブラリはアイコンを
        <InlineCode>.svg</InlineCode>
        ファイルとしてエクスポートしていました。
        <br />
        したがって利用の際は、各種バンドラで
        <InlineCode>.svg</InlineCode>
        ファイルをimportできるように設定ファイルを変更する必要がありました。
      </p>
      <p>
        <InlineCode>v2.0.0</InlineCode>
        以降、アイコンはJavaScriptの文字列としてエクスポートされるようになっています。
        <br />
        <strong>
          したがって、
          <InlineCode>@charcoal-ui/icons</InlineCode>
          に収録されたアイコンを利用するだけなら、バンドラの設定は必要ありません。
        </strong>
      </p>
      <p>
        プロジェクト内のSVGファイルをアイコンとして登録したい場合は、
        <Link href="/@charcoal-ui/icons/extend">
          必要に応じて<InlineCode>.svg</InlineCode>
          をimportできるように設定してください。
        </Link>
      </p>
    </ContentRoot>
  )
}
