import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTextAlignright = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M3.004 4.753a.75.75 0 01.75-.75h16.492a.75.75 0 010 1.5H3.754a.75.75 0 01-.75-.75zm17.242 5.582H12a.75.75 0 110-1.5h8.246a.75.75 0 010 1.5zm-17.242 4.08a.75.75 0 01.75-.75h16.492a.75.75 0 010 1.5H3.754a.75.75 0 01-.75-.75zm8.778 4.832a.75.75 0 01.75-.75h7.714a.75.75 0 010 1.5h-7.714a.75.75 0 01-.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconTextAlignRight: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgTextAlignright)
export default IconTextAlignRight
