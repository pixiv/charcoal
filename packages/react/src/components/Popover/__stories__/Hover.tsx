import { useRef, CSSProperties, useState } from 'react'
import { Story } from '../../../_lib/compat'
import Popover, { PopoverProps } from '..'
import Button from '../../Button'
import { PopoverContent } from './Basic'

function HoverPopover({ style }: { style?: CSSProperties }) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)
  let cancel: ReturnType<typeof setTimeout> | null = null
  return (
    <>
      <Button
        onMouseEnter={() => {
          if (cancel) clearTimeout(cancel)
          setIsOpen(true)
        }}
        onMouseLeave={() => {
          cancel = setTimeout(() => {
            setIsOpen(false)
          }, 300)
        }}
        ref={triggerRef}
        style={style}
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
            onMouseEnter={() => {
              if (cancel) clearTimeout(cancel)
            }}
            onMouseLeave={() => {
              cancel = setTimeout(() => {
                setIsOpen(false)
              }, 300)
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

export const Hover: Story<PopoverProps> = () => {
  return (
    <>
      {[
        { left: 16 },
        { right: 16 },
        { bottom: 16 },
        { bottom: 16, right: 16 },
        { left: '50%', top: '50%' },
      ].map((style, i) => (
        <HoverPopover key={i} style={{ position: 'absolute', ...style }} />
      ))}
    </>
  )
}
