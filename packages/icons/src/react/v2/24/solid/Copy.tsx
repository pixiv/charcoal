import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14.25 3a.75.75 0 000 1.5h1.5c.69 0 1.25.56 1.25 1.25v1.5h1.5v-1.5A2.75 2.75 0 0015.75 3h-1.5zm-8.5 14h1.5v1.5h-1.5A2.75 2.75 0 013 15.75v-1.5a.75.75 0 011.5 0v1.5c0 .69.56 1.25 1.25 1.25zM4.5 10A.75.75 0 003 10v1.5a.75.75 0 001.5 0V10zm4.75-6.25A.75.75 0 0110 3h1.5a.75.75 0 010 1.5H10a.75.75 0 01-.75-.75zM5.75 3A2.75 2.75 0 003 5.75v1.5a.75.75 0 001.5 0v-1.5c0-.69.56-1.25 1.25-1.25h1.5a.75.75 0 000-1.5h-1.5zm5.75 5.75a2.75 2.75 0 00-2.75 2.75v7a2.75 2.75 0 002.75 2.75h7a2.75 2.75 0 002.75-2.75v-7a2.75 2.75 0 00-2.75-2.75h-7z"
      fill="currentColor"
    />
  </svg>
)
export const IconCopySolid = forwardRef(SvgCopy)
export default IconCopySolid
