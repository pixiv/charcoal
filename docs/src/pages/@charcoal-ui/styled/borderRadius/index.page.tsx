import { ContentRoot } from '../../../../components/ContentRoot'
import { InlineCode } from '../../../../components/InlineCode'
import { SSRHighlight } from '../../../../components/SSRHighlight'

import { PreviewDiv } from '../../react/_components/Previews'
import { getSrcFile } from '../../react/_utils/getSrcFile'
import { Preview } from './Preview'

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('../styled/borderRadius/Preview.tsx') },
  }
}

export default function InstallPage(props: any) {
  return (
    <ContentRoot>
      <h1>borderRadius</h1>
      <p>
        <InlineCode>
          o.botderRadius($number|&apos;oval&apos;|&apos;none&apos;)
        </InlineCode>
      </p>
      <PreviewDiv>
        <Preview />
      </PreviewDiv>
      <SSRHighlight code={props.src}></SSRHighlight>
    </ContentRoot>
  )
}
