import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPencil = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.674 18.123l.767-3.833 7.247-7.247 4.243 4.242 1.414-1.414-4.242-4.243 1.414-1.414a2 2 0 012.828 0l1.415 1.414a2 2 0 010 2.829L9.682 18.533l-3.832.766a1 1 0 01-1.177-1.176z"
      fill="currentColor"
    />
  </svg>
)
export const IconPencil24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPencil)
export default IconPencil24
