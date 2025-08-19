import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBookmarkOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7 9v18.24l9-4.5 9 4.5V9a3 3 0 00-3-3H10a3 3 0 00-3 3zm2 15V9a1 1 0 011-1h12a1 1 0 011 1v15l-7-3.5L9 24z" fill="currentColor"/>
  </svg>);
export const IconBookmarkOff32 = forwardRef(SvgBookmarkOff);
export default IconBookmarkOff32;
