(()=>{"use strict";var e,a,d,c,r,t={},f={};function o(e){var a=f[e];if(void 0!==a)return a.exports;var d=f[e]={id:e,loaded:!1,exports:{}};return t[e].call(d.exports,d,d.exports,o),d.loaded=!0,d.exports}o.m=t,o.c=f,e=[],o.O=(a,d,c,r)=>{if(!d){var t=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],r=e[i][2];for(var f=!0,b=0;b<d.length;b++)(!1&r||t>=r)&&Object.keys(o.O).every((e=>o.O[e](d[b])))?d.splice(b--,1):(f=!1,r<t&&(t=r));if(f){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[d,c,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var t={};a=a||[null,d({}),d([]),d(d)];for(var f=2&c&&e;"object"==typeof f&&!~a.indexOf(f);f=d(f))Object.getOwnPropertyNames(f).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,o.d(r,t),r},o.d=(e,a)=>{for(var d in a)o.o(a,d)&&!o.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,d)=>(o.f[d](e,a),a)),[])),o.u=e=>"assets/js/"+({3:"d0b27087",51:"c5082806",53:"935f2afb",152:"54f44165",394:"e0a19902",404:"bdd5c9af",979:"2ca97ce5",1037:"a00e3b48",1431:"c5ae4851",1448:"61505c12",1659:"75957a3d",1673:"80516945",1979:"41782429",2e3:"1b9f8da8",2257:"45af9b93",2558:"465bed44",2587:"b82b6980",2628:"eb9da371",2654:"3cf71c7a",2730:"a7f876e3",3012:"54695add",3084:"35c22c8a",3237:"1df93b7f",3436:"009f1e98",3450:"21fcadc9",3739:"76d83dcb",3998:"b8499b79",4073:"b7e3712b",4229:"7ee1d1bc",4482:"18dd72b8",4714:"70a22bde",4946:"2b4c6034",5098:"a27c55b4",5497:"c1ea3b4d",5576:"289afdb6",5665:"2c0db381",5801:"8c819092",5966:"560e9331",6256:"5168f0af",6777:"cf0d2a07",7561:"7cd925d1",7645:"d893b1ec",7802:"6f77173b",7918:"17896441",8001:"fdf93c60",8426:"6977480d",8512:"6d2dd46d",8562:"1e16136c",8804:"2e6cfaa4",8881:"09e561e1",9480:"210faae9",9514:"1be78505",9596:"ab45cc3e",9817:"14eb3368"}[e]||e)+"."+{3:"5792d658",51:"9682d5d1",53:"cf9b444c",152:"14a3d4eb",394:"33b11fff",404:"99deaf73",979:"5f740a19",1037:"49e82732",1431:"e9fc8134",1448:"5c06bd3c",1659:"25e2514b",1673:"a8af19b8",1979:"bdf8a157",2e3:"67bded59",2257:"b37f5226",2558:"e081b4f8",2587:"0413cc1a",2628:"1455bdb5",2654:"af19460f",2730:"d6ec60ad",3012:"8a6ebd16",3084:"1673ad90",3237:"281454b0",3436:"931c5f77",3450:"a5376ef6",3739:"814d4f10",3998:"a81990d1",4073:"b6e56f62",4229:"b9e853c0",4482:"ff830e0d",4714:"38b4a963",4946:"763f3549",4972:"5bd7c590",5098:"90b561be",5497:"340674fc",5576:"1664bdd0",5665:"5bd40cd3",5801:"d2f6581d",5966:"2307e10c",6256:"8f7a83e1",6777:"1a1f505b",7561:"3d0b032c",7645:"14a18eae",7802:"233bb3f7",7918:"bd549325",8001:"8c88bb44",8426:"2fd60e78",8512:"c757e51d",8562:"8ad7b06c",8804:"922fc0c4",8881:"ae7e73e6",9480:"1d313923",9514:"b098b4a2",9596:"763d8380",9817:"674d66fe"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},r="your-router-docs:",o.l=(e,a,d,t)=>{if(c[e])c[e].push(a);else{var f,b;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+d){f=u;break}}f||(b=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,o.nc&&f.setAttribute("nonce",o.nc),f.setAttribute("data-webpack",r+d),f.src=e),c[e]=[a];var l=(a,d)=>{f.onerror=f.onload=null,clearTimeout(s);var r=c[e];if(delete c[e],f.parentNode&&f.parentNode.removeChild(f),r&&r.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),b&&document.head.appendChild(f)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/yourRouter/es/",o.gca=function(e){return e={17896441:"7918",41782429:"1979",80516945:"1673",d0b27087:"3",c5082806:"51","935f2afb":"53","54f44165":"152",e0a19902:"394",bdd5c9af:"404","2ca97ce5":"979",a00e3b48:"1037",c5ae4851:"1431","61505c12":"1448","75957a3d":"1659","1b9f8da8":"2000","45af9b93":"2257","465bed44":"2558",b82b6980:"2587",eb9da371:"2628","3cf71c7a":"2654",a7f876e3:"2730","54695add":"3012","35c22c8a":"3084","1df93b7f":"3237","009f1e98":"3436","21fcadc9":"3450","76d83dcb":"3739",b8499b79:"3998",b7e3712b:"4073","7ee1d1bc":"4229","18dd72b8":"4482","70a22bde":"4714","2b4c6034":"4946",a27c55b4:"5098",c1ea3b4d:"5497","289afdb6":"5576","2c0db381":"5665","8c819092":"5801","560e9331":"5966","5168f0af":"6256",cf0d2a07:"6777","7cd925d1":"7561",d893b1ec:"7645","6f77173b":"7802",fdf93c60:"8001","6977480d":"8426","6d2dd46d":"8512","1e16136c":"8562","2e6cfaa4":"8804","09e561e1":"8881","210faae9":"9480","1be78505":"9514",ab45cc3e:"9596","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,d)=>{var c=o.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((d,r)=>c=e[a]=[d,r]));d.push(c[2]=r);var t=o.p+o.u(a),f=new Error;o.l(t,(d=>{if(o.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var r=d&&("load"===d.type?"missing":d.type),t=d&&d.target&&d.target.src;f.message="Loading chunk "+a+" failed.\n("+r+": "+t+")",f.name="ChunkLoadError",f.type=r,f.request=t,c[1](f)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,d)=>{var c,r,t=d[0],f=d[1],b=d[2],n=0;if(t.some((a=>0!==e[a]))){for(c in f)o.o(f,c)&&(o.m[c]=f[c]);if(b)var i=b(o)}for(a&&a(d);n<t.length;n++)r=t[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},d=self.webpackChunkyour_router_docs=self.webpackChunkyour_router_docs||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();