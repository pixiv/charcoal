import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgOpenInNew = (
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
      d="M18.941 9.503a1.19 1.19 0 102.381 0V3.846a1.19 1.19 0 00-1.19-1.19h-5.657a1.19 1.19 0 100 2.38h2.72l-7.079 7.08a1.25 1.25 0 001.768 1.768l7.057-7.058v2.677zm-7.48-3.756c0-.69-.56-1.25-1.25-1.25H6.75a4.25 4.25 0 00-4.25 4.25v8.5a4.25 4.25 0 004.25 4.25h8.497a4.25 4.25 0 004.25-4.25v-3.454a1.25 1.25 0 00-2.5 0v3.453a1.75 1.75 0 01-1.75 1.75H6.75A1.75 1.75 0 015 17.246V8.747c0-.966.784-1.75 1.75-1.75h3.461c.69 0 1.25-.56 1.25-1.25z"
      fill="currentColor"
    />
  </svg>
)
export const IconOpenInNewSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgOpenInNew)
export default IconOpenInNewSolid
