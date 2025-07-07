import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShareandroid = (
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
      d="M17.75 3.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM14.5 5.5a3.25 3.25 0 11.711 2.029L9.31 10.901a3.245 3.245 0 010 2.198l5.901 3.372a3.25 3.25 0 11-.642 1.36l-6.081-3.474a3.25 3.25 0 110-4.714l6.08-3.475A3.263 3.263 0 0114.5 5.5zm3.25 11.25a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM4.5 12A1.75 1.75 0 118 12a1.75 1.75 0 01-3.5 0z"
      fill="currentColor"
    />
  </svg>
)
export const IconShareAndroid = forwardRef(SvgShareandroid)
export default IconShareAndroid
