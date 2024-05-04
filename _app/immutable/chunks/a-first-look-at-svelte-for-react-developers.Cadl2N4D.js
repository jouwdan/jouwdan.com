import{s as Ke,n as ve}from"./scheduler.DGZYho1L.js";import{S as Ne,i as Oe,e as n,s,H as d,b as i,g as r,a as o,f as p,x as c,d as t,k as f,l as a}from"./index.BKBf4ewt.js";function Qe(De){let u,me="If you’re a React developer looking for a new way to build web applications, you may have heard of Svelte. Svelte is a modern framework which aims to provide a more efficient and performant way of building web applications compared to traditional frameworks like React. In this post, we’re going to look at some common snippets of react code and their equivalent in Svelte.",A,v,he="<code>useState()</code> hook",D,m,xe="React",I,h,L,Ie=`<code class="language-undefined">let [var, setVar] = useState(initialValue)

// mutate
setVar(newValue)</code>`,B,x,_e="Svelte",G,_,$,Le=`<code class="language-undefined">let var = initialValue

// mutate
var = newValue</code>`,F,w,we="As we can see here, react uses a useState hook, which has an initial value, a state variable and a function to update the variable. Whereas in svelte, the variable’s initial value is declared, and mutated by overwriting the variable, without the need of a function for updating. This results in much cleaner, easier to read code.",Y,C,Ce="<code>useMemo()</code> hook",J,g,ge="React",K,b,N,Be=`<code class="language-undefined">const memoized = useMemo(() =&gt; expression,
[dependancy1, dependancy2, ...]
)</code>`,O,y,be="Svelte",Q,k,U,Ge='<code class="language-undefined">$: memoized = expression</code>',X,P,ye="Here, the useMemo hook takes 2 arguments, a function that returns the value to be memoized and an array of dependencies that the function depends on. If any of the dependencies change, the memoized value is recomputed, otherwise, it is returned from cache without re-executing the function. Whereas in Svelte, the $ sign is used, which means it is a reactive declaration, which is then used to define a variable that depends on one or more other variables. When any of the variables that the reactive declaration depends on change, the reactive declaration is re-evaluated. This, again, results in a much cleaner, easier to read code.",Z,S,ke="Iteration when rendering",ee,R,Pe="React",te,E,le,$e=`<code class="language-undefined">&lt;ul&gt;
&#123;list.map(item =&gt; &#123;
return &lt;li&gt;&#123;item&#125;&lt;/li&gt;
&#125;)&#125;
&lt;/ul&gt;

// with index
&#123;list.map((item, index) =&gt; &#123;
&#125;))

// with key
&#123;list.map(item =&gt;
&lt;div key=&#123;item.key&#125;&gt;...&lt;/div&gt;
)&#125;</code>`,ae,H,Se="Svelte",ne,M,ie,Fe=`<code class="language-undefined">&lt;ul&gt;
&#123;#each list as item&#125;
&lt;li&gt;&#123;item&#125;&lt;/li&gt;
&#123;/each&#125;
&lt;/ul&gt;

// with index
&#123;#each list as item, index&#125;
...
&#123;/each&#125;

// with key
&#123;#each list as item (item.key)&#125;
...
&#123;/each&#125;</code>`,se,T,Re="Event handlers",oe,V,Ee="React",re,j,ue,Ye=`<code class="language-undefined">&lt;div onClick=&#123;handler&#125; /&gt;

const handler = event =&gt; &#123;
event.preventDefault()
&#125;

const handler = event =&gt; &#123;
event.stopPropagation()
&#125;</code>`,de,W,He="Svelte",pe,q,ce,Je=`<code class="language-undefined">&lt;div on:click=&#123;handler&#125; /&gt;

&lt;div on:click|preventDefault=&#123;handler&#125; /&gt;

&lt;div on:click|stopPropagation=&#123;handler&#125; /&gt;</code>`,fe,z,Me="In conclusion, Svelte offers a fresh and more efficient approach to building web applications compared to traditional frameworks like React. As we have seen from the snippets of code in this post, Svelte’s syntax is simpler and more concise, resulting in cleaner and easier to read code. While there may be a learning curve for React developers transitioning to Svelte, the benefits of improved performance and developer experience make it well worth the effort. Whether you’re building a small application or a large-scale project, Svelte’s modern approach to web development can help you create better user experiences while saving you time and effort.";return{c(){u=n("p"),u.textContent=me,A=s(),v=n("p"),v.innerHTML=he,D=s(),m=n("p"),m.textContent=xe,I=s(),h=n("pre"),L=new d(!1),B=s(),x=n("p"),x.textContent=_e,G=s(),_=n("pre"),$=new d(!1),F=s(),w=n("p"),w.textContent=we,Y=s(),C=n("p"),C.innerHTML=Ce,J=s(),g=n("p"),g.textContent=ge,K=s(),b=n("pre"),N=new d(!1),O=s(),y=n("p"),y.textContent=be,Q=s(),k=n("pre"),U=new d(!1),X=s(),P=n("p"),P.textContent=ye,Z=s(),S=n("p"),S.textContent=ke,ee=s(),R=n("p"),R.textContent=Pe,te=s(),E=n("pre"),le=new d(!1),ae=s(),H=n("p"),H.textContent=Se,ne=s(),M=n("pre"),ie=new d(!1),se=s(),T=n("p"),T.textContent=Re,oe=s(),V=n("p"),V.textContent=Ee,re=s(),j=n("pre"),ue=new d(!1),de=s(),W=n("p"),W.textContent=He,pe=s(),q=n("pre"),ce=new d(!1),fe=s(),z=n("p"),z.textContent=Me,this.h()},l(e){u=i(e,"P",{"data-svelte-h":!0}),r(u)!=="svelte-17h80hg"&&(u.textContent=me),A=o(e),v=i(e,"P",{"data-svelte-h":!0}),r(v)!=="svelte-8l2bw5"&&(v.innerHTML=he),D=o(e),m=i(e,"P",{"data-svelte-h":!0}),r(m)!=="svelte-1d0hyuj"&&(m.textContent=xe),I=o(e),h=i(e,"PRE",{class:!0});var l=p(h);L=c(l,!1),l.forEach(t),B=o(e),x=i(e,"P",{"data-svelte-h":!0}),r(x)!=="svelte-1ct9hh1"&&(x.textContent=_e),G=o(e),_=i(e,"PRE",{class:!0});var Te=p(_);$=c(Te,!1),Te.forEach(t),F=o(e),w=i(e,"P",{"data-svelte-h":!0}),r(w)!=="svelte-eqmmfd"&&(w.textContent=we),Y=o(e),C=i(e,"P",{"data-svelte-h":!0}),r(C)!=="svelte-1bw9sp8"&&(C.innerHTML=Ce),J=o(e),g=i(e,"P",{"data-svelte-h":!0}),r(g)!=="svelte-1d0hyuj"&&(g.textContent=ge),K=o(e),b=i(e,"PRE",{class:!0});var Ve=p(b);N=c(Ve,!1),Ve.forEach(t),O=o(e),y=i(e,"P",{"data-svelte-h":!0}),r(y)!=="svelte-1ct9hh1"&&(y.textContent=be),Q=o(e),k=i(e,"PRE",{class:!0});var je=p(k);U=c(je,!1),je.forEach(t),X=o(e),P=i(e,"P",{"data-svelte-h":!0}),r(P)!=="svelte-xntgfz"&&(P.textContent=ye),Z=o(e),S=i(e,"P",{"data-svelte-h":!0}),r(S)!=="svelte-yxir47"&&(S.textContent=ke),ee=o(e),R=i(e,"P",{"data-svelte-h":!0}),r(R)!=="svelte-1d0hyuj"&&(R.textContent=Pe),te=o(e),E=i(e,"PRE",{class:!0});var We=p(E);le=c(We,!1),We.forEach(t),ae=o(e),H=i(e,"P",{"data-svelte-h":!0}),r(H)!=="svelte-1ct9hh1"&&(H.textContent=Se),ne=o(e),M=i(e,"PRE",{class:!0});var qe=p(M);ie=c(qe,!1),qe.forEach(t),se=o(e),T=i(e,"P",{"data-svelte-h":!0}),r(T)!=="svelte-13ire77"&&(T.textContent=Re),oe=o(e),V=i(e,"P",{"data-svelte-h":!0}),r(V)!=="svelte-1d0hyuj"&&(V.textContent=Ee),re=o(e),j=i(e,"PRE",{class:!0});var ze=p(j);ue=c(ze,!1),ze.forEach(t),de=o(e),W=i(e,"P",{"data-svelte-h":!0}),r(W)!=="svelte-1ct9hh1"&&(W.textContent=He),pe=o(e),q=i(e,"PRE",{class:!0});var Ae=p(q);ce=c(Ae,!1),Ae.forEach(t),fe=o(e),z=i(e,"P",{"data-svelte-h":!0}),r(z)!=="svelte-1shvmpq"&&(z.textContent=Me),this.h()},h(){L.a=null,f(h,"class","language-undefined"),$.a=null,f(_,"class","language-undefined"),N.a=null,f(b,"class","language-undefined"),U.a=null,f(k,"class","language-undefined"),le.a=null,f(E,"class","language-undefined"),ie.a=null,f(M,"class","language-undefined"),ue.a=null,f(j,"class","language-undefined"),ce.a=null,f(q,"class","language-undefined")},m(e,l){a(e,u,l),a(e,A,l),a(e,v,l),a(e,D,l),a(e,m,l),a(e,I,l),a(e,h,l),L.m(Ie,h),a(e,B,l),a(e,x,l),a(e,G,l),a(e,_,l),$.m(Le,_),a(e,F,l),a(e,w,l),a(e,Y,l),a(e,C,l),a(e,J,l),a(e,g,l),a(e,K,l),a(e,b,l),N.m(Be,b),a(e,O,l),a(e,y,l),a(e,Q,l),a(e,k,l),U.m(Ge,k),a(e,X,l),a(e,P,l),a(e,Z,l),a(e,S,l),a(e,ee,l),a(e,R,l),a(e,te,l),a(e,E,l),le.m($e,E),a(e,ae,l),a(e,H,l),a(e,ne,l),a(e,M,l),ie.m(Fe,M),a(e,se,l),a(e,T,l),a(e,oe,l),a(e,V,l),a(e,re,l),a(e,j,l),ue.m(Ye,j),a(e,de,l),a(e,W,l),a(e,pe,l),a(e,q,l),ce.m(Je,q),a(e,fe,l),a(e,z,l)},p:ve,i:ve,o:ve,d(e){e&&(t(u),t(A),t(v),t(D),t(m),t(I),t(h),t(B),t(x),t(G),t(_),t(F),t(w),t(Y),t(C),t(J),t(g),t(K),t(b),t(O),t(y),t(Q),t(k),t(X),t(P),t(Z),t(S),t(ee),t(R),t(te),t(E),t(ae),t(H),t(ne),t(M),t(se),t(T),t(oe),t(V),t(re),t(j),t(de),t(W),t(pe),t(q),t(fe),t(z))}}}const Ze={title:"A first look at Svelte for React Developers",date:"Feb 28, 2023",cover:"https://images.unsplash.com/photo-1577648188599-291bb8b831c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",excerpt:"Svelte is a framework which aims to provide a more efficient way of building web applications compared to traditional frameworks like React."};class et extends Ne{constructor(u){super(),Oe(this,u,null,Qe,Ke,{})}}export{et as default,Ze as metadata};
