import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20.665 3.396a1.25 1.25 0 010 1.768l-15.5 15.5a1.25 1.25 0 01-1.768-1.768l15.5-15.5a1.25 1.25 0 011.768 0z" fill="currentColor"/>
  </svg>);
export const IconLineSolid = forwardRef(SvgLine);
export default IconLineSolid;
