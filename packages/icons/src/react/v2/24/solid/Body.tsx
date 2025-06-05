import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBody = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.2a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zm-8.9 8.3a.9.9 0 01.9-.9h16a.9.9 0 010 1.8h-4.7v5.5l2.494 4.677a.9.9 0 11-1.588.846L13.74 17.8h-3.48l-2.466 4.623a.9.9 0 11-1.588-.847L8.7 16.9v-5.5H4a.9.9 0 01-.9-.9z" fill="currentColor"/>
  </svg>);
export const IconBodySolid = forwardRef(SvgBody);
export default IconBodySolid;
