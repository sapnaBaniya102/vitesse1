if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-8ce990e4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"34ddf8cfa815dc32c5fc6ead7a7047e6"},{url:"assets/[...all].06f2673c.js",revision:"f10168ca4414c8ae0e8dc9e114b06403"},{url:"assets/[name].52b36d36.js",revision:"9d8376c0afd94476c2f8841f32d8dec7"},{url:"assets/404.a61b9fe9.js",revision:"1f8a762f8a26182d51210de9d3d99725"},{url:"assets/about.f633ac4b.js",revision:"dba0be7d0822b9d465fdfdf59d3a110c"},{url:"assets/app.0baafdf5.js",revision:"240fc31d6f5a7732f5f6639dce07c367"},{url:"assets/app.aebaeb33.css",revision:"6863679feb17722771feaaee506eba0b"},{url:"assets/home.7e930887.js",revision:"f82e6cde715c4310b4ad488c21e6571b"},{url:"assets/README.ef08998c.js",revision:"9c141b52d2aaaa7a3bdada5a375d8422"},{url:"assets/vendor.00a65a29.js",revision:"a94cb94b53e8caf5c7159f5a5c4b3e6a"},{url:"assets/virtual_pwa-register.1a7f99b5.js",revision:"00c0b49622f8216843c2e814a0e5c842"},{url:"index.html",revision:"7f2b657d63b9d40b406cda40c8c63756"},{url:"readme.html",revision:"ba9ae9595578799b96c409106b7bb280"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));