import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.848 7.449a2 2 0 012.804 2.853l-8.664 8.514-4.402-4.402a2 2 0 112.828-2.828l1.598 1.598 5.836-5.735z"
      fill="currentColor"
    />
  </svg>
)
export const IconCheck24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCheck)
export default IconCheck24
