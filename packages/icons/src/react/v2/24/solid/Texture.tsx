import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTexture = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path d="M21 8.73l-3.241.003v2.553H21V8.73zM21 12.786h-3.992l-2.799-.005.005 2.504H21v-2.499zM21 16.785h-7.534l-2.197-.004V21h6.281A3.45 3.45 0 0021 17.55v-.765zM9.769 21v-4.22H3v.77A3.45 3.45 0 006.45 21h3.319zM3 15.28h3.194v-2.513H3v2.513zM3 11.267h3.945l2.792.005-.005-2.543H3v2.538zM21 7.23v-.78A3.45 3.45 0 0017.55 3h-3.336v4.235h2.794L21 7.23zM12.714 3H6.45A3.45 3.45 0 003 6.45v.78l9.714.003V3zM16.259 8.734v2.55l-5.023-.009-.004-2.545 2.23.005h2.797zM7.694 12.768l5.015.01.005 2.506-2.195-.004H7.694v-2.512z" fill="#1F1F1F"/>
  </svg>);
export const IconTextureSolid: ReturnType<typeof React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>> = forwardRef(SvgTexture);
export default IconTextureSolid;
