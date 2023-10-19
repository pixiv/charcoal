import { useRef, useState } from 'react'
import { Story } from '../../../_lib/compat'
import Popover, { Placement, PopoverProps } from '..'
import Button from '../../Button'

function Base(props: { placement: Placement }) {
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
        ref={triggerRef}
      >
        {props.placement}
      </Button>
      {isOpen && (
        <Popover
          placement={props.placement}
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
              style={{
                width: 228,
              }}
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

export const Dir: Story<PopoverProps> = () => {
  return (
    <div
      style={{
        width: 'calc(100vw - 2rem)',
        height: 'calc(100vh - 2rem)',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: '24px',
        }}
      >
        {['top right', 'top', 'top left'].map((style, i) => (
          <Base key={i} placement={style as Placement} />
        ))}
      </div>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: '24px',
        }}
      >
        {['bottom right', 'bottom', 'bottom left'].map((style, i) => (
          <Base key={i} placement={style as Placement} />
        ))}
      </div>
    </div>
  )
}
