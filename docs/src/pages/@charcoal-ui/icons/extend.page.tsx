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
    </ContentRoot>
  )
}
