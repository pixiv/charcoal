import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode } from '../../../components/InlineCode'
import { FlexDiv } from '../../../components/FlexDiv'
import { SPACING } from '@charcoal-ui/foundation'
import styled from 'styled-components'
import { theme } from '../../../utils/theme'

export default function GridPage() {
  return (
    <ContentRoot>
      <h1>spacing</h1>

      <h2>提供されている定数・関数・型</h2>
      <FlexDiv>
        <InlineCode>SPACING</InlineCode>
      </FlexDiv>

      <h3>SPACING</h3>
      {spacingItems.map(([key, value]) => (
        <Item key={key}>
          <p>
            <InlineCode>SPACING[{key}]</InlineCode>: {value}px
          </p>
          <FlexDiv style={{ gap: value }}>
            <Box>1</Box>
            <Box>2</Box>
          </FlexDiv>
        </Item>
      ))}
    </ContentRoot>
  )
}

const spacingItems = Object.entries(SPACING).sort(([key1], [key2]) =>
  key1.padStart(6, '0').localeCompare(key2.padStart(6, '0'))
)

const Item = styled.div`
  ${theme((o) => o.margin.bottom(24))}
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme((o) => [o.height.px(24), o.width.px(24), o.bg.brand])}
`
