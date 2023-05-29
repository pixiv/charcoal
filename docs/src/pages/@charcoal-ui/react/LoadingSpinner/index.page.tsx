import { FC } from 'react'
import { LoadingSpinner } from '@charcoal-ui/react'
import { sections } from './sections'
import { apiData } from './apiData'
import { css } from 'styled-components'
import { theme } from '../../../../utils/theme'
import { PreviewDivColumn, PreviewMeta } from '../_components/Previews'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ContentRoot } from '../../../../components/ContentRoot'
import { ApiTable } from '../_components/ApiTable'
import { PreviewsList } from '../_components/PreviewsList'

const ButtonPage: FC = () => {
  return (
    <ContentRoot>
      <h1>LoadingSpinner</h1>
      <p>読み込み中や通信中であることを示すコンポーネント</p>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <div
          css={css`
            padding: 32px;
            ${theme((o) => o.bg.surface6)}
          `}
        >
          <LoadingSpinner />
        </div>
        <SSRHighlight
          code={`
<LoadingSpinner />
`.trimStart()}
          lang="typescript"
        />
      </PreviewDivColumn>

      <PreviewsList
        renderer={(meta, i) => {
          return (
            <div
              key={i}
              css={css`
                padding: 32px;
                ${theme((o) => o.bg.surface6)}
              `}
            >
              <LoadingSpinner {...meta.props}></LoadingSpinner>
            </div>
          )
        }}
        sections={sections}
      />

      <h2>Props</h2>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

export default ButtonPage
