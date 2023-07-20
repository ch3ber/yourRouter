"use strict";(self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[]).push([[5518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(f,a(a({ref:t},l),{},{components:r})):o.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:4},a="redirectTo",c={unversionedId:"API/redirectTo",id:"version-2.0.2/API/redirectTo",title:"redirectTo",description:"You can use the redirectTo() method to redirect the user to another URL without reloading the browser.",source:"@site/versioned_docs/version-2.0.2/API/redirectTo.md",sourceDirName:"API",slug:"/API/redirectTo",permalink:"/yourRouter/es/docs/API/redirectTo",draft:!1,editUrl:"https://github.com/ch3ber/yourRouter-docs/tree/main/versioned_docs/version-2.0.2/API/redirectTo.md",tags:[],version:"2.0.2",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"addRoute",permalink:"/yourRouter/es/docs/API/addRoute"},next:{title:"getRouteParams",permalink:"/yourRouter/es/docs/API/getRouteParams"}},s={},u=[{value:"Example",id:"example",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"redirectto"},"redirectTo"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectTo()")," method to redirect the user to another URL without reloading the browser."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/section.js"',title:'"src/section.js"'},"import Router from 'yourrouter'\n\nconst router = Router.get()\n\nconsole.log(window.location.hash) // Output: #/foo\n\n// highlight-next-line\nrouter.redirectTo('/bar')\n\nconsole.log(window.location.hash) // Output: #/bar\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can pass the route with (",(0,n.kt)("inlineCode",{parentName:"p"},"'#/foo'"),") and without hash (",(0,n.kt)("inlineCode",{parentName:"p"},"/foo"),").")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"For this example you are in ",(0,n.kt)("inlineCode",{parentName:"p"},"/books/drama")," and click on a button that changes the url to ",(0,n.kt)("inlineCode",{parentName:"p"},"/books/history"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/section.js"',title:'"src/section.js"'},"import Router from 'yourrouter'\n\nconst router = Router.get()\n\nconst goToSectionButton = document.querySelector('#myButton')\n\ngoToSectionButton.addEventListener('click', () => {\n  // highlight-next-line\n  router.redirectTo('/books/history')\n})\n")))}d.isMDXComponent=!0}}]);