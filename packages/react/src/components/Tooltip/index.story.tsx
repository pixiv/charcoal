import React, { useRef } from 'react'
import Tooltip, { TooltipProps } from '.'
import { Story } from '../../_lib/compat'
import Button from '../Button'
import { ClickableElement } from '../Clickable'

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    top: {
      control: {
        type: 'number',
      },
    },
    left: {
      control: {
        type: 'number',
      },
    },
    direction: {
      control: {
        type: 'inline-radio',
        options: ['Up', 'Down'],
      },
    },
    crossOffset: {
      control: {
        type: 'number',
      },
    },
  },
}

type Props = Partial<TooltipProps & { top: number; left: number }>

export const Default: Story<Props> = ({ top, left, ...props }) => {
  const ref = useRef<ClickableElement>(null)

  return (
    <div style={{ position: 'absolute', top, left }}>
      <Tooltip content="ツールチップテキスト" {...props} triggerRef={ref}>
        <Button ref={ref} variant="Primary">
          Button
        </Button>
      </Tooltip>
    </div>
  )
}

export const MultiLine: Story<Omit<TooltipProps, 'triggerRef' | 'content'>> = (
  props
) => {
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
