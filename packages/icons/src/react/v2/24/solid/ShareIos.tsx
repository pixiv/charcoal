import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShareios = (
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
      d="M7.75 8.5A3.75 3.75 0 004 12.25v6A3.75 3.75 0 007.75 22h8.5A3.75 3.75 0 0020 18.25v-6a3.75 3.75 0 00-3.75-3.75h-8.5zm7.22-2.22a.75.75 0 101.06-1.06l-3.5-3.5a.75.75 0 00-1.06 0l-3.5 3.5a.75.75 0 001.06 1.06l2.22-2.22V14a.75.75 0 001.5 0V4.06l2.22 2.22z"
      fill="currentColor"
    />
  </svg>
)
export const IconShareIosSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgShareios)
export default IconShareIosSolid
