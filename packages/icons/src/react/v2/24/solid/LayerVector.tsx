import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayervector = (
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
      d="M10.547 2.67a2.714 2.714 0 012.906 0l7.745 4.911a1.727 1.727 0 010 2.917l-7.745 4.911a2.714 2.714 0 01-2.906 0L2.802 10.5a1.727 1.727 0 010-2.918l7.745-4.911zM4.019 12.73l-1.217.773a1.727 1.727 0 000 2.917l7.745 4.91c.887.563 2.02.563 2.906 0l7.745-4.91a1.727 1.727 0 000-2.917l-1.217-.772-5.867 3.72a3.948 3.948 0 01-4.228 0l-5.867-3.72zM11.464 7a.5.5 0 111 0 .5.5 0 01-1 0zm.5-1.5a1.5 1.5 0 00-1.336.818H8.472a.5.5 0 000 1H9.8a3.207 3.207 0 00-.905 1.421 1.5 1.5 0 101.021.114 2.214 2.214 0 01.815-.998 1.498 1.498 0 002.467-.001 2.216 2.216 0 01.816.999 1.5 1.5 0 101.02-.114 3.214 3.214 0 00-.904-1.421h1.326a.5.5 0 100-1H13.3a1.5 1.5 0 00-1.336-.818zM8.75 10.197a.5.5 0 111 0 .5.5 0 01-1 0zm5.918-.5h.012a.5.5 0 11-.012 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconLayerVectorSolid = forwardRef(SvgLayervector)
export default IconLayerVectorSolid
