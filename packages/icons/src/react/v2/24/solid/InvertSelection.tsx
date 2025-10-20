import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgInvertSelection = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.751 7.376a1.125 1.125 0 01-1.125-1.125 3.625 3.625 0 013.625-3.625 1.125 1.125 0 010 2.25c-.76 0-1.375.616-1.375 1.375 0 .622-.504 1.125-1.125 1.125zm0 9.252c-.621 0-1.125.504-1.125 1.125a3.625 3.625 0 003.625 3.625 1.125 1.125 0 000-2.25c-.76 0-1.375-.615-1.375-1.375 0-.62-.504-1.125-1.125-1.125zm17.58 1.125a1.125 1.125 0 00-2.25 0c0 .76-.615 1.375-1.374 1.375a1.125 1.125 0 100 2.25 3.625 3.625 0 003.625-3.625zM20.25 7.376c.621 0 1.125-.503 1.125-1.125a3.625 3.625 0 00-3.625-3.625 1.125 1.125 0 000 2.25c.76 0 1.375.616 1.375 1.375 0 .622.504 1.125 1.125 1.125zM4.876 9.75a1.125 1.125 0 00-2.25 0v.5a1.125 1.125 0 002.25 0v-.5zM20.25 8.625c.621 0 1.125.503 1.125 1.125v.5a1.125 1.125 0 01-2.25 0v-.5c0-.622.504-1.125 1.125-1.125zm-6-3.749a1.125 1.125 0 000-2.25h-.5a1.125 1.125 0 000 2.25h.5zm1.125 15.377c0 .622-.504 1.125-1.125 1.125h-.5a1.125 1.125 0 010-2.25h.5c.621 0 1.125.504 1.125 1.125zM4.876 13.75a1.125 1.125 0 10-2.25 0v.5a1.125 1.125 0 002.25 0v-.5zm15.374-1.125c.621 0 1.125.503 1.125 1.125v.5a1.125 1.125 0 01-2.25 0v-.5c0-.622.504-1.125 1.125-1.125zm-10-7.749a1.125 1.125 0 000-2.25h-.5a1.125 1.125 0 000 2.25h.5zm1.125 15.377c0 .622-.504 1.125-1.125 1.125h-.5a1.125 1.125 0 010-2.25h.5c.621 0 1.125.504 1.125 1.125zM9.25 7.25a2 2 0 00-2 2v5.5a2 2 0 002 2h5.5a2 2 0 002-2v-5.5a2 2 0 00-2-2h-5.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconInvertSelectionSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgInvertSelection)
export default IconInvertSelectionSolid
