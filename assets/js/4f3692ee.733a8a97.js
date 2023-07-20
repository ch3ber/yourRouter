"use strict";(self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[]).push([[1976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(y,c(c({ref:t},l),{},{components:r})):o.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={},c="Static routes",i={unversionedId:"core-concepts/static-routes",id:"version-2.0.3/core-concepts/static-routes",title:"Static routes",description:"Static routes are routes that will always have the same path and can be accessed from anywhere in the application.",source:"@site/versioned_docs/version-2.0.3/core-concepts/static-routes.md",sourceDirName:"core-concepts",slug:"/core-concepts/static-routes",permalink:"/yourRouter/docs/core-concepts/static-routes",draft:!1,editUrl:"https://github.com/ch3ber/yourRouter-docs/tree/main/versioned_docs/version-2.0.3/core-concepts/static-routes.md",tags:[],version:"2.0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic routes",permalink:"/yourRouter/docs/core-concepts/dynamic-routes"},next:{title:"Template rendering",permalink:"/yourRouter/docs/core-concepts/template-rendering"}},s={},u=[{value:"Code example",id:"code-example",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"static-routes"},"Static routes"),(0,n.kt)("p",null,"Static routes are routes that will always have the same path and can be accessed from anywhere in the application."),(0,n.kt)("p",null,"You can use a static route using the method ",(0,n.kt)("inlineCode",{parentName:"p"},"addRoute()")," of your router instance. To know more about the ",(0,n.kt)("inlineCode",{parentName:"p"},"addRoute")," method you can read ",(0,n.kt)("a",{parentName:"p",href:"/yourRouter/docs/API/addRoute"},"API/addRoute"),"."),(0,n.kt)("h2",{id:"code-example"},"Code example"),(0,n.kt)("p",null,"For this example we will add a new route in /books/history to show all history books."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},'import Router from "yourrouter";\n\nconst router = Router.get();\n\n// highlight-start\n// add the route /books/history\nrouter.addRoute("/books/history", () => {\n// highlight-end\n  console.log("You are in the history category!");\n});\n')))}d.isMDXComponent=!0}}]);