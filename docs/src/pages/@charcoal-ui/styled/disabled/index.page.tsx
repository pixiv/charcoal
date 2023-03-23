import { ContentRoot } from '../../../../components/ContentRoot'
import { InlineCode } from '../../../../components/InlineCode'
import { SSRHighlight } from '../../../../components/SSRHighlight'

import { PreviewDiv } from '../../react/_components/Previews'
import { getSrcFile } from '../../react/_utils/getSrcFile'
import { Preview } from './Preview'

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('../styled/disabled/Preview.tsx') },
  }
}

export default function InstallPage(props: any) {
  return (
    <ContentRoot>
      <h1>padding</h1>
      <p>余白を設定する</p>
      <p>
        各方向に指定をチェインして記述できる、指定する数字はガイドラインに従ったspacingのみ
      </p>
      <p>
        <InlineCode>o.disabled</InlineCode>
      </p>
      <PreviewDiv>
        <Preview />
        <SSRHighlight code={props.src}></SSRHighlight>
      </PreviewDiv>
    </ContentRoot>
  )
}
