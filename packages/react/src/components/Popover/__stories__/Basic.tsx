import { useRef, CSSProperties, useState } from 'react'
import { Story } from '../../../_lib/compat'
import Popover, { PopoverProps } from '..'
import Button from '../../Button'

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
          <div
            style={{
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Button
              onClick={() => {
                alert('ok')
                setIsOpen(false)
              }}
              variant="Primary"
            >
              ok
            </Button>
            <Button
              onClick={() => {
                alert('close')
                setIsOpen(false)
              }}
            >
              close
            </Button>
            <div
              style={{
                backgroundColor: 'red',
              }}
            ></div>
          </div>
        </Popover>
      )}
    </>
  )
}

export const Basic: Story<PopoverProps> = () => {
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
