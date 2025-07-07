import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgColorWheelrectangle = (
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.75 6.75a1 1 0 00-1 1v8.5a1 1 0 001 1h8.5a1 1 0 001-1v-8.5a1 1 0 00-1-1h-8.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconColorWheelRectangleSolid = forwardRef(SvgColorWheelrectangle)
export default IconColorWheelRectangleSolid
