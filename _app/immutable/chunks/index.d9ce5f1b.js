function $(){}const G=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function X(){return Object.create(null)}function v(t){t.forEach(tt)}function C(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Bt(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function yt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t){let e;return et(t,n=>e=n)(),e}function Ht(t,e,n){t.$$.on_destroy.push(et(e,n))}function Wt(t,e,n,i){if(t){const r=nt(t,e,n,i);return t[0](r)}}function nt(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function It(t,e,n,i,r,l){if(r){const s=nt(e,n,i,l);t.p(s,r)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Kt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Qt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Ut(t){const e={};for(const n in t)e[n]=!0;return e}function Vt(t){return t&&C(t.destroy)?t.destroy:$}function Xt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const it=typeof window<"u";let I=it?()=>window.performance.now():()=>Date.now(),J=it?t=>requestAnimationFrame(t):$;const N=new Set;function rt(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&J(rt)}function K(t){let e;return N.size===0&&J(rt),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let B=!1;function gt(){B=!0}function $t(){B=!1}function bt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=a?r+1:bt(1,r,h=>e[n[h]].claim_order,a))-1;i[c]=n[_]+1;const u=_+1;n[u]=c,r=Math.max(u,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<s.length;c++){for(;a<l.length&&s[c].claim_order>=l[a].claim_order;)a++;const _=a<l.length?l[a]:null;t.insertBefore(s[c],_)}}function wt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=ct("style");return Et(st(t),e),e.sheet}function Et(t,e){return wt(t.head||t,e),e.sheet}function kt(t,e){if(B){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){B&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode&&t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ct(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function te(){return Q(" ")}function ee(){return Q("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function lt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ie(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:lt(t,i,e[i])}function re(t,e){for(const n in e)lt(t,n,e[n])}function At(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function at(t,e,n,i,r=!1){St(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ut(t,e,n,i){return at(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function se(t,e,n){return ut(t,e,n,ct)}function oe(t,e,n){return ut(t,e,n,Nt)}function Ct(t,e){return at(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function ce(t){return Ct(t," ")}function le(t,e){e=""+e,t.data!==e&&(t.data=e)}function ae(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function ft(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function fe(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function _e(t,e){return new t(e)}const R=new Map;let q=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:vt(e),rules:{}};return R.set(t,n),n}function L(t,e,n,i,r,l,s,o=0){const c=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*l(p);a+=p*100+`%{${s(y,1-y)}}
`}const _=a+`100% {${s(n,1-n)}}
}`,u=`__svelte_${Dt(_)}_${o}`,h=st(t),{stylesheet:f,rules:d}=R.get(h)||jt(h,t);d[u]||(d[u]=!0,f.insertRule(`@keyframes ${u} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${u} ${i}ms linear ${r}ms 1 both`,q+=1,u}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||Tt())}function Tt(){J(()=>{q||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ot(e)}),R.clear())})}let O;function T(t){O=t}function F(){if(!O)throw new Error("Function called outside component initialization");return O}function de(t){F().$$.on_mount.push(t)}function he(t){F().$$.after_update.push(t)}function me(t){F().$$.on_destroy.push(t)}function pe(){const t=F();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=ft(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function ye(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const k=[],Y=[];let A=[];const Z=[],_t=Promise.resolve();let W=!1;function dt(){W||(W=!0,_t.then(ht))}function ge(){return dt(),_t}function S(t){A.push(t)}const H=new Set;let E=0;function ht(){if(E!==0)return;const t=O;do{try{for(;E<k.length;){const e=k[E];E++,T(e),Ot(e.$$)}}catch(e){throw k.length=0,E=0,e}for(T(null),k.length=0,E=0;Y.length;)Y.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];H.has(n)||(H.add(n),n())}A.length=0}while(k.length);for(;Z.length;)Z.pop()();W=!1,H.clear(),T(t)}function Ot(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function Mt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let j;function U(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function w(t,e,n){t.dispatchEvent(ft(`${e?"intro":"outro"}${n}`))}const P=new Set;let g;function $e(){g={r:0,c:[],p:g}}function be(){g.r||v(g.c),g=g.p}function Pt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function xe(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),g.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const V={duration:0};function we(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,s,o,c=0;function a(){s&&z(t,s)}function _(){const{delay:h=0,duration:f=300,easing:d=G,tick:m=$,css:p}=r||V;p&&(s=L(t,0,1,f,h,d,p,c++)),m(0,1);const y=I()+h,D=y+f;o&&o.abort(),l=!0,S(()=>w(t,!0,"start")),o=K(b=>{if(l){if(b>=D)return m(1,0),w(t,!0,"end"),a(),l=!1;if(b>=y){const x=d((b-y)/f);m(x,1-x)}}return l})}let u=!1;return{start(){u||(u=!0,z(t),C(r)?(r=r(i),U().then(_)):_())},invalidate(){u=!1},end(){l&&(a(),l=!1)}}}function ve(t,e,n){const i={direction:"out"};let r=e(t,n,i),l=!0,s;const o=g;o.r+=1;function c(){const{delay:a=0,duration:_=300,easing:u=G,tick:h=$,css:f}=r||V;f&&(s=L(t,1,0,_,a,u,f));const d=I()+a,m=d+_;S(()=>w(t,!1,"start")),K(p=>{if(l){if(p>=m)return h(0,1),w(t,!1,"end"),--o.r||v(o.c),!1;if(p>=d){const y=u((p-d)/_);h(1-y,y)}}return l})}return C(r)?U().then(()=>{r=r(i),c()}):c(),{end(a){a&&r.tick&&r.tick(1,0),l&&(s&&z(t,s),l=!1)}}}function Ee(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,o=null,c=null,a=null;function _(){a&&z(t,a)}function u(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:p=G,tick:y=$,css:D}=l||V,b={start:I()+d,b:f};f||(b.group=g,g.r+=1),o||c?c=b:(D&&(_(),a=L(t,s,f,m,d,p,D)),f&&y(0,1),o=u(b,m),S(()=>w(t,f,"start")),K(x=>{if(c&&x>c.start&&(o=u(c,m),c=null,w(t,o.b,"start"),D&&(_(),a=L(t,s,o.b,o.duration,0,p,l.css))),o){if(x>=o.end)y(s=o.b,1-s),w(t,o.b,"end"),c||(o.b?_():--o.group.r||v(o.group.c)),o=null;else if(x>=o.start){const mt=x-o.start;s=o.a+o.d*p(mt/o.duration),y(s,1-s)}}return!!(o||c)}))}return{run(f){C(l)?U().then(()=>{l=l(r),h(f)}):h(f)},end(){_(),o=c=null}}}const ke=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ne(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ae(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||S(()=>{const s=t.$$.on_mount.map(tt).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),l.forEach(S)}function qt(t,e){const n=t.$$;n.fragment!==null&&(Mt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(k.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ce(t,e,n,i,r,l,s,o=[-1]){const c=O;T(t);const a=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...f)=>{const d=f.length?f[0]:h;return a.ctx&&r(a.ctx[u],a.ctx[u]=d)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](d),_&&Lt(t,u)),h}):[],a.update(),_=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){gt();const u=At(e.target);a.fragment&&a.fragment.l(u),u.forEach(ot)}else a.fragment&&a.fragment.c();e.intro&&Pt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),$t(),ht()}T(c)}class De{$destroy(){qt(this,1),this.$destroy=$}$on(e,n){if(!C(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{pe as $,Rt as A,qt as B,Ft as C,G as D,Xt as E,Wt as F,kt as G,It as H,Jt as I,Gt as J,Ut as K,pt as L,Kt as M,ne as N,ye as O,$ as P,v as Q,Qt as R,De as S,Nt as T,oe as U,ie as V,Vt as W,Ne as X,Bt as Y,C as Z,Ht as _,te as a,ke as a0,S as a1,Ee as a2,me as a3,re as a4,fe as a5,ue as a6,we as a7,ve as a8,Zt as a9,Yt as b,ce as c,xe as d,ee as e,be as f,Pt as g,ot as h,Ce as i,he as j,ct as k,se as l,At as m,lt as n,de as o,ae as p,Q as q,Ct as r,zt as s,ge as t,le as u,$e as v,Y as w,_e as x,Ae as y,Se as z};
