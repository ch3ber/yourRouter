"use strict";(self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[]).push([[2730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:3},a="Configuration",c={unversionedId:"getting-started/configuration",id:"version-2.0.5/getting-started/configuration",title:"Configuration",description:"Set the configuration of your Router using create() method.",source:"@site/versioned_docs/version-2.0.5/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/yourRouter/es/docs/getting-started/configuration",draft:!1,editUrl:"https://github.com/ch3ber/yourRouter-docs/tree/main/versioned_docs/version-2.0.5/getting-started/configuration.md",tags:[],version:"2.0.5",sidebarPosition:3,frontMatter:{sidebar_position:3}},u={},s=[{value:"Create config",id:"create-config",level:2},{value:"path404",id:"path404",level:3},{value:"renderId",id:"renderid",level:3}],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Set the configuration of your Router using ",(0,o.kt)("inlineCode",{parentName:"p"},"create()")," method."),(0,o.kt)("h2",{id:"create-config"},"Create config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"import Router from 'yourrouter'\n\nconst config = {\n// your config\n}\n\nRouter.create(config)\n")),(0,o.kt)("h3",{id:"path404"},"path404"),(0,o.kt)("p",null,"If the router cannot find a route, the user will be redirected to the route for HTTP status code 404."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"Router.create({\n  path404: '/notFound'\n})\n")),(0,o.kt)("h3",{id:"renderid"},"renderId"),(0,o.kt)("p",null,"Optional id where the templates will be rendered. ",(0,o.kt)("inlineCode",{parentName:"p"},"renderId")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," to find the id, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"#app")," in your html file to select an id or ",(0,o.kt)("inlineCode",{parentName:"p"},".app")," to css class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"Router.create({\n  renderId: '#app'\n})\n")))}d.isMDXComponent=!0}}]);