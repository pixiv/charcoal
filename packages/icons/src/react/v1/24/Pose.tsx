import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13 5a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 11-2 0 1 1 0 012 0zM18.555 6.832a1 1 0 00-1.11-1.664l-12 8a1 1 0 001.11 1.664L9 13.202v2.447l-3.78 4.726a1 1 0 001.561 1.25l3.7-4.625h3.039l3.7 4.625a1 1 0 101.561-1.25l-3.78-4.726V9.202l3.554-2.37zM11 15v-3.132l2-1.333V15h-2z"
      fill="currentColor"
    />
    <path
      clipRule="evenodd"
      d="M13 5a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 11-2 0 1 1 0 012 0zM18.555 6.832a1 1 0 00-1.11-1.664l-12 8a1 1 0 001.11 1.664L9 13.202v2.447l-3.78 4.726a1 1 0 001.561 1.25l3.7-4.625h3.039l3.7 4.625a1 1 0 101.561-1.25l-3.78-4.726V9.202l3.554-2.37zM11 15v-3.132l2-1.333V15h-2z"
      stroke="#fff"
    />
  </svg>
)
export const IconPose24 = forwardRef(SvgPose)
export default IconPose24
