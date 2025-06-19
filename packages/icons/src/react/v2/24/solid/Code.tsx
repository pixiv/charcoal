import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M14.271 1.78a1.25 1.25 0 01.95 1.491l-4 18a1.25 1.25 0 11-2.441-.542l4-18a1.25 1.25 0 011.491-.95zM7.884 6.116a1.25 1.25 0 010 1.768L3.768 12l4.116 4.116a1.25 1.25 0 01-1.768 1.768l-5-5a1.25 1.25 0 010-1.768l5-5a1.25 1.25 0 011.768 0zm8.232 0a1.25 1.25 0 011.768 0l5 5a1.25 1.25 0 010 1.768l-5 5a1.25 1.25 0 01-1.768-1.768L20.232 12l-4.116-4.116a1.25 1.25 0 010-1.768z" fill="currentColor"/>
  </svg>);
export const IconCodeSolid = forwardRef(SvgCode);
export default IconCodeSolid;
