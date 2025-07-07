import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeyboard = (
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
      d="M5.75 4A3.75 3.75 0 002 7.75v8.5A3.75 3.75 0 005.75 20h12.5A3.75 3.75 0 0022 16.25v-8.5A3.75 3.75 0 0018.25 4H5.75zM3.5 7.75A2.25 2.25 0 015.75 5.5h12.5a2.25 2.25 0 012.25 2.25v8.5a2.25 2.25 0 01-2.25 2.25H5.75a2.25 2.25 0 01-2.25-2.25v-8.5zm2.1 1.875a1 1 0 111.001 1H6.6a1 1 0 01-1-1zm2.7 0a1 1 0 111.001 1H9.3a1 1 0 01-1-1zm2.7 0a1 1 0 111.001 1h-.002a1 1 0 01-1-1zm2.7 0a1 1 0 111.001 1H14.7a1 1 0 01-1-1zm2.7 0a1 1 0 111.001 1h-.002a1 1 0 01-1-1zm-8.1 2.589a1 1 0 111.001 1H9.3a1 1 0 01-1-1zm-2.7 0a1 1 0 111.001 1H6.6a1 1 0 01-1-1zm5.4 0a1 1 0 111.001 1h-.002a1 1 0 01-1-1zm2.7 0a1 1 0 111.001 1H14.7a1 1 0 01-1-1zm2.7 0a1 1 0 111.001 1h-.002a1 1 0 01-1-1zm-1.098 4.355H8.698a.75.75 0 110-1.5h6.604a.75.75 0 010 1.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconKeyboard = forwardRef(SvgKeyboard)
export default IconKeyboard
