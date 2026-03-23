import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLatestWorks = (
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
      d="M2 10l3.5 2 2 5 2-5 3.5-2-3.5-2-2.009-5L5.5 8 2 10zM11 14l3.5 2 2 5 2-5 3.5-2-3.5-2-2.009-5-1.991 5-3.5 2z"
      fill="currentColor"
    />
  </svg>
)
export const IconLatestWorks24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgLatestWorks)
export default IconLatestWorks24
