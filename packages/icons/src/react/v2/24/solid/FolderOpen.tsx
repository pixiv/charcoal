import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFolderopen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.57 8.13h13.32a2.751 2.751 0 00-2.61-1.882H11.51a.25.25 0 01-.193-.091l-1.243-1.513a1.75 1.75 0 00-1.352-.638H4.765a2.75 2.75 0 00-2.75 2.75v7.956l1.197-4.07A3.5 3.5 0 016.57 8.13zM2.8 16.474A2.75 2.75 0 005.438 20h12.345a2.75 2.75 0 002.638-1.974l1.695-5.76a2.25 2.25 0 00-2.159-2.886H6.57a2.25 2.25 0 00-2.159 1.615L2.8 16.474z" fill="currentColor"/>
  </svg>);
export const IconFolderOpenSolid = forwardRef(SvgFolderopen);
export default IconFolderOpenSolid;
