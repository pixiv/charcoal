import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFontSize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.406 3.5a.75.75 0 00-.75.75v1.548a.75.75 0 101.5 0V5h4.42v14.5h-1.348a.75.75 0 000 1.5h4.196a.75.75 0 000-1.5h-1.348V5h4.42v.798a.75.75 0 001.5 0V4.25a.75.75 0 00-.75-.75H9.406zm-6.652 7.197a.75.75 0 00-.75.75v1.077a.75.75 0 001.5 0v-.327h2.282V19.5h-.543a.75.75 0 000 1.5h2.585a.75.75 0 000-1.5h-.542v-7.303h2.281v.327a.75.75 0 001.5 0v-1.077a.75.75 0 00-.75-.75H2.754z" fill="currentColor"/>
  </svg>);
export const IconFontSize = forwardRef(SvgFontSize);
export default IconFontSize;
