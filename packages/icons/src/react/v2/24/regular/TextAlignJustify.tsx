import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTextAlignjustify = (
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
      d="M3.004 4.753a.75.75 0 01.75-.75h16.492a.75.75 0 010 1.5H3.754a.75.75 0 01-.75-.75zm0 4.832a.75.75 0 01.75-.75h16.492a.75.75 0 010 1.5H3.754a.75.75 0 01-.75-.75zm0 4.83a.75.75 0 01.75-.75h16.492a.75.75 0 010 1.5H3.754a.75.75 0 01-.75-.75zm0 4.832a.75.75 0 01.75-.75h16.492a.75.75 0 010 1.5H3.754a.75.75 0 01-.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconTextAlignJustify = forwardRef(SvgTextAlignjustify)
export default IconTextAlignJustify
