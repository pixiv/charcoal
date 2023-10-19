import { FC, useRef, useState } from 'react'
import { Button, Popover } from '@charcoal-ui/react'

export const ExamplePopover: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  return (
    <>
      <Button ref={ref} onClick={() => setIsOpen(true)}>
        open
      </Button>
      {isOpen && (
        <Popover
          triggerRef={ref}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div
            style={{
              padding: 8,
            }}
          >
            <Button onClick={() => setIsOpen(false)}>close</Button>
          </div>
        </Popover>
      )}
    </>
  )
}
