import { useState } from 'react'
import { Switch } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { PreviewDivColumn } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ExampleSwitch } from './ExampleSwitch'
import { getSrcFile } from '../_utils/getSrcFile'
import { NextPage } from 'next'
import { ContentRoot } from '../../../../components/ContentRoot'
import { ApiTable } from '../_components/ApiTable'
import { PreviewsList } from '../_components/PreviewsList'

const SwitchPage: NextPage<{ src: string }> = (props) => {
  return (
    <ContentRoot>
      <h1>Switch</h1>
      <p>スイッチとして真偽値を扱う入力コンポーネント</p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <ExampleSwitch />
        <SSRHighlight lang="typescript" code={props.src} />
      </PreviewDivColumn>

      <PreviewsList
        renderer={(meta, i, j) => {
          const [checked, setChecked] = useState(false)
          return (
              <Switch
                {...meta.props}
                key={`${i}${j}`}
                name={`switch${i}${j}`}
                label={`switch${i}${j}`}
                onChange={setChecked}
                checked={checked}
              >
                switch
              </Switch>
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
    props: { src: getSrcFile('Switch/ExampleSwitch.tsx') },
  }
}

export default SwitchPage
