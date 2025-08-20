import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.845 4.27a1 1 0 000 1.413L23.162 8H14a9 9 0 000 18h4a1 1 0 100-2h-4a7 7 0 110-14h9.14l-2.295 2.295a1 1 0 001.415 1.414l4.72-4.72-4.72-4.72a1 1 0 00-1.415 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconRedo32 = forwardRef(SvgRedo)
export default IconRedo32
