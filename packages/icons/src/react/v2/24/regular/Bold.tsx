import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.188 4.25a1 1 0 011-1h7.153c2.602 0 4.577 2.26 4.577 4.875a5.053 5.053 0 01-1.405 3.517c1.393.853 2.3 2.461 2.3 4.233 0 2.616-1.976 4.875-4.577 4.875H6.187a1 1 0 01-1-1V4.25zM13.34 13H7.188v5.75h7.048c1.349 0 2.576-1.21 2.576-2.875S15.585 13 14.236 13h-.895zm-6.153-2h6.153c1.35 0 2.577-1.21 2.577-2.875S14.691 5.25 13.341 5.25H7.188V11z"
      fill="currentColor"
    />
  </svg>
)
export const IconBold = forwardRef(SvgBold)
export default IconBold
