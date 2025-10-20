import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgList = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.15 6.043a1 1 0 100-2 1 1 0 000 2zm4.1-1.75a.75.75 0 100 1.5h14a.75.75 0 100-1.5h-14zm0 6.957a.75.75 0 100 1.5h14a.75.75 0 100-1.5h-14zm-.75 7.706a.75.75 0 01.75-.75h14a.75.75 0 110 1.5h-14a.75.75 0 01-.75-.75zM4.15 12a1 1 0 11-2 0 1 1 0 012 0zm-1 7.956a1 1 0 100-2 1 1 0 000 2z"
      fill="currentColor"
    />
  </svg>
)
export const IconList: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgList)
export default IconList
