import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShareios = (
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
      d="M16.03 6.28a.75.75 0 01-1.06 0l-2.22-2.22V14a.75.75 0 01-1.5 0V4.06L9.03 6.28a.75.75 0 01-1.06-1.06l3.5-3.5a.75.75 0 011.06 0l3.5 3.5a.75.75 0 010 1.06zM5.5 12.25A2.25 2.25 0 017.75 10H8a.75.75 0 000-1.5h-.25A3.75 3.75 0 004 12.25v6A3.75 3.75 0 007.75 22h8.5A3.75 3.75 0 0020 18.25v-6a3.75 3.75 0 00-3.75-3.75H16a.75.75 0 000 1.5h.25a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25h-8.5a2.25 2.25 0 01-2.25-2.25v-6z"
      fill="currentColor"
    />
  </svg>
)
export const IconShareIos = forwardRef(SvgShareios)
export default IconShareIos
