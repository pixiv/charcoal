import React, { useRef, CSSProperties } from 'react'
import { Story } from '../../../_lib/compat'
import Popover, { PopoverProps } from '.'
import { useOverlayTriggerState } from 'react-stately'
import Button from '../../Button'

export default {
  title: 'Popover',
  component: Popover,
}

function Base(props: { style?: CSSProperties }) {
  const state = useOverlayTriggerState({})
  const triggerRef = useRef(null)
  return (
    <>
      <Button
        onClick={() => {
          state.open()
        }}
        style={props.style}
        ref={triggerRef}
      >
        button
      </Button>
      {state.isOpen && (
        <Popover state={state} triggerRef={triggerRef}>
          <h1 style={{ margin: '16px' }}>Hello</h1>
          <input autoFocus />
        </Popover>
      )}
    </>
  )
}

export const Basic: Story<PopoverProps> = () => {
  return (
    <>
      <Base
        style={{
          position: 'absolute',
        }}
      />
      <Base
        style={{
          position: 'absolute',
          right: 8,
        }}
      />
      <Base
        style={{
          position: 'absolute',
          bottom: 8,
        }}
      />
      <Base
        style={{
          position: 'absolute',
          right: 8,
          bottom: 8,
        }}
      />
    </>
  )
}
