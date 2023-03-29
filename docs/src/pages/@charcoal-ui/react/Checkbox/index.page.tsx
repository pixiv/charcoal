import { FC } from 'react'
import { Checkbox } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { PreviewDivColumn } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ContentRoot } from '../../../../components/ContentRoot'
import { PreviewsList } from '../_components/PreviewsList'
import { ApiTable } from '../_components/ApiTable'

const CheckboxPage: FC = () => {
  return (
    <ContentRoot>
      <h2>Checkbox </h2>
      <p>チェックボックスとして真偽値を扱う入力コンポーネント</p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <Checkbox label="checkbox">Checkbox</Checkbox>
        <SSRHighlight
          code={`<Checkbox label="checkbox">Checkbox</Checkbox>`}
          lang="typescript"
        />
      </PreviewDivColumn>

      <PreviewsList
        renderer={(meta, i, j) => (
          <Checkbox
            key={`${i}${j}`}
            {...meta.props}
            label={'label' + `${i}${j}`}
          >
            {typeof meta.children === 'function'
              ? meta.children()
              : meta.children}
          </Checkbox>
        )}
        sections={sections}
      />

      <h2>Props</h2>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

export default CheckboxPage
