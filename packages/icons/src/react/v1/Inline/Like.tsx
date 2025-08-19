import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLike = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9 .75a3 3 0 013 3c0 3.967-4.663 6.963-5.767 7.617a.452.452 0 01-.466 0C4.663 10.713 0 7.717 0 3.75a3 3 0 013-3c1.127 0 2.34.852 3 1.918C6.66 1.602 7.873.75 9 .75z" fill="currentColor"/>
  </svg>);
export const IconLikeInline = forwardRef(SvgLike);
export default IconLikeInline;
