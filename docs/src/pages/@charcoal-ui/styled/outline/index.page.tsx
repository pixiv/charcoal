import { ContentRoot } from '../../../../components/ContentRoot'
import { InlineCode } from '../../../../components/InlineCode'
import { SSRHighlight } from '../../../../components/SSRHighlight'

import { PreviewDiv } from '../../react/_components/Previews'
import { getSrcFile } from '../../react/_utils/getSrcFile'
import { Preview } from './Preview'

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('../styled/outline/Preview.tsx') },
  }
}

export default function InstallPage(props: any) {
  return (
    <ContentRoot>
      <h1>outline</h1>
      <p>アウトラインを設定する</p>
      <p>focusはフォーカスした時だけアウトラインを表示する</p>
      <p>
        <InlineCode>o.outline.[$name].[focus]</InlineCode>
      </p>
      <PreviewDiv>
        <Preview />
      </PreviewDiv>
      <SSRHighlight code={props.src}></SSRHighlight>
    </ContentRoot>
  )
}
