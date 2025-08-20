import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgImages = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2 5a2 2 0 012-2h7a2 2 0 012 2v3c-1.267 0-2.35.785-2.79 1.895L9 10.5 6 9l-2 .993V13h6v2H4a2 2 0 01-2-2V5zm7.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 21a2 2 0 01-2-2v-8a2 2 0 012-2h7a2 2 0 012 2v8a2 2 0 01-2 2h-7zm0-5.007L15 15l3 1.5 2-1V19h-7v-3.007zM18.5 11a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      fill="currentColor"
    />
  </svg>
)
export const IconImages24 = forwardRef(SvgImages)
export default IconImages24
