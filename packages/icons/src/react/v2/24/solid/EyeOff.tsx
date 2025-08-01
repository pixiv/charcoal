import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEyeoff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.53 2.532A.749.749 0 102.47 3.59l2.898 2.897a14.552 14.552 0 00-3.083 4.081 3.362 3.362 0 00-.023 2.983c1.312 2.704 4.672 6.86 9.753 6.86 2.141 0 3.977-.738 5.482-1.794l3.005 3.004a.749.749 0 001.059-1.059L3.53 2.532zm10.997 13.115L8.352 9.473a4.436 4.436 0 006.173 6.174zm7.242-2.095a14 14 0 01-2.055 3.064L7.84 4.743a9.043 9.043 0 014.174-1.032c2.537 0 4.648 1.07 6.271 2.445 1.618 1.37 2.785 3.067 3.46 4.413.47.938.483 2.035.023 2.983z"
      fill="currentColor"
    />
  </svg>
)
export const IconEyeOffSolid = forwardRef(SvgEyeoff)
export default IconEyeOffSolid
