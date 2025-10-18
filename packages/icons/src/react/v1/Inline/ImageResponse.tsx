import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgImageResponse = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={12}
    height={10}
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.793.293a1 1 0 011.414 0L11.914 5 7.207 9.707a1 1 0 01-1.414-1.414L8.086 6H4a2 2 0 00-2 2v1a1 1 0 11-2 0V8a4 4 0 014-4h4.086L5.793 1.707a1 1 0 010-1.414z"
      fill="currentColor"
    />
  </svg>
)
export const IconImageResponseInline: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgImageResponse)
export default IconImageResponseInline
