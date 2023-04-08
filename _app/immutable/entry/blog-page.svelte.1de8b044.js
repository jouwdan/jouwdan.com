import{S as fe,i as ue,s as de,k as d,a as B,q as A,l as h,m as v,h as u,c as H,r as D,$ as W,n as c,b as S,F as r,u as Y,X as ce,g as J,f as he,d as Z,a7 as me,y as _e,z as ve,A as ge,B as pe,v as Ee}from"../chunks/index.dfa3183f.js";function be(f){let e,i,t,o,p,m,l,y=f[0].meta.title+"",a,n,s,g,R=f[0].meta.excerpt+"",O,T,I,V,z,b,w,$,ee,U,x,j,X,K,k,N,q=f[0].meta.date+"",C,F;return{c(){e=d("a"),i=d("header"),t=d("img"),p=B(),m=d("div"),l=d("h4"),a=A(y),n=B(),s=d("article"),g=d("p"),O=A(R),T=B(),I=d("footer"),V=d("hr"),z=B(),b=d("div"),w=d("figure"),$=d("img"),U=B(),x=d("div"),j=d("h6"),X=A("By Jordan Harrison"),K=B(),k=d("small"),N=A("On "),C=A(q),this.h()},l(E){e=h(E,"A",{class:!0,href:!0});var _=v(e);i=h(_,"HEADER",{});var te=v(i);t=h(te,"IMG",{src:!0,class:!0,alt:!0}),te.forEach(u),p=H(_),m=h(_,"DIV",{class:!0});var G=v(m);l=h(G,"H4",{"data-toc-ignore":!0,class:!0});var ae=v(l);a=D(ae,y),ae.forEach(u),n=H(G),s=h(G,"ARTICLE",{});var le=v(s);g=h(le,"P",{});var se=v(g);O=D(se,R),se.forEach(u),le.forEach(u),G.forEach(u),T=H(_),I=h(_,"FOOTER",{});var L=v(I);V=h(L,"HR",{class:!0}),z=H(L),b=h(L,"DIV",{class:!0});var M=v(b);w=h(M,"FIGURE",{class:!0,"data-testid":!0});var re=v(w);$=h(re,"IMG",{class:!0,src:!0,alt:!0,style:!0}),re.forEach(u),U=H(M),x=h(M,"DIV",{class:!0});var P=v(x);j=h(P,"H6",{class:!0});var oe=v(j);X=D(oe,"By Jordan Harrison"),oe.forEach(u),K=H(P),k=h(P,"SMALL",{});var Q=v(k);N=D(Q,"On "),C=D(Q,q),Q.forEach(u),P.forEach(u),M.forEach(u),L.forEach(u),_.forEach(u),this.h()},h(){W(t.src,o=f[0].meta.cover)||c(t,"src",o),c(t,"class","h-48 w-full object-cover"),c(t,"alt","Post"),c(l,"data-toc-ignore",""),c(l,"class","font-bold"),c(m,"class","p-4 space-y-4"),c(V,"class","opacity-50"),c($,"class","avatar-image w-full h-full object-cover"),W($.src,ee="/images/avatar-thumb.png")||c($,"src",ee),c($,"alt",""),c($,"style",""),c(w,"class","avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"),c(w,"data-testid","avatar"),c(j,"class","font-bold"),c(x,"class","flex-auto flex justify-between items-center align"),c(b,"class","p-4 flex justify-end items-center space-x-4"),c(e,"class","card bg-initial card-hover overflow-hidden mx-auto lg:mx-4 my-4"),c(e,"href",F=f[0].path)},m(E,_){S(E,e,_),r(e,i),r(i,t),r(e,p),r(e,m),r(m,l),r(l,a),r(m,n),r(m,s),r(s,g),r(g,O),r(e,T),r(e,I),r(I,V),r(I,z),r(I,b),r(b,w),r(w,$),r(b,U),r(b,x),r(x,j),r(j,X),r(x,K),r(x,k),r(k,N),r(k,C)},p(E,[_]){_&1&&!W(t.src,o=E[0].meta.cover)&&c(t,"src",o),_&1&&y!==(y=E[0].meta.title+"")&&Y(a,y),_&1&&R!==(R=E[0].meta.excerpt+"")&&Y(O,R),_&1&&q!==(q=E[0].meta.date+"")&&Y(C,q),_&1&&F!==(F=E[0].path)&&c(e,"href",F)},i:ce,o:ce,d(E){E&&u(e)}}}function $e(f,e,i){let{post:t}=e;return f.$$set=o=>{"post"in o&&i(0,t=o.post)},[t]}class xe extends fe{constructor(e){super(),ue(this,e,$e,be,de,{post:0})}}function ne(f,e,i){const t=f.slice();return t[1]=e[i],t}function ie(f){let e,i;return e=new xe({props:{post:f[1]}}),{c(){_e(e.$$.fragment)},l(t){ve(e.$$.fragment,t)},m(t,o){ge(e,t,o),i=!0},p(t,o){const p={};o&1&&(p.post=t[1]),e.$set(p)},i(t){i||(J(e.$$.fragment,t),i=!0)},o(t){Z(e.$$.fragment,t),i=!1},d(t){pe(e,t)}}}function ye(f){let e,i,t,o,p,m=f[0].posts,l=[];for(let a=0;a<m.length;a+=1)l[a]=ie(ne(f,m,a));const y=a=>Z(l[a],1,1,()=>{l[a]=null});return{c(){e=d("h1"),i=A("Blog"),t=B(),o=d("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=h(a,"H1",{class:!0});var n=v(e);i=D(n,"Blog"),n.forEach(u),t=H(a),o=h(a,"DIV",{class:!0});var s=v(o);for(let g=0;g<l.length;g+=1)l[g].l(s);s.forEach(u),this.h()},h(){c(e,"class","font-bold pt-4 pb-8"),c(o,"class","grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4")},m(a,n){S(a,e,n),r(e,i),S(a,t,n),S(a,o,n);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(o,null);p=!0},p(a,[n]){if(n&1){m=a[0].posts;let s;for(s=0;s<m.length;s+=1){const g=ne(a,m,s);l[s]?(l[s].p(g,n),J(l[s],1)):(l[s]=ie(g),l[s].c(),J(l[s],1),l[s].m(o,null))}for(Ee(),s=m.length;s<l.length;s+=1)y(s);he()}},i(a){if(!p){for(let n=0;n<m.length;n+=1)J(l[n]);p=!0}},o(a){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)Z(l[n]);p=!1},d(a){a&&u(e),a&&u(t),a&&u(o),me(l,a)}}}function Ie(f,e,i){let{data:t}=e;return f.$$set=o=>{"data"in o&&i(0,t=o.data)},[t]}class Be extends fe{constructor(e){super(),ue(this,e,Ie,ye,de,{data:0})}}export{Be as default};