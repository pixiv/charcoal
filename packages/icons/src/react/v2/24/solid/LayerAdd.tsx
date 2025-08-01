import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayeradd = (
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
      d="M13.454 2.67a2.714 2.714 0 00-2.907 0L2.802 7.581a1.727 1.727 0 000 2.917l7.745 4.911c.406.258.863.397 1.325.42a6.503 6.503 0 017.513-4.181l1.813-1.15a1.727 1.727 0 000-2.917L13.453 2.67zM9.886 16.451c.52.33 1.096.526 1.684.59a6.56 6.56 0 00-.07.96c0 1.364.42 2.63 1.139 3.676-.704.17-1.46.055-2.092-.346L2.802 16.42a1.727 1.727 0 010-2.917l1.217-.772 5.867 3.72zM18 23.001a5 5 0 100-10 5 5 0 000 10zm.5-7.75a.5.5 0 00-1 0v2.25h-2.25a.5.5 0 100 1h2.25v2.25a.5.5 0 101 0V18.5h2.25a.5.5 0 100-1H18.5v-2.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconLayerAddSolid = forwardRef(SvgLayeradd)
export default IconLayerAddSolid
