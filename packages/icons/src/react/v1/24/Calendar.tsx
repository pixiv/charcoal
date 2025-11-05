import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCalendar = (
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
      d="M8 3a1 1 0 00-2 0v1.126C4.275 4.57 3 6.136 3 8v10a4 4 0 004 4h10a4 4 0 004-4V8a4.002 4.002 0 00-3-3.874V3a1 1 0 10-2 0v1H8V3zm-3 7v8a2 2 0 002 2h10a2 2 0 002-2v-8H5z"
      fill="currentColor"
    />
  </svg>
)
export const IconCalendar24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgCalendar)
export default IconCalendar24
