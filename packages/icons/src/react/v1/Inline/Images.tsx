import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgImages = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={9} height={10} viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M0 2a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H1a1 1 0 01-1-1V2z" fill="currentColor"/>
    <path d="M3 10a1 1 0 01-1-1h4a2 2 0 002-2V3a1 1 0 011 1v5a1 1 0 01-1 1H3z" fill="currentColor"/>
  </svg>);
export const IconImagesInline = forwardRef(SvgImages);
export default IconImagesInline;
