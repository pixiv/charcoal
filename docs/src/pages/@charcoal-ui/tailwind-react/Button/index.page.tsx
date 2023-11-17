import { FC } from 'react'
import { ContentRoot } from '../../../../components/ContentRoot'
import { PreviewDivColumn } from '../../react/_components/Previews'
import { Button } from '@charcoal-ui/tailwind-react'
import { SSRHighlight } from '../../../../components/SSRHighlight'

const ButtonPage: FC = () => {
  return (
    <ContentRoot>
      <h2>BASIC</h2>
      <PreviewDivColumn>
        <Button>button</Button>
        <SSRHighlight code={`<Button>button</Button>`} lang="typescript" />
      </PreviewDivColumn>
    </ContentRoot>
  )
}

export default ButtonPage
