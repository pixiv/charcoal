import { ContentRoot } from '../../../components/ContentRoot'
import { InlineCode } from '../../../components/InlineCode'
import { FlexDiv } from '../../../components/FlexDiv'
import { columnSystem, COLUMN_UNIT, GUTTER_UNIT } from '@charcoal-ui/foundation'
import styled from 'styled-components'
import { theme } from '../../../utils/theme'
import { SSRHighlight } from '../../../components/SSRHighlight'

export default function GridPage() {
  return (
    <ContentRoot>
      <h1>grid</h1>

      <h2>提供されている定数・関数・型</h2>
      <FlexDiv>
        <InlineCode>COLUMN_UNIT</InlineCode>
        <InlineCode>GUTTER_UNIT</InlineCode>
        <InlineCode>columnSystem</InlineCode>
      </FlexDiv>

      <h3>COLUMN_UNIT</h3>
      <p>
        <InlineCode>COLUMN_UNIT: {COLUMN_UNIT}px</InlineCode>
      </p>

      <h3>GUTTER_UNIT</h3>
      <p>
        <InlineCode>GUTTER_UNIT: {GUTTER_UNIT}px</InlineCode>
      </p>

      <h3>columnSystem</h3>
      <p>
        カラム数(span)とcolumn size、gutter sizeを与えると必要な幅を算出します。
      </p>

      <h4>使い方</h4>
      <p>実装例</p>
      <SSRHighlight lang="typescript" code={columnSystemCode} />

      <Row style={{ width: columnSystem(3, COLUMN_UNIT, GUTTER_UNIT) }}>
        <Col size={COLUMN_UNIT}>1</Col>
        <Col size={COLUMN_UNIT}>2</Col>
        <Col size={COLUMN_UNIT}>3</Col>
      </Row>
    </ContentRoot>
  )
}

const Row = styled.div`
  display: flex;
  ${theme((o) => [o.bg.surface10, o.margin.top(16)])};
`

const Col = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-right: ${GUTTER_UNIT}px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme((o) => o.bg.brand)}

  &:last-child {
    margin-right: 0;
  }
`

const columnSystemCode = `
import { columnSystem, COLUMN_UNIT, GUTTER_UNIT } from '@charcoal-ui/foundation'
import styled from 'styled-components'

const Component = () => (
  <Row style={{ width: columnSystem(3, COLUMN_UNIT, GUTTER_UNIT) }}>
    <Col size={COLUMN_UNIT}>1</Square>
    <Col size={COLUMN_UNIT}>2</Square>
    <Col size={COLUMN_UNIT}>3</Square>
  </Row>
)

const Row = styled.div\`
  display: flex;
\`

const Col = styled.div<{ size: number }>\`
  width: \${({ size }) => size}px;
  height: \${({ size }) => size}px;
  margin-right: ${GUTTER_UNIT}px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-right: 0;
  }
\`
`
