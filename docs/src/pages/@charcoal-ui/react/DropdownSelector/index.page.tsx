import { sections } from './sections'
import { apiData } from './apiData'
import { PreviewDivColumn } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ExampleDropdownSelector } from './ExampleDropdownSelector'
import { getSrcFile } from '../_utils/getSrcFile'
import { NextPage } from 'next'
import { InlineCode } from '../../../../components/InlineCode'
import { DropdownSelector, DropdownSelectorItem } from '@charcoal-ui/react'
import { useState } from 'react'
import { ContentRoot } from '../../../../components/ContentRoot'
import { ApiTable } from '../_components/ApiTable'
import { PreviewsList } from '../_components/PreviewsList'

const DropdownSelectorPage: NextPage<{ src: string }> = (props) => {
  return (
    <ContentRoot>
      <h1>DropdownSelector</h1>
      <p>ドロップダウン形式の選択コンポーネント</p>
      <p>
        <InlineCode>DropdownSelectorItem</InlineCode>
        と合わせて使用してください。
      </p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <ExampleDropdownSelector />
        <SSRHighlight code={props.src} lang="typescript" />
      </PreviewDivColumn>

      <PreviewsList
        sections={sections}
        renderer={(meta, i, j) => {
          const [selected, setSelected] = useState<string>('option1')
          return (
            <div key={`${i}${j}`}>
              <DropdownSelector
                {...meta.props}
                onChange={(k) => setSelected(k.toString())}
                value={selected}
              >
                <DropdownSelectorItem key={'option1'}>
                  Option1
                </DropdownSelectorItem>
                <DropdownSelectorItem key={'option2'}>
                  Option2
                </DropdownSelectorItem>
                <DropdownSelectorItem key={'option3'}>
                  Option3
                </DropdownSelectorItem>
              </DropdownSelector>
            </div>
          )
        }}
      />

      <h2>Props</h2>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('DropdownSelector/ExampleDropdownSelector.tsx') },
  }
}
export default DropdownSelectorPage
