import { NextPage } from 'next'
import { ContentRoot } from '../../../../components/ContentRoot'
import { PreviewDivColumn, PreviewSection } from '../_components/Previews'
import { getSrcFile } from '../_utils/getSrcFile'
import { ExamplePopover } from './ExamplePopover'
import { SSRHighlight } from '../../../../components/SSRHighlight'
import { ApiTable } from '../_components/ApiTable'
import { apiData } from './apiData'
import { Button, Popover, PopoverProps, TextField } from '@charcoal-ui/react'
import { useRef, useState } from 'react'
import { PreviewsList } from '../_components/PreviewsList'

function PreviewRenderer(props: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  return (
    <>
      <Button ref={ref} onClick={() => setIsOpen(true)}>
        {props.placement}
      </Button>
      {isOpen && (
        <Popover
          triggerRef={ref}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          placement={props.placement}
        >
          <div style={{ padding: 8 }}>
            <TextField label="text" showLabel assistiveText="assistiveText" />
          </div>
        </Popover>
      )}
    </>
  )
}

const PopoverPage: NextPage<{ src: string }> = (props) => {
  return (
    <ContentRoot>
      <h1>Popover</h1>

      <h2>BASIC</h2>
      <PreviewDivColumn>
        <ExamplePopover />
        <SSRHighlight code={props.src} lang="typescript" />
      </PreviewDivColumn>

      <PreviewsList
        renderer={(meta, _, __) => {
          return <PreviewRenderer {...meta.props} />
        }}
        sections={[
          {
            previewMetas: [
              'bottom',
              'bottom left',
              'bottom right',
              'top',
              'top left',
              'top right',
            ].map((dir) => {
              return {
                props: {
                  placement: dir,
                },
              }
            }),
            title: 'placement',
          } as PreviewSection<PopoverProps>,
        ]}
      />

      <h2>Props</h2>
      <ApiTable data={apiData} />
    </ContentRoot>
  )
}

export async function getStaticProps() {
  return { props: { src: getSrcFile('Popover/ExamplePopover.tsx') } }
}

export default PopoverPage
