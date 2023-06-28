import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode } from '../../../components/InlineCode'
import { FlexDiv } from '../../../components/FlexDiv'

export default function EffectPage() {
  return (
    <ContentRoot>
      <h1>effect</h1>

      <h2>提供されている定数・関数・型</h2>
      <FlexDiv>
        <InlineCode>Effects</InlineCode>
        <InlineCode>Effect</InlineCode>
        <InlineCode>AlphaEffect</InlineCode>
        <InlineCode>OpacityEffect</InlineCode>
        <InlineCode>ReplaceEffect</InlineCode>
      </FlexDiv>

      <h3>Effects</h3>
      <p>Effect型もしくはEffect型リスト</p>

      <h3>Effect</h3>
      <p>定義されているEffectの総称型</p>

      <h3>AlphaEffect</h3>
      <p>colorにalphaを与える型</p>

      <h3>OpacityEffect</h3>
      <p>opacityを与える型</p>

      <h3>ReplaceEffect</h3>
      <p>color、opacityもしくはその両方を置き換える型</p>
    </ContentRoot>
  )
}
