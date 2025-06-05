import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20.311 3.75a.75.75 0 010 1.061l-15.5 15.5a.75.75 0 11-1.06-1.06l15.5-15.5a.75.75 0 011.06 0z" fill="currentColor"/>
  </svg>);
export const IconLine = forwardRef(SvgLine);
export default IconLine;
