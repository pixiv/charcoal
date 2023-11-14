import { useRef, CSSProperties, useState } from 'react'
import { Story } from '../../../_lib/compat'
import Popover, { PopoverProps } from '..'
import Button from '../../Button'
import { PopoverContent } from './Basic'

function Base(props: { style?: CSSProperties }) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)
  return (
    <>
      <Button
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true)
          }
        }}
        style={props.style}
        ref={triggerRef}
      >
        button
      </Button>
      {isOpen && (
        <Popover
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false)
          }}
          triggerRef={triggerRef}
        >
          <PopoverContent
            style={{
              minHeight: '500px',
            }}
            onClose={() => {
              setIsOpen(false)
            }}
          />
        </Popover>
      )}
    </>
  )
}

export const Overflow: Story<PopoverProps> = () => {
  return (
    <>
      {[
        { left: 16 },
        { right: 16 },
        { bottom: 16 },
        { bottom: 16, right: 16 },
        { left: '50%', top: '50%' },
      ].map((style, i) => (
        <Base key={i} style={{ position: 'absolute', ...style }} />
      ))}
    </>
  )
}
