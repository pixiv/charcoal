import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode } from '../../../components/InlineCode'
import { FlexDiv } from '../../../components/FlexDiv'
import { TYPOGRAPHY_SIZE } from '@charcoal-ui/foundation'
import styled from 'styled-components'
import { theme } from '../../../utils/theme'

export default function GridPage() {
  return (
    <ContentRoot>
      <h1>spacing</h1>

      <h2>提供されている定数・関数・型</h2>
      <FlexDiv>
        <InlineCode>TypographyDescriptor</InlineCode>
        <InlineCode>TYPOGRAPHY_WEIGHT</InlineCode>
        <InlineCode>TYPOGRAPHY_VARIANT</InlineCode>
        <InlineCode>TYPOGRAPHY_SIZE</InlineCode>
      </FlexDiv>

      <h3>TypographyDescriptor</h3>
      <p>typographyに必要な要素を示す型</p>

      <h3>TYPOGRAPHY_WEIGHT</h3>
      <p>
        typographyの太さを示す定数、<InlineCode>regular</InlineCode>と
        <InlineCode>bold</InlineCode>がある。
      </p>

      <h3>TYPOGRAPHY_VARIANT</h3>
      <p>
        typographyのバリエーションを示す定数、
        <InlineCode>proportional</InlineCode>と
        <InlineCode>monospace</InlineCode>がある。
      </p>

      <h3>TYPOGRAPHY_SIZE</h3>
      <p>typography定数群</p>
      <div>
        {Object.entries(sizeItems).map(([key, { fontSize, lineHeight }]) => (
          <Item key={key}>
            <p>
              <InlineCode>TYPOGRAPHY_SIZE[{key}]</InlineCode>
            </p>

            <Text style={{ fontSize, lineHeight: `${lineHeight}px` }}>
              typography
            </Text>
          </Item>
        ))}
      </div>
    </ContentRoot>
  )
}

const sizeItems = Object.fromEntries(
  Object.entries(TYPOGRAPHY_SIZE).sort(([key1], [key2]) =>
    key1.padStart(6, '0').localeCompare(key2.padStart(6, '0'))
  )
)

const Item = styled.div`
  ${theme((o) => o.margin.bottom(24))};
`

const Text = styled.p`
  margin: 0;
`
