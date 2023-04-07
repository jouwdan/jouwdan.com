import{w as K}from"./index.f63580d1.js";import{a6 as T,S as W,i as Y,s as Z,k as V,l as F,m as w,h as _,n as m,b as E,M as b,W as q,V as x,a7 as z,K as B,L as C,N as v,_ as U,q as D,$ as j,r as H,F as A,u as Q,Y as L,R as X,Z as p,a5 as $,a8 as ee}from"./index.e2ce6da4.js";const P={};function R(a){return a==="local"?localStorage:sessionStorage}function I(a,e,t){const u=(t==null?void 0:t.serializer)??JSON,f=(t==null?void 0:t.storage)??"local",c=typeof window<"u"&&typeof document<"u";function n(l,r){c&&R(f).setItem(l,u.stringify(r))}if(!P[a]){const l=K(e,d=>{const i=c?R(f).getItem(a):null;if(i&&d(u.parse(i)),c){const g=h=>{h.key===a&&d(h.newValue?u.parse(h.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:r,set:o}=l;P[a]={set(d){n(a,d),o(d)},update(d){const i=d(T(l));n(a,i),o(i)},subscribe:r}}return P[a]}I("modeOsPrefers",!1);I("modeUserPrefers",void 0);I("modeCurrent",!1);function te(a){let e,t,u=String(a[0]).substring(0,2).toUpperCase()+"",f,c;return{c(){e=U("svg"),t=U("text"),f=D(u),this.h()},l(n){e=j(n,"svg",{class:!0,viewBox:!0});var l=w(e);t=j(l,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var r=w(t);f=H(r,u),r.forEach(_),l.forEach(_),this.h()},h(){m(t,"x","50%"),m(t,"y","50%"),m(t,"dominant-baseline","middle"),m(t,"text-anchor","middle"),m(t,"font-weight","bold"),m(t,"font-size",150),m(t,"class",c="avatar-text "+a[1]),m(e,"class","avatar-initials w-full h-full"),m(e,"viewBox","0 0 512 512")},m(n,l){E(n,e,l),A(e,t),A(t,f)},p(n,l){l&1&&u!==(u=String(n[0]).substring(0,2).toUpperCase()+"")&&Q(f,u),l&2&&c!==(c="avatar-text "+n[1])&&m(t,"class",c)},d(n){n&&_(e)}}}function ae(a){let e,t,u,f,c,n,l,r,o=[{class:t="avatar-image "+re},{style:u=a[7].style??""},{src:f=a[2]},{alt:c=a[7].alt||""},a[6]()],d={};for(let i=0;i<o.length;i+=1)d=B(d,o[i]);return{c(){e=V("img"),this.h()},l(i){e=F(i,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){L(e,d)},m(i,g){E(i,e,g),l||(r=X(n=a[3].call(null,e,a[4])),l=!0)},p(i,g){L(e,d=p(o,[{class:t},g&128&&u!==(u=i[7].style??"")&&{style:u},g&4&&!$(e.src,f=i[2])&&{src:f},g&128&&c!==(c=i[7].alt||"")&&{alt:c},i[6]()])),n&&ee(n.update)&&g&16&&n.update.call(null,i[4])},d(i){i&&_(e),l=!1,r()}}}function le(a){let e,t,u,f;function c(r,o){return r[2]?ae:te}let n=c(a),l=n(a);return{c(){e=V("figure"),l.c(),this.h()},l(r){e=F(r,"FIGURE",{class:!0,"data-testid":!0});var o=w(e);l.l(o),o.forEach(_),this.h()},h(){m(e,"class",t="avatar "+a[5]),m(e,"data-testid","avatar")},m(r,o){E(r,e,o),l.m(e,null),u||(f=[b(e,"click",a[14]),b(e,"keydown",a[15]),b(e,"keyup",a[16]),b(e,"keypress",a[17])],u=!0)},p(r,[o]){n===(n=c(r))&&l?l.p(r,o):(l.d(1),l=n(r),l&&(l.c(),l.m(e,null))),o&32&&t!==(t="avatar "+r[5])&&m(e,"class",t)},i:q,o:q,d(r){r&&_(e),l.d(),u=!1,x(f)}}}let se="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",re="w-full h-full object-cover";function ie(a,e,t){let u;const f=["initials","fill","src","action","actionParams","background","width","border","rounded","shadow","cursor"];let c=z(e,f),{initials:n="AB"}=e,{fill:l="fill-token"}=e,{src:r=""}=e,{action:o=()=>{}}=e,{actionParams:d=""}=e,{background:i="bg-surface-400-500-token"}=e,{width:g="w-16"}=e,{border:h=""}=e,{rounded:y="rounded-full"}=e,{shadow:k=""}=e,{cursor:S=""}=e;function G(){return delete c.class,c}function M(s){v.call(this,a,s)}function N(s){v.call(this,a,s)}function O(s){v.call(this,a,s)}function J(s){v.call(this,a,s)}return a.$$set=s=>{t(7,e=B(B({},e),C(s))),t(18,c=z(e,f)),"initials"in s&&t(0,n=s.initials),"fill"in s&&t(1,l=s.fill),"src"in s&&t(2,r=s.src),"action"in s&&t(3,o=s.action),"actionParams"in s&&t(4,d=s.actionParams),"background"in s&&t(8,i=s.background),"width"in s&&t(9,g=s.width),"border"in s&&t(10,h=s.border),"rounded"in s&&t(11,y=s.rounded),"shadow"in s&&t(12,k=s.shadow),"cursor"in s&&t(13,S=s.cursor)},a.$$.update=()=>{t(5,u=`${se} ${i} ${g} ${h} ${y} ${k} ${S} ${e.class??""}`)},e=C(e),[n,l,r,o,d,u,G,e,i,g,h,y,k,S,M,N,O,J]}class ce extends W{constructor(e){super(),Y(this,e,ie,le,Z,{initials:0,fill:1,src:2,action:3,actionParams:4,background:8,width:9,border:10,rounded:11,shadow:12,cursor:13})}}export{ce as A};