import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.502 5.752a2.25 2.25 0 012.25-2.25h9.477c.69 0 1.25.56 1.25 1.25V15.57H7.216a3.2 3.2 0 00-1.714.495V5.752zm14.477-1v12.233c0 .402-.15.79-.422 1.085l-.168.183a.732.732 0 00.093 1.074c1.126.869.512 2.672-.91 2.672H7.215a3.215 3.215 0 01-3.214-3.291V5.752a3.75 3.75 0 013.75-3.75h9.477a2.75 2.75 0 012.75 2.75zM7.216 17.07H18.44l-.155.17a2.232 2.232 0 00.26 3.26H7.217a1.715 1.715 0 010-3.43zM9 6.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9zm0 4a.75.75 0 000 1.5h3a.75.75 0 000-1.5H9z"
      fill="currentColor"
    />
  </svg>
)
export const IconBook = forwardRef(SvgBook)
export default IconBook
