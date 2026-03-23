import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14.095 4.456a.75.75 0 00-1.19-.912L2.638 16.935c-.883 1.152-.062 2.815 1.389 2.815H21a.75.75 0 000-1.5h-7.636a8.744 8.744 0 00-4.141-7.439l4.872-6.355zm-5.79 7.553l-4.477 5.839a.25.25 0 00.199.402h7.837a7.247 7.247 0 00-3.559-6.241z"
      fill="currentColor"
    />
  </svg>
)
export const IconAngle: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgAngle)
export default IconAngle
