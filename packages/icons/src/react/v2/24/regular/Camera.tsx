import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.713 5.296C7.275 3.886 8.651 3 10.143 3h3.713c1.493 0 2.869.885 3.43 2.296.12.303.238.605.348.9h.612a3.75 3.75 0 013.75 3.75v7.304a3.75 3.75 0 01-3.75 3.75H5.754a3.75 3.75 0 01-3.75-3.75V9.947a3.75 3.75 0 013.75-3.75h.612c.11-.296.227-.598.347-.9zm3.43-.796c-.904 0-1.711.535-2.036 1.351-.185.464-.359.922-.508 1.344a.75.75 0 01-.707.502H5.754a2.25 2.25 0 00-2.25 2.25v7.303a2.25 2.25 0 002.25 2.25h12.492a2.25 2.25 0 002.25-2.25V9.947a2.25 2.25 0 00-2.25-2.25h-1.138a.75.75 0 01-.707-.502c-.149-.422-.323-.88-.508-1.344-.325-.816-1.132-1.351-2.037-1.351h-3.712zm1.848 5.426a3.177 3.177 0 100 6.355 3.177 3.177 0 000-6.355zm-4.677 3.178a4.677 4.677 0 119.355 0 4.677 4.677 0 01-9.355 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconCamera = forwardRef(SvgCamera)
export default IconCamera
