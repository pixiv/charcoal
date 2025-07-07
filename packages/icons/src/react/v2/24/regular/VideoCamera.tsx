import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVideoCamera = (
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
      d="M5.75 4.75A3.75 3.75 0 002 8.5v7a3.75 3.75 0 003.75 3.75h7.5A3.75 3.75 0 0017 15.5v-.086l2.375 1.37c1.167.674 2.625-.168 2.625-1.515V8.73c0-1.346-1.458-2.188-2.625-1.515L17 8.586V8.5a3.75 3.75 0 00-3.75-3.75h-7.5zM17 10.461v3.077c0 .09.048.172.125.216l3 1.731a.25.25 0 00.375-.216V8.73a.25.25 0 00-.375-.216l-3 1.73a.25.25 0 00-.125.216zm-1.5 0V8.5a2.25 2.25 0 00-2.25-2.25h-7.5A2.25 2.25 0 003.5 8.5v7a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-1.96-3.078-.002z"
      fill="currentColor"
    />
  </svg>
)
export const IconVideoCamera = forwardRef(SvgVideoCamera)
export default IconVideoCamera
