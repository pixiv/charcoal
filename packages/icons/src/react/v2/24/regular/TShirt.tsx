import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTShirt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.68 4.839a1.062 1.062 0 00-.379.41A3.732 3.732 0 0112 7.251a3.731 3.731 0 01-3.278-1.959 1.027 1.027 0 00-.365-.389c-.13-.076-.22-.076-.28-.058l-4.395 1.32a.25.25 0 00-.178.24v2.754c0 .805.749 1.4 1.533 1.218a1.455 1.455 0 011.784 1.417v5.452c0 .69.56 1.25 1.25 1.25h7.859c.69 0 1.25-.56 1.25-1.25v-5.515c0-.927.869-1.609 1.77-1.389a1.25 1.25 0 001.546-1.214V6.393a.25.25 0 00-.174-.238l-4.348-1.377c-.062-.02-.156-.02-.294.06zm-.76-1.294c.413-.242.948-.374 1.506-.197l4.348 1.377a1.75 1.75 0 011.222 1.668v2.735a2.75 2.75 0 01-3.316 2.691v5.427a2.75 2.75 0 01-2.75 2.75H8.07a2.75 2.75 0 01-2.75-2.75V11.85a2.75 2.75 0 01-3.316-2.691V6.405A1.75 1.75 0 013.25 4.729l4.394-1.32c1.098-.33 2.016.467 2.396 1.167A2.231 2.231 0 0012 5.75c.85 0 1.595-.482 1.974-1.201a2.56 2.56 0 01.946-1.005z"
      fill="currentColor"
    />
  </svg>
)
export const IconTShirt = forwardRef(SvgTShirt)
export default IconTShirt
