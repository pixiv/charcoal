import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgChevronright = (
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
      d="M8.47 19.53a.75.75 0 010-1.06L14.94 12 8.47 5.53a.75.75 0 011.06-1.06l7 7a.75.75 0 010 1.06l-7 7a.75.75 0 01-1.06 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconChevronRight: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgChevronright)
export default IconChevronRight
