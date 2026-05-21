import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowRight = (
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
      d="M20.004 12l-6.707 6.707a1 1 0 01-1.414-1.414L16.176 13H5a1 1 0 110-2h11.176l-4.293-4.293a1 1 0 011.414-1.414L20.004 12z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowRight24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArrowRight)
export default IconArrowRight24
