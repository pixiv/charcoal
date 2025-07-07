import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.031 4.043a4.925 4.925 0 00-6.965 0l-2.77 2.77a.75.75 0 101.061 1.06l2.77-2.77a3.425 3.425 0 114.844 4.844l-2.297 2.296a3.889 3.889 0 01-5.5 0 .75.75 0 00-1.06 1.06 5.389 5.389 0 007.621 0l2.296-2.295a4.925 4.925 0 000-6.965zM4.046 20.028a4.925 4.925 0 006.965 0l2.77-2.77a.75.75 0 10-1.061-1.06l-2.77 2.77a3.425 3.425 0 01-4.843-4.844l2.296-2.296a3.889 3.889 0 015.5 0 .75.75 0 001.06-1.06 5.389 5.389 0 00-7.621 0l-2.296 2.295a4.925 4.925 0 000 6.965z"
      fill="currentColor"
    />
  </svg>
)
export const IconLink = forwardRef(SvgLink)
export default IconLink
