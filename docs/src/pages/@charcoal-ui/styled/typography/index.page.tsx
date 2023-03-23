import { useRouter } from 'next/router'
import { ContentRoot } from '../../../../components/ContentRoot'
import { InlineCode } from '../../../../components/InlineCode'
import { SSRHighlight } from '../../../../components/SSRHighlight'

import { PreviewDiv } from '../../react/_components/Previews'
import { getSrcFile } from '../../react/_utils/getSrcFile'
import { Preview } from './Preview'

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('../styled/typography/Preview.tsx') },
  }
}

export default function InstallPage(props: any) {
  const router = useRouter()
  return (
    <ContentRoot>
      <h1>typography</h1>
      <p>フォントサイズを設定する</p>

      <p>
        typographyは実際の高さをフォントサイズに合わせるために、デフォルトでハーフリーディングを削除する処理が入っています。これは疑似要素とマイナスのmarginを用いて実現されます。
      </p>

      <p>
        <InlineCode>
          typography(number).[...(bold|monospace|preserveHalfLeading)]
        </InlineCode>
      </p>
      <PreviewDiv>
        <Preview />
        <SSRHighlight code={props.src}></SSRHighlight>
      </PreviewDiv>
    </ContentRoot>
  )
}
