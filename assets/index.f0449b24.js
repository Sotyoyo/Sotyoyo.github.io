import{d,c as m,r as h,o as v,s as E,a as w,b as y,e as R,f as P,Q as g,g as A}from"./vendor.57eae20b.js";const L=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),f={},O="/",i=function(e,o){return!o||o.length===0?e():Promise.all(o.map(t=>{if(t=`${O}${t}`,t in f)return;f[t]=!0;const s=t.endsWith(".css"),u=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${u}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":L,s||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),s)return new Promise((l,n)=>{a.addEventListener("load",l),a.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>e())};var $=(r,e)=>{const o=r.__vccOpts||r;for(const[t,s]of e)o[t]=s;return o};const k=d({name:"App"});function C(r,e,o,t,s,u){const a=h("router-view");return v(),m(a)}var b=$(k,[["render",C]]),p=E(()=>w());const I=[{path:"/",component:()=>i(()=>import("./MainLayout.608b6940.js"),["assets/MainLayout.608b6940.js","assets/MainLayout.846d53a1.css","assets/vendor.57eae20b.js","assets/use-router-link.b6274cba.js","assets/QBtn.a67103f6.js","assets/QCard.6cb90ca6.js","assets/use-dark.2db9e88b.js","assets/format.211ef666.js"]),children:[{path:"",component:()=>i(()=>import("./IndexPage.8bb0ada8.js"),["assets/IndexPage.8bb0ada8.js","assets/use-router-link.b6274cba.js","assets/vendor.57eae20b.js","assets/use-dark.2db9e88b.js","assets/QCard.6cb90ca6.js"])}]},{path:"/widgets/tomatoClock",component:()=>i(()=>import("./TomatoClock.869c5c7f.js"),["assets/TomatoClock.869c5c7f.js","assets/TomatoClock.81054d39.css","assets/vendor.57eae20b.js","assets/format.211ef666.js","assets/use-router-link.b6274cba.js","assets/QBtn.a67103f6.js","assets/use-dark.2db9e88b.js"])},{path:"/:catchAll(.*)*",component:()=>i(()=>import("./ErrorNotFound.daeab8e9.js"),["assets/ErrorNotFound.daeab8e9.js","assets/QBtn.a67103f6.js","assets/vendor.57eae20b.js","assets/use-router-link.b6274cba.js"])}];var _=y(function(){return R({scrollBehavior:()=>({left:0,top:0}),routes:I,history:P("/")})});async function D(r,e){const o=r(b);o.use(g,e);const t=typeof p=="function"?await p({}):p;o.use(t);const s=typeof _=="function"?await _({store:t}):_;return t.use(()=>({router:s})),{app:o,store:t,router:s}}var S={config:{}};const T="/";async function V({app:r,router:e,store:o},t){let s=!1;const u=n=>{try{return e.resolve(n).href}catch{}return Object(n)===n?null:n},a=n=>{if(s=!0,typeof n=="string"&&/^https?:\/\//.test(n)){window.location.href=n;return}const c=u(n);c!==null&&(window.location.href=c)},l=window.location.href.replace(window.location.origin,"");for(let n=0;s===!1&&n<t.length;n++)try{await t[n]({app:r,router:e,store:o,ssrContext:null,redirect:a,urlPath:l,publicPath:T})}catch(c){if(c&&c.url){a(c.url);return}console.error("[Quasar] boot error:",c);return}s!==!0&&(r.use(e),r.mount("#q-app"))}D(A,S).then(r=>Promise.all([i(()=>import("./i18n.04177313.js"),["assets/i18n.04177313.js","assets/vendor.57eae20b.js"]),i(()=>import("./axios.001e8881.js"),["assets/axios.001e8881.js","assets/vendor.57eae20b.js"])]).then(e=>{const o=e.map(t=>t.default).filter(t=>typeof t=="function");V(r,o)}));export{$ as _};
