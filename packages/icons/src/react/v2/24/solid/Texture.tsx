import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTexture = (
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
      d="M21 8.73l-3.241.003v2.553H21V8.73zm0 4.056h-3.993l-2.798-.005.005 2.504H21v-2.499zm0 4h-7.536l-2.195-.005V21h6.281A3.45 3.45 0 0021 17.55v-.765zM9.769 21v-4.22H3v.77A3.45 3.45 0 006.45 21h3.319zM3 15.28h3.194v-2.513H3v2.513zm0-4.013h3.945l2.792.005-.005-2.543H3v2.538zM21 7.23v-.78A3.45 3.45 0 0017.55 3h-3.336v4.235h2.794L21 7.23zM12.714 3H6.45A3.45 3.45 0 003 6.45v.78l7.48-.001h.002l2.232.004V3zm.75 5.735h2.795v2.55l-2.8-.005-2.223-.005-.004-2.545 2.23.005h.002zm-5.77 4.033l2.795.006 2.22.004.005 2.506-2.194-.004H7.694v-2.512z"
      fill="currentColor"
    />
  </svg>
)
export const IconTextureSolid: ReturnType<
  typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>
> = forwardRef(SvgTexture)
export default IconTextureSolid
