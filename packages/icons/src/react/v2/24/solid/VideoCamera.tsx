import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgVideoCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.25 9A3.75 3.75 0 016 5.25h7A3.75 3.75 0 0116.75 9v7A3.75 3.75 0 0113 19.75H6A3.75 3.75 0 012.25 16V9zm17.64 7.979l-2.171-1.52V9.755l2.094-1.676c.982-.786 2.437-.086 2.437 1.171v6.5c0 1.213-1.366 1.925-2.36 1.229z" fill="currentColor"/>
  </svg>);
export const IconVideoCameraSolid = forwardRef(SvgVideoCamera);
export default IconVideoCameraSolid;
