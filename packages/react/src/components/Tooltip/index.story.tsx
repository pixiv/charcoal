import React, { useRef } from 'react'
import Tooltip, { TooltipProps } from '.'
import { Story } from '../../_lib/compat'
import Button from '../Button'
import { ClickableElement } from '../Clickable'

export default {
  title: 'Tooltip',
  component: Tooltip,
}

type Props = Partial<TooltipProps>

export const Default: Story<Props> = (props) => {
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
      content="ツールチップテキスト"
      {...props}
      getRect={props.getRect ?? getRect}
      relative={props.relative ?? true}
    >
      <Button ref={ref} variant="Primary">
        Button
      </Button>
    </Tooltip>
  )
}

export const MultiLine = () => {
  const ref = useRef<HTMLDivElement>(null)
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
      content="ツールチップテキストは最大幅184 pxで改行"
      relative
      getRect={getRect}
    >
      <div style={{ width: 200, height: 22 }} ref={ref}>
        aaa
      </div>
    </Tooltip>
  )
}
