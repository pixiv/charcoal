import { SegmentedControl } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { PreviewDivColumn } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { getSrcFile } from '../_utils/getSrcFile'
import { NextPage } from 'next'
import { ExampleSegmentedControl } from './ExampleSegmentedControl'
import { ContentRoot } from '../../../../components/ContentRoot'
import { ApiTable } from '../_components/ApiTable'
import { PreviewsList } from '../_components/PreviewsList'

const SegmentedControlPage: NextPage<{ src: string }> = (props) => {
  return (
    <ContentRoot>
      <h1>SegmentedControl</h1>
      <p>複数の要素のうち1つを選択状態を示すコンポーネント</p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <ExampleSegmentedControl />
        <SSRHighlight lang="typescript" code={props.src}></SSRHighlight>
      </PreviewDivColumn>

      <PreviewsList
        renderer={(meta, i) => {
          return (
            <SegmentedControl
              {...meta.props}
              key={i}
              data={['option1', 'option2', 'option3']}
              defaultValue="option1"
            />
          )
        }}
        sections={sections}
      />
      <h2>Props</h2>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('SegmentedControl/ExampleSegmentedControl.tsx') },
  }
}

export default SegmentedControlPage
