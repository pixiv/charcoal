import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgOpacitylock = (
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
      d="M3 5.576A2.575 2.575 0 015.572 3v2.576H3zm5.143 0H5.572v2.576H3v2.576h2.572v2.576H3v2.575h2.572v2.576H3A2.545 2.545 0 005.545 21h.027v-2.545h2.571V21h2.571v-2.545H12.6v-.276c0-.763.258-1.453.686-2.003v-.296h.26a3.4 3.4 0 01.717-.556c0-.745.22-1.438.596-2.02h-1.573v-2.576h2.571v1.542a3.71 3.71 0 012.572-.645v-.897H21V8.152H18.43V5.576H21A2.575 2.575 0 0018.43 3v2.576h-2.572V3h-2.571v2.576h-2.572V3H8.143v2.576zm0 2.576V5.576h2.571v2.576H8.143zm0 2.576V8.152H5.572v2.576h2.571zm2.571 0H8.143v2.576H5.572v2.575h2.571v2.576h2.571V15.88h2.572v-2.576h-2.572v-2.576zm0 0V8.152h2.572v2.576h-2.572zm5.143-2.576V5.576h-2.571v2.576h2.571zm-5.143 5.152v2.575H8.143v-2.575h2.571zm5.143-5.152v2.576h2.572V8.152h-2.572zm2.133 6.39a.785.785 0 00-.785.784v1.036h1.57v-1.036a.785.785 0 00-.785-.785zm-2.227.784v1.049c-.936.104-1.663.872-1.663 1.803v2.905c0 1.003.843 1.816 1.882 1.816h4.015c1.04 0 1.883-.813 1.883-1.816v-2.905c0-.931-.727-1.699-1.663-1.803v-1.049a2.227 2.227 0 00-4.454 0zm2.227 5.273c.554 0 1.004-.433 1.004-.968 0-.535-.45-.969-1.004-.969s-1.004.434-1.004.969c0 .535.45.968 1.004.968z"
      fill="currentColor"
    />
  </svg>
)
export const IconOpacityLock = forwardRef(SvgOpacitylock)
export default IconOpacityLock
