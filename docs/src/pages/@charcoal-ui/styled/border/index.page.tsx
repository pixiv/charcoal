import { ContentRoot } from '../../../../components/ContentRoot'
import { InlineCode } from '../../../../components/InlineCode'
import { SSRHighlight } from '../../../../components/SSRHighlight'

import { PreviewDiv } from '../../react/_components/Previews'
import { getSrcFile } from '../../react/_utils/getSrcFile'
import { Preview } from './Preview'

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('../styled/border/Preview.tsx') },
  }
}

export default function InstallPage(props: any) {
  return (
    <ContentRoot>
      <h1>border</h1>
      <p>ボーダーを設定する</p>
      <p>
        <InlineCode>o.border.default.[...top|right|bottom|left]</InlineCode>
      </p>
      <PreviewDiv>
        <Preview />
      </PreviewDiv>
      <SSRHighlight code={props.src}></SSRHighlight>
    </ContentRoot>
  )
}
