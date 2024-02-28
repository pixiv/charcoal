/*! For license information please see 9711.2f625d20.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[9711],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/history/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ep:()=>I,PP:()=>createMemoryHistory,aU:()=>r,cP:()=>J});var r,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),B=r||(r={});B.Pop="POP",B.Push="PUSH",B.Replace="REPLACE";var C=function(b){return b};function F(){var b=[];return{get length(){return b.length},push:function(h){return b.push(h),function(){b=b.filter((function(e){return e!==h}))}},call:function(h){b.forEach((function(e){return e&&e(h)}))}}}function H(){return Math.random().toString(36).substr(2,8)}function I(b){var h=b.pathname;h=void 0===h?"/":h;var e=b.search;return e=void 0===e?"":e,b=void 0===(b=b.hash)?"":b,e&&"?"!==e&&(h+="?"===e.charAt(0)?e:"?"+e),b&&"#"!==b&&(h+="#"===b.charAt(0)?b:"#"+b),h}function J(b){var h={};if(b){var e=b.indexOf("#");0<=e&&(h.hash=b.substr(e),b=b.substr(0,e)),0<=(e=b.indexOf("?"))&&(h.search=b.substr(e),b=b.substr(0,e)),b&&(h.pathname=b)}return h}function createMemoryHistory(b){function h(d,g){return void 0===g&&(g=null),C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.Z)({pathname:t.pathname,search:"",hash:""},"string"==typeof d?J(d):d,{state:g,key:H()}))}function e(d,g,c){return!q.length||(q.call({action:d,location:g,retry:c}),!1)}function x(d,g){u=d,t=g,v.call({action:u,location:t})}function y(d){var g=Math.min(Math.max(m+d,0),p.length-1),c=r.Pop,a=p[g];e(c,a,(function(){y(d)}))&&(m=g,x(c,a))}void 0===b&&(b={});var w=b;b=w.initialEntries,w=w.initialIndex;var p=(void 0===b?["/"]:b).map((function(d){return C((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.Z)({pathname:"/",search:"",hash:"",state:null,key:H()},"string"==typeof d?J(d):d))})),m=Math.min(Math.max(null==w?p.length-1:w,0),p.length-1),u=r.Pop,t=p[m],v=F(),q=F();return{get index(){return m},get action(){return u},get location(){return t},createHref:function(d){return"string"==typeof d?d:I(d)},push:function z(d,g){var c=r.Push,a=h(d,g);e(c,a,(function(){z(d,g)}))&&(m+=1,p.splice(m,p.length,a),x(c,a))},replace:function A(d,g){var c=r.Replace,a=h(d,g);e(c,a,(function(){A(d,g)}))&&(p[m]=a,x(c,a))},go:y,back:function(){y(-1)},forward:function(){y(1)},listen:function(d){return v.push(d)},block:function(d){return q.push(d)}}}},"./node_modules/react-router-dom/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{rU:()=>Link});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),history__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/history/index.js"),react_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router/index.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}const _excluded=["onClick","reloadDocument","replace","state","target","to"];const Link=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function LinkWithRef(_ref4,ref){let{onClick,reloadDocument,replace=!1,state,target,to}=_ref4,rest=_objectWithoutPropertiesLoose(_ref4,_excluded),href=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.oQ)(to),internalOnClick=function useLinkClickHandler(to,_temp){let{target,replace:replaceProp,state}=void 0===_temp?{}:_temp,navigate=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.s0)(),location=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.TH)(),path=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.WU)(to);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{if(!(0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event))){event.preventDefault();let replace=!!replaceProp||(0,history__WEBPACK_IMPORTED_MODULE_2__.Ep)(location)===(0,history__WEBPACK_IMPORTED_MODULE_2__.Ep)(path);navigate(to,{replace,state})}}),[location,navigate,path,replaceProp,state,target,to])}(to,{replace,state,target});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a",_extends({},rest,{href,onClick:function handleClick(event){onClick&&onClick(event),event.defaultPrevented||reloadDocument||internalOnClick(event)},ref,target}))}))},"./node_modules/react-router/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AW:()=>Route,TH:()=>useLocation,UO:()=>useParams,VA:()=>MemoryRouter,WU:()=>useResolvedPath,Z5:()=>Routes,oQ:()=>useHref,s0:()=>useNavigate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),history__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/history/index.js");function invariant(cond,message){if(!cond)throw new Error(message)}const NavigationContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);const LocationContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);const RouteContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({outlet:null,matches:[]});function MemoryRouter(_ref){let{basename,children,initialEntries,initialIndex}=_ref,historyRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();null==historyRef.current&&(historyRef.current=(0,history__WEBPACK_IMPORTED_MODULE_1__.PP)({initialEntries,initialIndex}));let history=historyRef.current,[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({action:history.action,location:history.location});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>history.listen(setState)),[history]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Router,{basename,children,location:state.location,navigationType:state.action,navigator:history})}function Outlet(props){return function useOutlet(context){let outlet=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext).outlet;if(outlet)return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(OutletContext.Provider,{value:context},outlet);return outlet}(props.context)}function Route(_props){invariant(!1)}function Router(_ref3){let{basename:basenameProp="/",children=null,location:locationProp,navigationType=history__WEBPACK_IMPORTED_MODULE_1__.aU.Pop,navigator,static:staticProp=!1}=_ref3;useInRouterContext()&&invariant(!1);let basename=normalizePathname(basenameProp),navigationContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({basename,navigator,static:staticProp})),[basename,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=(0,history__WEBPACK_IMPORTED_MODULE_1__.cP)(locationProp));let{pathname="/",search="",hash="",state=null,key="default"}=locationProp,location=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{let trailingPathname=stripBasename(pathname,basename);return null==trailingPathname?null:{pathname:trailingPathname,search,hash,state,key}}),[basename,pathname,search,hash,state,key]);return null==location?null:(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NavigationContext.Provider,{value:navigationContext},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LocationContext.Provider,{children,value:{location,navigationType}}))}function Routes(_ref4){let{children,location}=_ref4;return function useRoutes(routes,locationArg){useInRouterContext()||invariant(!1);let{matches:parentMatches}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext),routeMatch=parentMatches[parentMatches.length-1],parentParams=routeMatch?routeMatch.params:{},parentPathnameBase=(routeMatch&&routeMatch.pathname,routeMatch?routeMatch.pathnameBase:"/");routeMatch&&routeMatch.route;0;let location,locationFromContext=useLocation();if(locationArg){var _parsedLocationArg$pa;let parsedLocationArg="string"==typeof locationArg?(0,history__WEBPACK_IMPORTED_MODULE_1__.cP)(locationArg):locationArg;"/"===parentPathnameBase||(null==(_parsedLocationArg$pa=parsedLocationArg.pathname)?void 0:_parsedLocationArg$pa.startsWith(parentPathnameBase))||invariant(!1),location=parsedLocationArg}else location=locationFromContext;let pathname=location.pathname||"/",remainingPathname="/"===parentPathnameBase?pathname:pathname.slice(parentPathnameBase.length)||"/",matches=function matchRoutes(routes,locationArg,basename){void 0===basename&&(basename="/");let location="string"==typeof locationArg?(0,history__WEBPACK_IMPORTED_MODULE_1__.cP)(locationArg):locationArg,pathname=stripBasename(location.pathname||"/",basename);if(null==pathname)return null;let branches=flattenRoutes(routes);!function rankRouteBranches(branches){branches.sort(((a,b)=>a.score!==b.score?b.score-a.score:function compareIndexes(a,b){let siblings=a.length===b.length&&a.slice(0,-1).every(((n,i)=>n===b[i]));return siblings?a[a.length-1]-b[b.length-1]:0}(a.routesMeta.map((meta=>meta.childrenIndex)),b.routesMeta.map((meta=>meta.childrenIndex)))))}(branches);let matches=null;for(let i=0;null==matches&&i<branches.length;++i)matches=matchRouteBranch(branches[i],pathname);return matches}(routes,{pathname:remainingPathname});0;return _renderMatches(matches&&matches.map((match=>Object.assign({},match,{params:Object.assign({},parentParams,match.params),pathname:joinPaths([parentPathnameBase,match.pathname]),pathnameBase:"/"===match.pathnameBase?parentPathnameBase:joinPaths([parentPathnameBase,match.pathnameBase])}))),parentMatches)}(createRoutesFromChildren(children),location)}function useHref(to){useInRouterContext()||invariant(!1);let{basename,navigator}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigationContext),{hash,pathname,search}=useResolvedPath(to),joinedPathname=pathname;if("/"!==basename){let toPathname=function getToPathname(to){return""===to||""===to.pathname?"/":"string"==typeof to?(0,history__WEBPACK_IMPORTED_MODULE_1__.cP)(to).pathname:to.pathname}(to),endsWithSlash=null!=toPathname&&toPathname.endsWith("/");joinedPathname="/"===pathname?basename+(endsWithSlash?"/":""):joinPaths([basename,pathname])}return navigator.createHref({pathname:joinedPathname,search,hash})}function useInRouterContext(){return null!=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext)}function useLocation(){return useInRouterContext()||invariant(!1),(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext).location}function useNavigate(){useInRouterContext()||invariant(!1);let{basename,navigator}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigationContext),{matches}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify(matches.map((match=>match.pathnameBase))),activeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{activeRef.current=!0})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(to,options){if(void 0===options&&(options={}),!activeRef.current)return;if("number"==typeof to)return void navigator.go(to);let path=resolveTo(to,JSON.parse(routePathnamesJson),locationPathname);"/"!==basename&&(path.pathname=joinPaths([basename,path.pathname])),(options.replace?navigator.replace:navigator.push)(path,options.state)}),[basename,navigator,routePathnamesJson,locationPathname])}const OutletContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function useParams(){let{matches}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext),routeMatch=matches[matches.length-1];return routeMatch?routeMatch.params:{}}function useResolvedPath(to){let{matches}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify(matches.map((match=>match.pathnameBase)));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>resolveTo(to,JSON.parse(routePathnamesJson),locationPathname)),[to,routePathnamesJson,locationPathname])}function createRoutesFromChildren(children){let routes=[];return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children,(element=>{if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element))return;if(element.type===react__WEBPACK_IMPORTED_MODULE_0__.Fragment)return void routes.push.apply(routes,createRoutesFromChildren(element.props.children));element.type!==Route&&invariant(!1);let route={caseSensitive:element.props.caseSensitive,element:element.props.element,index:element.props.index,path:element.props.path};element.props.children&&(route.children=createRoutesFromChildren(element.props.children)),routes.push(route)})),routes}function flattenRoutes(routes,branches,parentsMeta,parentPath){return void 0===branches&&(branches=[]),void 0===parentsMeta&&(parentsMeta=[]),void 0===parentPath&&(parentPath=""),routes.forEach(((route,index)=>{let meta={relativePath:route.path||"",caseSensitive:!0===route.caseSensitive,childrenIndex:index,route};meta.relativePath.startsWith("/")&&(meta.relativePath.startsWith(parentPath)||invariant(!1),meta.relativePath=meta.relativePath.slice(parentPath.length));let path=joinPaths([parentPath,meta.relativePath]),routesMeta=parentsMeta.concat(meta);route.children&&route.children.length>0&&(!0===route.index&&invariant(!1),flattenRoutes(route.children,branches,routesMeta,path)),(null!=route.path||route.index)&&branches.push({path,score:computeScore(path,route.index),routesMeta})})),branches}const paramRe=/^:\w+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=s=>"*"===s;function computeScore(path,index){let segments=path.split("/"),initialScore=segments.length;return segments.some(isSplat)&&(initialScore+=splatPenalty),index&&(initialScore+=indexRouteValue),segments.filter((s=>!isSplat(s))).reduce(((score,segment)=>score+(paramRe.test(segment)?dynamicSegmentValue:""===segment?emptySegmentValue:staticSegmentValue)),initialScore)}function matchRouteBranch(branch,pathname){let{routesMeta}=branch,matchedParams={},matchedPathname="/",matches=[];for(let i=0;i<routesMeta.length;++i){let meta=routesMeta[i],end=i===routesMeta.length-1,remainingPathname="/"===matchedPathname?pathname:pathname.slice(matchedPathname.length)||"/",match=matchPath({path:meta.relativePath,caseSensitive:meta.caseSensitive,end},remainingPathname);if(!match)return null;Object.assign(matchedParams,match.params);let route=meta.route;matches.push({params:matchedParams,pathname:joinPaths([matchedPathname,match.pathname]),pathnameBase:joinPaths([matchedPathname,match.pathnameBase]),route}),"/"!==match.pathnameBase&&(matchedPathname=joinPaths([matchedPathname,match.pathnameBase]))}return matches}function _renderMatches(matches,parentMatches){return void 0===parentMatches&&(parentMatches=[]),null==matches?null:matches.reduceRight(((outlet,match,index)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RouteContext.Provider,{children:void 0!==match.route.element?match.route.element:(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Outlet,null),value:{outlet,matches:parentMatches.concat(matches.slice(0,index+1))}})),null)}function matchPath(pattern,pathname){"string"==typeof pattern&&(pattern={path:pattern,caseSensitive:!1,end:!0});let[matcher,paramNames]=function compilePath(path,caseSensitive,end){void 0===caseSensitive&&(caseSensitive=!1);void 0===end&&(end=!0);let paramNames=[],regexpSource="^"+path.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((_,paramName)=>(paramNames.push(paramName),"([^\\/]+)")));path.endsWith("*")?(paramNames.push("*"),regexpSource+="*"===path||"/*"===path?"(.*)$":"(?:\\/(.+)|\\/*)$"):regexpSource+=end?"\\/*$":"(?:\\b|\\/|$)";let matcher=new RegExp(regexpSource,caseSensitive?void 0:"i");return[matcher,paramNames]}(pattern.path,pattern.caseSensitive,pattern.end),match=pathname.match(matcher);if(!match)return null;let matchedPathname=match[0],pathnameBase=matchedPathname.replace(/(.)\/+$/,"$1"),captureGroups=match.slice(1);return{params:paramNames.reduce(((memo,paramName,index)=>{if("*"===paramName){let splatValue=captureGroups[index]||"";pathnameBase=matchedPathname.slice(0,matchedPathname.length-splatValue.length).replace(/(.)\/+$/,"$1")}return memo[paramName]=function safelyDecodeURIComponent(value,paramName){try{return decodeURIComponent(value)}catch(error){return value}}(captureGroups[index]||""),memo}),{}),pathname:matchedPathname,pathnameBase,pattern}}function resolveTo(toArg,routePathnames,locationPathname){let from,to="string"==typeof toArg?(0,history__WEBPACK_IMPORTED_MODULE_1__.cP)(toArg):toArg,toPathname=""===toArg||""===to.pathname?"/":to.pathname;if(null==toPathname)from=locationPathname;else{let routePathnameIndex=routePathnames.length-1;if(toPathname.startsWith("..")){let toSegments=toPathname.split("/");for(;".."===toSegments[0];)toSegments.shift(),routePathnameIndex-=1;to.pathname=toSegments.join("/")}from=routePathnameIndex>=0?routePathnames[routePathnameIndex]:"/"}let path=function resolvePath(to,fromPathname){void 0===fromPathname&&(fromPathname="/");let{pathname:toPathname,search="",hash=""}="string"==typeof to?(0,history__WEBPACK_IMPORTED_MODULE_1__.cP)(to):to,pathname=toPathname?toPathname.startsWith("/")?toPathname:function resolvePathname(relativePath,fromPathname){let segments=fromPathname.replace(/\/+$/,"").split("/");return relativePath.split("/").forEach((segment=>{".."===segment?segments.length>1&&segments.pop():"."!==segment&&segments.push(segment)})),segments.length>1?segments.join("/"):"/"}(toPathname,fromPathname):fromPathname;return{pathname,search:normalizeSearch(search),hash:normalizeHash(hash)}}(to,from);return toPathname&&"/"!==toPathname&&toPathname.endsWith("/")&&!path.pathname.endsWith("/")&&(path.pathname+="/"),path}function stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let nextChar=pathname.charAt(basename.length);return nextChar&&"/"!==nextChar?null:pathname.slice(basename.length)||"/"}const joinPaths=paths=>paths.join("/").replace(/\/\/+/g,"/"),normalizePathname=pathname=>pathname.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=search=>search&&"?"!==search?search.startsWith("?")?search:"?"+search:"",normalizeHash=hash=>hash&&"#"!==hash?hash.startsWith("#")?hash:"#"+hash:""}}]);