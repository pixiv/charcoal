import { sections } from './sections'
import { apiData, optionValueApiData } from './apiData'
import { PreviewDivColumn, PreviewMeta } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ExampleDropdownSelector } from './ExampleDropdownSelector'
import { getSrcFile } from '../_utils/getSrcFile'
import { NextPage } from 'next'
import { InlineCode } from '../../../../components/InlineCode'
import { DropdownSelector, DropdownMenuItem } from '@charcoal-ui/react'
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

  const children =
    'length' in meta.props.children
      ? meta.props.children.length > 0
        ? meta.props.children
        : [...Array(3)].map((_, i) => (
            <DropdownMenuItem key={i} value={`${i + 1}`}>
              option{i + 1}
            </DropdownMenuItem>
          ))
      : []

  return (
    <div key={`${i}${j}`} style={{ width: '300px' }}>
      <DropdownSelector
        {...meta.props}
        onChange={(v: string) => setSelected(v)}
        value={selected}
      >
        {children}
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
        <InlineCode>DropdownMenuItem</InlineCode>
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
      <h2>Props (DropdownMenuItem)</h2>
      <ApiTable data={optionValueApiData} />
    </ContentRoot>
  )
}

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('DropdownSelector/ExampleDropdownSelector.tsx') },
  }
}
export default DropdownSelectorPage
