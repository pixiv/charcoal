import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDuplicate = (
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
      d="M3 6.75A3.75 3.75 0 016.75 3h7.5A3.75 3.75 0 0118 6.75v7.5A3.75 3.75 0 0114.25 18h-7.5A3.75 3.75 0 013 14.25v-7.5zM6.75 4.5A2.25 2.25 0 004.5 6.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-7.5zm-.001 15a3.744 3.744 0 003 1.5h7.5a3.75 3.75 0 003.75-3.75v-7.5a3.744 3.744 0 00-1.499-3v7.5l-.001.102v2.898a2.25 2.25 0 01-2.25 2.25h-10.5zM10.5 7a.75.75 0 01.75.75v2h2a.75.75 0 010 1.5h-2v2a.75.75 0 01-1.5 0v-2h-2a.75.75 0 010-1.5h2v-2A.75.75 0 0110.5 7z"
      fill="currentColor"
    />
  </svg>
)
export const IconDuplicate: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgDuplicate)
export default IconDuplicate
