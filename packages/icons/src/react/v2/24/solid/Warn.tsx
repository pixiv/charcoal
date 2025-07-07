import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWarn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.62 6.187a3.467 3.467 0 116.76 0l-1.506 6.611a1.923 1.923 0 01-3.748 0l-1.507-6.61zm.628 12.73c0-1.497 1.256-2.669 2.751-2.669 1.496 0 2.751 1.172 2.751 2.67v.163c0 1.497-1.255 2.669-2.75 2.669-1.496 0-2.752-1.172-2.752-2.67v-.163z"
      fill="currentColor"
    />
  </svg>
)
export const IconWarnSolid = forwardRef(SvgWarn)
export default IconWarnSolid
