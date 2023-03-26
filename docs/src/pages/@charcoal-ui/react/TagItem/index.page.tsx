import { FC } from 'react'
import { TagItem } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { PreviewDivColumn } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ContentRoot } from '../../../../components/ContentRoot'
import { ApiTable } from '../_components/ApiTable'
import { PreviewsList } from '../_components/PreviewsList'

const TagItemPage: FC = () => {
  return (
    <ContentRoot>
      <h1> TagItem </h1>
      <p>リンクとしての振る舞いをするタグコンポーネント</p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <div>
          <TagItem label="tag"></TagItem>
        </div>
        <SSRHighlight
          lang="typescript"
          code={`<TagItem label="tag"></TagItem>`}
        />
      </PreviewDivColumn>

      <PreviewsList
        renderer={(meta, i) => {
          return <TagItem {...meta.props} key={i} />
        }}
        sections={sections}
      />

      <h2>Props</h2>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

export default TagItemPage
