import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.94 3.485c.949-1.527 3.171-1.527 4.12 0L16 6.602l3.563.88c1.746.43 2.432 2.544 1.273 3.92l-2.365 2.806.264 3.66c.13 1.794-1.668 3.1-3.334 2.423L12 18.908l-3.4 1.383c-1.666.677-3.464-.63-3.334-2.423l.264-3.66L3.165 11.4c-1.16-1.375-.473-3.488 1.273-3.92l3.563-.88L9.94 3.486zm2.847.792a.927.927 0 00-1.574 0L9.234 7.46c-.18.29-.466.497-.798.58l-3.638.898a.927.927 0 00-.487 1.496L6.727 13.3c.22.261.33.598.305.938l-.27 3.738a.927.927 0 001.273.925l3.472-1.412c.316-.128.67-.128.986 0l3.472 1.412a.927.927 0 001.273-.925l-.27-3.738c-.024-.34.085-.677.305-.938l2.416-2.866a.927.927 0 00-.487-1.496l-3.638-.899a1.309 1.309 0 01-.798-.58l-1.98-3.182z"
      fill="currentColor"
    />
  </svg>
)
export const IconStar = forwardRef(SvgStar)
export default IconStar
