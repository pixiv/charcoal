import { FC } from 'react'
import { TextField } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { InlineCode } from '../../../../components/InlineCode'
import { PreviewDivColumn } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ContentRoot } from '../../../../components/ContentRoot'
import { ApiTable } from '../_components/ApiTable'
import { PreviewsList } from '../_components/PreviewsList'

const TextFieldPage: FC = () => {
  return (
    <ContentRoot>
      <h1>Textfield</h1>
      <p>ユーザのテキスト入力を扱うコンポーネント</p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <TextField label="textfield" />
        <SSRHighlight
          lang="typescript"
          code={`<TextField label="textfield" />`}
        />
      </PreviewDivColumn>

      <PreviewsList
        sections={sections}
        renderer={(meta, i) => {
          return <TextField key={i} {...meta.props} />
        }}
      />

      <h2>Props</h2>
      <p>
        <InlineCode>&lt;input&gt;</InlineCode>の<InlineCode>props</InlineCode>
        を継承しています。
      </p>
      <p>
        <InlineCode>multiline</InlineCode>
        の時は<InlineCode>&lt;textarea&gt;</InlineCode>の
        <InlineCode>props</InlineCode>
        を継承しています。
      </p>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

export default TextFieldPage
