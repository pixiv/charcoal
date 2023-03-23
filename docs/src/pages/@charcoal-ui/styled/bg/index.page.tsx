import { ContentRoot } from '../../../../components/ContentRoot'
import { InlineCode } from '../../../../components/InlineCode'
import { SSRHighlight } from '../../../../components/SSRHighlight'

import { PreviewDiv } from '../../react/_components/Previews'
import { getSrcFile } from '../../react/_utils/getSrcFile'
import { Preview } from './Preview'

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('../styled/bg/Preview.tsx') },
  }
}

export default function InstallPage(props: any) {
  return (
    <ContentRoot>
      <h1>bg</h1>
      <p>背景色を設定する</p>
      <p>
        <InlineCode>bg.[$color].[...(hover|press)]</InlineCode>
      </p>
      <PreviewDiv>
        <Preview />
        <SSRHighlight code={props.src}></SSRHighlight>
      </PreviewDiv>
    </ContentRoot>
  )
}
