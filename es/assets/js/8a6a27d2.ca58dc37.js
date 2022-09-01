"use strict";(self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[]).push([[443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},u="Quick Setup",a={unversionedId:"getting-started/quick-setup",id:"getting-started/quick-setup",title:"Quick Setup",description:"Start with the quick configuration of yourrouter.",source:"@site/docs/getting-started/quick-setup.md",sourceDirName:"getting-started",slug:"/getting-started/quick-setup",permalink:"/yourRouter/es/docs/getting-started/quick-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/quick-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/yourRouter/es/docs/category/getting-started"},next:{title:"Installation",permalink:"/yourRouter/es/docs/getting-started/installation"}},s={},l=[{value:"Import yourrouter",id:"import-yourrouter",level:2},{value:"Set your configuration",id:"set-your-configuration",level:2},{value:"Use the router",id:"use-the-router",level:2},{value:"Render a route",id:"render-a-route",level:2},{value:"Without template rendering",id:"without-template-rendering",level:3},{value:"With template rendering",id:"with-template-rendering",level:3}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-setup"},"Quick Setup"),(0,o.kt)("p",null,"Start with the quick configuration of yourrouter."),(0,o.kt)("h2",{id:"import-yourrouter"},"Import yourrouter"),(0,o.kt)("p",null,"Import yourrouter to your index file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"import { Router } from 'yourrouter'\n")),(0,o.kt)("h2",{id:"set-your-configuration"},"Set your configuration"),(0,o.kt)("p",null,"Set up the configuration you needs to start creating routes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"Router.createInstance({\n  path404: '/notFound', // name of route with 404 HTTP status code\n  renderId: '#app' // Id where the templates will be rendered\n})\n")),(0,o.kt)("h2",{id:"use-the-router"},"Use the router"),(0,o.kt)("p",null,'"Router" use the singleton pattern, you can get the instance of your Router with your seted config in any file using getInstance() method.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"const router = Router.getInstance()\n")),(0,o.kt)("h2",{id:"render-a-route"},"Render a route"),(0,o.kt)("p",null,"Print the content of your route in the HTML."),(0,o.kt)("h3",{id:"without-template-rendering"},"Without template rendering"),(0,o.kt)("p",null,"You chose how to render the content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"import { Router } from 'yourrouter'\n\nRouter.createInstance({\n  path404: '/notFound',\n})\nconst router = Router.getInstance()\n\nrouter.addRoute('/', () => {\n  console.log('Hello home page')\n\n  // highlight-start\n  // render the route content\n  document.querySelector('body').innerHTML = '<p>Home page!</p>'\n  // highlight-end\n})\n")),(0,o.kt)("h3",{id:"with-template-rendering"},"With template rendering"),(0,o.kt)("p",null,'You can use yourrouter\'s template rendering support by defining the "renderId" in your configuration.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"import { Router } from 'yourrouter'\n\nRouter.createInstance({\n  path404: '/notFound',\n  // highlight-start\n  // important to enable template rendering\n  renderId: '#app' // use #app to id and .app to css class\n  // highlight-end\n})\nconst router = Router.getInstance()\n\nrouter.addRoute('/', () => {\n  console.log('Hello home page')\n\n  // highlight-next-line\n  return () => '<p>Home page!</p>' // you must return a function\n})\n")))}p.isMDXComponent=!0}}]);