import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowleftsquare = (
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
      d="M3 6.45A3.45 3.45 0 016.45 3h11.1A3.45 3.45 0 0121 6.45v11.1A3.45 3.45 0 0117.55 21H6.45A3.45 3.45 0 013 17.55V6.45zm5.81 4.8l2.22-2.22a.75.75 0 10-1.06-1.06l-3.5 3.5a.75.75 0 000 1.06l3.5 3.5a.75.75 0 101.06-1.06l-2.219-2.22h8.138a.75.75 0 100-1.5H8.81z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowLeftSquareSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArrowleftsquare)
export default IconArrowLeftSquareSolid
