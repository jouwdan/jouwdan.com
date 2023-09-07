import{S as st,i as nt,s as ft,k as l,q as p,a as s,l as r,m as o,r as u,h as t,c as n,n as d,b as i,F as f,$ as He}from"./index.41bbe901.js";function pt(Ge){let c,ne,C,v,g,fe,pe,$,x,ue,j,m,Oe=`<code class="language-undefined">let [var, setVar] = useState(initialValue)

// mutate
setVar(newValue)</code>`,B,P,ce,F,h,Ye=`<code class="language-undefined">let var = initialValue

// mutate
var = newValue</code>`,G,R,de,O,w,q,ve,me,Y,M,he,J,b,Je=`<code class="language-undefined">const memoized = useMemo(() =&gt; expression,
[dependancy1, dependancy2, ...]
)</code>`,K,H,we,N,_,Ke='<code class="language-undefined">$: memoized = expression</code>',Q,T,be,U,W,_e,X,I,ke,Z,k,Ne=`<code class="language-undefined">&lt;ul&gt;
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
)&#125;</code>`,ee,L,ye,te,y,Qe=`<code class="language-undefined">&lt;ul&gt;
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
&#123;/each&#125;</code>`,ae,A,Ee,ie,D,Se,le,E,Ue=`<code class="language-undefined">&lt;div onClick=&#123;handler&#125; /&gt;

const handler = event =&gt; &#123;
event.preventDefault()
&#125;

const handler = event =&gt; &#123;
event.stopPropagation()
&#125;</code>`,re,V,xe,oe,S,Xe=`<code class="language-undefined">&lt;div on:click=&#123;handler&#125; /&gt;

&lt;div on:click|preventDefault=&#123;handler&#125; /&gt;

&lt;div on:click|stopPropagation=&#123;handler&#125; /&gt;</code>`,se,z,Pe;return{c(){c=l("p"),ne=p("If you’re a React developer looking for a new way to build web applications, you may have heard of Svelte. Svelte is a modern framework which aims to provide a more efficient and performant way of building web applications compared to traditional frameworks like React. In this post, we’re going to look at some common snippets of react code and their equivalent in Svelte."),C=s(),v=l("p"),g=l("code"),fe=p("useState()"),pe=p(" hook"),$=s(),x=l("p"),ue=p("React"),j=s(),m=l("pre"),B=s(),P=l("p"),ce=p("Svelte"),F=s(),h=l("pre"),G=s(),R=l("p"),de=p("As we can see here, react uses a useState hook, which has an initial value, a state variable and a function to update the variable. Whereas in svelte, the variable’s initial value is declared, and mutated by overwriting the variable, without the need of a function for updating. This results in much cleaner, easier to read code."),O=s(),w=l("p"),q=l("code"),ve=p("useMemo()"),me=p(" hook"),Y=s(),M=l("p"),he=p("React"),J=s(),b=l("pre"),K=s(),H=l("p"),we=p("Svelte"),N=s(),_=l("pre"),Q=s(),T=l("p"),be=p("Here, the useMemo hook takes 2 arguments, a function that returns the value to be memoized and an array of dependencies that the function depends on. If any of the dependencies change, the memoized value is recomputed, otherwise, it is returned from cache without re-executing the function. Whereas in Svelte, the $ sign is used, which means it is a reactive declaration, which is then used to define a variable that depends on one or more other variables. When any of the variables that the reactive declaration depends on change, the reactive declaration is re-evaluated. This, again, results in a much cleaner, easier to read code."),U=s(),W=l("p"),_e=p("Iteration when rendering"),X=s(),I=l("p"),ke=p("React"),Z=s(),k=l("pre"),ee=s(),L=l("p"),ye=p("Svelte"),te=s(),y=l("pre"),ae=s(),A=l("p"),Ee=p("Event handlers"),ie=s(),D=l("p"),Se=p("React"),le=s(),E=l("pre"),re=s(),V=l("p"),xe=p("Svelte"),oe=s(),S=l("pre"),se=s(),z=l("p"),Pe=p("In conclusion, Svelte offers a fresh and more efficient approach to building web applications compared to traditional frameworks like React. As we have seen from the snippets of code in this post, Svelte’s syntax is simpler and more concise, resulting in cleaner and easier to read code. While there may be a learning curve for React developers transitioning to Svelte, the benefits of improved performance and developer experience make it well worth the effort. Whether you’re building a small application or a large-scale project, Svelte’s modern approach to web development can help you create better user experiences while saving you time and effort."),this.h()},l(e){c=r(e,"P",{});var a=o(c);ne=u(a,"If you’re a React developer looking for a new way to build web applications, you may have heard of Svelte. Svelte is a modern framework which aims to provide a more efficient and performant way of building web applications compared to traditional frameworks like React. In this post, we’re going to look at some common snippets of react code and their equivalent in Svelte."),a.forEach(t),C=n(e),v=r(e,"P",{});var Re=o(v);g=r(Re,"CODE",{});var Te=o(g);fe=u(Te,"useState()"),Te.forEach(t),pe=u(Re," hook"),Re.forEach(t),$=n(e),x=r(e,"P",{});var We=o(x);ue=u(We,"React"),We.forEach(t),j=n(e),m=r(e,"PRE",{class:!0});var Ze=o(m);Ze.forEach(t),B=n(e),P=r(e,"P",{});var Ie=o(P);ce=u(Ie,"Svelte"),Ie.forEach(t),F=n(e),h=r(e,"PRE",{class:!0});var et=o(h);et.forEach(t),G=n(e),R=r(e,"P",{});var Le=o(R);de=u(Le,"As we can see here, react uses a useState hook, which has an initial value, a state variable and a function to update the variable. Whereas in svelte, the variable’s initial value is declared, and mutated by overwriting the variable, without the need of a function for updating. This results in much cleaner, easier to read code."),Le.forEach(t),O=n(e),w=r(e,"P",{});var Me=o(w);q=r(Me,"CODE",{});var Ae=o(q);ve=u(Ae,"useMemo()"),Ae.forEach(t),me=u(Me," hook"),Me.forEach(t),Y=n(e),M=r(e,"P",{});var De=o(M);he=u(De,"React"),De.forEach(t),J=n(e),b=r(e,"PRE",{class:!0});var tt=o(b);tt.forEach(t),K=n(e),H=r(e,"P",{});var Ve=o(H);we=u(Ve,"Svelte"),Ve.forEach(t),N=n(e),_=r(e,"PRE",{class:!0});var at=o(_);at.forEach(t),Q=n(e),T=r(e,"P",{});var ze=o(T);be=u(ze,"Here, the useMemo hook takes 2 arguments, a function that returns the value to be memoized and an array of dependencies that the function depends on. If any of the dependencies change, the memoized value is recomputed, otherwise, it is returned from cache without re-executing the function. Whereas in Svelte, the $ sign is used, which means it is a reactive declaration, which is then used to define a variable that depends on one or more other variables. When any of the variables that the reactive declaration depends on change, the reactive declaration is re-evaluated. This, again, results in a much cleaner, easier to read code."),ze.forEach(t),U=n(e),W=r(e,"P",{});var ge=o(W);_e=u(ge,"Iteration when rendering"),ge.forEach(t),X=n(e),I=r(e,"P",{});var qe=o(I);ke=u(qe,"React"),qe.forEach(t),Z=n(e),k=r(e,"PRE",{class:!0});var it=o(k);it.forEach(t),ee=n(e),L=r(e,"P",{});var Ce=o(L);ye=u(Ce,"Svelte"),Ce.forEach(t),te=n(e),y=r(e,"PRE",{class:!0});var lt=o(y);lt.forEach(t),ae=n(e),A=r(e,"P",{});var $e=o(A);Ee=u($e,"Event handlers"),$e.forEach(t),ie=n(e),D=r(e,"P",{});var je=o(D);Se=u(je,"React"),je.forEach(t),le=n(e),E=r(e,"PRE",{class:!0});var rt=o(E);rt.forEach(t),re=n(e),V=r(e,"P",{});var Be=o(V);xe=u(Be,"Svelte"),Be.forEach(t),oe=n(e),S=r(e,"PRE",{class:!0});var ot=o(S);ot.forEach(t),se=n(e),z=r(e,"P",{});var Fe=o(z);Pe=u(Fe,"In conclusion, Svelte offers a fresh and more efficient approach to building web applications compared to traditional frameworks like React. As we have seen from the snippets of code in this post, Svelte’s syntax is simpler and more concise, resulting in cleaner and easier to read code. While there may be a learning curve for React developers transitioning to Svelte, the benefits of improved performance and developer experience make it well worth the effort. Whether you’re building a small application or a large-scale project, Svelte’s modern approach to web development can help you create better user experiences while saving you time and effort."),Fe.forEach(t),this.h()},h(){d(m,"class","language-undefined"),d(h,"class","language-undefined"),d(b,"class","language-undefined"),d(_,"class","language-undefined"),d(k,"class","language-undefined"),d(y,"class","language-undefined"),d(E,"class","language-undefined"),d(S,"class","language-undefined")},m(e,a){i(e,c,a),f(c,ne),i(e,C,a),i(e,v,a),f(v,g),f(g,fe),f(v,pe),i(e,$,a),i(e,x,a),f(x,ue),i(e,j,a),i(e,m,a),m.innerHTML=Oe,i(e,B,a),i(e,P,a),f(P,ce),i(e,F,a),i(e,h,a),h.innerHTML=Ye,i(e,G,a),i(e,R,a),f(R,de),i(e,O,a),i(e,w,a),f(w,q),f(q,ve),f(w,me),i(e,Y,a),i(e,M,a),f(M,he),i(e,J,a),i(e,b,a),b.innerHTML=Je,i(e,K,a),i(e,H,a),f(H,we),i(e,N,a),i(e,_,a),_.innerHTML=Ke,i(e,Q,a),i(e,T,a),f(T,be),i(e,U,a),i(e,W,a),f(W,_e),i(e,X,a),i(e,I,a),f(I,ke),i(e,Z,a),i(e,k,a),k.innerHTML=Ne,i(e,ee,a),i(e,L,a),f(L,ye),i(e,te,a),i(e,y,a),y.innerHTML=Qe,i(e,ae,a),i(e,A,a),f(A,Ee),i(e,ie,a),i(e,D,a),f(D,Se),i(e,le,a),i(e,E,a),E.innerHTML=Ue,i(e,re,a),i(e,V,a),f(V,xe),i(e,oe,a),i(e,S,a),S.innerHTML=Xe,i(e,se,a),i(e,z,a),f(z,Pe)},p:He,i:He,o:He,d(e){e&&t(c),e&&t(C),e&&t(v),e&&t($),e&&t(x),e&&t(j),e&&t(m),e&&t(B),e&&t(P),e&&t(F),e&&t(h),e&&t(G),e&&t(R),e&&t(O),e&&t(w),e&&t(Y),e&&t(M),e&&t(J),e&&t(b),e&&t(K),e&&t(H),e&&t(N),e&&t(_),e&&t(Q),e&&t(T),e&&t(U),e&&t(W),e&&t(X),e&&t(I),e&&t(Z),e&&t(k),e&&t(ee),e&&t(L),e&&t(te),e&&t(y),e&&t(ae),e&&t(A),e&&t(ie),e&&t(D),e&&t(le),e&&t(E),e&&t(re),e&&t(V),e&&t(oe),e&&t(S),e&&t(se),e&&t(z)}}}const ct={title:"A first look at Svelte for React Developers",date:"Feb 28, 2023",cover:"https://images.unsplash.com/photo-1577648188599-291bb8b831c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",excerpt:"Svelte is a framework which aims to provide a more efficient way of building web applications compared to traditional frameworks like React."};class dt extends st{constructor(c){super(),nt(this,c,null,pt,ft,{})}}export{dt as default,ct as metadata};