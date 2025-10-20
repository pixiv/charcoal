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
      d="M14.902 3.414a3.25 3.25 0 114.596 4.597L7.201 20.307a3.75 3.75 0 01-2.036 1.048l-1.89.314a1.75 1.75 0 01-2.016-2l.303-1.903a3.75 3.75 0 011.052-2.063L14.902 3.414zm3.536 1.061a1.75 1.75 0 00-2.475 0L3.674 16.763a2.25 2.25 0 00-.63 1.238l-.303 1.903a.25.25 0 00.288.285l1.89-.314a2.25 2.25 0 001.222-.628L18.437 6.95a1.75 1.75 0 000-2.475zM18 13.75a.75.75 0 01.75.75v2.75h2.75a.75.75 0 110 1.5h-2.75v2.75a.75.75 0 01-1.5 0v-2.75H14.5a.75.75 0 010-1.5h2.75V14.5a.75.75 0 01.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconPenAdd: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgPenadd)
export default IconPenAdd
