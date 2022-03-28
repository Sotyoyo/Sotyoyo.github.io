var pt=Object.defineProperty,bt=Object.defineProperties;var wt=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var St=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable;var De=(e,i,a)=>i in e?pt(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,V=(e,i)=>{for(var a in i||(i={}))St.call(i,a)&&De(e,a,i[a]);if(Fe)for(var a of Fe(i))_t.call(i,a)&&De(e,a,i[a]);return e},X=(e,i)=>bt(e,wt(i));import{j as C,u as Je,n as Z,v as le,x as N,y as ke,h as y,k as U,z as H,m as Ee,l as d,w as q,A as se,B as qt,H as He,C as D,D as Ze,E as Ct,G as xt,I as ie,J as ye,K as Ve,L as pe,M as Te,N as be,O as zt,P as et,R as Tt,S as oe,p as Lt,d as kt,r as Et,o as $t,c as Bt,U as B,q as k,V as P,W as Pt,X as Ot}from"./vendor.122a3419.js";import{c as Q,h as Mt,a as Ft,b as ue,d as Dt,u as Ht,e as Vt,f as Qe,g as Qt}from"./use-router-link.9301295a.js";import{u as Rt,a as Wt,Q as At,b as Nt,g as tt,c as it,h as It,d as jt,e as Xt,f as Yt,i as Ut,j as Kt,k as ne,l as Gt,m as we,n as Se}from"./format.95cef7ad.js";import{Q as Re}from"./QCard.ae05b4de.js";import{_ as Jt}from"./index.f31aacd7.js";function Zt(){const e=C(!Je.value);return e.value===!1&&Z(()=>{e.value=!0}),e}const ot=typeof ResizeObserver!="undefined",We=ot===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Le=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let a=null,r,t={width:-1,height:-1};function o(u){u===!0||e.debounce===0||e.debounce==="0"?s():a===null&&(a=setTimeout(s,e.debounce))}function s(){if(clearTimeout(a),a=null,r){const{offsetWidth:u,offsetHeight:n}=r;(u!==t.width||n!==t.height)&&(t={width:u,height:n},i("resize",t))}}const f=U();if(Object.assign(f.proxy,{trigger:o}),ot===!0){let u;return Z(()=>{le(()=>{r=f.proxy.$el.parentNode,r&&(u=new ResizeObserver(o),u.observe(r),s())})}),N(()=>{clearTimeout(a),u!==void 0&&(u.disconnect!==void 0?u.disconnect():r&&u.unobserve(r))}),ke}else{let x=function(){clearTimeout(a),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",o,H.passive),n=void 0)},b=function(){x(),r&&r.contentDocument&&(n=r.contentDocument.defaultView,n.addEventListener("resize",o,H.passive),s())};const u=Zt();let n;return Z(()=>{le(()=>{r=f.proxy.$el,r&&b()})}),N(x),()=>{if(u.value===!0)return y("object",{style:We.style,tabindex:-1,type:"text/html",data:We.url,"aria-hidden":"true",onLoad:b})}}}}),ei=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:a}){const{proxy:{$q:r}}=U(),t=Ee(se,()=>{console.error("QHeader needs to be child of QLayout")}),o=C(parseInt(e.heightHint,10)),s=C(!0),f=d(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),u=d(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?o.value:0;const v=o.value-t.scroll.value.position;return v>0?v:0}),n=d(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),x=d(()=>e.modelValue===!0&&n.value===!0&&e.reveal===!0),b=d(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(n.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=d(()=>{const v=t.rows.value.top,L={};return v[0]==="l"&&t.left.space===!0&&(L[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(L[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function c(v,L){t.update("header",v,L)}function S(v,L){v.value!==L&&(v.value=L)}function z({height:v}){S(o,v),c("size",v)}function p(v){x.value===!0&&S(s,!0),a("focusin",v)}q(()=>e.modelValue,v=>{c("space",v),S(s,!0),t.animate()}),q(u,v=>{c("offset",v)}),q(()=>e.reveal,v=>{v===!1&&S(s,e.modelValue)}),q(s,v=>{t.animate(),a("reveal",v)}),q(t.scroll,v=>{e.reveal===!0&&S(s,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const M={};return t.instances.header=M,e.modelValue===!0&&c("size",o.value),c("space",e.modelValue),c("offset",u.value),N(()=>{t.instances.header===M&&(t.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const v=Mt(i.default,[]);return e.elevated===!0&&v.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(y(Le,{debounce:0,onResize:z})),y("header",{class:b.value,style:w.value,onFocusin:p},v)}}}),ae=Q({name:"QAvatar",props:X(V({},Rt),{fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean}),setup(e,{slots:i}){const a=Wt(e),r=d(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=d(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const o=e.icon!==void 0?[y(At,{name:e.icon})]:void 0;return y("div",{class:r.value,style:a.value},[y("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},Ft(i.default,o))])}}}),Ae=Q({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:i}){const a=d(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>y(e.tag,{class:a.value},ue(i.default))}});const ti={ratio:[String,Number]};function ii(e,i){return d(()=>{const a=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const oi=16/9;var ni=Q({name:"QImg",props:X(V({},ti),{src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},width:String,height:String,initialRatio:{type:[Number,String],default:oi},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String}),emits:["load","error"],setup(e,{slots:i,emit:a}){const r=C(e.initialRatio),t=ii(e,r);let o;const s=[C(null),C(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],f=C(0),u=C(!1),n=C(!1),x=d(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),b=d(()=>({width:e.width,height:e.height})),w=d(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),c=d(()=>X(V({},e.imgStyle),{objectFit:e.fit,objectPosition:e.position}));q(()=>S(),z);function S(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function z(h){if(clearTimeout(o),n.value=!1,h===null){u.value=!1,s[0].value=null,s[1].value=null;return}u.value=!0,s[f.value].value=h}function p({target:h}){o!==null&&(clearTimeout(o),r.value=h.naturalHeight===0?.5:h.naturalWidth/h.naturalHeight,M(h,1))}function M(h,E){o===null||E===1e3||(h.complete===!0?v(h):o=setTimeout(()=>{M(h,E+1)},50))}function v(h){o!==null&&(f.value=f.value===1?0:1,s[f.value].value=null,u.value=!1,n.value=!1,a("load",h.currentSrc||h.src))}function L(h){clearTimeout(o),u.value=!1,n.value=!0,s[0].value=null,s[1].value=null,a("error",h)}function m(h,E){return y("div",{class:"q-img__container absolute-full",key:h},E)}function _(h){const E=s[h].value,T=V({key:"img_"+h,class:w.value,style:c.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,"aria-hidden":"true",draggable:e.draggable},E);return f.value===h?(T.class+=" q-img__image--waiting",Object.assign(T,{onLoad:p,onError:L})):T.class+=" q-img__image--loaded",m("img"+h,y("img",T))}function F(){return u.value!==!0?y("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ue(i[n.value===!0?"error":"default"])):y("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():e.noSpinner===!0?void 0:[y(Nt,{color:e.spinnerColor,size:e.spinnerSize})])}return z(S()),N(()=>{clearTimeout(o),o=null}),()=>{const h=[];return t.value!==null&&h.push(y("div",{key:"filler",style:t.value})),n.value!==!0&&(s[0].value!==null&&h.push(_(0)),s[1].value!==null&&h.push(_(1))),h.push(y(qt,{name:"q-transition--fade"},F)),y("div",{class:x.value,style:b.value,role:"img","aria-label":e.alt},h)}}});function ai(e,i,a){let r;function t(){r!==void 0&&(He.remove(r),r=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){r={condition:()=>a.value===!0,handler:i},He.add(r)}}}let G=0,_e,qe,J,Ce=!1,Ne,Ie,Y;function ri(e){li(e)&&Ze(e)}function li(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const i=Ct(e),a=e.shiftKey&&!e.deltaX,r=!a&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=a||r?e.deltaY:e.deltaX;for(let o=0;o<i.length;o++){const s=i[o];if(It(s,r))return r?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function je(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function re(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:i}=e.target,{clientHeight:a,scrollTop:r}=document.scrollingElement;(J===void 0||i!==window.innerHeight)&&(J=a-i,document.scrollingElement.scrollTop=r),r>J&&(document.scrollingElement.scrollTop-=Math.ceil((r-J)/8))}))}function Xe(e){const i=document.body,a=window.visualViewport!==void 0;if(e==="add"){const{overflowY:r,overflowX:t}=window.getComputedStyle(i);_e=tt(window),qe=it(window),Ne=i.style.left,Ie=i.style.top,i.style.left=`-${_e}px`,i.style.top=`-${qe}px`,t!=="hidden"&&(t==="scroll"||i.scrollWidth>window.innerWidth)&&i.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||i.scrollHeight>window.innerHeight)&&i.classList.add("q-body--force-scrollbar-y"),i.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,D.is.ios===!0&&(a===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",re,H.passiveCapture),window.visualViewport.addEventListener("scroll",re,H.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",je,H.passiveCapture))}D.is.desktop===!0&&D.is.mac===!0&&window[`${e}EventListener`]("wheel",ri,H.notPassive),e==="remove"&&(D.is.ios===!0&&(a===!0?(window.visualViewport.removeEventListener("resize",re,H.passiveCapture),window.visualViewport.removeEventListener("scroll",re,H.passiveCapture)):window.removeEventListener("scroll",je,H.passiveCapture)),i.classList.remove("q-body--prevent-scroll"),i.classList.remove("q-body--force-scrollbar-x"),i.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,i.style.left=Ne,i.style.top=Ie,window.scrollTo(_e,qe),J=void 0)}function si(e){let i="add";if(e===!0){if(G++,Y!==void 0){clearTimeout(Y),Y=void 0;return}if(G>1)return}else{if(G===0||(G--,G>0))return;if(i="remove",D.is.ios===!0&&D.is.nativeMobile===!0){clearTimeout(Y),Y=setTimeout(()=>{Xe(i),Y=void 0},100);return}}Xe(i)}function ui(){let e;return{preventBodyScroll(i){i!==e&&(e!==void 0||i===!0)&&(e=i,si(i))}}}const $e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ci=Object.keys($e);$e.all=!0;function Ye(e){const i={};for(const a of ci)e[a]===!0&&(i[a]=!0);return Object.keys(i).length===0?$e:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}function Ue(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function xe(e,i,a){const r=Te(e);let t,o=r.left-i.event.x,s=r.top-i.event.y,f=Math.abs(o),u=Math.abs(s);const n=i.direction;n.horizontal===!0&&n.vertical!==!0?t=o<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?t=s<0?"up":"down":n.up===!0&&s<0?(t="up",f>u&&(n.left===!0&&o<0?t="left":n.right===!0&&o>0&&(t="right"))):n.down===!0&&s>0?(t="down",f>u&&(n.left===!0&&o<0?t="left":n.right===!0&&o>0&&(t="right"))):n.left===!0&&o<0?(t="left",f<u&&(n.up===!0&&s<0?t="up":n.down===!0&&s>0&&(t="down"))):n.right===!0&&o>0&&(t="right",f<u&&(n.up===!0&&s<0?t="up":n.down===!0&&s>0&&(t="down")));let x=!1;if(t===void 0&&a===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,x=!0,t==="left"||t==="right"?(r.left-=o,f=0,o=0):(r.top-=s,u=0,s=0)}return{synthetic:x,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:r,direction:t,isFirst:i.event.isFirst,isFinal:a===!0,duration:Date.now()-i.event.time,distance:{x:f,y:u},offset:{x:o,y:s},delta:{x:r.left-i.event.lastX,y:r.top-i.event.lastY}}}}let di=0;var ze=Dt({name:"touch-pan",beforeMount(e,{value:i,modifiers:a}){if(a.mouse!==!0&&D.has.touch!==!0)return;function r(o,s){a.mouse===!0&&s===!0?Ze(o):(a.stop===!0&&pe(o),a.prevent===!0&&Ve(o))}const t={uid:"qvtp_"+di++,handler:i,modifiers:a,direction:Ye(a),noop:ke,mouseStart(o){Ue(o,t)&&xt(o)&&(ie(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Ue(o,t)){const s=o.target;ie(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,s){if(D.is.firefox===!0&&ye(e,!0),t.lastEvt=o,s===!0||a.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0)){const n=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&Ve(n),o.cancelBubble===!0&&pe(n),Object.assign(n,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:n}}pe(o)}const{left:f,top:u}=Te(o);t.event={x:f,y:u,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:u}},move(o){if(t.event===void 0)return;const s=Te(o),f=s.left-t.event.x,u=s.top-t.event.y;if(f===0&&u===0)return;t.lastEvt=o;const n=t.event.mouse===!0,x=()=>{r(o,n),a.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),jt(),t.styleCleanup=c=>{if(t.styleCleanup=void 0,a.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),n===!0){const S=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{S(),c()},50):S()}else c!==void 0&&c()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(o,t.event.mouse);const{payload:c,synthetic:S}=xe(o,t,!1);c!==void 0&&(t.handler(c)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&x(),t.event.lastX=c.position.left,t.event.lastY=c.position.top,t.event.lastDir=S===!0?void 0:c.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||n===!0&&t.modifiers.mouseAllDir===!0){x(),t.event.detected=!0,t.move(o);return}const b=Math.abs(f),w=Math.abs(u);b!==w&&(t.direction.horizontal===!0&&b>w||t.direction.vertical===!0&&b<w||t.direction.up===!0&&b<w&&u<0||t.direction.down===!0&&b<w&&u>0||t.direction.left===!0&&b>w&&f<0||t.direction.right===!0&&b>w&&f>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,s){if(t.event!==void 0){if(be(t,"temp"),D.is.firefox===!0&&ye(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(xe(o===void 0?t.lastEvt:o,t).payload);const{payload:f}=xe(o===void 0?t.lastEvt:o,t,!0),u=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(u):u()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,a.mouse===!0&&ie(t,"main",[[e,"mousedown","mouseStart",`passive${a.mouseCapture===!0?"Capture":""}`]]),D.has.touch===!0&&ie(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const a=e.__qtouchpan;a!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&a.end(),a.handler=i.value),a.direction=Ye(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),be(i,"main"),be(i,"temp"),D.is.firefox===!0&&ye(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const Ke=150;var fi=Q({name:"QDrawer",inheritAttrs:!1,props:X(V(V({},Xt),Ht),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...Yt,"on-layout","mini-state"],setup(e,{slots:i,emit:a,attrs:r}){const t=U(),{proxy:{$q:o}}=t,s=Vt(e,o),{preventBodyScroll:f}=ui(),{registerTimeout:u}=Ut(),n=Ee(se,()=>{console.error("QDrawer needs to be child of QLayout")});let x,b,w;const c=C(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),S=d(()=>e.mini===!0&&c.value!==!0),z=d(()=>S.value===!0?e.miniWidth:e.width),p=C(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),M=d(()=>e.persistent!==!0&&(c.value===!0||nt.value===!0));function v(l,g){if(F(),l!==!1&&n.animate(),O(0),c.value===!0){const $=n.instances[ee.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),R(1),n.isContainer.value!==!0&&f(!0)}else R(0),l!==!1&&he(!1);u(()=>{l!==!1&&he(!0),g!==!0&&a("show",l)},Ke)}function L(l,g){h(),l!==!1&&n.animate(),R(0),O(I.value*z.value),me(),g!==!0&&u(()=>{a("hide",l)},Ke)}const{show:m,hide:_}=Kt({showing:p,hideOnRouteChange:M,handleShow:v,handleHide:L}),{addToHistory:F,removeFromHistory:h}=ai(p,_,M),E={belowBreakpoint:c,hide:_},T=d(()=>e.side==="right"),I=d(()=>(o.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),Be=C(0),j=C(!1),ce=C(!1),Pe=C(z.value*I.value),ee=d(()=>T.value===!0?"left":"right"),de=d(()=>p.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),fe=d(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(T.value?"R":"L")>-1||o.platform.is.ios===!0&&n.isContainer.value===!0),K=d(()=>e.overlay===!1&&p.value===!0&&c.value===!1),nt=d(()=>e.overlay===!0&&p.value===!0&&c.value===!1),at=d(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&j.value===!1?" hidden":"")),rt=d(()=>({backgroundColor:`rgba(0,0,0,${Be.value*.4})`})),Oe=d(()=>T.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),lt=d(()=>T.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),st=d(()=>{const l={};return n.header.space===!0&&Oe.value===!1&&(fe.value===!0?l.top=`${n.header.offset}px`:n.header.space===!0&&(l.top=`${n.header.size}px`)),n.footer.space===!0&&lt.value===!1&&(fe.value===!0?l.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(l.bottom=`${n.footer.size}px`)),l}),ut=d(()=>{const l={width:`${z.value}px`,transform:`translateX(${Pe.value}px)`};return c.value===!0?l:Object.assign(l,st.value)}),ct=d(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),dt=d(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${S.value===!0?"mini":"standard"}`+(fe.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Oe.value===!0?" q-drawer--top-padding":""))),ft=d(()=>{const l=o.lang.rtl===!0?e.side:ee.value;return[[ze,gt,void 0,{[l]:!0,mouse:!0}]]}),vt=d(()=>{const l=o.lang.rtl===!0?ee.value:e.side;return[[ze,Me,void 0,{[l]:!0,mouse:!0}]]}),ht=d(()=>{const l=o.lang.rtl===!0?ee.value:e.side;return[[ze,Me,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){yt(c,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}q(c,l=>{l===!0?(x=p.value,p.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&x!==!1&&(p.value===!0?(O(0),R(0),me()):m(!1))}),q(()=>e.side,(l,g)=>{n.instances[g]===E&&(n.instances[g]=void 0,n[g].space=!1,n[g].offset=0),n.instances[l]=E,n[l].size=z.value,n[l].space=K.value,n[l].offset=de.value}),q(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),q(()=>e.behavior+e.breakpoint,ve),q(n.isContainer,l=>{p.value===!0&&f(l!==!0),l===!0&&ve()}),q(n.scrollbarWidth,()=>{O(p.value===!0?0:void 0)}),q(de,l=>{W("offset",l)}),q(K,l=>{a("on-layout",l),W("space",l)}),q(T,()=>{O()}),q(z,l=>{O(),ge(e.miniToOverlay,l)}),q(()=>e.miniToOverlay,l=>{ge(l,z.value)}),q(()=>o.lang.rtl,()=>{O()}),q(()=>e.mini,()=>{e.modelValue===!0&&(mt(),n.animate())}),q(S,l=>{a("mini-state",l)});function O(l){l===void 0?le(()=>{l=p.value===!0?0:z.value,O(I.value*l)}):(n.isContainer.value===!0&&T.value===!0&&(c.value===!0||Math.abs(l)===z.value)&&(l+=I.value*n.scrollbarWidth.value),Pe.value=l)}function R(l){Be.value=l}function he(l){const g=l===!0?"remove":n.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function mt(){clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,b=setTimeout(()=>{ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function gt(l){if(p.value!==!1)return;const g=z.value,$=ne(l.distance.x,0,g);if(l.isFinal===!0){$>=Math.min(75,g)===!0?m():(n.animate(),R(0),O(I.value*g)),j.value=!1;return}O((o.lang.rtl===!0?T.value!==!0:T.value)?Math.max(g-$,0):Math.min(0,$-g)),R(ne($/g,0,1)),l.isFirst===!0&&(j.value=!0)}function Me(l){if(p.value!==!0)return;const g=z.value,$=l.direction===e.side,te=(o.lang.rtl===!0?$!==!0:$)?ne(l.distance.x,0,g):0;if(l.isFinal===!0){Math.abs(te)<Math.min(75,g)===!0?(n.animate(),R(1),O(0)):_(),j.value=!1;return}O(I.value*te),R(ne(1-te/g,0,1)),l.isFirst===!0&&(j.value=!0)}function me(){f(!1),he(!0)}function W(l,g){n.update(e.side,l,g)}function yt(l,g){l.value!==g&&(l.value=g)}function ge(l,g){W("size",l===!0?e.miniWidth:g)}return n.instances[e.side]=E,ge(e.miniToOverlay,z.value),W("space",K.value),W("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),Z(()=>{a("on-layout",K.value),a("mini-state",S.value),x=e.showIfAbove===!0;const l=()=>{(p.value===!0?v:L)(!1,!0)};if(n.totalWidth.value!==0){le(l);return}w=q(n.totalWidth,()=>{w(),w=void 0,p.value===!1&&e.showIfAbove===!0&&c.value===!1?m(!1):l()})}),N(()=>{w!==void 0&&w(),clearTimeout(b),p.value===!0&&me(),n.instances[e.side]===E&&(n.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const l=[];c.value===!0&&(e.noSwipeOpen===!1&&l.push(zt(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ft.value)),l.push(Qe("div",{ref:"backdrop",class:at.value,style:rt.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>ht.value)));const g=S.value===!0&&i.mini!==void 0,$=[y("div",X(V({},r),{key:""+g,class:[ct.value,r.class]}),g===!0?i.mini():ue(i.default))];return e.elevated===!0&&p.value===!0&&$.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Qe("aside",{ref:"content",class:dt.value,style:ut.value},$,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>vt.value)),y("div",{class:"q-drawer-container"},l)}}}),vi=Q({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:a}}=U(),r=Ee(se,()=>{console.error("QPageContainer needs to be child of QLayout")});et(Tt,!0);const t=d(()=>{const o={};return r.header.space===!0&&(o.paddingTop=`${r.header.size}px`),r.right.space===!0&&(o[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(o.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(o[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),o});return()=>y("div",{class:"q-page-container",style:t.value},ue(i.default))}});const{passive:Ge}=H,hi=["both","horizontal","vertical"];var mi=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>hi.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,o;q(()=>e.scrollTarget,()=>{u(),f()});function s(){r!==null&&r();const b=Math.max(0,it(t)),w=tt(t),c={top:b-a.position.top,left:w-a.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const S=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";a.position={top:b,left:w},a.directionChanged=a.direction!==S,a.delta=c,a.directionChanged===!0&&(a.direction=S,a.inflectionPoint=a.position),i("scroll",V({},a))}function f(){t=Gt(o,e.scrollTarget),t.addEventListener("scroll",n,Ge),n(!0)}function u(){t!==void 0&&(t.removeEventListener("scroll",n,Ge),t=void 0)}function n(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[w,c]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{c(w),r=null}}}const x=U();return Z(()=>{o=x.proxy.$el.parentNode,f()}),N(()=>{r!==null&&r(),u()}),Object.assign(x.proxy,{trigger:n,getPosition:()=>a}),ke}}),gi=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:a}){const{proxy:{$q:r}}=U(),t=C(null),o=C(r.screen.height),s=C(e.container===!0?0:r.screen.width),f=C({position:0,direction:"down",inflectionPoint:0}),u=C(0),n=C(Je.value===!0?0:we()),x=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=d(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),w=d(()=>n.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${n.value}px`}:null),c=d(()=>n.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${n.value}px`,width:`calc(100% + ${n.value}px)`}:null);function S(m){if(e.container===!0||document.qScrollPrevented!==!0){const _={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};f.value=_,e.onScroll!==void 0&&a("scroll",_)}}function z(m){const{height:_,width:F}=m;let h=!1;o.value!==_&&(h=!0,o.value=_,e.onScrollHeight!==void 0&&a("scroll-height",_),M()),s.value!==F&&(h=!0,s.value=F),h===!0&&e.onResize!==void 0&&a("resize",m)}function p({height:m}){u.value!==m&&(u.value=m,M())}function M(){if(e.container===!0){const m=o.value>u.value?we():0;n.value!==m&&(n.value=m)}}let v;const L={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:t,height:o,containerHeight:u,scrollbarWidth:n,totalWidth:d(()=>s.value+n.value),rows:d(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:oe({size:0,offset:0,space:!1}),right:oe({size:300,offset:0,space:!1}),footer:oe({size:0,offset:0,space:!1}),left:oe({size:300,offset:0,space:!1}),scroll:f,animate(){v!==void 0?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),v=void 0},155)},update(m,_,F){L[m][_]=F}};if(et(se,L),we()>0){let F=function(){m=null,_.classList.remove("hide-scrollbar")},h=function(){if(m===null){if(_.scrollHeight>r.screen.height)return;_.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(F,300)},E=function(T){m!==null&&T==="remove"&&(clearTimeout(m),F()),window[`${T}EventListener`]("resize",h)},m=null;const _=document.body;q(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),Lt(()=>{E("remove")})}return()=>{const m=Qt(i.default,[y(mi,{onScroll:S}),y(Le,{onResize:z})]),_=y("div",{class:x.value,style:b.value,ref:e.container===!0?void 0:t},m);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:t},[y(Le,{onResize:p}),y("div",{class:"absolute-full",style:w.value},[y("div",{class:"scroll",style:c.value},[_])])]):_}}}),yi="/assets/2.e6f058a4.png";const pi=[{title:"@\u5C0F\u7EA2\u4E66",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"@\u6296\u97F3",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"@qq",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"@\u77E5\u4E4E",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"}],bi=kt({name:"MainLayout",components:{},setup(){const e=C(!1);return console.log(pi),{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),A=e=>(Pt("data-v-5595fa58"),e=e(),Ot(),e),wi={class:"q-px-lg q-py-lg"},Si={class:"flex full-width"},_i={class:"q-mx-auto"},qi=A(()=>P("img",{src:yi},null,-1)),Ci=A(()=>P("div",{class:"text-body1 text-center"},"@\u4E00\u9897\u756A\u85AF\u751C",-1)),xi=A(()=>P("div",{class:"text-caption text-center"},"by F & Fan",-1)),zi=A(()=>P("div",{class:"q-mt-sm text-caption text-center"}," \u626B\u7801\u83B7\u5F97\u6700\u65B0\u8BBF\u95EE\u53E3\u4EE4 ",-1)),Ti={class:"full-width q-my-lg text-center q-mt-xl"},Li={class:"q-gutter-md display-inline-block"},ki=A(()=>P("img",{alt:"\u524D\u5F80\u5C0F\u7EA2\u4E66",class:"cursor-pointer",src:"https://s3.bmp.ovh/imgs/2022/03/6f7336f4f0c6ecf2.png"},null,-1)),Ei=A(()=>P("img",{alt:"\u524D\u5F80bilibili",class:"cursor-pointer",src:"https://s3.bmp.ovh/imgs/2022/03/93d767fa84c466c8.png"},null,-1)),$i=A(()=>P("img",{alt:"\u524D\u5F80\u6398\u91D1",class:"cursor-pointer",src:"https://s3.bmp.ovh/imgs/2022/03/9d114f438868bd69.png"},null,-1)),Bi=A(()=>P("p",{class:"text-center"},"\xA9 2022 \u2022 F & Fan",-1));function Pi(e,i,a,r,t,o){const s=Et("router-view");return $t(),Bt(gi,{view:"hHh Lpr lFf"},{default:B(()=>[k(ei,{class:"top-header"}),k(fi,{class:"left-drawer bg-grey-2",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[0]||(i[0]=f=>e.leftDrawerOpen=f),"show-if-above":""},{default:B(()=>[P("div",wi,[k(Re,{class:"q-py-md",flat:""},{default:B(()=>[P("div",Si,[P("div",_i,[k(ae,{class:"boder-radius-100",size:"100px",rounded:!0},{default:B(()=>[qi]),_:1})])]),k(Ae,null,{default:B(()=>[Ci,xi]),_:1})]),_:1}),k(Re,{class:"q-mt-lg q-py-lg",flat:""},{default:B(()=>[k(Ae,{class:"text-center"},{default:B(()=>[k(ni,{width:"100px",height:"100px",src:"https://s3.bmp.ovh/imgs/2022/03/c436c296e18c5cd6.jpeg"}),zi]),_:1})]),_:1}),P("div",Ti,[P("div",Li,[k(Se,{flat:"",unelevated:"",href:"https://www.xiaohongshu.com/user/profile/5d73bcd90000000001003881?xhsshare=CopyLink&appuid=5d73bcd90000000001003881&apptime=1648284087",target:"_blank"},{default:B(()=>[k(ae,{size:"30px",square:""},{default:B(()=>[ki]),_:1})]),_:1}),k(Se,{flat:"",unelevated:"",href:"https://b23.tv/bWWgTUs",target:"_blank"},{default:B(()=>[k(ae,{size:"30px",square:""},{default:B(()=>[Ei]),_:1})]),_:1}),k(Se,{flat:"",unelevated:"",href:"https://juejin.cn/user/3808364009105544/posts",target:"_blank"},{default:B(()=>[k(ae,{size:"30px",square:""},{default:B(()=>[$i]),_:1})]),_:1})])]),Bi])]),_:1},8,["modelValue"]),k(vi,null,{default:B(()=>[k(s)]),_:1})]),_:1})}var Ri=Jt(bi,[["render",Pi],["__scopeId","data-v-5595fa58"]]);export{Ri as default};
