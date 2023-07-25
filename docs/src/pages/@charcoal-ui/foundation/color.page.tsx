import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode } from '../../../components/InlineCode'
import { FlexDiv } from '../../../components/FlexDiv'

export default function ColorPage() {
  return (
    <ContentRoot>
      <h1>color</h1>

      <h2>提供されている定数・関数・型</h2>
      <FlexDiv>
        <InlineCode>Material</InlineCode>
        <InlineCode>GradientMaterial</InlineCode>
      </FlexDiv>
      <h3>Material</h3>
      <p>色を示す型</p>

      <h3>GradientMaterial</h3>
      <p>グラデーションがある色を示す型</p>
    </ContentRoot>
  )
}
