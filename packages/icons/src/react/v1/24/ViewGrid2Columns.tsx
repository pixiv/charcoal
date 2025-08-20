import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgViewGrid2Columns = (
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
      d="M6 5a1 1 0 00-1 1v4.5a1 1 0 001 1h4.5a1 1 0 001-1V6a1 1 0 00-1-1H6zM13.5 5a1 1 0 00-1 1v4.5a1 1 0 001 1H18a1 1 0 001-1V6a1 1 0 00-1-1h-4.5zM5 13.5a1 1 0 011-1h4.5a1 1 0 011 1V18a1 1 0 01-1 1H6a1 1 0 01-1-1v-4.5zM13.5 12.5a1 1 0 00-1 1V18a1 1 0 001 1H18a1 1 0 001-1v-4.5a1 1 0 00-1-1h-4.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconViewGrid2Columns24 = forwardRef(SvgViewGrid2Columns)
export default IconViewGrid2Columns24
