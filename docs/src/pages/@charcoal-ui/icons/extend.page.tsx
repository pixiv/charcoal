import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode, TagName } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'
import { dedent } from '../../../utils/string'

export default function ExtendPage() {
  return (
    <ContentRoot>
      <h1>独自のアイコンを登録する</h1>
      <p>
        <TagName>pixiv-icon</TagName>の<InlineCode>name</InlineCode>
        に存在しないSVGをアイコンとして登録することができます。
      </p>

      <SSRHighlight
        code={dedent`
          import { PixivIcon } from '@charcoal-ui/icons'
          import NewFeature from './NewFeature.svg'

          PixivIcon.extend({
            '16/NewFeature': require('./icons/16/NewFeature.svg'),
            '24/NewFeature': 'https://example.com/hoge.svg',
            '32/NewFeature': NewFeature,
          })

          declare module '@charcoal-ui/icons' {
            export interface KnownIconType {
              '16/NewFeature': unknown
              '24/NewFeature': unknown
              '32/NewFeature': unknown
            }
          }
        `}
        lang="typescript"
      />
      <p>
        その場合も名前の形式は <InlineCode>{'{size}/{name}'}</InlineCode>
        である必要があります。
        <br />
        TypeScript 環境下では、<InlineCode>KnownIconType</InlineCode>
        という型を拡張することで、カスタムアイコンに対しても補完が効くようになります。
      </p>

      <h2>独自アイコンのためのバンドラ設定</h2>
      <p>
        <InlineCode>PixivIcon.extend()</InlineCode>
        に渡すオブジェクトはキーがアイコン名、値がSVGファイルに対するパス名またはURLである必要があります。
        <br />
        （内部的には、ここで渡した文字列に対して<InlineCode>fetch()</InlineCode>
        が走ります）
      </p>
      <p>
        SVGファイルを<InlineCode>import</InlineCode>
        して渡す場合、プロジェクトのバンドラが<InlineCode>*.svg</InlineCode>を
        <strong>パス文字列として（ファイルの内容の文字列ではなく）</strong>
        ロードする設定になっていることを確認してください。
      </p>
      <p>
        たとえばWebpackの場合、当該アイコンファイルに対するルールのtypeは
        <a
          href="https://webpack.js.org/guides/asset-modules/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InlineCode>asset/resource</InlineCode>
        </a>
        であるべきです。
        <br />
        <a
          href="https://react-svgr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          svgr
        </a>
        など、SVGファイルを文字列以外の値にトランスフォームするツールを使っているプロジェクトでは、
        <br />
        <InlineCode>PixivIcon.extend()</InlineCode>に渡す用の
        <InlineCode>.svg</InlineCode>ファイルをその対象から除いてください。
      </p>
    </ContentRoot>
  )
}
