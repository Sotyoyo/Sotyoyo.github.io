var c=Object.defineProperty,l=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var o=(a,r,e)=>r in a?c(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e,s=(a,r)=>{for(var e in r||(r={}))q.call(r,e)&&o(a,e,r[e]);if(t)for(var e of t(r))f.call(r,e)&&o(a,e,r[e]);return a},d=(a,r)=>l(a,m(r));import{u as i,a as k}from"./use-dark.2db9e88b.js";import{c as b,b as v}from"./use-router-link.b6274cba.js";import{l as g,h as p,k as C}from"./vendor.57eae20b.js";var x=b({name:"QCard",props:d(s({},i),{tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean}),setup(a,{slots:r}){const e=C(),u=k(a,e.proxy.$q),n=g(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>p(a.tag,{class:n.value},v(r.default))}});export{x as Q};
