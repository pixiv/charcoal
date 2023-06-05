import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'
import { Table } from '../../../components/Table'
import { dedent } from '../../../utils/string'

export default function CheckPage() {
  return (
    <ContentRoot>
      <h1>tailwind-diff check</h1>
      <h2>概要</h2>
      <p>
        Tailwind
        CSSのバージョンや設定ファイルの変更をもとに、利用できるクラスの差分を出力します。
        <br />
        内部的には、Tailwind
        CSSのビルドを2回実行し、結果をtmpディレクトリに保存し、内容を比較しています。
      </p>

      <h2>オプション</h2>
      <Table data={apiData} />
      <p>
        ※1 <InlineCode>config</InlineCode>と
        <InlineCode>[before,after]-config</InlineCode>
        がどちらも指定されないときの動作は未定義。どちらかは必ず指定する。
        <br />
        また、たとえば<InlineCode>config</InlineCode>と
        <InlineCode>before-config</InlineCode>だけを指定した際の動作も未定義。
      </p>
      <p>
        ※2 <InlineCode>--packages a b</InlineCode>と
        <InlineCode>--packages a --packages b</InlineCode>
        はどちらもOK。詳しくは
        <a
          href="https://yargs.js.org/docs/#api-reference-arraykey"
          target="_blank"
          rel="noopener noreferrer"
        >
          yargs
        </a>
        のドキュメントを参照。
      </p>
      <SSRHighlight
        code={dedent`
        $ npx @charcoal-ui/tailwind-diff check --help
        tailwind-diff check

        checks diffs due to package updates

        Options:
              --version        Show version number                             [boolean]
              --help           Show help                                       [boolean]
              --before-config  tailwind config used in first build              [string]
              --after-config   tailwind config used in second build             [string]
              --packages       packages to be update                             [array]
              --json           print result as JSON format                     [boolean]
          -c, --config         tailwind config file                             [string]
        `}
        lang="shell"
      />

      <hr />

      <h2>使い方の例</h2>
      <h3>
        <InlineCode>tailwindcss</InlineCode>はそのまま、
        <InlineCode>@charcoal-ui/tailwind-config</InlineCode>をアップデートする
      </h3>
      <SSRHighlight
        code="npx @charcoal-ui/tailwind-diff check -c ./tailwind.config.js --packages @charcoal-ui/tailwind-config@2.8.0"
        lang="shell"
      />
      <h3>
        <InlineCode>@charcoal-ui/tailwind-config</InlineCode>はそのまま、
        <InlineCode>tailwindcss</InlineCode>をアップデートする
      </h3>
      <SSRHighlight
        code="npx @charcoal-ui/tailwind-diff check -c ./tailwind.config.js --packages tailwindcss@latest"
        lang="shell"
      />

      <h3>
        パッケージをアップデートせず、
        <InlineCode>tailwind.config.js</InlineCode>を変更する
      </h3>
      <p>
        手元に一時的に<InlineCode>tailwind.config.new.js</InlineCode>
        のようなファイルを作成した上で以下を実行します。
      </p>
      <SSRHighlight
        code="npx @charcoal-ui/tailwind-diff check --before-config ./tailwind.config.js --after-config ./tailwind.config.new.js"
        lang="shell"
      />

      <hr />

      <h2>出力の形式</h2>
      <h3>デフォルトの形式</h3>
      <p>変更内容の詳細は出さず、増減があったかだけを出力します。</p>
      <SSRHighlight
        code={dedent`
          $ npx @charcoal-ui/tailwind-diff check --packages @charcoal-ui/tailwind-config@latest --config tailwind.config.js

          1 classes added, 0 classes removed.`}
        lang="shell"
      />
      <p>
        単に変化が
        <InlineCode>0</InlineCode>
        件であることを確認したいケースなどはこちらが有用です。
      </p>

      <h3>JSON形式</h3>
      <p>
        <InlineCode>--json</InlineCode>を指定した場合
      </p>
      <SSRHighlight
        code={dedent`
          $ npx @charcoal-ui/tailwind-diff check --packages @charcoal-ui/tailwind-config@latest --json

          [{"className":"w-fit","status":"added","css":[".w-fit {\\n    width: fit-content;\\n}"]}]
          `}
        lang="shell"
      />
      <p>
        この場合、<InlineCode>@charcoal-ui/tailwind-config</InlineCode>
        をアップデートすると<InlineCode>w-fit</InlineCode>
        というクラスが新しく使えるようになることがわかります。
      </p>
      <p>
        人間に見やすくするオプションなどは
        <strong>ありません。</strong>
        その場合は
        <a
          href="https://stedolan.github.io/jq/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InlineCode>jq</InlineCode>
        </a>
        など、JSONをフォーマットできるコマンドと併用するのが推奨されます。
      </p>
      <SSRHighlight
        code={dedent`
          $ npx @charcoal-ui/tailwind-diff check --packages @charcoal-ui/tailwind-config@latest --json | jq

          [
            {
              "className": "w-fit",
              "status": "added",
              "css": [
                ".w-fit {\\n    width: fit-content;\\n}"
              ]
            }
          ]`}
        lang="shell"
      />
      <p>
        <strong>
          ステータスの種類は<InlineCode>added</InlineCode>または
          <InlineCode>removed</InlineCode>の2種類のみです。
        </strong>
        <br />
        クラスが改名した際に「改名した」と教えてくれることはなく、1件の追加と1件の削除としてカウントされます。
      </p>
    </ContentRoot>
  )
}

const apiData = {
  config: {
    description:
      'ビルド時に使用するTailwind CSSの設定ファイル。設定ファイルが特に変化しない場合これだけを指定する。(※1)',
    alias: '-c または --config',
    type: 'string',
    required: false,
  },
  'after-config': {
    description:
      '2回目のビルド時に使用するTailwind CSSの設定ファイル。設定ファイルが変化するシナリオで用いる',
    alias: '--after-config のみ',
    type: 'string',
    required: false,
  },
  'before-config': {
    description:
      '1回目のビルド時に使用するTailwind CSSの設定ファイル。設定ファイルが変化するシナリオで用いる',
    alias: '--before-config のみ',
    type: 'string',
    required: false,
  },
  packages: {
    description:
      '1回目のビルドと2回目のビルドの間にアップデートすべきパッケージ群',
    alias: '--packages のみ',
    type: 'string[] (※2)',
    required: false,
  },
  json: {
    description: '出力フォーマットをJSONにするかどうか',
    alias: '--json のみ',
    type: 'boolean',
    required: false,
  },
}
