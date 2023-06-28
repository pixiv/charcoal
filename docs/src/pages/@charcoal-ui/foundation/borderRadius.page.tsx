import { ContentRoot } from '../../../components/ContentRoot'
import styled from 'styled-components'
import { BORDER_RADIUS } from '@charcoal-ui/foundation'
import { theme } from '../../../utils/theme'
import { InlineCode } from '../../../components/InlineCode'
import { FlexDiv } from '../../../components/FlexDiv'

export default function BorderRadiusPage() {
  const { none, oval, ...pxItems } = BORDER_RADIUS
  const items = [...Object.entries(pxItems)].sort(([key1], [key2]) =>
    key1.padStart(3, '0').localeCompare(key2.padStart(3, '0'))
  )

  return (
    <ContentRoot>
      <h1>border-radius</h1>

      <h2>提供されている定数・関数・型</h2>
      <FlexDiv>
        <InlineCode>BORDER_RADIUS</InlineCode>
      </FlexDiv>

      <h3>BORDER_RADIUS</h3>
      <div>
        <p>
          <InlineCode>border-radius: BORDER_RADIUS["none"]</InlineCode>
        </p>
        <Box borderRadius={none} />
      </div>
      {items.map(([key, value]) => (
        <div key={`${key}-${value}`}>
          <p>
            <InlineCode>border-radius: BORDER_RADIUS[{key}]px</InlineCode>
          </p>
          <Box borderRadius={value} />
        </div>
      ))}

      <div>
        <p>
          <InlineCode>border-radius: BORDER_RADIUS["oval"]</InlineCode>
        </p>
        <Box borderRadius={oval} />
      </div>
    </ContentRoot>
  )
}

const Box = styled.div<{ borderRadius: number }>`
  width: 5rem;
  height: 5rem;
  border-radius: ${(props) => props.borderRadius}px;
  ${theme((o) => o.bg.brand)}
`
