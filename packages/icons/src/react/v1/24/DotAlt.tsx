import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDotAlt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M14 12a2 2 0 11-4 0 2 2 0 014 0zM14 19a2 2 0 11-4 0 2 2 0 014 0zM14 5a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor"/>
  </svg>);
export const IconDotAlt24 = forwardRef(SvgDotAlt);
export default IconDotAlt24;
