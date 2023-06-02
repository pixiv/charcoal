import React, { useRef, CSSProperties, useState } from 'react'
import { Story } from '../../../_lib/compat'
import Popover, { PopoverProps } from '.'
import Button from '../../Button'

export default {
  title: 'DropdownSelector/Popover',
  component: Popover,
}

function Base(props: { style?: CSSProperties }) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
        style={props.style}
        ref={triggerRef}
      >
        button
      </Button>
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        triggerRef={triggerRef}
      >
        <div style={{ margin: '8px 16px' }}>Hello</div>
      </Popover>
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
