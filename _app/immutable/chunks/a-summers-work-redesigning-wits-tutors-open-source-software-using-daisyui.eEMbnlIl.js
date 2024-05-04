import{s as Xe,n as xe}from"./scheduler.DGZYho1L.js";import{S as $e,i as et,e as n,s as l,b as o,g as a,a as r,l as i,d as s}from"./index.BKBf4ewt.js";function tt(Qe){let h,ge="During the summer, I tasked myself with redesigning the Tutors course reader software, built by Eamonn de Leaster for Waterford Institute of Technology. This software is used to deliver many of WIT’s online courses to students across Ireland.",q,d,Te='<a href="https://github.com/tutors-sdk/tutors-next" rel="nofollow">Tutors-Next</a> (the current iteration) is a Svelte &amp; Typescript application which consumes JSON output from <a href="https://github.com/tutors-sdk/tutors-json" rel="nofollow">tutors-json</a> and renders an interactive experience for students. The application identifies the published course from a url, recovers the JSON version of the static site and then renders a Svelte application.',G,u,be="Previous iterations of Tutors were a static site generator, which was succeeded by an aurelia reader app, and has progressed into the current Svelte reader. These last two are supported by a generator, which produces a type of headless version of a course.",N,p,Ce='The original interface was created based on <a href="https://semantic-ui.com/" rel="nofollow">Semantic UI</a>, succeeded by UI kit and then replaced to use <a href="https://tailwindcss.com/" rel="nofollow">Tailwind CSS</a>. After plenty of research, it was decided that the redesign would go ahead using the <a href="https://daisyui.com/" rel="nofollow">DaisyUI</a> Tailwind components. These components were selected as they are functional, customizable components that suit perfectly to this use case.',R,f,ye="Below, you can see the redesign and an explanation of each page’s design choice.",F,m,_e="Homepage",E,v,He='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1631220063768/AL_rsdBTO.png" alt="Tutors Homepage"/>',J,c,ke="The first, most obvious change on the homepage is the navigation bar. The idea of this is to declutter the mixture of top sections, particularly at a deeper level of viewing modules & topics, and combine everything into a neat section for navigation. The course image and information text was moved & aligned to the left of the navigation bar for uniformity across all areas of the page. The icons to the right of the main navigation bar depict the Tutors version number, a theme switcher, a compressed/expanded view switcher & a table of contents button. This navigation bar is also sticky on desktop view, so is always visible and usable.",K,w,Me='Next, the course contents was split up to more obviously show each semester, with a different background and a lighter drop shadow added. The cards for each module were also updated with a lighter, longer drop shadow. The icons on the cards were also updated to accept SVG icons from the <a href="https://iconify.design/" rel="nofollow">iconify framework</a> aswell as the screenshots of icons used by the original.',Y,x,Le='The font across the whole site was also updated to use the <a href="https://rsms.me/inter/" rel="nofollow">Inter typeface family</a>.',Z,g,Pe="Dark Mode & Theme Switcher",Q,T,Ie='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1631220531990/0Sx561KlZ.png" alt="Tutors Homepage in Dark Mode"/>',X,b,Se="The dark mode design was also updated to use DaisyUI’s soft shades of blue instead of solid black, to be easier on the eye. Here, you can also notice the difference in using SVG images instead of screenshots.",$,C,Ve='In the original Tutors design, the dark mode button was just used to switch between dark mode &amp; light mode. With the new design, this if a theme switcher with a dropdown with a choice of many themes. This was implemented using <a href="https://github.com/saadeghi/theme-change" rel="nofollow">theme-change</a>.',ee,y,De="Module View & Breadcrumb navigation",te,_,je='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1631220806024/t9sZO1VRR.png" alt="Tutors Module View"/>',ie,H,Ae="As we go into module view, you can now see the lower-level cluttered menu of the original design. A new secondary navigation bar also displays, with a breadcrumb navigation - which give visibility on where you are on the course. This is a huge improvement from the original’s “go back to previous page” button, which needed multiple presses to go to the homepage.",se,k,Ue="Beside this breadcrumb navigation you can see the icon sections for companion sites, course resource shortcuts & additional tutors features. These are all organised and displayed in a row, making navigation more intuitive than previous. The cards are also redesigned with the same softer shadow as used on the homepage.",ne,M,ze="Topic View",oe,L,We='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1631221107436/wyy28TydU.png" alt="Tutors Topic View"/>',ae,P,Be="The topic view has been updated with more padding for visibility of the topic titles, a larger video card on smaller displays (along with resizing to be smaller for larger displays), and the same soft drop shadow on the cards for uniformity. The background of each section is also broken up to be clearer for the student to view.",le,I,Oe="Talk View",re,S,qe='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1631221264622/lL_KVu2wi.png" alt="Tutors Talk View"/>',he,V,Ge="The talk view has had minor improvements for usability. On the left is a PDF presentation, and I have changed the navigation icons to have more padding for easier pressing on touch devices. The right hand navigation gives visibility of the course topics, for students to navigate the the next talk, lab or video easily. This was functional as-is, so this was kept with minor design updates.",de,D,Ne="Lab View",ue,j,Re='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1631221511174/1I1FUYbWD.png" alt="Tutors Lab View"/>',pe,A,Fe="The lab view has been redesigned with clearer sections in mind, using a left hand fixed navigation to change between lab steps, and a scrollable lab on the right, made clearer with a light card background. The active lab step has been highlighted with a left border and using bolder text, instead of the background change in the old UI.",fe,U,Ee="Mobile View",me,z,Je='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1631221907900/I9Aw4IS0f.png" alt="Tutors Mobile View"/>',ve,W,Ke="This redesign was also done with mobile users in mind, for students looking to digest course content and study on-the-go. As you can see from the above image, the mobile interface has been vastly improved with better navigation, clearer sections and more functionality.",ce,B,Ye='All in all, I am proud of the work I have put into this redesign of the Tutors software, and it has been a great learning experience for me to work on. I intend to further improve this software alongside Eamonn and, until Christmas, the developers <a href="https://www.redhat.com/en" rel="nofollow">RedHat</a> have kindly gave to us to lend a hand.',we,O,Ze='Cover Photo by <a href="https://unsplash.com/@domlafou?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="nofollow">Dom Fou</a> on  <a href="https://unsplash.com/s/photos/lecture?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="nofollow">Unsplash</a>.';return{c(){h=n("p"),h.textContent=ge,q=l(),d=n("p"),d.innerHTML=Te,G=l(),u=n("p"),u.textContent=be,N=l(),p=n("p"),p.innerHTML=Ce,R=l(),f=n("p"),f.textContent=ye,F=l(),m=n("h2"),m.textContent=_e,E=l(),v=n("p"),v.innerHTML=He,J=l(),c=n("p"),c.textContent=ke,K=l(),w=n("p"),w.innerHTML=Me,Y=l(),x=n("p"),x.innerHTML=Le,Z=l(),g=n("h2"),g.textContent=Pe,Q=l(),T=n("p"),T.innerHTML=Ie,X=l(),b=n("p"),b.textContent=Se,$=l(),C=n("p"),C.innerHTML=Ve,ee=l(),y=n("h2"),y.textContent=De,te=l(),_=n("p"),_.innerHTML=je,ie=l(),H=n("p"),H.textContent=Ae,se=l(),k=n("p"),k.textContent=Ue,ne=l(),M=n("h2"),M.textContent=ze,oe=l(),L=n("p"),L.innerHTML=We,ae=l(),P=n("p"),P.textContent=Be,le=l(),I=n("h2"),I.textContent=Oe,re=l(),S=n("p"),S.innerHTML=qe,he=l(),V=n("p"),V.textContent=Ge,de=l(),D=n("h2"),D.textContent=Ne,ue=l(),j=n("p"),j.innerHTML=Re,pe=l(),A=n("p"),A.textContent=Fe,fe=l(),U=n("h2"),U.textContent=Ee,me=l(),z=n("p"),z.innerHTML=Je,ve=l(),W=n("p"),W.textContent=Ke,ce=l(),B=n("p"),B.innerHTML=Ye,we=l(),O=n("p"),O.innerHTML=Ze},l(e){h=o(e,"P",{"data-svelte-h":!0}),a(h)!=="svelte-1jpyl7z"&&(h.textContent=ge),q=r(e),d=o(e,"P",{"data-svelte-h":!0}),a(d)!=="svelte-7kwan"&&(d.innerHTML=Te),G=r(e),u=o(e,"P",{"data-svelte-h":!0}),a(u)!=="svelte-4cl47y"&&(u.textContent=be),N=r(e),p=o(e,"P",{"data-svelte-h":!0}),a(p)!=="svelte-h3zg0f"&&(p.innerHTML=Ce),R=r(e),f=o(e,"P",{"data-svelte-h":!0}),a(f)!=="svelte-2slnc2"&&(f.textContent=ye),F=r(e),m=o(e,"H2",{"data-svelte-h":!0}),a(m)!=="svelte-3ejg52"&&(m.textContent=_e),E=r(e),v=o(e,"P",{"data-svelte-h":!0}),a(v)!=="svelte-itxb2w"&&(v.innerHTML=He),J=r(e),c=o(e,"P",{"data-svelte-h":!0}),a(c)!=="svelte-1305cxm"&&(c.textContent=ke),K=r(e),w=o(e,"P",{"data-svelte-h":!0}),a(w)!=="svelte-1b2ma9p"&&(w.innerHTML=Me),Y=r(e),x=o(e,"P",{"data-svelte-h":!0}),a(x)!=="svelte-1o9ap0g"&&(x.innerHTML=Le),Z=r(e),g=o(e,"H2",{"data-svelte-h":!0}),a(g)!=="svelte-62k72t"&&(g.textContent=Pe),Q=r(e),T=o(e,"P",{"data-svelte-h":!0}),a(T)!=="svelte-kwbqxd"&&(T.innerHTML=Ie),X=r(e),b=o(e,"P",{"data-svelte-h":!0}),a(b)!=="svelte-1f1y33w"&&(b.textContent=Se),$=r(e),C=o(e,"P",{"data-svelte-h":!0}),a(C)!=="svelte-xv2z0f"&&(C.innerHTML=Ve),ee=r(e),y=o(e,"H2",{"data-svelte-h":!0}),a(y)!=="svelte-14fh02w"&&(y.textContent=De),te=r(e),_=o(e,"P",{"data-svelte-h":!0}),a(_)!=="svelte-1vro2n"&&(_.innerHTML=je),ie=r(e),H=o(e,"P",{"data-svelte-h":!0}),a(H)!=="svelte-9f0z2m"&&(H.textContent=Ae),se=r(e),k=o(e,"P",{"data-svelte-h":!0}),a(k)!=="svelte-1t84zve"&&(k.textContent=Ue),ne=r(e),M=o(e,"H2",{"data-svelte-h":!0}),a(M)!=="svelte-1uo0y76"&&(M.textContent=ze),oe=r(e),L=o(e,"P",{"data-svelte-h":!0}),a(L)!=="svelte-frd06t"&&(L.innerHTML=We),ae=r(e),P=o(e,"P",{"data-svelte-h":!0}),a(P)!=="svelte-urhdlj"&&(P.textContent=Be),le=r(e),I=o(e,"H2",{"data-svelte-h":!0}),a(I)!=="svelte-7qvvy7"&&(I.textContent=Oe),re=r(e),S=o(e,"P",{"data-svelte-h":!0}),a(S)!=="svelte-a25can"&&(S.innerHTML=qe),he=r(e),V=o(e,"P",{"data-svelte-h":!0}),a(V)!=="svelte-1o90z7u"&&(V.textContent=Ge),de=r(e),D=o(e,"H2",{"data-svelte-h":!0}),a(D)!=="svelte-f9t3xu"&&(D.textContent=Ne),ue=r(e),j=o(e,"P",{"data-svelte-h":!0}),a(j)!=="svelte-1y0g6js"&&(j.innerHTML=Re),pe=r(e),A=o(e,"P",{"data-svelte-h":!0}),a(A)!=="svelte-1hkl48w"&&(A.textContent=Fe),fe=r(e),U=o(e,"H2",{"data-svelte-h":!0}),a(U)!=="svelte-14kp5jb"&&(U.textContent=Ee),me=r(e),z=o(e,"P",{"data-svelte-h":!0}),a(z)!=="svelte-1vgsykn"&&(z.innerHTML=Je),ve=r(e),W=o(e,"P",{"data-svelte-h":!0}),a(W)!=="svelte-q05j58"&&(W.textContent=Ke),ce=r(e),B=o(e,"P",{"data-svelte-h":!0}),a(B)!=="svelte-a5atm3"&&(B.innerHTML=Ye),we=r(e),O=o(e,"P",{"data-svelte-h":!0}),a(O)!=="svelte-wmupo4"&&(O.innerHTML=Ze)},m(e,t){i(e,h,t),i(e,q,t),i(e,d,t),i(e,G,t),i(e,u,t),i(e,N,t),i(e,p,t),i(e,R,t),i(e,f,t),i(e,F,t),i(e,m,t),i(e,E,t),i(e,v,t),i(e,J,t),i(e,c,t),i(e,K,t),i(e,w,t),i(e,Y,t),i(e,x,t),i(e,Z,t),i(e,g,t),i(e,Q,t),i(e,T,t),i(e,X,t),i(e,b,t),i(e,$,t),i(e,C,t),i(e,ee,t),i(e,y,t),i(e,te,t),i(e,_,t),i(e,ie,t),i(e,H,t),i(e,se,t),i(e,k,t),i(e,ne,t),i(e,M,t),i(e,oe,t),i(e,L,t),i(e,ae,t),i(e,P,t),i(e,le,t),i(e,I,t),i(e,re,t),i(e,S,t),i(e,he,t),i(e,V,t),i(e,de,t),i(e,D,t),i(e,ue,t),i(e,j,t),i(e,pe,t),i(e,A,t),i(e,fe,t),i(e,U,t),i(e,me,t),i(e,z,t),i(e,ve,t),i(e,W,t),i(e,ce,t),i(e,B,t),i(e,we,t),i(e,O,t)},p:xe,i:xe,o:xe,d(e){e&&(s(h),s(q),s(d),s(G),s(u),s(N),s(p),s(R),s(f),s(F),s(m),s(E),s(v),s(J),s(c),s(K),s(w),s(Y),s(x),s(Z),s(g),s(Q),s(T),s(X),s(b),s($),s(C),s(ee),s(y),s(te),s(_),s(ie),s(H),s(se),s(k),s(ne),s(M),s(oe),s(L),s(ae),s(P),s(le),s(I),s(re),s(S),s(he),s(V),s(de),s(D),s(ue),s(j),s(pe),s(A),s(fe),s(U),s(me),s(z),s(ve),s(W),s(ce),s(B),s(we),s(O))}}}const nt={title:"A Summer's Work... Redesigning WIT's Tutors Open Source Software Using DaisyUI",date:"Sep 10, 2021",cover:"https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",excerpt:"During the summer of 2021, I tasked myself with redesigning the Tutors course reader software."};class ot extends $e{constructor(h){super(),et(this,h,null,tt,Xe,{})}}export{ot as default,nt as metadata};