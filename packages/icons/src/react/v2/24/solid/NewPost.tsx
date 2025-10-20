import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgNewPost = (
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
      d="M16.216 1.755c.28-.711 1.287-.711 1.568 0l1.262 3.2 3.198 1.261c.712.28.712 1.288 0 1.568l-3.198 1.262-1.262 3.199c-.28.711-1.288.711-1.568 0l-1.262-3.2-3.2-1.26c-.71-.281-.71-1.288 0-1.569l3.2-1.262 1.262-3.199zm-5.082 2.887L12.76 4H6.75A3.75 3.75 0 003 7.75v10a3.75 3.75 0 003.75 3.75h9.5A3.75 3.75 0 0020 17.75v-6.51l-.641 1.626c-.845 2.14-3.874 2.14-4.718 0l-.992-2.515-2.515-.992c-2.14-.844-2.14-3.873 0-4.717zM6.25 13a.75.75 0 01.75-.75h4a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75zm0 4a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H7a.75.75 0 01-.75-.75z"
      fill="currentColor"
    />
  </svg>
)
export const IconNewPostSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgNewPost)
export default IconNewPostSolid
