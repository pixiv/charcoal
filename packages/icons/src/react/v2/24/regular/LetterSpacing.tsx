import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLetterSpacing = (
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
      d="M1.004 5.5a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v.964a.75.75 0 01-1.5 0V6.25H6.127v7.495h.568a.75.75 0 010 1.5H4.059a.75.75 0 010-1.5h.568V6.25H2.504v.214a.75.75 0 01-1.5 0V5.5zm13.246 0a.75.75 0 01.75-.75h7.246a.75.75 0 01.75.75v.964a.75.75 0 01-1.5 0V6.25h-2.123v7.495h.568a.75.75 0 110 1.5h-2.636a.75.75 0 110-1.5h.568V6.25H15.75v.214a.75.75 0 01-1.5 0V5.5zm-11.5 13a.75.75 0 01.75-.75h17a.75.75 0 010 1.5h-17a.75.75 0 01-.75-.75zm7.252-9.68l-1.88 1.82a.5.5 0 000 .72l1.88 1.82a.5.5 0 00.848-.36v-1.07h2.3v1.07a.5.5 0 00.848.36l1.88-1.82a.5.5 0 000-.72l-1.88-1.82a.5.5 0 00-.848.36v1.07h-2.3V9.18a.5.5 0 00-.848-.36z"
      fill="currentColor"
    />
  </svg>
)
export const IconLetterSpacing = forwardRef(SvgLetterSpacing)
export default IconLetterSpacing
