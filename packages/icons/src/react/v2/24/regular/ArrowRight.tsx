import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowright = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      d="M12.47 18.47a.75.75 0 101.06 1.06l7-7a.75.75 0 000-1.06l-7-7a.75.75 0 10-1.06 1.06l5.72 5.72H4a.75.75 0 000 1.5h14.19l-5.72 5.72z"
      fill="currentColor"
    />
  </svg>
)
export const IconArrowRight: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgArrowright)
export default IconArrowRight
