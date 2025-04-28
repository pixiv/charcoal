import { ForwardRefExoticComponent, DetailedHTMLProps, HTMLAttributes, DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES, RefObject, RefAttributes } from 'react'
import { createDivComponent } from '../../../_lib/createDivComponent'
import './index.css'

export const AssistiveText: ForwardRefExoticComponent<Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
  ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined
}, "ref"> & RefAttributes<HTMLDivElement>> = createDivComponent(
  'charcoal-text-field-assistive-text'
)
