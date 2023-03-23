import { FC } from 'react'
import { Icon } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { KNOWN_ICON_FILES } from '@charcoal-ui/icons'
import styled from 'styled-components'
import { theme } from '../../../../utils/theme'
import { PreviewDiv, PreviewDivColumn } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { PreviewsList } from '../_components/PreviewsList'
import { ContentRoot } from '../../../../components/ContentRoot'
import { ApiTable } from '../_components/ApiTable'

function filtered(f: (str: string) => boolean) {
  return KNOWN_ICON_FILES.filter(f).map((name) => {
    return (
      <IconPreviewBoxDiv key={name}>
        <Icon name={name} />
        <IconNameDiv>{name}</IconNameDiv>
      </IconPreviewBoxDiv>
    )
  })
}

const IconPage: FC = () => {
  const inline = filtered((name) => name.startsWith('Inline'))
  const px16 = filtered((name) => name.startsWith('16'))
  const px24 = filtered((name) => name.startsWith('24'))
  const px32 = filtered((name) => name.startsWith('32'))
  return (
    <ContentRoot>
      <h1>Icon</h1>
      <p>アイコン</p>
      <h2>BASIC</h2>
      <PreviewDivColumn>
        <Icon name="16/Add"></Icon>
        <SSRHighlight
          code={`
<Icon name="16/Add" />
`.trimStart()}
          lang="typescript"
        />
      </PreviewDivColumn>

      <div>
        <h3>Inline</h3>
        <PreviewDiv>{inline}</PreviewDiv>
        <h3>16</h3>
        <PreviewDiv>{px16}</PreviewDiv>
        <h3>24</h3>
        <PreviewDiv>{px24}</PreviewDiv>
        <h3>32</h3>
        <PreviewDiv>{px32}</PreviewDiv>
      </div>

      <PreviewsList
        sections={sections}
        renderer={(meta, i) => {
          return <Icon {...meta.props} key={i} />
        }}
      />

      <h2>Props</h2>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

const IconNameDiv = styled.div`
  ${theme((o) => o.font.text1)}
  margin-top: 8px;
  font-size: 12px;
`

const IconPreviewBoxDiv = styled.div`
  text-align: center;
  display: inline;
  position: relative;
  padding: 8px;
  ${theme((o) => o.border.default)}
`

export default IconPage
