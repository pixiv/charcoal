import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgContrast = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-2 0a7 7 0 01-7 7V5a7 7 0 017 7z" fill="currentColor"/>
  </svg>);
export const IconContrast24 = forwardRef(SvgContrast);
export default IconContrast24;
