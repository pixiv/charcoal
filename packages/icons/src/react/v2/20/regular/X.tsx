import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.134 4.927a.75.75 0 00-1.06-1.06L10 8.938 4.927 3.866a.75.75 0 00-1.06 1.06L8.938 10l-5.073 5.073a.75.75 0 101.06 1.06L10 11.062l5.073 5.073a.75.75 0 101.06-1.06L11.062 10l5.073-5.073z"
      fill="currentColor"
    />
  </svg>
)
export const IconX20: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgX)
export default IconX20
