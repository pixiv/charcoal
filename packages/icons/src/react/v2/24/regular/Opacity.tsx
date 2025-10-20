import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgOpacity = (
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
      d="M5.572 13.304h2.571v-2.576H5.572v2.576zM5.572 3A2.575 2.575 0 003 5.576h2.572V3zM10.714 3H8.143v2.576h2.571V3zM15.857 3h-2.571v2.576h2.571V3zM21 5.576A2.575 2.575 0 0018.43 3v2.576H21zM15.857 5.576v2.576h2.572V5.576h-2.572z"
      fill="currentColor"
    />
    <path
      d="M10.714 5.576v2.576h2.572V5.576h-2.572zM8.143 5.576H5.572v2.576h2.571V5.576zM3 8.152v2.576h2.572V8.152H3zM10.714 8.152H8.143v2.576h2.571V8.152zM3 13.304v2.575h2.572v-2.575H3zM10.714 13.304H8.143v2.575h2.571v-2.575zM8.143 15.88H5.572v2.575h2.571V15.88zM5.572 21v-2.545H3A2.545 2.545 0 005.545 21h.027zM8.143 21h2.571v-2.545H8.143V21zM13.286 10.728h-2.572v2.576h2.572v-2.576zM18.429 8.152v2.576H21V8.152H18.43zM13.286 8.152v2.576h2.571V8.152h-2.571zM15.857 10.728v2.576h2.572v-2.576h-2.572zM15.857 13.304h-2.571v2.575h2.571v-2.575z"
      fill="currentColor"
    />
    <path
      d="M13.286 15.88h-2.572v2.575h2.572V15.88zM13.286 21h2.571v-2.545h-2.571V21zM18.429 15.88h-2.572v2.575h2.572V15.88zM21 18.455H18.43V21h.027A2.545 2.545 0 0021 18.455zM21 13.304H18.43v2.575H21v-2.575z"
      fill="currentColor"
    />
  </svg>
)
export const IconOpacity: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgOpacity)
export default IconOpacity
