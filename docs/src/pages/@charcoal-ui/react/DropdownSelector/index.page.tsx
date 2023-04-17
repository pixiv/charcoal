import { sections } from './sections'
import { apiData } from './apiData'
import { PreviewDivColumn, PreviewMeta } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ExampleDropdownSelector } from './ExampleDropdownSelector'
import { getSrcFile } from '../_utils/getSrcFile'
import { NextPage } from 'next'
import { InlineCode } from '../../../../components/InlineCode'
import { DropdownSelector, OptionItem } from '@charcoal-ui/react'
import { useState } from 'react'
import { ContentRoot } from '../../../../components/ContentRoot'
import { ApiTable } from '../_components/ApiTable'
import { PreviewsList } from '../_components/PreviewsList'
import { DropdownSelectorProps } from '@charcoal-ui/react'

function Preview(
  meta: PreviewMeta<DropdownSelectorProps>,
  i: number,
  j: number
) {
  const [selected, setSelected] = useState<string>('2')

  return (
    <div key={`${i}${j}`} style={{ width: '300px' }}>
      <DropdownSelector
        {...meta.props}
        onChange={(v) => setSelected(v)}
        value={selected}
      >
        <OptionItem value="1">option1</OptionItem>
        <OptionItem value="2">option2</OptionItem>
        <OptionItem value="3">option3</OptionItem>
      </DropdownSelector>
    </div>
  )
}

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

      <PreviewsList sections={sections} renderer={Preview} />

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
