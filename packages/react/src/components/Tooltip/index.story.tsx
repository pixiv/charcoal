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
    getRect: {
      type: null,
    },
  },
}

type Props = Partial<TooltipProps & { top: number; left: number }>

export const Default: Story<Props> = ({ top, left, ...props }) => {
  const ref = useRef<ClickableElement>(null)
  const getRect = () => {
    return (
      ref.current?.getBoundingClientRect() ?? {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0,
      }
    )
  }

  return (
    <div style={{ position: 'absolute', top, left }}>
      <Tooltip
        content="ツールチップテキスト"
        {...props}
        getRect={getRect}
        deps={[top, left]}
      >
        <Button ref={ref} variant="Primary">
          Button
        </Button>
      </Tooltip>
    </div>
  )
}

Default.args = {
  open: true,
  top: 16,
  left: 16,
}

export const MultiLine: Story<Omit<TooltipProps, "getRect" | "content">> = (props) => {
  const ref = useRef<ClickableElement>(null)
  const getRect = () => {
    return (
      ref.current?.getBoundingClientRect() ?? {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0,
      }
    )
  }

  return (
    <Tooltip
      {...props}
      content="ツールチップテキストは最大幅184 pxで改行"
      getRect={getRect}
    >
        <Button ref={ref} variant="Primary">
          Button
        </Button>
    </Tooltip>
  )
}

MultiLine.args = {
  open: false,
}