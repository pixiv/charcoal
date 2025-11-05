import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm7.5-3.825c.456 0 .825.37.825.825v6a.825.825 0 01-1.65 0V9c0-.456.37-.825.825-.825zM15.325 9a.825.825 0 00-1.65 0v6a.825.825 0 001.65 0V9z"
      fill="currentColor"
    />
  </svg>
)
export const IconPauseSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPause)
export default IconPauseSolid
