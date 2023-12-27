import { useRef, CSSProperties, useState } from 'react'
import Popover from '.'
import Button from '../../Button'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'DropdownSelector/Popover',
  component: Popover,
} as Meta<typeof Popover>

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

export const Basic: StoryObj = {
  render: () => (
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
  ),
}
