(()=>{"use strict";var e,r,t,o,a,n={},f={};function d(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=n,d.c=f,e=[],d.O=(r,t,o,a)=>{if(!t){var n=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],a=e[c][2];for(var f=!0,i=0;i<t.length;i++)(!1&a||n>=a)&&Object.keys(d.O).every((e=>d.O[e](t[i])))?t.splice(i--,1):(f=!1,a<n&&(n=a));if(f){e.splice(c--,1);var u=o();void 0!==u&&(r=u)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,o,a]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);d.r(a);var n={};r=r||[null,t({}),t([]),t(t)];for(var f=2&o&&e;"object"==typeof f&&!~r.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,d.d(a,n),a},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",89:"db447a36",152:"54f44165",172:"53fd3e59",237:"1df93b7f",289:"20d61cf8",324:"0af79331",414:"393be207",436:"009f1e98",443:"8a6a27d2",476:"0232ebb0",514:"1be78505",555:"bf3625cd",673:"80516945",689:"8eec2e10",817:"14eb3368",881:"09e561e1",918:"17896441",923:"4fdb0a79"}[e]||e)+"."+{53:"6fe7911e",85:"e51120f7",89:"93b96c1b",152:"4289ea8a",172:"14da7684",237:"4daf4836",289:"b6834ab9",324:"6544b779",414:"04e3da2c",436:"d223b62c",443:"7349c37e",476:"3e77e264",514:"f791c6fa",555:"54307ece",666:"ba73341b",673:"986e7432",689:"1fef6d4f",817:"59003604",881:"45c3b2db",918:"a4a1ea61",923:"7c6682e4",972:"080b1135"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},a="your-router-docs:",d.l=(e,r,t,n)=>{if(o[e])o[e].push(r);else{var f,i;if(void 0!==t)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var b=u[c];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==a+t){f=b;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.setAttribute("data-webpack",a+t),f.src=e),o[e]=[r];var l=(r,t)=>{f.onerror=f.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),i&&document.head.appendChild(f)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/yourRouter/",d.gca=function(e){return e={17896441:"918",80516945:"673","935f2afb":"53","1f391b9e":"85",db447a36:"89","54f44165":"152","53fd3e59":"172","1df93b7f":"237","20d61cf8":"289","0af79331":"324","393be207":"414","009f1e98":"436","8a6a27d2":"443","0232ebb0":"476","1be78505":"514",bf3625cd:"555","8eec2e10":"689","14eb3368":"817","09e561e1":"881","4fdb0a79":"923"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(r,t)=>{var o=d.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var n=d.p+d.u(r),f=new Error;d.l(n,(t=>{if(d.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,o[1](f)}}),"chunk-"+r,r)}},d.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,n=t[0],f=t[1],i=t[2],u=0;if(n.some((r=>0!==e[r]))){for(o in f)d.o(f,o)&&(d.m[o]=f[o]);if(i)var c=i(d)}for(r&&r(t);u<n.length;u++)a=n[u],d.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return d.O(c)},t=self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();