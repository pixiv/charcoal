import { useState } from 'react'
import { Switch, SwitchProps } from '@charcoal-ui/react'
import { sections } from './sections'
import { PreviewDivColumn, PreviewMeta } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ExampleSwitch } from './ExampleSwitch'
import { getSrcFile } from '../_utils/getSrcFile'
import { NextPage } from 'next'
import { ContentRoot } from '../../../../components/ContentRoot'
import { PreviewsList } from '../_components/PreviewsList'

function Preview(meta: PreviewMeta<SwitchProps>, i: number, j: number) {
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
}

const SwitchPage: NextPage<{ src: string }> = (props) => {
  return (
    <ContentRoot>
      <h1>Switch</h1>
      <p>スイッチとして真偽値を扱う入力コンポーネント</p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <div>
          <ExampleSwitch />
        </div>
        <SSRHighlight lang="typescript" code={props.src} />
      </PreviewDivColumn>

      <PreviewsList renderer={Preview} sections={sections} />
    </ContentRoot>
  )
}

export async function getStaticProps() {
  return {
    props: { src: getSrcFile('Switch/ExampleSwitch.tsx') },
  }
}

export default SwitchPage
