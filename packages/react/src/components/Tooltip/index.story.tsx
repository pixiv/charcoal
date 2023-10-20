import { useRef } from 'react'
import Tooltip, { TooltipProps } from '.'
import { Story } from '../../_lib/compat'
import Button from '../Button'
import { ClickableElement } from '../Clickable'

export default {
  title: 'Tooltip',
  component: Tooltip,
}

export const Default: Story<TooltipProps> = (props) => {
  const ref = useRef<ClickableElement>(null)

  return (
    <div
      style={{
        position: 'absolute',
        left: '64px',
        top: '32px',
      }}
    >
      <Tooltip {...props} content="ツールチップテキスト" triggerRef={ref}>
        <Button
          onClick={() => {
            alert('clicked')
          }}
        >
          Button
        </Button>
      </Tooltip>
    </div>
  )
}

export const MultiLine: Story<TooltipProps> = (props) => {
  const ref = useRef<ClickableElement>(null)

  return (
    <Tooltip
      {...props}
      content="ツールチップテキストは最大幅184 pxで改行"
      triggerRef={ref}
    >
      <Button ref={ref} variant="Primary">
        Button
      </Button>
    </Tooltip>
  )
}
