import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDelete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11 3.55c-.69 0-1.25.56-1.25 1.25v.45h4.5V4.8c0-.69-.56-1.25-1.25-1.25h-2zM8.25 4.8v.45H3a.75.75 0 000 1.5h1.105l1.831 12.015a3.75 3.75 0 003.707 3.185h4.671a3.75 3.75 0 003.706-3.173L19.892 6.75H21a.75.75 0 000-1.5h-5.25V4.8A2.75 2.75 0 0013 2.05h-2A2.75 2.75 0 008.25 4.8zm2.5 6.2a.75.75 0 00-1.5 0v5a.75.75 0 001.5 0v-5zm3.25-.75a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconDeleteSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgDelete)
export default IconDeleteSolid
