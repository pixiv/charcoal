import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWarntriangle = (
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
      d="M9.614 4.394c1.058-1.84 3.713-1.839 4.77.002L21.52 16.83c1.053 1.833-.27 4.119-2.385 4.119H4.848c-2.115 0-3.438-2.288-2.384-4.121l7.15-12.435zm3.468.748a1.25 1.25 0 00-2.167 0l-7.15 12.435a1.25 1.25 0 001.083 1.873h14.288a1.25 1.25 0 001.085-1.872L13.082 5.142zM12 8.437a.75.75 0 01.75.75v4.6a.75.75 0 01-1.5 0v-4.6a.75.75 0 01.75-.75zm.03 9.263c.53 0 .96-.448.96-1s-.43-1-.96-1h-.078c-.531 0-.961.448-.961 1s.43 1 .96 1h.078z"
      fill="currentColor"
    />
  </svg>
)
export const IconWarnTriangle: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgWarntriangle)
export default IconWarnTriangle
