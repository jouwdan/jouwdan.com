import{S as mn,i as vn,s as bn,k as i,q as s,a as f,l as p,m as r,r as n,h as t,c as d,n as u,b as a,F as l,$ as Ka}from"./index.41bbe901.js";function wn(on){let c,Rl,tt,me,Ul,lt,ve,Gl,ot,be,Ml,at,we,Bl,st,M,an='<code class="language-bash">wsl <span class="token parameter variable">--install</span></code>',nt,m,Jl,B,Fl,Yl,it,v,ql,J,$l,zl,pt,_e,Kl,rt,Ee,Ql,ft,ye,Xl,dt,b,Zl,F,gl,eo,ut,Se,to,ht,w,lo,Y,oo,ao,ct,h,ze,so,no,Ke,io,po,q,ro,Qe,fo,uo,mt,_,ho,$,co,mo,vt,Pe,vo,bt,Le,bo,wt,z,sn='<code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> upgrade</code>',_t,We,wo,Et,E,_o,K,Eo,yo,yt,y,So,Q,Po,Lo,St,ke,Wo,Pt,Ce,ko,Lt,xe,Co,Wt,X,nn='<code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">curl</span></code>',kt,Ie,xo,Ct,Z,pn='<code class="language-bash"><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh <span class="token operator">|</span> <span class="token function">bash</span></code>',xt,S,Io,g,To,Ao,It,Te,Vo,Tt,Ae,Ho,At,ee,rn='<code class="language-bash">nvm <span class="token function">install</span> <span class="token parameter variable">--lts</span></code>',Vt,P,No,te,jo,Oo,Ht,Ve,Do,Nt,He,Ro,jt,L,Uo,le,Go,Mo,Ot,Ne,Bo,Dt,je,Jo,Rt,W,Fo,oe,Yo,qo,Ut,k,$o,ae,zo,Ko,Gt,Oe,Qo,Mt,C,Xo,se,Zo,go,Bt,De,ea,Jt,Re,ta,Ft,x,la,ne,oa,aa,Yt,I,sa,Xe,na,ia,qt,T,pa,ie,ra,fa,$t,A,da,Ze,ua,ha,zt,V,ca,pe,ma,va,Kt,Ue,ba,Qt,Ge,wa,Xt,Me,_a,Zt,Be,Ea,gt,Je,ya,el,Fe,Sa,tl,H,Pa,re,La,Wa,ll,Ye,ka,ol,N,Ca,fe,xa,Ia,al,qe,Ta,sl,j,Aa,ge,Va,Ha,nl,O,Na,de,ja,Oa,il,D,Da,et,Ra,Ua,pl,R,Ga,ue,Ma,Ba,rl,U,Ja,he,Fa,Ya,fl,G,qa,ce,$a,za;return{c(){c=i("h2"),Rl=s("Getting Started"),tt=f(),me=i("h3"),Ul=s("Check build version"),lt=f(),ve=i("p"),Gl=s("Before we begin, ensure that you are using a recent build of Windows 10 or 11. If you are using an earlier version than Build 20262, this will not work!"),ot=f(),be=i("h3"),Ml=s("Installing WSL"),at=f(),we=i("p"),Bl=s("To install Windows Subsystem for Linux, open up Powershell on your PC and enter the below."),st=f(),M=i("pre"),nt=f(),m=i("p"),Jl=s("![]("),B=i("a"),Fl=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093436962/e482efb6-4763-4117-9d9d-c77e6c0eeabd.png"),Yl=s(" align=“center”)"),it=f(),v=i("p"),ql=s("If you run into any issues with this, see the "),J=i("a"),$l=s("Troubleshooting Guide"),zl=s("."),pt=f(),_e=i("h2"),Kl=s("Initial Setup"),rt=f(),Ee=i("p"),Ql=s("Once WSL has been installed, reboot your computer. This step is important to ensure it is setup completely."),ft=f(),ye=i("p"),Xl=s("After rebooting, if Ubuntu does not open automatically then open the Ubuntu app from the start menu."),dt=f(),b=i("p"),Zl=s("![]("),F=i("a"),gl=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093532770/fdcc68d7-2b99-4386-8ad5-c9555286878b.png"),eo=s(" align=“center”)"),ut=f(),Se=i("p"),to=s("You will be prompted to set up an account for your Linux system, so go ahead and do this."),ht=f(),w=i("p"),lo=s("![]("),Y=i("a"),oo=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093537496/283fdce8-c17a-4717-b8ca-45a99bd3b05a.png"),ao=s(" align=“center”)"),ct=f(),h=i("ul"),ze=i("li"),so=s("Note that when creating a password, nothing will appear on screen. This is called “blind typing” and this is completely normal."),no=f(),Ke=i("li"),io=s("Once you create an account, this will be your default user and automatically sign-in on launch."),po=f(),q=i("li"),ro=s("This account will be considered the Linux administrator, with the ability to run "),Qe=i("code"),fo=s("sudo"),uo=s(" administrative commands."),mt=f(),_=i("p"),ho=s("![]("),$=i("a"),co=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093559745/8325c14f-8419-4a3d-9fc4-c3367adc6a79.png"),mo=s(" align=“center”)"),vt=f(),Pe=i("h3"),vo=s("Ensure packages are up to date"),bt=f(),Le=i("p"),bo=s("It is recommended that you check for package updates after installing. Windows does not update or upgrade these automatically, so to do this manual process you should run:"),wt=f(),z=i("pre"),_t=f(),We=i("p"),wo=s("in your ubuntu shell. It will ask for your password and then permission to install."),Et=f(),E=i("p"),_o=s("![]("),K=i("a"),Eo=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093613010/57c0cd73-d6ac-4869-b1e6-ecdac74b1f90.png"),yo=s(" align=“center”)"),yt=f(),y=i("p"),So=s("![]("),Q=i("a"),Po=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093618196/52644162-7b95-4e57-a834-40a5f811d26c.png"),Lo=s(" align=“center”)"),St=f(),ke=i("h3"),Wo=s("Install NodeJS & npm via nvm (Node Version Manager)"),Pt=f(),Ce=i("p"),ko=s("It is recommended to use a node version manager when installing NodeJS. The reason for this is that you will likely require different node versions based on the needs of the project you are working on. NVM easily allows us to switch between different versions on the fly."),Lt=f(),xe=i("p"),Co=s("Open your Ubuntu WSL command line and enter the below command to install cURL, a tool used to donload content from the internet in the command line."),Wt=f(),X=i("pre"),kt=f(),Ie=i("p"),xo=s("Once installed, enter the below to install nvm."),Ct=f(),Z=i("pre"),xt=f(),S=i("p"),Io=s("![]("),g=i("a"),To=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093637978/21e47831-00dc-499a-a666-c778c8e5d283.png"),Ao=s(" align=“center”)"),It=f(),Te=i("p"),Vo=s("For this new install to take effect, you’re going to need to close the terminal and open a new one."),Tt=f(),Ae=i("p"),Ho=s("Now let’s install the latest LTS version of node, by entering"),At=f(),ee=i("pre"),Vt=f(),P=i("p"),No=s("![]("),te=i("a"),jo=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093664064/08d1edfe-d252-4552-8518-2687696cabf5.png"),Oo=s(" align=“center”)"),Ht=f(),Ve=i("h2"),Do=s("Setting up VS Code with WSL"),Nt=f(),He=i("h3"),Ro=s("Getting Started"),jt=f(),L=i("p"),Uo=s("Before starting, make sure you have installed "),le=i("a"),Go=s("Visual Studio Code"),Mo=s(" to your PC."),Ot=f(),Ne=i("p"),Bo=s("Visual Studio Code, along with the WSL extension, enables you to use WSL as your full-time development environment directly from VS Code."),Dt=f(),je=i("h3"),Jo=s("Installing the Remote Development Extension"),Rt=f(),W=i("p"),Fo=s("Go to the "),oe=i("a"),Yo=s("Remote Development"),qo=s(" page and press Install. It will prompt you to open Visual Studio Code."),Ut=f(),k=i("p"),$o=s("![]("),ae=i("a"),zo=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093715977/941e048a-4374-4f7e-ae97-f43446ee835b.png"),Ko=s(" align=“center”)"),Gt=f(),Oe=i("p"),Qo=s("This will open Visual Studio Code and here you can press Install."),Mt=f(),C=i("p"),Xo=s("![]("),se=i("a"),Zo=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093723158/ba05cbbe-fba4-4d28-82a6-38d1bf9d5020.png"),go=s(" align=“center”)"),Bt=f(),De=i("h3"),ea=s("Setting WSL as defualt terminal"),Jt=f(),Re=i("p"),ta=s("Open a terminal window inside VS Code by pressing Terminal -> New Terminal in the toolbar."),Ft=f(),x=i("p"),la=s("![]("),ne=i("a"),oa=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093734159/f6837f4c-4d88-4838-8759-67fe30b9b2f9.png"),aa=s(" align=“center”)"),Yt=f(),I=i("p"),sa=s("This should open a powershell terminal. To change the default to your WSL terminal, click the arrow beside the new terminal option, at the top right of the terminal, and choose "),Xe=i("code"),na=s("Select Default Profile"),ia=s("."),qt=f(),T=i("p"),pa=s("![]("),ie=i("a"),ra=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093745978/0ddfa466-e801-4231-881b-887c1ea4d6c7.png"),fa=s(" align=“center”)"),$t=f(),A=i("p"),da=s("You are then prompted to select the default profile. Here, choose "),Ze=i("code"),ua=s("Ubuntu (WSL)"),ha=s(" as default."),zt=f(),V=i("p"),ca=s("![]("),pe=i("a"),ma=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093750934/8b0942cf-a5ad-4e06-aefe-ad12848d8616.png"),va=s(" align=“center”)"),Kt=f(),Ue=i("p"),ba=s("Go ahead and open an new terminal, and it will be using WSL as default!"),Qt=f(),Ge=i("h2"),wa=s("Using WSL & VSCode"),Xt=f(),Me=i("h3"),_a=s("Running a simple project"),Zt=f(),Be=i("p"),Ea=s("Let’s try out our new set up and try running a project using Visual Studio Code & Windows Subsystem for Linux."),gt=f(),Je=i("p"),ya=s("In this, we will be using the Windows Filesystem to store files, and Windows Subsystem for Linux to run the application using NodeJS."),el=f(),Fe=i("h3"),Sa=s("Clone a project"),tl=f(),H=i("p"),Pa=s("Using your favourite Git client, clone the "),re=i("a"),La=s("sveltejs/realworld"),Wa=s(" project. We will be using this as an example application to run."),ll=f(),Ye=i("p"),ka=s("Open up this project’s files in Visual Studio Code and open a terminal."),ol=f(),N=i("p"),Ca=s("![]("),fe=i("a"),xa=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093793520/31855466-5887-4611-a04f-e850133d2d24.png"),Ia=s(" align=“center”)"),al=f(),qe=i("h3"),Ta=s("Run the code"),sl=f(),j=i("p"),Aa=s("In the WSL terminal, enter "),ge=i("code"),Va=s("npm install"),Ha=s(" to install the dependencies."),nl=f(),O=i("p"),Na=s("![]("),de=i("a"),ja=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093802486/54b27dea-7b3a-443b-a308-07d4d0c74a04.png"),Oa=s(" align=“center”)"),il=f(),D=i("p"),Da=s("Enter "),et=i("code"),Ra=s("npm run dev"),Ua=s(" and the app should run inside WSL."),pl=f(),R=i("p"),Ga=s("![]("),ue=i("a"),Ma=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093817427/8dec887a-3878-4cf3-b424-a3e06290009c.png"),Ba=s(" align=“center”)"),rl=f(),U=i("p"),Ja=s("Visit "),he=i("a"),Fa=s("http://localhost:5173"),Ya=s(" in your usual browser and you will be able to access the application in Windows when it is running on the Linux Subsystem!"),fl=f(),G=i("p"),qa=s("![]("),ce=i("a"),$a=s("https://cdn.hashnode.com/res/hashnode/image/upload/v1694093822485/3e94b4a3-e1e9-4ad2-aae9-d23a28d1dbc9.png"),za=s(" align=“center”)"),this.h()},l(e){c=p(e,"H2",{});var o=r(c);Rl=n(o,"Getting Started"),o.forEach(t),tt=d(e),me=p(e,"H3",{});var Qa=r(me);Ul=n(Qa,"Check build version"),Qa.forEach(t),lt=d(e),ve=p(e,"P",{});var Xa=r(ve);Gl=n(Xa,"Before we begin, ensure that you are using a recent build of Windows 10 or 11. If you are using an earlier version than Build 20262, this will not work!"),Xa.forEach(t),ot=d(e),be=p(e,"H3",{});var Za=r(be);Ml=n(Za,"Installing WSL"),Za.forEach(t),at=d(e),we=p(e,"P",{});var ga=r(we);Bl=n(ga,"To install Windows Subsystem for Linux, open up Powershell on your PC and enter the below."),ga.forEach(t),st=d(e),M=p(e,"PRE",{class:!0});var fn=r(M);fn.forEach(t),nt=d(e),m=p(e,"P",{});var dl=r(m);Jl=n(dl,"![]("),B=p(dl,"A",{href:!0,rel:!0});var es=r(B);Fl=n(es,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093436962/e482efb6-4763-4117-9d9d-c77e6c0eeabd.png"),es.forEach(t),Yl=n(dl," align=“center”)"),dl.forEach(t),it=d(e),v=p(e,"P",{});var ul=r(v);ql=n(ul,"If you run into any issues with this, see the "),J=p(ul,"A",{href:!0,rel:!0});var ts=r(J);$l=n(ts,"Troubleshooting Guide"),ts.forEach(t),zl=n(ul,"."),ul.forEach(t),pt=d(e),_e=p(e,"H2",{});var ls=r(_e);Kl=n(ls,"Initial Setup"),ls.forEach(t),rt=d(e),Ee=p(e,"P",{});var os=r(Ee);Ql=n(os,"Once WSL has been installed, reboot your computer. This step is important to ensure it is setup completely."),os.forEach(t),ft=d(e),ye=p(e,"P",{});var as=r(ye);Xl=n(as,"After rebooting, if Ubuntu does not open automatically then open the Ubuntu app from the start menu."),as.forEach(t),dt=d(e),b=p(e,"P",{});var hl=r(b);Zl=n(hl,"![]("),F=p(hl,"A",{href:!0,rel:!0});var ss=r(F);gl=n(ss,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093532770/fdcc68d7-2b99-4386-8ad5-c9555286878b.png"),ss.forEach(t),eo=n(hl," align=“center”)"),hl.forEach(t),ut=d(e),Se=p(e,"P",{});var ns=r(Se);to=n(ns,"You will be prompted to set up an account for your Linux system, so go ahead and do this."),ns.forEach(t),ht=d(e),w=p(e,"P",{});var cl=r(w);lo=n(cl,"![]("),Y=p(cl,"A",{href:!0,rel:!0});var is=r(Y);oo=n(is,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093537496/283fdce8-c17a-4717-b8ca-45a99bd3b05a.png"),is.forEach(t),ao=n(cl," align=“center”)"),cl.forEach(t),ct=d(e),h=p(e,"UL",{});var $e=r(h);ze=p($e,"LI",{});var ps=r(ze);so=n(ps,"Note that when creating a password, nothing will appear on screen. This is called “blind typing” and this is completely normal."),ps.forEach(t),no=d($e),Ke=p($e,"LI",{});var rs=r(Ke);io=n(rs,"Once you create an account, this will be your default user and automatically sign-in on launch."),rs.forEach(t),po=d($e),q=p($e,"LI",{});var ml=r(q);ro=n(ml,"This account will be considered the Linux administrator, with the ability to run "),Qe=p(ml,"CODE",{});var fs=r(Qe);fo=n(fs,"sudo"),fs.forEach(t),uo=n(ml," administrative commands."),ml.forEach(t),$e.forEach(t),mt=d(e),_=p(e,"P",{});var vl=r(_);ho=n(vl,"![]("),$=p(vl,"A",{href:!0,rel:!0});var ds=r($);co=n(ds,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093559745/8325c14f-8419-4a3d-9fc4-c3367adc6a79.png"),ds.forEach(t),mo=n(vl," align=“center”)"),vl.forEach(t),vt=d(e),Pe=p(e,"H3",{});var us=r(Pe);vo=n(us,"Ensure packages are up to date"),us.forEach(t),bt=d(e),Le=p(e,"P",{});var hs=r(Le);bo=n(hs,"It is recommended that you check for package updates after installing. Windows does not update or upgrade these automatically, so to do this manual process you should run:"),hs.forEach(t),wt=d(e),z=p(e,"PRE",{class:!0});var dn=r(z);dn.forEach(t),_t=d(e),We=p(e,"P",{});var cs=r(We);wo=n(cs,"in your ubuntu shell. It will ask for your password and then permission to install."),cs.forEach(t),Et=d(e),E=p(e,"P",{});var bl=r(E);_o=n(bl,"![]("),K=p(bl,"A",{href:!0,rel:!0});var ms=r(K);Eo=n(ms,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093613010/57c0cd73-d6ac-4869-b1e6-ecdac74b1f90.png"),ms.forEach(t),yo=n(bl," align=“center”)"),bl.forEach(t),yt=d(e),y=p(e,"P",{});var wl=r(y);So=n(wl,"![]("),Q=p(wl,"A",{href:!0,rel:!0});var vs=r(Q);Po=n(vs,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093618196/52644162-7b95-4e57-a834-40a5f811d26c.png"),vs.forEach(t),Lo=n(wl," align=“center”)"),wl.forEach(t),St=d(e),ke=p(e,"H3",{});var bs=r(ke);Wo=n(bs,"Install NodeJS & npm via nvm (Node Version Manager)"),bs.forEach(t),Pt=d(e),Ce=p(e,"P",{});var ws=r(Ce);ko=n(ws,"It is recommended to use a node version manager when installing NodeJS. The reason for this is that you will likely require different node versions based on the needs of the project you are working on. NVM easily allows us to switch between different versions on the fly."),ws.forEach(t),Lt=d(e),xe=p(e,"P",{});var _s=r(xe);Co=n(_s,"Open your Ubuntu WSL command line and enter the below command to install cURL, a tool used to donload content from the internet in the command line."),_s.forEach(t),Wt=d(e),X=p(e,"PRE",{class:!0});var un=r(X);un.forEach(t),kt=d(e),Ie=p(e,"P",{});var Es=r(Ie);xo=n(Es,"Once installed, enter the below to install nvm."),Es.forEach(t),Ct=d(e),Z=p(e,"PRE",{class:!0});var hn=r(Z);hn.forEach(t),xt=d(e),S=p(e,"P",{});var _l=r(S);Io=n(_l,"![]("),g=p(_l,"A",{href:!0,rel:!0});var ys=r(g);To=n(ys,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093637978/21e47831-00dc-499a-a666-c778c8e5d283.png"),ys.forEach(t),Ao=n(_l," align=“center”)"),_l.forEach(t),It=d(e),Te=p(e,"P",{});var Ss=r(Te);Vo=n(Ss,"For this new install to take effect, you’re going to need to close the terminal and open a new one."),Ss.forEach(t),Tt=d(e),Ae=p(e,"P",{});var Ps=r(Ae);Ho=n(Ps,"Now let’s install the latest LTS version of node, by entering"),Ps.forEach(t),At=d(e),ee=p(e,"PRE",{class:!0});var cn=r(ee);cn.forEach(t),Vt=d(e),P=p(e,"P",{});var El=r(P);No=n(El,"![]("),te=p(El,"A",{href:!0,rel:!0});var Ls=r(te);jo=n(Ls,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093664064/08d1edfe-d252-4552-8518-2687696cabf5.png"),Ls.forEach(t),Oo=n(El," align=“center”)"),El.forEach(t),Ht=d(e),Ve=p(e,"H2",{});var Ws=r(Ve);Do=n(Ws,"Setting up VS Code with WSL"),Ws.forEach(t),Nt=d(e),He=p(e,"H3",{});var ks=r(He);Ro=n(ks,"Getting Started"),ks.forEach(t),jt=d(e),L=p(e,"P",{});var yl=r(L);Uo=n(yl,"Before starting, make sure you have installed "),le=p(yl,"A",{href:!0,rel:!0});var Cs=r(le);Go=n(Cs,"Visual Studio Code"),Cs.forEach(t),Mo=n(yl," to your PC."),yl.forEach(t),Ot=d(e),Ne=p(e,"P",{});var xs=r(Ne);Bo=n(xs,"Visual Studio Code, along with the WSL extension, enables you to use WSL as your full-time development environment directly from VS Code."),xs.forEach(t),Dt=d(e),je=p(e,"H3",{});var Is=r(je);Jo=n(Is,"Installing the Remote Development Extension"),Is.forEach(t),Rt=d(e),W=p(e,"P",{});var Sl=r(W);Fo=n(Sl,"Go to the "),oe=p(Sl,"A",{href:!0,rel:!0});var Ts=r(oe);Yo=n(Ts,"Remote Development"),Ts.forEach(t),qo=n(Sl," page and press Install. It will prompt you to open Visual Studio Code."),Sl.forEach(t),Ut=d(e),k=p(e,"P",{});var Pl=r(k);$o=n(Pl,"![]("),ae=p(Pl,"A",{href:!0,rel:!0});var As=r(ae);zo=n(As,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093715977/941e048a-4374-4f7e-ae97-f43446ee835b.png"),As.forEach(t),Ko=n(Pl," align=“center”)"),Pl.forEach(t),Gt=d(e),Oe=p(e,"P",{});var Vs=r(Oe);Qo=n(Vs,"This will open Visual Studio Code and here you can press Install."),Vs.forEach(t),Mt=d(e),C=p(e,"P",{});var Ll=r(C);Xo=n(Ll,"![]("),se=p(Ll,"A",{href:!0,rel:!0});var Hs=r(se);Zo=n(Hs,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093723158/ba05cbbe-fba4-4d28-82a6-38d1bf9d5020.png"),Hs.forEach(t),go=n(Ll," align=“center”)"),Ll.forEach(t),Bt=d(e),De=p(e,"H3",{});var Ns=r(De);ea=n(Ns,"Setting WSL as defualt terminal"),Ns.forEach(t),Jt=d(e),Re=p(e,"P",{});var js=r(Re);ta=n(js,"Open a terminal window inside VS Code by pressing Terminal -> New Terminal in the toolbar."),js.forEach(t),Ft=d(e),x=p(e,"P",{});var Wl=r(x);la=n(Wl,"![]("),ne=p(Wl,"A",{href:!0,rel:!0});var Os=r(ne);oa=n(Os,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093734159/f6837f4c-4d88-4838-8759-67fe30b9b2f9.png"),Os.forEach(t),aa=n(Wl," align=“center”)"),Wl.forEach(t),Yt=d(e),I=p(e,"P",{});var kl=r(I);sa=n(kl,"This should open a powershell terminal. To change the default to your WSL terminal, click the arrow beside the new terminal option, at the top right of the terminal, and choose "),Xe=p(kl,"CODE",{});var Ds=r(Xe);na=n(Ds,"Select Default Profile"),Ds.forEach(t),ia=n(kl,"."),kl.forEach(t),qt=d(e),T=p(e,"P",{});var Cl=r(T);pa=n(Cl,"![]("),ie=p(Cl,"A",{href:!0,rel:!0});var Rs=r(ie);ra=n(Rs,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093745978/0ddfa466-e801-4231-881b-887c1ea4d6c7.png"),Rs.forEach(t),fa=n(Cl," align=“center”)"),Cl.forEach(t),$t=d(e),A=p(e,"P",{});var xl=r(A);da=n(xl,"You are then prompted to select the default profile. Here, choose "),Ze=p(xl,"CODE",{});var Us=r(Ze);ua=n(Us,"Ubuntu (WSL)"),Us.forEach(t),ha=n(xl," as default."),xl.forEach(t),zt=d(e),V=p(e,"P",{});var Il=r(V);ca=n(Il,"![]("),pe=p(Il,"A",{href:!0,rel:!0});var Gs=r(pe);ma=n(Gs,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093750934/8b0942cf-a5ad-4e06-aefe-ad12848d8616.png"),Gs.forEach(t),va=n(Il," align=“center”)"),Il.forEach(t),Kt=d(e),Ue=p(e,"P",{});var Ms=r(Ue);ba=n(Ms,"Go ahead and open an new terminal, and it will be using WSL as default!"),Ms.forEach(t),Qt=d(e),Ge=p(e,"H2",{});var Bs=r(Ge);wa=n(Bs,"Using WSL & VSCode"),Bs.forEach(t),Xt=d(e),Me=p(e,"H3",{});var Js=r(Me);_a=n(Js,"Running a simple project"),Js.forEach(t),Zt=d(e),Be=p(e,"P",{});var Fs=r(Be);Ea=n(Fs,"Let’s try out our new set up and try running a project using Visual Studio Code & Windows Subsystem for Linux."),Fs.forEach(t),gt=d(e),Je=p(e,"P",{});var Ys=r(Je);ya=n(Ys,"In this, we will be using the Windows Filesystem to store files, and Windows Subsystem for Linux to run the application using NodeJS."),Ys.forEach(t),el=d(e),Fe=p(e,"H3",{});var qs=r(Fe);Sa=n(qs,"Clone a project"),qs.forEach(t),tl=d(e),H=p(e,"P",{});var Tl=r(H);Pa=n(Tl,"Using your favourite Git client, clone the "),re=p(Tl,"A",{href:!0,rel:!0});var $s=r(re);La=n($s,"sveltejs/realworld"),$s.forEach(t),Wa=n(Tl," project. We will be using this as an example application to run."),Tl.forEach(t),ll=d(e),Ye=p(e,"P",{});var zs=r(Ye);ka=n(zs,"Open up this project’s files in Visual Studio Code and open a terminal."),zs.forEach(t),ol=d(e),N=p(e,"P",{});var Al=r(N);Ca=n(Al,"![]("),fe=p(Al,"A",{href:!0,rel:!0});var Ks=r(fe);xa=n(Ks,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093793520/31855466-5887-4611-a04f-e850133d2d24.png"),Ks.forEach(t),Ia=n(Al," align=“center”)"),Al.forEach(t),al=d(e),qe=p(e,"H3",{});var Qs=r(qe);Ta=n(Qs,"Run the code"),Qs.forEach(t),sl=d(e),j=p(e,"P",{});var Vl=r(j);Aa=n(Vl,"In the WSL terminal, enter "),ge=p(Vl,"CODE",{});var Xs=r(ge);Va=n(Xs,"npm install"),Xs.forEach(t),Ha=n(Vl," to install the dependencies."),Vl.forEach(t),nl=d(e),O=p(e,"P",{});var Hl=r(O);Na=n(Hl,"![]("),de=p(Hl,"A",{href:!0,rel:!0});var Zs=r(de);ja=n(Zs,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093802486/54b27dea-7b3a-443b-a308-07d4d0c74a04.png"),Zs.forEach(t),Oa=n(Hl," align=“center”)"),Hl.forEach(t),il=d(e),D=p(e,"P",{});var Nl=r(D);Da=n(Nl,"Enter "),et=p(Nl,"CODE",{});var gs=r(et);Ra=n(gs,"npm run dev"),gs.forEach(t),Ua=n(Nl," and the app should run inside WSL."),Nl.forEach(t),pl=d(e),R=p(e,"P",{});var jl=r(R);Ga=n(jl,"![]("),ue=p(jl,"A",{href:!0,rel:!0});var en=r(ue);Ma=n(en,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093817427/8dec887a-3878-4cf3-b424-a3e06290009c.png"),en.forEach(t),Ba=n(jl," align=“center”)"),jl.forEach(t),rl=d(e),U=p(e,"P",{});var Ol=r(U);Ja=n(Ol,"Visit "),he=p(Ol,"A",{href:!0,rel:!0});var tn=r(he);Fa=n(tn,"http://localhost:5173"),tn.forEach(t),Ya=n(Ol," in your usual browser and you will be able to access the application in Windows when it is running on the Linux Subsystem!"),Ol.forEach(t),fl=d(e),G=p(e,"P",{});var Dl=r(G);qa=n(Dl,"![]("),ce=p(Dl,"A",{href:!0,rel:!0});var ln=r(ce);$a=n(ln,"https://cdn.hashnode.com/res/hashnode/image/upload/v1694093822485/3e94b4a3-e1e9-4ad2-aae9-d23a28d1dbc9.png"),ln.forEach(t),za=n(Dl," align=“center”)"),Dl.forEach(t),this.h()},h(){u(M,"class","language-bash"),u(B,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093436962/e482efb6-4763-4117-9d9d-c77e6c0eeabd.png"),u(B,"rel","nofollow"),u(J,"href","https://learn.microsoft.com/en-us/windows/wsl/troubleshooting"),u(J,"rel","nofollow"),u(F,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093532770/fdcc68d7-2b99-4386-8ad5-c9555286878b.png"),u(F,"rel","nofollow"),u(Y,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093537496/283fdce8-c17a-4717-b8ca-45a99bd3b05a.png"),u(Y,"rel","nofollow"),u($,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093559745/8325c14f-8419-4a3d-9fc4-c3367adc6a79.png"),u($,"rel","nofollow"),u(z,"class","language-bash"),u(K,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093613010/57c0cd73-d6ac-4869-b1e6-ecdac74b1f90.png"),u(K,"rel","nofollow"),u(Q,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093618196/52644162-7b95-4e57-a834-40a5f811d26c.png"),u(Q,"rel","nofollow"),u(X,"class","language-bash"),u(Z,"class","language-bash"),u(g,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093637978/21e47831-00dc-499a-a666-c778c8e5d283.png"),u(g,"rel","nofollow"),u(ee,"class","language-bash"),u(te,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093664064/08d1edfe-d252-4552-8518-2687696cabf5.png"),u(te,"rel","nofollow"),u(le,"href","https://code.visualstudio.com/"),u(le,"rel","nofollow"),u(oe,"href","https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack"),u(oe,"rel","nofollow"),u(ae,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093715977/941e048a-4374-4f7e-ae97-f43446ee835b.png"),u(ae,"rel","nofollow"),u(se,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093723158/ba05cbbe-fba4-4d28-82a6-38d1bf9d5020.png"),u(se,"rel","nofollow"),u(ne,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093734159/f6837f4c-4d88-4838-8759-67fe30b9b2f9.png"),u(ne,"rel","nofollow"),u(ie,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093745978/0ddfa466-e801-4231-881b-887c1ea4d6c7.png"),u(ie,"rel","nofollow"),u(pe,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093750934/8b0942cf-a5ad-4e06-aefe-ad12848d8616.png"),u(pe,"rel","nofollow"),u(re,"href","https://github.com/sveltejs/realworld"),u(re,"rel","nofollow"),u(fe,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093793520/31855466-5887-4611-a04f-e850133d2d24.png"),u(fe,"rel","nofollow"),u(de,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093802486/54b27dea-7b3a-443b-a308-07d4d0c74a04.png"),u(de,"rel","nofollow"),u(ue,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093817427/8dec887a-3878-4cf3-b424-a3e06290009c.png"),u(ue,"rel","nofollow"),u(he,"href","http://localhost:5173"),u(he,"rel","nofollow"),u(ce,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1694093822485/3e94b4a3-e1e9-4ad2-aae9-d23a28d1dbc9.png"),u(ce,"rel","nofollow")},m(e,o){a(e,c,o),l(c,Rl),a(e,tt,o),a(e,me,o),l(me,Ul),a(e,lt,o),a(e,ve,o),l(ve,Gl),a(e,ot,o),a(e,be,o),l(be,Ml),a(e,at,o),a(e,we,o),l(we,Bl),a(e,st,o),a(e,M,o),M.innerHTML=an,a(e,nt,o),a(e,m,o),l(m,Jl),l(m,B),l(B,Fl),l(m,Yl),a(e,it,o),a(e,v,o),l(v,ql),l(v,J),l(J,$l),l(v,zl),a(e,pt,o),a(e,_e,o),l(_e,Kl),a(e,rt,o),a(e,Ee,o),l(Ee,Ql),a(e,ft,o),a(e,ye,o),l(ye,Xl),a(e,dt,o),a(e,b,o),l(b,Zl),l(b,F),l(F,gl),l(b,eo),a(e,ut,o),a(e,Se,o),l(Se,to),a(e,ht,o),a(e,w,o),l(w,lo),l(w,Y),l(Y,oo),l(w,ao),a(e,ct,o),a(e,h,o),l(h,ze),l(ze,so),l(h,no),l(h,Ke),l(Ke,io),l(h,po),l(h,q),l(q,ro),l(q,Qe),l(Qe,fo),l(q,uo),a(e,mt,o),a(e,_,o),l(_,ho),l(_,$),l($,co),l(_,mo),a(e,vt,o),a(e,Pe,o),l(Pe,vo),a(e,bt,o),a(e,Le,o),l(Le,bo),a(e,wt,o),a(e,z,o),z.innerHTML=sn,a(e,_t,o),a(e,We,o),l(We,wo),a(e,Et,o),a(e,E,o),l(E,_o),l(E,K),l(K,Eo),l(E,yo),a(e,yt,o),a(e,y,o),l(y,So),l(y,Q),l(Q,Po),l(y,Lo),a(e,St,o),a(e,ke,o),l(ke,Wo),a(e,Pt,o),a(e,Ce,o),l(Ce,ko),a(e,Lt,o),a(e,xe,o),l(xe,Co),a(e,Wt,o),a(e,X,o),X.innerHTML=nn,a(e,kt,o),a(e,Ie,o),l(Ie,xo),a(e,Ct,o),a(e,Z,o),Z.innerHTML=pn,a(e,xt,o),a(e,S,o),l(S,Io),l(S,g),l(g,To),l(S,Ao),a(e,It,o),a(e,Te,o),l(Te,Vo),a(e,Tt,o),a(e,Ae,o),l(Ae,Ho),a(e,At,o),a(e,ee,o),ee.innerHTML=rn,a(e,Vt,o),a(e,P,o),l(P,No),l(P,te),l(te,jo),l(P,Oo),a(e,Ht,o),a(e,Ve,o),l(Ve,Do),a(e,Nt,o),a(e,He,o),l(He,Ro),a(e,jt,o),a(e,L,o),l(L,Uo),l(L,le),l(le,Go),l(L,Mo),a(e,Ot,o),a(e,Ne,o),l(Ne,Bo),a(e,Dt,o),a(e,je,o),l(je,Jo),a(e,Rt,o),a(e,W,o),l(W,Fo),l(W,oe),l(oe,Yo),l(W,qo),a(e,Ut,o),a(e,k,o),l(k,$o),l(k,ae),l(ae,zo),l(k,Ko),a(e,Gt,o),a(e,Oe,o),l(Oe,Qo),a(e,Mt,o),a(e,C,o),l(C,Xo),l(C,se),l(se,Zo),l(C,go),a(e,Bt,o),a(e,De,o),l(De,ea),a(e,Jt,o),a(e,Re,o),l(Re,ta),a(e,Ft,o),a(e,x,o),l(x,la),l(x,ne),l(ne,oa),l(x,aa),a(e,Yt,o),a(e,I,o),l(I,sa),l(I,Xe),l(Xe,na),l(I,ia),a(e,qt,o),a(e,T,o),l(T,pa),l(T,ie),l(ie,ra),l(T,fa),a(e,$t,o),a(e,A,o),l(A,da),l(A,Ze),l(Ze,ua),l(A,ha),a(e,zt,o),a(e,V,o),l(V,ca),l(V,pe),l(pe,ma),l(V,va),a(e,Kt,o),a(e,Ue,o),l(Ue,ba),a(e,Qt,o),a(e,Ge,o),l(Ge,wa),a(e,Xt,o),a(e,Me,o),l(Me,_a),a(e,Zt,o),a(e,Be,o),l(Be,Ea),a(e,gt,o),a(e,Je,o),l(Je,ya),a(e,el,o),a(e,Fe,o),l(Fe,Sa),a(e,tl,o),a(e,H,o),l(H,Pa),l(H,re),l(re,La),l(H,Wa),a(e,ll,o),a(e,Ye,o),l(Ye,ka),a(e,ol,o),a(e,N,o),l(N,Ca),l(N,fe),l(fe,xa),l(N,Ia),a(e,al,o),a(e,qe,o),l(qe,Ta),a(e,sl,o),a(e,j,o),l(j,Aa),l(j,ge),l(ge,Va),l(j,Ha),a(e,nl,o),a(e,O,o),l(O,Na),l(O,de),l(de,ja),l(O,Oa),a(e,il,o),a(e,D,o),l(D,Da),l(D,et),l(et,Ra),l(D,Ua),a(e,pl,o),a(e,R,o),l(R,Ga),l(R,ue),l(ue,Ma),l(R,Ba),a(e,rl,o),a(e,U,o),l(U,Ja),l(U,he),l(he,Fa),l(U,Ya),a(e,fl,o),a(e,G,o),l(G,qa),l(G,ce),l(ce,$a),l(G,za)},p:Ka,i:Ka,o:Ka,d(e){e&&t(c),e&&t(tt),e&&t(me),e&&t(lt),e&&t(ve),e&&t(ot),e&&t(be),e&&t(at),e&&t(we),e&&t(st),e&&t(M),e&&t(nt),e&&t(m),e&&t(it),e&&t(v),e&&t(pt),e&&t(_e),e&&t(rt),e&&t(Ee),e&&t(ft),e&&t(ye),e&&t(dt),e&&t(b),e&&t(ut),e&&t(Se),e&&t(ht),e&&t(w),e&&t(ct),e&&t(h),e&&t(mt),e&&t(_),e&&t(vt),e&&t(Pe),e&&t(bt),e&&t(Le),e&&t(wt),e&&t(z),e&&t(_t),e&&t(We),e&&t(Et),e&&t(E),e&&t(yt),e&&t(y),e&&t(St),e&&t(ke),e&&t(Pt),e&&t(Ce),e&&t(Lt),e&&t(xe),e&&t(Wt),e&&t(X),e&&t(kt),e&&t(Ie),e&&t(Ct),e&&t(Z),e&&t(xt),e&&t(S),e&&t(It),e&&t(Te),e&&t(Tt),e&&t(Ae),e&&t(At),e&&t(ee),e&&t(Vt),e&&t(P),e&&t(Ht),e&&t(Ve),e&&t(Nt),e&&t(He),e&&t(jt),e&&t(L),e&&t(Ot),e&&t(Ne),e&&t(Dt),e&&t(je),e&&t(Rt),e&&t(W),e&&t(Ut),e&&t(k),e&&t(Gt),e&&t(Oe),e&&t(Mt),e&&t(C),e&&t(Bt),e&&t(De),e&&t(Jt),e&&t(Re),e&&t(Ft),e&&t(x),e&&t(Yt),e&&t(I),e&&t(qt),e&&t(T),e&&t($t),e&&t(A),e&&t(zt),e&&t(V),e&&t(Kt),e&&t(Ue),e&&t(Qt),e&&t(Ge),e&&t(Xt),e&&t(Me),e&&t(Zt),e&&t(Be),e&&t(gt),e&&t(Je),e&&t(el),e&&t(Fe),e&&t(tl),e&&t(H),e&&t(ll),e&&t(Ye),e&&t(ol),e&&t(N),e&&t(al),e&&t(qe),e&&t(sl),e&&t(j),e&&t(nl),e&&t(O),e&&t(il),e&&t(D),e&&t(pl),e&&t(R),e&&t(rl),e&&t(U),e&&t(fl),e&&t(G)}}}const En={title:"How to set up WSL for NodeJS Development",date:"Sep 7, 2023",cover:"https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format",excerpt:"A tutorial on setting up Windows Subsystem for Linux for NodeJS development on a Windows machine."};class yn extends mn{constructor(c){super(),vn(this,c,null,wn,bn,{})}}export{yn as default,En as metadata};