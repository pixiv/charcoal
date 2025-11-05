import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSquaredash = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M2.626 6.251a1.125 1.125 0 002.25 0c0-.76.616-1.375 1.375-1.375a1.125 1.125 0 000-2.25 3.625 3.625 0 00-3.625 3.625zm0 11.502a1.125 1.125 0 012.25 0c0 .76.616 1.375 1.375 1.375a1.125 1.125 0 010 2.25 3.625 3.625 0 01-3.625-3.625zm17.58-1.125c.622 0 1.126.504 1.126 1.125a3.625 3.625 0 01-3.625 3.625 1.125 1.125 0 110-2.25c.76 0 1.375-.616 1.375-1.375 0-.621.503-1.125 1.125-1.125zm1.169-10.377a1.125 1.125 0 01-2.25 0c0-.76-.616-1.375-1.375-1.375a1.125 1.125 0 010-2.25 3.625 3.625 0 013.625 3.625zM3.75 8.625c.621 0 1.125.503 1.125 1.125v.5a1.125 1.125 0 01-2.25 0v-.5c0-.622.504-1.125 1.125-1.125zM21.375 9.75a1.125 1.125 0 00-2.25 0v.5a1.125 1.125 0 002.25 0v-.5zm-6-5.999c0 .621-.504 1.125-1.125 1.125h-.5a1.125 1.125 0 010-2.25h.5c.621 0 1.125.504 1.125 1.125zM14.25 21.378a1.125 1.125 0 100-2.25h-.5a1.125 1.125 0 000 2.25h.5zM3.751 12.624c.621 0 1.125.504 1.125 1.125v.5a1.125 1.125 0 01-2.25 0v-.5c0-.62.504-1.125 1.125-1.125zm17.624 1.125a1.125 1.125 0 00-2.25 0v.5a1.125 1.125 0 002.25 0v-.5zm-10-9.998c0 .621-.504 1.125-1.125 1.125h-.5a1.125 1.125 0 010-2.25h.5c.621 0 1.125.504 1.125 1.125zM10.25 21.378a1.125 1.125 0 100-2.25h-.5a1.125 1.125 0 000 2.25h.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconSquareDashSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgSquaredash)
export default IconSquareDashSolid
