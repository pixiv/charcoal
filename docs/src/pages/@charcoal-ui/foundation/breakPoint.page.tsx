import { ContentRoot } from '../../../components/ContentRoot'
import styled from 'styled-components'
import { BREAKPOINT, HORIZONTAL_MIN_MARGIN } from '@charcoal-ui/foundation'
import { theme } from '../../../utils/theme'
import { InlineCode } from '../../../components/InlineCode'
import { FlexDiv } from '../../../components/FlexDiv'

export default function BorderRadiusPage() {
  const items = Object.entries(BREAKPOINT).sort(([key1], [key2]) =>
    key1.padStart(3, '0').localeCompare(key2.padStart(3, '0'))
  )

  return (
    <ContentRoot>
      <h1>breakpoint</h1>

      <h2>提供されている定数・関数・型</h2>
      <FlexDiv>
        <InlineCode>HORIZONTAL_MIN_MARGIN</InlineCode>
        <InlineCode>BREAKPOINT</InlineCode>
      </FlexDiv>

      <h3>HORIZONTAL_MIN_MARGIN</h3>
      <p>
        <InlineCode>
          HORIZONTAL_MIN_MARGIN: {HORIZONTAL_MIN_MARGIN}px
        </InlineCode>
      </p>

      <h3>BREAKPOINT</h3>
      {items.map(([key, value]) => (
        <div>
          <p>
            <InlineCode>
              BREAKPOINT[{key}]: {value}px
            </InlineCode>
          </p>
        </div>
      ))}
    </ContentRoot>
  )
}

const Scrollable = styled.div`
  overflow-x: scroll;
`
const Box = styled.div`
  ${theme((o) => o.bg.surface10)}
`
