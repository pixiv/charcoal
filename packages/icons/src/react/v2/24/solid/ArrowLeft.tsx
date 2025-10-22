import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowleft = (
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
      d="M11.634 6.384a1.25 1.25 0 00-1.768-1.768l-6.5 6.5a1.25 1.25 0 000 1.768l6.5 6.5a1.25 1.25 0 001.768-1.768L7.268 13.25H19.5a1.25 1.25 0 100-2.5H7.268l4.366-4.366z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowLeftSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArrowleft)
export default IconArrowLeftSolid
