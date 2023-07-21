"use strict";(self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[]).push([[4229],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,g=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5},i="getRouteParams",p={unversionedId:"API/getRouteParams",id:"version-2.0.5/API/getRouteParams",title:"getRouteParams",description:"Method to get information from the URL in a dynamic path.",source:"@site/versioned_docs/version-2.0.5/API/getRouteParams.md",sourceDirName:"API",slug:"/API/getRouteParams",permalink:"/yourRouter/docs/API/getRouteParams",draft:!1,editUrl:"https://github.com/ch3ber/yourRouter-docs/tree/main/versioned_docs/version-2.0.5/API/getRouteParams.md",tags:[],version:"2.0.5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"redirectTo",permalink:"/yourRouter/docs/API/redirectTo"},next:{title:"\ud83d\udfe6 Typescript",permalink:"/yourRouter/docs/category/-typescript"}},u={},c=[{value:"Code example",id:"code-example",level:2},{value:"Complete example with template rendering",id:"complete-example-with-template-rendering",level:2}],l={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getrouteparams"},"getRouteParams"),(0,o.kt)("p",null,"Method to get information from the URL in a dynamic path."),(0,o.kt)("h2",{id:"code-example"},"Code example"),(0,o.kt)("p",null,"For this example you are in the dynamic route ",(0,o.kt)("inlineCode",{parentName:"p"},"/product/:id/detail")," and your current path is ",(0,o.kt)("inlineCode",{parentName:"p"},"/product/AFZ2LS8/detail")," the expected output of ",(0,o.kt)("inlineCode",{parentName:"p"},"getRouteParams()")," method is ",(0,o.kt)("inlineCode",{parentName:"p"},"{ id: 'AFZ2LS8' }"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"router.addRoute('/product/:id/detail', () => {\n  // highlight-next-line\n  const params = router.getRouteParams();\n\n  console.log(params) // expected output: { id: 'AFZ2LS8' }\n})\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use destructuring to extract only the necessary param."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"const { id } = router.getRouteParams();"))),(0,o.kt)("h2",{id:"complete-example-with-template-rendering"},"Complete example with template rendering"),(0,o.kt)("p",null,"Continuing with the last example, your code should look something like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},'import Router from "yourrouter";\n\nconst router = Router.create({\n  path404: "/notFound",\n  renderId: "#app",\n});\n\n// template to get the product info\nconst DynamicRoute = () => {\n  // highlight-next-line\n  const { id } = router.getRouteParams();\n\n  const view = `\n    <main>\n      <h1>Route Params</h1>\n      <p>The product id is: ${id}</p>\n    </main>\n  `;\n  return view;\n};\n\nrouter.addRoute("/product/:id/detail", () => {\n  return DynamicRoute;\n});\n')))}d.isMDXComponent=!0}}]);