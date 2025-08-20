import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgThread = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.283 2.125a7.147 7.147 0 016.72 4.752l.23.65a8.032 8.032 0 00-2.1.063l-.015-.044a5.144 5.144 0 10-9.062 4.675l.252.36-.337 1.537 1.754-.364.306.149c.067.032.193.085.323.138.06.025.116.047.156.062l.046.019.012.004c.002 0 .003.001.003.002l.019.006a7.993 7.993 0 00-.061 2.121c-.31-.12-.62-.236-.927-.36a13.29 13.29 0 01-.116-.048l-4.13.857.815-3.712A7.144 7.144 0 019.283 2.125z"
      fill="currentColor"
    />
    <path
      d="M11 15.438a4.437 4.437 0 118.067 2.553l-.229.325.17 1.186-1.373-.196-.275.132a4.437 4.437 0 01-6.36-4zm-2 0a6.438 6.438 0 008.94 5.932l3.425.49-.437-3.06A6.438 6.438 0 109 15.438z"
      fill="currentColor"
    />
  </svg>
)
export const IconThread24 = forwardRef(SvgThread)
export default IconThread24
