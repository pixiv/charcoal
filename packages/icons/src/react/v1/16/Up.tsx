import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M10.504 13a1 1 0 01-1 1H6.502a1 1 0 01-1-1V8.5H2.5a.5.5 0 01-.347-.86L8 2l5.845 5.64a.5.5 0 01-.347.86h-2.995V13z"
      fill="currentColor"
    />
  </svg>
)
export const IconUp16: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgUp)
export default IconUp16
