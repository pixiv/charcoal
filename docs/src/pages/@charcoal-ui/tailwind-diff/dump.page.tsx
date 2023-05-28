import Link from 'next/link'
import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'
import { Table } from '../../../components/Table'
import { dedent } from '../../../utils/string'

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
      </p>
      <p>
        <Link href="/@charcoal-ui/tailwind-diff/check">check</Link>
        コマンドでは
        <strong>内部的にdumpが利用されています。</strong>
        <br />
        内部の利用以外でこのコマンドを直接用いるケースは（デバッグなどを除いて）あまりないと言って良いでしょう。
      </p>

      <h2>オプション</h2>
      <SSRHighlight
        code={dedent`
        $ npx @charcoal-ui/tailwind-diff check --help
        tailwind-diff dump

        dump Tailwind CSS with config
        
        Options:
              --version  Show version number                                   [boolean]
              --help     Show help                                             [boolean]
          -o, --output   output file                                            [string]
          -c, --config   tailwind config file                                   [string]
        `}
        lang="shell"
      />
      <Table data={apiData} />
    </ContentRoot>
  )
}

const apiData = {
  output: {
    description:
      'ビルド結果のCSSを出力するファイル。省略した場合は標準出力に出る。',
    alias: '-o または --output',
    type: 'string',
    required: true,
  },
  config: {
    description:
      'ビルド時に使用するTailwind CSSの設定ファイル。省略した場合は"tailwind.config.js"が使われる（現在のパスからの相対）。',
    alias: '-c または --config',
    type: 'string',
    required: true,
  },
}
