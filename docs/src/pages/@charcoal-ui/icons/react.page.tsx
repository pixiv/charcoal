import Link from 'next/link'
import styled from 'styled-components'
import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode, TagName } from '../../../components/InlineCode'
import { SSRHighlight } from '../../../components/SSRHighlight'
import { dedent } from '../../../utils/string'

export default function ReactPage() {
  return (
    <ContentRoot>
      <h1>React と組み合わせて使う</h1>

      <p>
        <InlineCode>@charcoal-ui/react</InlineCode>に
        <Link href="/@charcoal-ui/react/Icon">
          <TagName>Icon</TagName>
        </Link>
        コンポーネントが収録されているので、基本的にはそちらを利用してください。
      </p>

      <hr />

      <h2>
        <InlineCodeInHead>@charcoal-ui/react</InlineCodeInHead>を使わない場合
      </h2>
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
          React公式ドキュメントより
        </a>
      </blockquote>

      <p>
        もし<InlineCode>styled-components</InlineCode>などを使っていて
        <InlineCode>className</InlineCode>
        を渡せないと困るケースでは、ラッパーコンポーネントを作ることができます。
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

export const InlineCodeInHead = styled(InlineCode)`
  font-size: inherit !important;
`
