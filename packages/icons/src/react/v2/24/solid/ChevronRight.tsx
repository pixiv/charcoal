import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgChevronright = (
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
      d="M8.116 19.884a1.25 1.25 0 010-1.768L14.232 12 8.116 5.884a1.25 1.25 0 111.768-1.768l7 7a1.25 1.25 0 010 1.768l-7 7a1.25 1.25 0 01-1.768 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconChevronRightSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgChevronright)
export default IconChevronRightSolid
