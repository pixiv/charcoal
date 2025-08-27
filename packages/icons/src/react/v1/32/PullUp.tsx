import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPullUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.414 17.586a2 2 0 11-2.828 2.828L16 15.828l-4.586 4.586a2 2 0 01-2.828-2.828L16 10.172l7.414 7.414z"
      fill="currentColor"
    />
  </svg>
)
export const IconPullUp32 = forwardRef(SvgPullUp)
export default IconPullUp32
