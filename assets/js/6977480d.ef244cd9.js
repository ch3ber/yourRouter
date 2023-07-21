"use strict";(self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[]).push([[8426],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return r?o.createElement(y,u(u({ref:t},p),{},{components:r})):o.createElement(y,u({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return o.createElement.apply(null,u)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3},u="addRoute",i={unversionedId:"API/addRoute",id:"version-2.0.5/API/addRoute",title:"addRoute",description:"Add a new route to your app. If you want to render a template when the route is loaded you must return a function that returns your template. If you want to know more about the route types you can read core concepts/static routes and core concepts/dynamic routes",source:"@site/versioned_docs/version-2.0.5/API/addRoute.md",sourceDirName:"API",slug:"/API/addRoute",permalink:"/yourRouter/docs/API/addRoute",draft:!1,editUrl:"https://github.com/ch3ber/yourRouter-docs/tree/main/versioned_docs/version-2.0.5/API/addRoute.md",tags:[],version:"2.0.5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"get",permalink:"/yourRouter/docs/API/get"},next:{title:"redirectTo",permalink:"/yourRouter/docs/API/redirectTo"}},c={},l=[{value:"Complete example",id:"complete-example",level:2},{value:"With template rendering",id:"with-template-rendering",level:3},{value:"Create your template.",id:"create-your-template",level:4},{value:"Add a route for render your template.",id:"add-a-route-for-render-your-template",level:4}],p={toc:l},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"addroute"},"addRoute"),(0,n.kt)("p",null,"Add a new route to your app. If you want to render a template when the route is loaded you must return a function that returns your template. If you want to know more about the route types you can read ",(0,n.kt)("a",{parentName:"p",href:"/yourRouter/docs/core-concepts/static-routes"},"core concepts/static routes")," and ",(0,n.kt)("a",{parentName:"p",href:"/yourRouter/docs/core-concepts/dynamic-routes"},"core concepts/dynamic routes")),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"addRoute()")," method to add a route in your router."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import Router from "yourrouter";\n\nconst router = Router.get()\n\nrouter.addRoute("/", () => {\n  console.log("Hello world");\n});\n')),(0,n.kt)("h2",{id:"complete-example"},"Complete example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},'import Router from "yourrouter";\n\nconst config = {\n  path404: "/notFound",\n};\n\nconst router = Router.create(config);\n\nrouter.addRoute("/", () => {\n  console.log("welcome to the main route!");\n});\n\nrouter.addRoute("/foo", () => {\n  console.log("welcome to the foo route!");\n});\n')),(0,n.kt)("h3",{id:"with-template-rendering"},"With template rendering"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/yourRouter/docs/core-concepts/template-rendering"},"Core concepts/template rendering")," to know more about template rendering."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To ",(0,n.kt)("strong",{parentName:"p"},"active")," the template rendering you should set the ",(0,n.kt)("inlineCode",{parentName:"p"},"renderId")," in your Router config.")),(0,n.kt)("h4",{id:"create-your-template"},"Create your template."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/templates/Home.js"',title:'"src/templates/Home.js"'},"export const Home = () => {\n  // template logic\n\n  const view = `\n    <p>Home page!</p>\n  `;\n  return view;\n};\n")),(0,n.kt)("h4",{id:"add-a-route-for-render-your-template"},"Add a route for render your template."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},'import Router from "yourrouter";\n// highlight-next-line\nimport { Home } from "src/templates/Home"; // template to load\n\nRouter.create({\n  path404: "/notFound",\n  // highlight-next-line\n  renderId: "#app", // or you can use a css class with .app\n});\nconst router = Router.get();\n\nrouter.addRoute("/", () => {\n  console.log("Home page");\n\n  // highlight-next-line\n  return Home; // You must return a function\n});\n')))}s.isMDXComponent=!0}}]);