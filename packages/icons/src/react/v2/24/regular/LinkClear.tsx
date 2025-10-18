import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLinkclear = (
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
      d="M9.225 2a.75.75 0 01.75.75V4.6a.75.75 0 01-1.5 0V2.75a.75.75 0 01.75-.75zM3.607 3.607a.75.75 0 011.06 0l1.309 1.308a.75.75 0 01-1.06 1.061L3.606 4.668a.75.75 0 010-1.06zM2 9.225a.75.75 0 01.75-.75H4.6a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm16.65 5.55a.75.75 0 01.75-.75h1.85a.75.75 0 010 1.5H19.4a.75.75 0 01-.75-.75zm-.626 3.249a.75.75 0 011.06 0l1.309 1.308a.75.75 0 11-1.06 1.06l-1.309-1.307a.75.75 0 010-1.061zm-3.249.626a.75.75 0 01.75.75v1.85a.75.75 0 01-1.5 0V19.4a.75.75 0 01.75-.75zM13.012 4.304a4.779 4.779 0 116.758 6.759l-2.215 2.215a.75.75 0 01-1.061-1.06l2.216-2.216a3.279 3.279 0 10-4.637-4.637L11.907 7.53l-.507.508a.75.75 0 01-1.061-1.06l.507-.508 2.166-2.166zM4.307 19.768a4.779 4.779 0 006.758 0l2.238-2.238a.75.75 0 10-1.06-1.06l-2.238 2.237a3.279 3.279 0 01-4.637-4.637l2.162-2.163a.75.75 0 00-1.06-1.06l-2.163 2.162a4.779 4.779 0 000 6.759z"
      fill="currentColor"
    />
  </svg>
)
export const IconLinkClear: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgLinkclear)
export default IconLinkClear
