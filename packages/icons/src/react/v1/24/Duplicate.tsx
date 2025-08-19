import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDuplicate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H9a3 3 0 01-3-3V5zm12 16a1 1 0 01-1 1H6a4 4 0 01-4-4V8a1 1 0 112 0v10a2 2 0 002 2h11a1 1 0 011 1zm-3-10h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V6c0-.55-.45-1-1-1s-1 .45-1 1v3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3z" fill="currentColor"/>
  </svg>);
export const IconDuplicate24 = forwardRef(SvgDuplicate);
export default IconDuplicate24;
