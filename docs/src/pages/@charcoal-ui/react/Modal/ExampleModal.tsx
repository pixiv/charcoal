import { FC, useState } from 'react'
import {
  Button,
  Modal,
  ModalAlign,
  ModalBody,
  ModalHeader,
  OverlayProvider,
} from '@charcoal-ui/react'
import { useIsSSR } from './useIsSSR'

export const ExampleModal: FC = () => {
  const isSSR = useIsSSR()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open</Button>
      <OverlayProvider>
        {!isSSR && (
          <Modal
            title="modal"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            portalContainer={
              typeof document !== 'undefined' ? document.body : undefined
            }
          >
            <ModalBody>
              <ModalHeader />
              <ModalAlign>
                <Button onClick={() => setIsOpen(false)}>close</Button>
              </ModalAlign>
            </ModalBody>
          </Modal>
        )}
      </OverlayProvider>
    </>
  )
}
