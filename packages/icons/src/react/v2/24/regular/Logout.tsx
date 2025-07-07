import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.75 3A3.75 3.75 0 003 6.75v10.5A3.75 3.75 0 006.75 21h5.5A3.75 3.75 0 0016 17.25V15.5a.75.75 0 00-1.5 0v1.75a2.25 2.25 0 01-2.25 2.25h-5.5a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 016.75 4.5h5.5a2.25 2.25 0 012.25 2.25V8.5a.75.75 0 001.5 0V6.75A3.75 3.75 0 0012.25 3h-5.5zm11.53 4.97a.75.75 0 10-1.06 1.06l2.22 2.22H11.5a.75.75 0 000 1.5h7.94l-2.22 2.22a.75.75 0 101.06 1.06l3.5-3.5a.75.75 0 000-1.06l-3.5-3.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconLogout = forwardRef(SvgLogout)
export default IconLogout
