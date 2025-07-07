import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSun = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12.75 2a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0V2zm6.78 2.47a.75.75 0 010 1.06l-1 1a.75.75 0 11-1.06-1.06l1-1a.75.75 0 011.06 0zM4.47 19.53a.75.75 0 010-1.06l1-1a.75.75 0 011.06 1.06l-1 1a.75.75 0 01-1.06 0zm7.53-.28a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V20a.75.75 0 01.75-.75zM5.53 4.47a.75.75 0 00-1.06 1.06l1 1a.75.75 0 001.06-1.06l-1-1zm14 15.06a.75.75 0 01-1.06 0l-1-1a.75.75 0 111.06-1.06l1 1a.75.75 0 010 1.06zm.47-8.28a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H20zM1.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H2a.75.75 0 01-.75-.75zm5 0a5.75 5.75 0 1111.5 0 5.75 5.75 0 01-11.5 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconSunSolid = forwardRef(SvgSun)
export default IconSunSolid
