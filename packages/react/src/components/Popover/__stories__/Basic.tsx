import { useRef, CSSProperties, useState } from 'react'
import { Story } from '../../../_lib/compat'
import Popover, { PopoverProps } from '..'
import Button from '../../Button'
import TextField from '../../TextField'

export function PopoverButton(
  props: { style?: CSSProperties; text?: string } & Partial<PopoverProps>
) {
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
        {props.text ?? 'open'}
      </Button>
      {isOpen && (
        <Popover
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false)
          }}
          triggerRef={triggerRef}
          {...props}
        >
          <PopoverContent
            onClose={() => {
              setIsOpen(false)
            }}
          />
        </Popover>
      )}
    </>
  )
}

export function PopoverContent({
  onClose,
  ...rest
}: { onClose: () => void } & React.ComponentProps<'div'>) {
  return (
    <div
      {...rest}
      style={{
        minWidth: '216px',
        boxSizing: 'border-box',
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '16px',
        ...rest.style,
      }}
    >
      <TextField label="text" showLabel placeholder="text" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Button onClick={onClose} variant="Primary">
          ok
        </Button>
      </div>
    </div>
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
        <PopoverButton key={i} style={{ position: 'absolute', ...style }} />
      ))}
    </>
  )
}
