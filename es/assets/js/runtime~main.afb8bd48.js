(()=>{"use strict";var e,r,t,o,f,n={},a={};function d(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=n,d.c=a,e=[],d.O=(r,t,o,f)=>{if(!t){var n=1/0;for(b=0;b<e.length;b++){t=e[b][0],o=e[b][1],f=e[b][2];for(var a=!0,i=0;i<t.length;i++)(!1&f||n>=f)&&Object.keys(d.O).every((e=>d.O[e](t[i])))?t.splice(i--,1):(a=!1,f<n&&(n=f));if(a){e.splice(b--,1);var u=o();void 0!==u&&(r=u)}}return r}f=f||0;for(var b=e.length;b>0&&e[b-1][2]>f;b--)e[b]=e[b-1];e[b]=[t,o,f]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var f=Object.create(null);d.r(f);var n={};r=r||[null,t({}),t([]),t(t)];for(var a=2&o&&e;"object"==typeof a&&!~r.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,d.d(f,n),f},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",152:"54f44165",237:"1df93b7f",414:"393be207",436:"009f1e98",514:"1be78505",555:"bf3625cd",570:"fdfd1857",573:"3e6e0440",639:"e4e7a0c7",673:"80516945",777:"40abf2f6",802:"6f77173b",817:"14eb3368",881:"09e561e1",918:"17896441"}[e]||e)+"."+{53:"c49f0467",85:"e51120f7",152:"c9332b25",237:"28ed4c61",414:"6fb426c5",436:"536abe82",514:"f791c6fa",555:"5c577b05",570:"6e96120b",573:"8be3a31b",639:"f1257295",666:"ba73341b",673:"986e7432",777:"8997e055",802:"ef8c1766",817:"59003604",881:"45c3b2db",918:"a4a1ea61",972:"080b1135"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},f="your-router-docs:",d.l=(e,r,t,n)=>{if(o[e])o[e].push(r);else{var a,i;if(void 0!==t)for(var u=document.getElementsByTagName("script"),b=0;b<u.length;b++){var l=u[b];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==f+t){a=l;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.setAttribute("data-webpack",f+t),a.src=e),o[e]=[r];var c=(r,t)=>{a.onerror=a.onload=null,clearTimeout(s);var f=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),f&&f.forEach((e=>e(t))),r)return r(t)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),i&&document.head.appendChild(a)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/es/",d.gca=function(e){return e={17896441:"918",80516945:"673","935f2afb":"53","1f391b9e":"85","54f44165":"152","1df93b7f":"237","393be207":"414","009f1e98":"436","1be78505":"514",bf3625cd:"555",fdfd1857:"570","3e6e0440":"573",e4e7a0c7:"639","40abf2f6":"777","6f77173b":"802","14eb3368":"817","09e561e1":"881"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(r,t)=>{var o=d.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var f=new Promise(((t,f)=>o=e[r]=[t,f]));t.push(o[2]=f);var n=d.p+d.u(r),a=new Error;d.l(n,(t=>{if(d.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var f=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+f+": "+n+")",a.name="ChunkLoadError",a.type=f,a.request=n,o[1](a)}}),"chunk-"+r,r)}},d.O.j=r=>0===e[r];var r=(r,t)=>{var o,f,n=t[0],a=t[1],i=t[2],u=0;if(n.some((r=>0!==e[r]))){for(o in a)d.o(a,o)&&(d.m[o]=a[o]);if(i)var b=i(d)}for(r&&r(t);u<n.length;u++)f=n[u],d.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return d.O(b)},t=self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();