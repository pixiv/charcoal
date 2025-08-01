import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.745 6.094C7.368 4.72 9.479 3.65 12.015 3.65c2.537 0 4.648 1.07 6.271 2.444 1.618 1.37 2.785 3.067 3.46 4.414.47.938.484 2.035.023 2.983-1.312 2.703-4.672 6.859-9.753 6.859-5.082 0-8.442-4.155-9.754-6.859a3.362 3.362 0 01.023-2.983c.675-1.347 1.842-3.044 3.46-4.414zM8.25 11.94a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconEyeSolid = forwardRef(SvgEye)
export default IconEyeSolid
