import { ContentRoot } from '../../../../components/ContentRoot'
import { InlineCode } from '../../../../components/InlineCode'
import { SSRHighlight } from '../../../../components/SSRHighlight'

import { PreviewDiv } from '../../react/_components/Previews'
import { getSrcFile } from '../../react/_utils/getSrcFile'
import { Preview } from './Preview'

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('../styled/height/Preview.tsx') },
  }
}

export default function InstallPage(props: any) {
  return (
    <ContentRoot>
      <h1>height</h1>
      <p>
        <InlineCode>o.height.[...(px($num)|column($num))]</InlineCode>
      </p>
      <p>
        グリッドシステムを利用した固定幅を設定 デフォルトの場合はカラムサイズ
        80px、ガーターサイズ 24px に設定されているため以下の計算式になる
      </p>
      <p>
        <InlineCode>px = column * 80 + (column - 1) * 24</InlineCode>
      </p>
      <PreviewDiv>
        <Preview />
      </PreviewDiv>
      <SSRHighlight code={props.src}></SSRHighlight>
    </ContentRoot>
  )
}
