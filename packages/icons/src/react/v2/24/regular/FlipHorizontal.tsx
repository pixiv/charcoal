import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFliphorizontal = (
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
      d="M12.75 3a.75.75 0 00-1.5 0v18a.75.75 0 001.5 0V3zM3 7.713c0-1.627 2.025-2.374 3.081-1.136l3.456 4.05a1.75 1.75 0 01.04 2.222l-3.455 4.364C5.092 18.513 3 17.785 3 16.126V7.713zm1.94-.163a.25.25 0 00-.44.163v8.414c0 .236.299.34.446.155l3.456-4.364a.25.25 0 00-.006-.317L4.94 7.55zM21 7.713c0-1.627-2.025-2.374-3.081-1.136l-3.456 4.05a1.75 1.75 0 00-.04 2.222l3.455 4.364c1.03 1.3 3.122.572 3.122-1.087V7.713zm-1.94-.163a.25.25 0 01.44.163v8.414a.25.25 0 01-.446.155l-3.456-4.364a.25.25 0 01.006-.317l3.456-4.05z"
      fill="currentColor"
    />
  </svg>
)
export const IconFlipHorizontal = forwardRef(SvgFliphorizontal)
export default IconFlipHorizontal
