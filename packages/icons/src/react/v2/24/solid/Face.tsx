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
      d="M20.47 4.328a7.668 7.668 0 00-6.426 0 1.25 1.25 0 001.047 2.27 5.168 5.168 0 014.332 0 1.25 1.25 0 001.047-2.27zM4.433 3.742a1.25 1.25 0 000 2.5H4.9a5.771 5.771 0 015.771 5.772v2.38a1.25 1.25 0 102.5 0v-2.38a8.271 8.271 0 00-8.271-8.272h-.468zM6.51 13C7.333 13 8 12.328 8 11.5S7.333 10 6.51 10h-.02C5.667 10 5 10.672 5 11.5S5.667 13 6.49 13h.02zm11 0c.823 0 1.49-.672 1.49-1.5s-.667-1.5-1.49-1.5h-.02c-.823 0-1.49.672-1.49 1.5s.667 1.5 1.49 1.5h.02zm-6.256 5.985a6.774 6.774 0 01-4.12-1.95 1.244 1.244 0 00-.884-.367 1.25 1.25 0 00-.884 2.134 9.272 9.272 0 006.557 2.716m-.67-2.533a6.773 6.773 0 005.46-1.95 1.246 1.246 0 011.767 0 1.25 1.25 0 010 1.767 9.273 9.273 0 01-6.557 2.716"
      fill="currentColor"
    />
  </svg>
)
export const IconFaceSolid = forwardRef(SvgFace)
export default IconFaceSolid
