import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPenadd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.501 3.414a3.25 3.25 0 00-4.596 0L3.617 15.703a3.75 3.75 0 00-1.052 2.063l-.303 1.902a1.75 1.75 0 002.016 2.001l1.89-.314a3.75 3.75 0 002.036-1.048L20.501 8.011a3.25 3.25 0 000-4.597zM18 13.75a.75.75 0 01.75.75v2.75h2.75a.75.75 0 110 1.5h-2.75v2.75a.75.75 0 01-1.5 0v-2.75H14.5a.75.75 0 010-1.5h2.75V14.5a.75.75 0 01.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconPenAddSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPenadd)
export default IconPenAddSolid
