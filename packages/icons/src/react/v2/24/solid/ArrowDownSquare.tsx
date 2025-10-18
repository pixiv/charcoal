import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowdownsquare = (
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
      d="M3 6.45A3.45 3.45 0 016.45 3h11.1A3.45 3.45 0 0121 6.45v11.1A3.45 3.45 0 0117.55 21H6.45A3.45 3.45 0 013 17.55V6.45zm9-.149a.75.75 0 01.75.75v8.388l2.22-2.22a.75.75 0 111.06 1.061l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V7.05a.75.75 0 01.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowDownSquareSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArrowdownsquare)
export default IconArrowDownSquareSolid
