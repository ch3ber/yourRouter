"use strict";(self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[]).push([[689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(g,u(u({ref:t},c),{},{components:r})):n.createElement(g,u({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},u="addRoute",i={unversionedId:"API/Router/addRoute",id:"API/Router/addRoute",title:"addRoute",description:"Add a new route to your app. If you want to render a template when the route is loaded you must return a funtion that returns your template.",source:"@site/docs/API/Router/addRoute.md",sourceDirName:"API/Router",slug:"/API/Router/addRoute",permalink:"/yourRouter/es/docs/API/Router/addRoute",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/Router/addRoute.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/yourRouter/es/docs/category/api"},next:{title:"getRouteParam",permalink:"/yourRouter/es/docs/API/Router/getRouteParam"}},s={},l=[{value:"Without template rendering",id:"without-template-rendering",level:3},{value:"With tamplete rendering",id:"with-tamplete-rendering",level:3},{value:"Static routes",id:"static-routes",level:2},{value:"Dynamic routes",id:"dynamic-routes",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"addroute"},"addRoute"),(0,o.kt)("p",null,"Add a new route to your app. If you want to render a template when the route is loaded you must return a funtion that returns your template."),(0,o.kt)("h3",{id:"without-template-rendering"},"Without template rendering"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"import { Router } from 'yourrouter'\n\nRouter.createInstance({\n  path404: '/notFound',\n})\nconst router = Router.getInstance()\n\nrouter.addRoute('/', () => {\n  console.log('Home page')\n\n  // highlight-next-line\n  document.querySelector('body').innerHTML = '<p>Home page!</p>'\n})\n")),(0,o.kt)("h3",{id:"with-tamplete-rendering"},"With tamplete rendering"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/templates/Home.js"',title:'"src/templates/Home.js"'},"const Home = () => {\n  // template logic\n\n  const view = `\n    <p>Home page!</p>\n  `\n  return view\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"import { Router } from 'yourrouter'\n// highlight-next-line\nimport { Home } from 'src/templates/Home' // your template to load\n\nRouter.createInstance({\n  path404: '/notFound',\n  // highlight-next-line\n  renderId: '#app' // or you can use a css class with .app\n})\nconst router = Router.getInstance()\n\nrouter.addRoute('/', () => {\n  console.log('Home page')\n\n  // highlight-next-line\n  return Home // You must return a function\n})\n")),(0,o.kt)("h2",{id:"static-routes"},"Static routes"),(0,o.kt)("p",null,"The static routes are simple to use, use the method ",(0,o.kt)("inlineCode",{parentName:"p"},"addRoute()")," of your router instance. The route that you declare will be available on your app."),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"import { Router } from 'yourrouter'\n\nconst router = Router.getInstance()\n\n// highlight-next-line\nrouter.addRoute('/books/history', () => { // add the route /books/history\n  console.log('You are in the history category!')\n})\n")),(0,o.kt)("h2",{id:"dynamic-routes"},"Dynamic routes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"import { Router } from 'yourrouter'\n\nconst router = Router.getInstance()\n\n// highlight-next-line\nrouter.addRoute('/books/history/:idBook', () => { // add the route /books/history/:idBook\n  console.log('You are in the detail of a book in the history category!')\n\n  // highlight-next-line\n  const param = router.getRouteParam() // returns value of :idBook\n  console.log('The route param is: ', param)\n})\n")))}d.isMDXComponent=!0}}]);