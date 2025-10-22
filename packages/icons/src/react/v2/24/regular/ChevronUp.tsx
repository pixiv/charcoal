import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgChevronup = (
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
      d="M19.53 15.53a.75.75 0 01-1.06 0L12 9.06l-6.47 6.47a.75.75 0 01-1.06-1.06l7-7a.75.75 0 011.06 0l7 7a.75.75 0 010 1.06z"
      fill="currentColor"
    />
  </svg>
)
export const IconChevronUp: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgChevronup)
export default IconChevronUp
