import { useState } from 'react'
import { Radio } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData, apiDataRadio } from './apiData'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { InlineCode } from '../../../../components/InlineCode'
import { PreviewDivColumn } from '../_components/Previews'
import { NextPage } from 'next'
import { ExampleRadio, StyledRadioGroup } from './ExampleRadio'
import { getSrcFile } from '../_utils/getSrcFile'
import { ApiTable } from '../_components/ApiTable'
import { ContentRoot } from '../../../../components/ContentRoot'
import { PreviewsList } from '../_components/PreviewsList'

const RadioPage: NextPage<{ src: string }> = (props) => {
  return (
    <ContentRoot>
      <h1> Radio</h1>

      <p>一つの選択肢を選ぶことができる選択コンポーネント</p>
      <p>
        <InlineCode>RadioGroup</InlineCode>と合わせて使用してください。
      </p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <ExampleRadio />
        <SSRHighlight lang="typescript" code={props.src} />
      </PreviewDivColumn>

      <PreviewsList
        renderer={(meta, _, j) => {
          const [value, setValue] = useState<string>('value1')
          return (
            <StyledRadioGroup
              {...meta.props}
              key={j}
              label={'radio' + j.toString()}
              name={'radio' + j.toString()}
              onChange={setValue}
              value={value}
            >
              <Radio key={'value1'} value="value1">
                value1
              </Radio>
              <Radio key={'value2'} value="value2">
                value2
              </Radio>
              <Radio key={'value3'} value="value3">
                value3
              </Radio>
            </StyledRadioGroup>
          )
        }}
        sections={sections}
      />

      <h2>Props (RadioGroup)</h2>
      <ApiTable data={apiData} />
      <h2>Props (Radio)</h2>
      <ApiTable data={apiDataRadio} />
    </ContentRoot>
  )
}

export async function getStaticProps() {
  return { props: { src: getSrcFile('Radio/ExampleRadio.tsx') } }
}

export default RadioPage
