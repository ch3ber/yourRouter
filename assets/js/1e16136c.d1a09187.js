"use strict";(self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[]).push([[8562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,g=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="\u23f1\ufe0f Quick Setup",u={unversionedId:"quick-setup",id:"version-2.0.5/quick-setup",title:"\u23f1\ufe0f Quick Setup",description:"Installation",source:"@site/versioned_docs/version-2.0.5/quick-setup.md",sourceDirName:".",slug:"/quick-setup",permalink:"/yourRouter/docs/quick-setup",draft:!1,editUrl:"https://github.com/ch3ber/yourRouter-docs/tree/main/versioned_docs/version-2.0.5/quick-setup.md",tags:[],version:"2.0.5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc4b Introduction",permalink:"/yourRouter/docs/Introduction"},next:{title:"\ud83d\udcda Core concepts",permalink:"/yourRouter/docs/category/-core-concepts"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Import yourrouter",id:"import-yourrouter",level:2},{value:"Set your configuration",id:"set-your-configuration",level:2},{value:"Execute code in a route",id:"execute-code-in-a-route",level:2},{value:"Get the Router instance",id:"get-the-router-instance",level:2},{value:"Template rendering \ud83c\udfed",id:"template-rendering-",level:2},{value:"Example with template rendering disable",id:"example-with-template-rendering-disable",level:3}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-quick-setup"},"\u23f1\ufe0f Quick Setup"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You can chose the best installation method for your project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  npm i yourrouter\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  pnpm add yourrouter\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  yarn add yourrouter\n")),(0,o.kt)("h2",{id:"import-yourrouter"},"Import yourrouter"),(0,o.kt)("p",null,"Import yourrouter to your index file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// src/index.js\n\nimport Router from "yourrouter";\n')),(0,o.kt)("h2",{id:"set-your-configuration"},"Set your configuration"),(0,o.kt)("p",null,"Set the configuration of your Router to start creating routes using ",(0,o.kt)("inlineCode",{parentName:"p"},"create()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},'Router.create({\n  path404: "/notFound",\n  renderId: "#app",\n});\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"path404"),"\nIf the router cannot find a route, the user will be redirected to the route for HTTP status code 404."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"renderId"),"\nOptional id where the templates will be rendered. ",(0,o.kt)("inlineCode",{parentName:"p"},"renderId")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," to find the id, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"#app")," in your html file to select an id or ",(0,o.kt)("inlineCode",{parentName:"p"},".app")," to css class.")),(0,o.kt)("h2",{id:"execute-code-in-a-route"},"Execute code in a route"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},'import Router from "yourrouter";\n\nconst config = {\n  path404: "/notFound",\n};\n\nconst router = Router.create(config);\n\nrouter.addRoute("/", () => {\n  console.log("welcome to the main route!");\n});\n\nrouter.addRoute("/foo", () => {\n  console.log("welcome to the foo route!");\n});\n')),(0,o.kt)("h2",{id:"get-the-router-instance"},"Get the Router instance"),(0,o.kt)("p",null,"You can get the instance of your Router in any file using the ",(0,o.kt)("inlineCode",{parentName:"p"},"get()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/about/index.js"',title:'"src/pages/about/index.js"'},"const router = Router.get();\n")),(0,o.kt)("h2",{id:"template-rendering-"},"Template rendering \ud83c\udfed"),(0,o.kt)("p",null,"Render the content of your route in the HTML. You should return a funtion into addRoute callback, this function can be sync or async and should return the template to render in the document."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To active the template rendering you should set the ",(0,o.kt)("inlineCode",{parentName:"p"},"renderId")," in your Router config.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},'import Router from "yourrouter";\n\nconst router = Router.create({\n  path404: "/notFound",\n  renderId: "#app", // use #app to id and .app to css class\n});\n\nrouter.addRoute("/", () => {\n  console.log("Hello home page");\n\n  return () => "<p>Home page!</p>"; // function to that return\'s the teamplate to render in your page\n});\n')),(0,o.kt)("h3",{id:"example-with-template-rendering-disable"},"Example with template rendering disable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},'import Router from "yourrouter";\n\nconst router = Router.create({\n  path404: "/notFound",\n});\n\nrouter.addRoute("/", () => {\n  console.log("Hello home page");\n\n  // render the content in the #app element\n  document.querySelector("#app").innerHTML = "<p>Home page!</p>";\n});\n')))}d.isMDXComponent=!0}}]);