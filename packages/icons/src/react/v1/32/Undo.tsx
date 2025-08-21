import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.155 4.27a1 1 0 010 1.413L8.838 8H18a9 9 0 010 18h-4a1 1 0 110-2h4a7 7 0 100-14H8.86l2.295 2.295a1 1 0 01-1.415 1.414l-4.72-4.72 4.72-4.72a1 1 0 011.415 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconUndo32 = forwardRef(SvgUndo)
export default IconUndo32
