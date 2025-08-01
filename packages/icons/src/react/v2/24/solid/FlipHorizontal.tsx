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
      d="M12 2.25a.75.75 0 01.75.75v18a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zm5.919 4.327C18.975 5.339 21 6.086 21 7.713v8.414c0 1.658-2.092 2.386-3.122 1.086l-3.456-4.364a1.75 1.75 0 01.041-2.222l3.456-4.05zM3 7.713c0-1.627 2.025-2.374 3.081-1.136l3.456 4.05a1.75 1.75 0 01.04 2.222l-3.455 4.364C5.092 18.513 3 17.785 3 16.126V7.713z"
      fill="currentColor"
    />
  </svg>
)
export const IconFlipHorizontalSolid = forwardRef(SvgFliphorizontal)
export default IconFlipHorizontalSolid
