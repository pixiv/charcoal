import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'

export default function DumpPage() {
  return (
    <ContentRoot>
      <h1>tailwind-diff dump</h1>
      <SSRHighlight
        code="npx @charcoal-ui/tailwind-diff dump -c ./path/to/tailwind.config.js -o dump.css"
        lang="shell"
      />

      <h2>概要</h2>
      <p>
        指定したコンフィグファイルをもとにCSSを出力します。
        <br />
        できることはTailwind CSS公式の<InlineCode>build</InlineCode>と同じです。
        <br />
        このコマンドは主にデバッグ用途であり、Tailwind
        CSSアップデートの際に使うことはあまりないでしょう。
      </p>

      <h2>オプション</h2>
    </ContentRoot>
  )
}
