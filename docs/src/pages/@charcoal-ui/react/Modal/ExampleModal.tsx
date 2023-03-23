import { FC, useState } from 'react'
import {
  Button,
  Modal,
  ModalAlign,
  ModalBody,
  ModalHeader,
  OverlayProvider,
} from '@charcoal-ui/react'

export const ExampleModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open</Button>
      <OverlayProvider>
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
      </OverlayProvider>
    </>
  )
}
