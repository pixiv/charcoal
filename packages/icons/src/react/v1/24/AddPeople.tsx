import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAddPeople = (
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
      d="M17 3a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V8h-2a1 1 0 110-2h2V4a1 1 0 011-1z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 14.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm0 0c-3.038 0-5.5 2.381-5.5 5.318V20a1 1 0 001 1h9a1 1 0 001-1v-.182c0-2.937-2.462-5.318-5.5-5.318z"
      fill="currentColor"
    />
  </svg>
)
export const IconAddPeople24: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgAddPeople)
export default IconAddPeople24
