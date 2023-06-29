import { sections } from './sections'
import { apiData, multiSelectApiData } from './apiData'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { InlineCode } from '../../../../components/InlineCode'
import { NextPage } from 'next'
import { getSrcFile } from '../_utils/getSrcFile'
import { PreviewDivColumn, PreviewMeta } from '../_components/Previews'
import {
  ExampleMultiSelect,
  StyledMultiSelectGroup,
} from './ExampleMultiSelect'
import { MultiSelect, MultiSelectGroupProps } from '@charcoal-ui/react'
import { useState } from 'react'
import { ApiTable } from '../_components/ApiTable'
import { ContentRoot } from '../../../../components/ContentRoot'
import { PreviewsList } from '../_components/PreviewsList'

function Preview(
  meta: PreviewMeta<MultiSelectGroupProps>,
  i: number,
  j: number
) {
  const [selectedValues, setSelectedValues] = useState<string[]>(['value1'])
  return (
    <StyledMultiSelectGroup
      {...meta.props}
      key={j}
      label={'multi-select' + j.toString()}
      name={'multi-select' + j.toString()}
      onChange={setSelectedValues}
      selected={selectedValues}
    >
      {meta.additionalData ? (
        meta.additionalData.propsList.map((props: any, i: number) => {
          return (
            <MultiSelect key={i} {...props}>
              {props.children}
            </MultiSelect>
          )
        })
      ) : (
        <>
          <MultiSelect key={'value1'} value="value1">
            value1
          </MultiSelect>
          <MultiSelect key={'value2'} value="value2">
            value2
          </MultiSelect>
          <MultiSelect key={'value3'} value="value3">
            value3
          </MultiSelect>
        </>
      )}
    </StyledMultiSelectGroup>
  )
}

const MultiSelectPage: NextPage<{ src: string }> = (props) => {
  return (
    <ContentRoot>
      <h1>MultiSelect</h1>
      <p>複数の選択肢を選ぶことができる選択コンポーネント</p>
      <p>
        <InlineCode>MultiSelectGroup</InlineCode>
        と合わせて使用してください。
      </p>
      <h2>BASIC</h2>

      <PreviewDivColumn>
        <ExampleMultiSelect />
        <SSRHighlight lang="typescript" code={props.src} />
      </PreviewDivColumn>

      <PreviewsList renderer={Preview} sections={sections} />

      <h2>Props (MultiSelectGroup) </h2>
      <ApiTable data={apiData} />
      <h2>Props (MultiSelect)</h2>
      <ApiTable data={multiSelectApiData} />
    </ContentRoot>
  )
}

export async function getStaticProps() {
  return { props: { src: getSrcFile('MultiSelect/ExampleMultiSelect.tsx') } }
}

export default MultiSelectPage
