import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgIndex = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 7a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1zM9 12a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1zM10 16a1 1 0 100 2h9a1 1 0 100-2h-9z"
      fill="currentColor"
    />
    <rect x={4} y={5.5} width={3} height={3} rx={1.5} fill="currentColor" />
    <rect x={4} y={10.5} width={3} height={3} rx={1.5} fill="currentColor" />
    <rect x={4} y={15.5} width={3} height={3} rx={1.5} fill="currentColor" />
  </svg>
)
export const IconIndex24 = forwardRef(SvgIndex)
export default IconIndex24
