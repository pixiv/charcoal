import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgColorWheelrectangle = (
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
      d="M3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7 6.25a.75.75 0 00-.75.75v10c0 .414.336.75.75.75h10a.75.75 0 00.75-.75V7a.75.75 0 00-.75-.75H7zm.75 10v-8.5h8.5v8.5h-8.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconColorWheelRectangle: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgColorWheelrectangle)
export default IconColorWheelRectangle
