function y(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function M(){return Object.create(null)}function x(t){t.forEach(L)}function A(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function ft(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function J(t){return Object.keys(t).length===0}function T(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t){let e;return T(t,n=>e=n)(),e}function dt(t,e,n){t.$$.on_destroy.push(T(e,n))}function ht(t,e,n,r){if(t){const i=q(t,e,n,r);return t[0](i)}}function q(t,e,n,r){return t[1]&&r?G(n.ctx.slice(),t[1](r(e))):n.ctx}function mt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],c=Math.max(e.dirty.length,i.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function pt(t,e,n,r,i,l){if(i){const c=q(e,n,r,l);t.p(c,i)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function gt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xt(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function bt(t){const e={};for(const n in t)e[n]=!0;return e}function $t(t){return t&&A(t.destroy)?t.destroy:y}let w=!1;function K(){w=!0}function Q(){w=!1}function R(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:R(1,i,b=>e[n[b]].claim_order,u))-1;r[s]=n[f]+1;const a=f+1;n[a]=s,i=Math.max(a,i)}const l=[],c=[];let o=e.length-1;for(let s=n[i]+1;s!=0;s=r[s-1]){for(l.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(c[s],f)}}function V(t,e){if(w){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){w&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function wt(){return j(" ")}function Et(){return j("")}function kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function B(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:B(t,r,e[r])}function St(t,e){for(const n in e)B(t,n,e[n])}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,r,i=!1){et(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,i||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,i?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function F(t,e,n,r){return z(t,i=>i.nodeName===e,i=>{const l=[];for(let c=0;c<i.attributes.length;c++){const o=i.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>i.removeAttribute(c))},()=>r(e))}function At(t,e,n){return F(t,e,n,Y)}function jt(t,e,n){return F(t,e,n,Z)}function nt(t,e){return z(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(e),!0)}function Ct(t){return nt(t," ")}function Ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function Mt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Pt(t,e,n){t.classList[n?"add":"remove"](e)}function rt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function Dt(t,e){return new t(e)}let g;function p(t){g=t}function E(){if(!g)throw new Error("Function called outside component initialization");return g}function Lt(t){E().$$.on_mount.push(t)}function Tt(t){E().$$.after_update.push(t)}function qt(t){E().$$.on_destroy.push(t)}function Bt(){const t=E();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=rt(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const h=[],P=[];let m=[];const D=[],H=Promise.resolve();let N=!1;function I(){N||(N=!0,H.then(W))}function Ft(){return I(),H}function S(t){m.push(t)}const k=new Set;let d=0;function W(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const e=h[d];d++,p(e),it(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;P.length;)P.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];k.has(n)||(k.add(n),n())}m.length=0}while(h.length);for(;D.length;)D.pop()();N=!1,k.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function ct(t){const e=[],n=[];m.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),m=e}const v=new Set;let _;function Ht(){_={r:0,c:[],p:_}}function It(){_.r||x(_.c),_=_.p}function st(t,e){t&&t.i&&(v.delete(t),t.i(e))}function Wt(t,e,n,r){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Gt(t,e){const n={},r={},i={$$scope:1};let l=t.length;for(;l--;){const c=t[l],o=e[l];if(o){for(const s in c)s in o||(r[s]=1);for(const s in o)i[s]||(n[s]=o[s],i[s]=1);t[l]=o}else for(const s in c)i[s]=1}for(const c in r)c in n||(n[c]=void 0);return n}function Jt(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function ot(t,e,n,r){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),r||S(()=>{const c=t.$$.on_mount.map(L).filter(A);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),l.forEach(S)}function ut(t,e){const n=t.$$;n.fragment!==null&&(ct(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,n,r,i,l,c,o=[-1]){const s=g;p(t);const u=t.$$={fragment:null,ctx:[],props:l,update:y,not_equal:i,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,b,...C)=>{const O=C.length?C[0]:b;return u.ctx&&i(u.ctx[a],u.ctx[a]=O)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](O),f&&lt(t,a)),b}):[],u.update(),f=!0,x(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){K();const a=tt(e.target);u.fragment&&u.fragment.l(a),a.forEach(X)}else u.fragment&&u.fragment.c();e.intro&&st(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),Q(),W()}p(s)}class Rt{$destroy(){ut(this,1),this.$destroy=y}$on(e,n){if(!A(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{dt as $,ot as A,ut as B,_t as C,ht as D,V as E,pt as F,yt as G,mt as H,bt as I,G as J,gt as K,kt as L,zt as M,y as N,x as O,xt as P,Z as Q,jt as R,Rt as S,Nt as T,$t as U,Gt as V,ft as W,A as X,qt as Y,St as Z,Bt as _,wt as a,Pt as a0,vt as b,Ct as c,Wt as d,Et as e,It as f,st as g,X as h,Qt as i,Tt as j,Y as k,At as l,tt as m,B as n,Lt as o,Mt as p,j as q,nt as r,at as s,Ft as t,Ot as u,Ht as v,P as w,Dt as x,Jt as y,Kt as z};
