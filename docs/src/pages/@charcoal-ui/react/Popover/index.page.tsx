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
import { Placement } from '@charcoal-ui/react/dist/components/Popover'
import { PreviewsList } from '../_components/PreviewsList'

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
          const [isOpen, setIsOpen] = useState(false)
          const ref = useRef(null)
          return (
            <>
              <Button ref={ref} onClick={() => setIsOpen(true)}>
                {meta.props.placement}
              </Button>
              {isOpen && (
                <Popover
                  triggerRef={ref}
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  placement={meta.props.placement as Placement}
                >
                  <div style={{ padding: 8 }}>
                    <TextField
                      label="text"
                      showLabel
                      assistiveText="assistiveText"
                    />
                  </div>
                </Popover>
              )}
            </>
          )
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
