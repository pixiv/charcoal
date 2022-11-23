import React from 'react'
import Tooltip from '.'

export default {
  title: 'Tooltip',
  component: Tooltip,
}

export const Default = () => {
  return (
    <Tooltip content="ツールチップテキスト">
      <div style={{ width: 200, height: 22 }}>aaa</div>
    </Tooltip>
  )
}
export const MultiLine = () => {
  return (
    <Tooltip content="ツールチップテキストは最大幅184 pxで改行">
      <div style={{ width: 200, height: 22 }}>aaa</div>
    </Tooltip>
  )
}
