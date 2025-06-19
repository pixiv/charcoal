import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLayertext = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.546 2.67a2.714 2.714 0 012.907 0l7.745 4.911a1.727 1.727 0 010 2.917l-7.745 4.911a2.714 2.714 0 01-2.906 0L2.801 10.5a1.727 1.727 0 010-2.918l7.745-4.911zM4.02 12.73l-1.217.773a1.727 1.727 0 000 2.917l7.745 4.91c.887.563 2.02.563 2.906 0l7.745-4.91a1.727 1.727 0 000-2.917l-1.217-.772-5.867 3.72a3.948 3.948 0 01-4.228 0l-5.867-3.72zm8.333-7.058a.75.75 0 00-.835.001l-.538.362a.75.75 0 00.836 1.245l.122-.082.4.267-2.982 2.002-.18-.12a.75.75 0 10-.832 1.248l.598.398.598.399a.75.75 0 001.082-.969l3.065-2.058.515.342a.75.75 0 001.113.906l.538-.362a.75.75 0 00-.002-1.247L14.1 6.838l-1.748-1.166z" fill="currentColor"/>
  </svg>);
export const IconLayerTextSolid = forwardRef(SvgLayertext);
export default IconLayerTextSolid;
