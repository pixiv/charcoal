import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBookmark = (
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
      d="M7.75 2.75A3.75 3.75 0 004 6.5v13.16c0 1.387 1.538 2.223 2.702 1.468l5.162-3.346a.25.25 0 01.272 0l5.162 3.346c1.164.755 2.702-.08 2.702-1.468V6.5a3.75 3.75 0 00-3.75-3.75h-8.5z"
      fill="currentColor"
    />
  </svg>
)
export const IconBookmarkSolid = forwardRef(SvgBookmark)
export default IconBookmarkSolid
