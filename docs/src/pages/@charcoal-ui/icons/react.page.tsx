import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'
import { dedent } from '../../../utils/string'

export default function ReactPage() {
  return (
    <ContentRoot>
      <h1>React と組み合わせて使う</h1>
      <p>
        Custom Elementは
        <strong>
          <InlineCode>className</InlineCode>
          というpropsを受け取ることが通常できません。
        </strong>
      </p>
      <blockquote>
        Custom elements accept <InlineCode>class</InlineCode> rather than{' '}
        <InlineCode>className</InlineCode>, and <InlineCode>for</InlineCode>{' '}
        rather than
        <InlineCode>htmlFor</InlineCode>.
        <br />
        <a
          href="https://ja.react.dev/reference/react-dom/components#custom-html-elements"
          target="_blank"
          rel="noopener noreferrer"
        >
          参考: React公式ドキュメント
        </a>
      </blockquote>

      <p>
        もし<InlineCode>styled-components</InlineCode>などを使っていて
        <InlineCode>className</InlineCode>
        を渡せないと困るケースでは、ラッパーコンポーネントを作ってください。
      </p>

      <SSRHighlight
        code={dedent`
          import { Props as IconProps } from '@charcoal-ui/icons'

          interface Props extends Omit<IconProps, 'class'> {
            className?: string
          }

          export const Icon: React.FC<Props> = ({ className, ...props }) => (
            <pixiv-icon class={className} {...props} />
          )
        `}
        lang="typescript"
      />
    </ContentRoot>
  )
}
