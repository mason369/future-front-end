if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>n(s,r),c={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>c[s]||t(s)))).then((s=>(l(...s),u)))}}define(["./workbox-082d0e8a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/index-09e5ca44.js",revision:null},{url:"assets/index-14805eb3.js",revision:null},{url:"assets/index-1c4d467c.js",revision:null},{url:"assets/index-56284396.js",revision:null},{url:"assets/index-95a498b5.js",revision:null},{url:"assets/index-a1b05adc.js",revision:null},{url:"assets/index-a47ba918.css",revision:null},{url:"assets/index-b118bedf.css",revision:null},{url:"assets/index-b998236d.js",revision:null},{url:"assets/index-cddc22c2.css",revision:null},{url:"assets/index-da6bd454.js",revision:null},{url:"assets/index-e86d2efa.css",revision:null},{url:"assets/index-e90dc1f1.css",revision:null},{url:"assets/NotFound-383f6438.css",revision:null},{url:"assets/NotFound-7daa7f82.js",revision:null},{url:"assets/vendor-619670dc.js",revision:null},{url:"assets/vendor-6d5d5ca5.css",revision:null},{url:"index.html",revision:"57cc1b5a26796044863b0b7518620f31"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\/api-dev\/|\/api-pro\//,new s.CacheFirst({cacheName:"interface-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(js|css|ts)/,new s.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
