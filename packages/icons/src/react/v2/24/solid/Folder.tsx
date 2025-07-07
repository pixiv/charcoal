import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFolder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2.015 16.25A3.75 3.75 0 005.765 20h12.47a3.75 3.75 0 003.75-3.75V9.994a3.75 3.75 0 00-3.75-3.75h-5.339a1.25 1.25 0 01-.92-.404l-.873-.95a2.75 2.75 0 00-2.025-.889H5.765a3.75 3.75 0 00-3.75 3.75v8.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconFolderSolid = forwardRef(SvgFolder)
export default IconFolderSolid
