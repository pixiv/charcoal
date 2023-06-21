import { FC } from 'react'
import { TextArea } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { InlineCode } from '../../../../components/InlineCode'
import { PreviewDivColumn } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ContentRoot } from '../../../../components/ContentRoot'
import { ApiTable } from '../_components/ApiTable'
import { PreviewsList } from '../_components/PreviewsList'
import { theme } from '../../../../utils/theme'
import styled from 'styled-components'

const TextAreaPage: FC = () => {
  return (
    <ContentRoot>
      <h1>TextArea</h1>
      <p>ユーザのテキスト入力を扱うコンポーネント</p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <TextArea label="TextArea" />
        <SSRHighlight
          lang="typescript"
          code={`<TextArea label="TextArea" />`}
        />
      </PreviewDivColumn>

      <PreviewsList
        sections={sections}
        renderer={(meta, i) => {
          return (
            <Inner>
              <TextArea key={i} {...meta.props} />
            </Inner>
          )
        }}
      />

      <h2>Props</h2>
      <p>
        <InlineCode>&lt;textarea&gt;</InlineCode>の
        <InlineCode>props</InlineCode>
        を継承しています。
      </p>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

const Inner = styled.div(theme((o) => o.width.full))

export default TextAreaPage
