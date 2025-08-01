import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSync = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17.923 2.04a.75.75 0 00-.664.827l.234 2.267a8.716 8.716 0 00-5.514-1.96c-3.7 0-6.859 2.302-8.162 5.553a.75.75 0 001.393.558c1.085-2.708 3.71-4.61 6.769-4.61 1.863 0 3.563.705 4.855 1.868l-2.795.199a.75.75 0 00-.69.805.75.75 0 00.798.698l4.363-.31a.742.742 0 00.518-.267.758.758 0 00.17-.562l-.455-4.393a.75.75 0 00-.82-.672zM6.036 21.955a.75.75 0 00.664-.827l-.234-2.267a8.716 8.716 0 005.514 1.96c3.7 0 6.859-2.301 8.162-5.552a.75.75 0 00-1.393-.558c-1.085 2.708-3.71 4.61-6.769 4.61a7.227 7.227 0 01-4.855-1.869l2.795-.198a.75.75 0 00.69-.805.75.75 0 00-.798-.699l-4.363.31a.742.742 0 00-.518.267.757.757 0 00-.17.562l.455 4.393a.75.75 0 00.82.673z"
      fill="currentColor"
    />
  </svg>
)
export const IconSync = forwardRef(SvgSync)
export default IconSync
