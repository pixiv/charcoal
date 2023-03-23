import { ContentRoot } from '../../../../components/ContentRoot'
import { InlineCode } from '../../../../components/InlineCode'
import { SSRHighlight } from '../../../../components/SSRHighlight'

import { PreviewDiv } from '../../react/_components/Previews'
import { getSrcFile } from '../../react/_utils/getSrcFile'
import { Preview } from './Preview'

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('../styled/margin/Preview.tsx') },
  }
}

export default function InstallPage(props: any) {
  return (
    <ContentRoot>
      <h1>margin</h1>
      <p>要素の外側の余白を設定する</p>
      <p>
        各方向に指定をチェインして記述できる、指定する数字はガイドラインに従ったspacingのみ
      </p>
      <p>
        <InlineCode>
          margin.[...(all($n)|vertical($n)|horizontal($n)|top($n)|right($n)|bottom($n)|left($n))]
        </InlineCode>
      </p>
      <PreviewDiv>
        <Preview />
        <SSRHighlight code={props.src}></SSRHighlight>
      </PreviewDiv>
    </ContentRoot>
  )
}
