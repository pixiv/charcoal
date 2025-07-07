import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFace = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.26 4.782a7.168 7.168 0 00-6.007 0 .75.75 0 00.629 1.362 5.667 5.667 0 014.75 0 .75.75 0 00.629-1.362zm-15.827-.54a.75.75 0 000 1.5H4.9a6.271 6.271 0 016.27 6.272v2.38a.75.75 0 001.5 0v-2.38a7.771 7.771 0 00-7.77-7.772h-.468zm2.075 8.508c.686 0 1.242-.56 1.242-1.25s-.556-1.25-1.242-1.25h-.016c-.686 0-1.242.56-1.242 1.25s.556 1.25 1.242 1.25h.016zm11 0c.686 0 1.242-.56 1.242-1.25s-.556-1.25-1.242-1.25h-.016c-.686 0-1.242.56-1.242 1.25s.556 1.25 1.242 1.25h.016zm-11.67 4.542a.75.75 0 01.942.096 7.275 7.275 0 0010.286 0 .75.75 0 011.062 1.06h-.001a8.773 8.773 0 01-12.406.002l-.001-.001a.75.75 0 01.117-1.157z"
      fill="currentColor"
    />
  </svg>
)
export const IconFace = forwardRef(SvgFace)
export default IconFace
