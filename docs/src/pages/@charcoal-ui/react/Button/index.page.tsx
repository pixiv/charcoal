import { FC } from 'react'
import { Button } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { PreviewDivColumn } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { InlineCode } from '../../../../components/InlineCode'
import { ContentRoot } from '../../../../components/ContentRoot'
import { PreviewsList } from '../_components/PreviewsList'
import { ApiTable } from '../_components/ApiTable'

const ButtonPage: FC = () => {
  return (
    <ContentRoot>
      <h2>Button</h2>
      <p>ボタンコンポーネント</p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <Button>button</Button>
        <SSRHighlight code={`<Button>button</Button>`} lang="typescript" />
      </PreviewDivColumn>

      <PreviewsList
        renderer={(meta, i) => (
          <Button key={i} {...meta.props}>
            {typeof meta.children === 'function'
              ? meta.children()
              : meta.children}
          </Button>
        )}
        sections={sections}
      />

      <h2>Props</h2>
      <p>
        <InlineCode>&lt;button&gt;</InlineCode>の<InlineCode>props</InlineCode>
        を継承しています
      </p>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

export default ButtonPage
