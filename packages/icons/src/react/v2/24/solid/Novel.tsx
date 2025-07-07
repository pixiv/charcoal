import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgNovel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.45 2A3.45 3.45 0 004 5.45v13.1A3.45 3.45 0 007.45 22h9.1A3.45 3.45 0 0020 18.55V5.45A3.45 3.45 0 0016.55 2h-9.1zM8 7.25a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8zm0 4a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8zM7.25 16a.75.75 0 01.75-.75h4a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconNovelSolid = forwardRef(SvgNovel)
export default IconNovelSolid
