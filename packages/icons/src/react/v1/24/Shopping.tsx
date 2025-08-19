import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShopping = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M8 6a4 4 0 118 0h1a3 3 0 013 3v9a3 3 0 01-3 3H7a3 3 0 01-3-3V9a3 3 0 013-3h1zm2 0a2 2 0 114 0h-4zM8 8v2a1 1 0 102 0V8h4v2a1 1 0 102 0V8h1a1 1 0 011 1v9a1 1 0 01-1 1H7a1 1 0 01-1-1V9a1 1 0 011-1h1z" fill="currentColor"/>
  </svg>);
export const IconShopping24 = forwardRef(SvgShopping);
export default IconShopping24;
