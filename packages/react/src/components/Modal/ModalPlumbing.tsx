import { ModalContext } from '.'
import { DetailedHTMLProps, DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES, ForwardRefExoticComponent, HTMLAttributes, RefAttributes, RefObject, useContext } from 'react'

import './ModalPlumbing.css'
import { createDivComponent } from '../../_lib/createDivComponent'
import { JSX } from 'react/jsx-runtime'

export function ModalHeader(): JSX.Element {
  const modalCtx = useContext(ModalContext)
  return (
    <div
      className="charcoal-modal-header-root"
      data-bottom-sheet={modalCtx.bottomSheet}
    >
      <div className="charcoal-modal-header-title">{modalCtx.title}</div>
    </div>
  )
}

export const ModalAlign: ForwardRefExoticComponent<Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
  ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined
}, "ref"> & RefAttributes<HTMLDivElement>> = createDivComponent('charcoal-modal-align')

export const ModalBody: ForwardRefExoticComponent<Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
  ref?: RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | null | undefined
}, "ref"> & RefAttributes<HTMLDivElement>> = createDivComponent('charcoal-modal-body')

export const ModalButtons: ForwardRefExoticComponent<Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
  ref?: RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | null | undefined
}, "ref"> & RefAttributes<HTMLDivElement>> = createDivComponent('charcoal-modal-buttons')
