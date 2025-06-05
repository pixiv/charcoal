import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M14.549 3.524a3.92 3.92 0 00-5.039-.012l-8.279 6.912a.75.75 0 00.962 1.152l1.642-1.372v7.95a2.863 2.863 0 002.863 2.862h2.61a.75.75 0 00.75-.75v-4.328a1.923 1.923 0 113.846 0v4.328c0 .414.336.75.75.75h2.61a2.863 2.863 0 002.862-2.863V10.19l1.643 1.384a.75.75 0 00.967-1.146l-8.187-6.903zm4.077 5.4L13.582 4.67a2.42 2.42 0 00-3.11-.008L5.335 8.952v9.201c0 .753.61 1.363 1.363 1.363h1.86v-3.578a3.423 3.423 0 016.846 0v3.578h1.86c.752 0 1.362-.61 1.362-1.363v-9.23z" fill="currentColor"/>
  </svg>);
export const IconHome = forwardRef(SvgHome);
export default IconHome;
