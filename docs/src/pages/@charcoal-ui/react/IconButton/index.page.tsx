import { FC } from 'react'
import { IconButton } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { PreviewDivColumn } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ContentRoot } from '../../../../components/ContentRoot'
import { PreviewsList } from '../_components/PreviewsList'
import { ApiTable } from '../_components/ApiTable'

const ButtonButtonPage: FC = () => {
  return (
    <ContentRoot>
      <h1>IconButton</h1>
      <p>アイコンボタン</p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <IconButton icon="24/Add"></IconButton>
        <SSRHighlight
          code={`
<IconButton icon="24/Add"></IconButton>
`.trimStart()}
          lang="typescript"
        />
      </PreviewDivColumn>

      <PreviewsList
        sections={sections}
        renderer={(meta, i, j) => {
          return <IconButton {...meta.props} key={`${i}${j}`}></IconButton>
        }}
      />

      <h2>Props</h2>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

export default ButtonButtonPage
