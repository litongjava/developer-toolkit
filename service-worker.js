if(!self.define){let e,s={};const n=(n,o)=>(n=new URL(n+".js",o).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const l=e=>n(e,r),c={module:{uri:r},exports:t,require:l};s[r]=Promise.all(o.map((e=>c[e]||l(e)))).then((e=>(i(...e),t)))}}define(["./workbox-d6430d1c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"developer-toolkit"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.9d9d8aa5.css",revision:null},{url:"fonts/element-icons.f1a45d74.ttf",revision:null},{url:"fonts/element-icons.ff18efd1.woff",revision:null},{url:"index.html",revision:"e46d46a67fc97591d08c97c52ba941f5"},{url:"js/app.b8da903e.js",revision:null},{url:"js/chunk-vendors.885100d5.js",revision:null},{url:"manifest.json",revision:"d41ee3de3b3164883ca8710b5b13ac14"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map