import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBookmarkOn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M7 27.24V9a3 3 0 013-3h12a3 3 0 013 3v18.24l-9-4.5-9 4.5z" fill="currentColor"/>
  </svg>);
export const IconBookmarkOn32 = forwardRef(SvgBookmarkOn);
export default IconBookmarkOn32;
