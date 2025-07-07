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
      d="M10.144 3c-1.493 0-2.869.885-3.43 2.296-.121.303-.238.605-.348.9h-.612a3.75 3.75 0 00-3.75 3.75v7.304A3.75 3.75 0 005.754 21h12.492a3.75 3.75 0 003.75-3.75V9.947a3.75 3.75 0 00-3.75-3.75h-.612c-.11-.296-.227-.598-.347-.9C16.725 3.884 15.349 3 13.857 3h-3.713zm-2.58 10.104a4.427 4.427 0 118.855 0 4.427 4.427 0 01-8.855 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconCameraSolid = forwardRef(SvgCamera)
export default IconCameraSolid
