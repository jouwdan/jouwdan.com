import{S as ou,i as lu,s as au,k as s,q as u,a as p,l as i,m as r,r as n,h as e,c as d,n as f,a5 as m,b as a,F as o,W as ks}from"./index.e2ce6da4.js";function su(wr){let w,Sl,$e,_,Il,D,Tl,Dl,ze,lt,Fl,Qe,at,jl,Ve,P,ue,Ol,Hl,ne,Ml,Ze,st,Gl,Xe,it,Wl,to,F,_r=`<code class="language-undefined">npx create-react-app my-app
cd my-app
npm install --save dotenv firebase react-firebase-hooks react-router-dom tailwindcss postcss autoprefixer daisyui
npx tailwindcss init -p</code>`,eo,rt,j,Bl,O,Ul,Yl,oo,R,Jl,pe,Kl,$l,lo,H,Pr=`<code class="language-undefined">REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTHDOMAIN=
REACT_APP_FIREBASE_PROJECTID=
REACT_APP_FIREBASE_STORAGEBUCKET=
REACT_APP_FIREBASE_MESSAGINGSENDERID=
REACT_APP_FIREBASE_APPID=</code>`,ao,ut,zl,so,M,Rr=`<code class="language-undefined">module.exports = &#123;
  content: [&quot;./src/**/*.&#123;js,jsx,ts,tsx&#125;&quot;, &quot;./public/index.html&quot;],
  theme: &#123;
    extend: &#123;&#125;,
  &#125;,
  variants: &#123;
    extend: &#123;&#125;,
  &#125;,
  plugins: [require(&quot;daisyui&quot;)],
&#125;;</code>`,io,y,Ql,de,Vl,Zl,ro,G,yr=`<code class="language-undefined">@tailwind base;
@tailwind components;
@tailwind utilities;</code>`,uo,nt,Xl,no,pt,ta,po,v,ea,W,oa,la,fe,aa,sa,fo,dt,ft,Ss,co,N,ia,ce,ra,ua,mo,ct,mt,Is,qo,qt,na,vo,vt,gt,Ts,go,A,pa,me,da,fa,ho,ht,Et,Ds,Eo,C,ca,qe,ma,qa,bo,bt,wt,Fs,wo,x,va,ve,ga,ha,_o,_t,Pt,js,Po,g,Ea,ge,ba,wa,he,_a,Pa,Ro,Rt,yt,Os,yo,B,Ra,Ee,ya,No,Nt,At,Hs,Ao,L,Na,be,Aa,Ca,Co,Ct,xt,Ms,xo,Lt,kt,Gs,Lo,h,xa,we,La,ka,_e,Sa,Ia,ko,U,Nr=`<code class="language-undefined">import &#123; initializeApp &#125; from &quot;firebase/app&quot;;
import &#123;
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
&#125; from &quot;firebase/auth&quot;;
import &#123; getFirestore &#125; from &quot;firebase/firestore&quot;;

const firebaseConfig = &#123;
  apiKey: &#96;$&#123;({}).REACT_APP_FIREBASE_API_KEY&#125;&#96;,
  authDomain: &#96;$&#123;({}).REACT_APP_FIREBASE_AUTHDOMAIN&#125;&#96;,
  projectId: &#96;$&#123;({}).REACT_APP_FIREBASE_PROJECTID&#125;&#96;,
  storageBucket: &#96;$&#123;({}).REACT_APP_FIREBASE_STORAGEBUCKET&#125;&#96;,
  messagingSenderId: &#96;$&#123;({}).REACT_APP_FIREBASE_MESSAGINGSENDERID&#125;&#96;,
  appId: &#96;$&#123;({}).REACT_APP_FIREBASE_APPID&#125;&#96;,
&#125;;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) =&gt; &#123;
  try &#123;
    await signInWithEmailAndPassword(auth, email, password);
  &#125; catch (err) &#123;
    console.error(err);
    alert(err.message);
  &#125;
&#125;;

const registerWithEmailAndPassword = async (email, password) =&gt; &#123;
  try &#123;
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
  &#125; catch (err) &#123;
    console.error(err);
    alert(err.message);
  &#125;
&#125;;

const sendPasswordReset = async (email) =&gt; &#123;
  try &#123;
    await sendPasswordResetEmail(auth, email);
    alert(&quot;Password reset link sent!&quot;);
  &#125; catch (err) &#123;
    console.error(err);
    alert(err.message);
  &#125;
&#125;;

const logout = () =&gt; &#123;
  signOut(auth);
&#125;;

export &#123;
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
&#125;;
</code>`,So,St,Ta,Io,k,Da,Pe,Fa,ja,To,Y,Ar=`<code class="language-undefined">import React from &quot;react&quot;;
import &#123; BrowserRouter as Router, Route, Routes &#125; from &quot;react-router-dom&quot;;

import Home from &quot;./Pages/Home&quot;;
import Login from &quot;./Pages/Login&quot;;
import Logout from &quot;./Pages/Logout&quot;;
import Register from &quot;./Pages/Register&quot;;
import Reset from &quot;./Pages/Reset&quot;;
import Dashboard from &quot;./Pages/Dashboard&quot;;

import Navigation from &quot;./Components/nav/navigation&quot;;

function App() &#123;
  return (
    &lt;Router&gt;
      &lt;div
        className=&quot;flex flex-col justify-between bg-base-100&quot;
        data-theme=&quot;dark&quot;
      &gt;
        &lt;Navigation /&gt;
        &lt;main className=&quot;container mx-auto px-3 pb-12&quot;&gt;
          &lt;Routes&gt;
            &lt;Route path=&quot;/&quot; element=&#123;&lt;Home /&gt;&#125; /&gt;
            &lt;Route path=&quot;/login&quot; element=&#123;&lt;Login /&gt;&#125; /&gt;
            &lt;Route path=&quot;/logout&quot; element=&#123;&lt;Logout /&gt;&#125; /&gt;
            &lt;Route path=&quot;/register&quot; element=&#123;&lt;Register /&gt;&#125; /&gt;
            &lt;Route path=&quot;/reset&quot; element=&#123;&lt;Reset /&gt;&#125; /&gt;
            &lt;Route path=&quot;/dashboard&quot; element=&#123;&lt;Dashboard /&gt;&#125; /&gt;
          &lt;/Routes&gt;
        &lt;/main&gt;
      &lt;/div&gt;
    &lt;/Router&gt;
  );
&#125;
export default App;
</code>`,Do,It,Oa,Fo,E,Ha,Re,Ma,Ga,ye,Wa,Ba,jo,Tt,Ne,Ua,Oo,J,Cr=`<code class="language-undefined">import Hero from &quot;../Components/hero/hero&quot;;

const Home = () =&gt; &#123;
  return &lt;Hero /&gt;;
&#125;;

export default Home;</code>`,Ho,Dt,Ae,Ya,Mo,K,xr=`<code class="language-undefined">import React, &#123; useEffect, useState, useContext &#125; from &quot;react&quot;;
import &#123; useAuthState &#125; from &quot;react-firebase-hooks/auth&quot;;
import &#123; useNavigate &#125; from &quot;react-router-dom&quot;;
import &#123; auth &#125; from &quot;../firebase&quot;;

function Dashboard() &#123;
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() =&gt; &#123;
    if (loading) return;
    if (!user) return navigate(&quot;/login&quot;);
  &#125;, [user, loading]);

  return (
    &lt;&gt;
      &lt;div className=&quot;card justify-center h-60 bg-base-200 m-4&quot;&gt;
        &lt;div className=&quot;hero-content text-center mx-auto&quot;&gt;
          &lt;h1 className=&quot;text-5xl font-bold&quot;&gt;Welcome, &#123;user.email&#125;&lt;/h1&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
&#125;

export default Dashboard;</code>`,Go,Ft,Ce,Ja,Wo,$,Lr=`<code class="language-undefined">import LoginForm from &quot;../components/forms/loginForm&quot;;

const Login = () =&gt; &#123;
  return &lt;LoginForm /&gt;;
&#125;;

export default Login;</code>`,Bo,jt,xe,Ka,Uo,z,kr=`<code class="language-undefined">import &#123; useEffect &#125; from &quot;react&quot;;
import &#123; auth &#125; from &quot;../firebase&quot;;
import &#123; useNavigate &#125; from &quot;react-router-dom&quot;;

const Logout = () =&gt; &#123;
  const navigate = useNavigate();
  useEffect(() =&gt; &#123;
    auth.signOut().then(navigate(&quot;/&quot;));
  &#125;);
&#125;;

export default Logout;</code>`,Yo,Ot,Le,$a,Jo,Q,Sr=`<code class="language-undefined">import RegisterForm from &quot;../components/forms/registerForm&quot;;

const Register = () =&gt; &#123;
  return &lt;RegisterForm /&gt;;
&#125;;

export default Register;
</code>`,Ko,Ht,ke,za,$o,V,Ir=`<code class="language-undefined">import ResetPasswordForm from &quot;../components/forms/resetPasswordForm&quot;;

const Reset = () =&gt; &#123;
  return &lt;ResetPasswordForm /&gt;;
&#125;;

export default Reset;</code>`,zo,b,Qa,Se,Va,Za,Ie,Xa,ts,Qo,Mt,Te,es,Vo,Z,Tr=`<code class="language-undefined">import React, &#123; useEffect, useState &#125; from &quot;react&quot;;
import &#123; Link, useNavigate &#125; from &quot;react-router-dom&quot;;
import &#123; auth, logInWithEmailAndPassword &#125; from &quot;../../firebase&quot;;
import &#123; useAuthState &#125; from &quot;react-firebase-hooks/auth&quot;;

function LoginForm() &#123;
  const [email, setEmail] = useState(&quot;&quot;);
  const [password, setPassword] = useState(&quot;&quot;);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() =&gt; &#123;
    if (loading) return;
    if (user) navigate(&quot;/dashboard&quot;, &#123; replace: true &#125;);
  &#125;, [user]);
  return (
    &lt;div className=&quot;flex pt-6&quot;&gt;
      &lt;div className=&quot;card shadow-2xl bg-base-200 flex-1 justify-center p-12&quot;&gt;
        &lt;div className=&quot;card-header&quot;&gt;
          &lt;h2 className=&quot;text-3xl&quot;&gt;Log In&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div className=&quot;card-body&quot;&gt;
          &lt;div className=&quot;form-control&quot;&gt;
            &lt;label className=&quot;label&quot;&gt;
              &lt;span className=&quot;label-text&quot;&gt;Email&lt;/span&gt;
            &lt;/label&gt;
            &lt;input
              type=&quot;text&quot;
              className=&quot;input input-bordered&quot;
              value=&#123;email&#125;
              onChange=&#123;(e) =&gt; setEmail(e.target.value)&#125;
              placeholder=&quot;E-mail Address&quot;
            /&gt;
          &lt;/div&gt;
          &lt;div className=&quot;form-control&quot;&gt;
            &lt;label className=&quot;label&quot;&gt;
              &lt;span className=&quot;label-text&quot;&gt;Password&lt;/span&gt;
            &lt;/label&gt;
            &lt;input
              type=&quot;password&quot;
              className=&quot;input input-bordered&quot;
              value=&#123;password&#125;
              onChange=&#123;(e) =&gt; setPassword(e.target.value)&#125;
              placeholder=&quot;Password&quot;
            /&gt;
          &lt;/div&gt;
          &lt;a
            className=&quot;btn btn-primary w-full&quot;
            onClick=&#123;() =&gt; logInWithEmailAndPassword(email, password)&#125;
          &gt;
            Login
          &lt;/a&gt;
          &lt;div&gt;
            &lt;Link to=&quot;/reset&quot; className=&quot;btn btn-ghost w-full&quot;&gt;
              Forgot Password
            &lt;/Link&gt;
          &lt;/div&gt;
          &lt;div className=&quot;justify-end&quot;&gt;
            Don&#39;t have an account?&#123;&quot; &quot;&#125;
            &lt;Link to=&quot;/register&quot; className=&quot;link&quot;&gt;
              Register now
            &lt;/Link&gt;
            .
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
&#125;

export default LoginForm;</code>`,Zo,Gt,De,os,Xo,X,Dr=`<code class="language-undefined">import React, &#123; useEffect, useState &#125; from &quot;react&quot;;
import &#123; Link, useNavigate &#125; from &quot;react-router-dom&quot;;
import &#123; auth, registerWithEmailAndPassword &#125; from &quot;../../firebase&quot;;
import &#123; useAuthState &#125; from &quot;react-firebase-hooks/auth&quot;;

function RegisterForm() &#123;
  const [email, setEmail] = useState(&quot;&quot;);
  const [password, setPassword] = useState(&quot;&quot;);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () =&gt; &#123;
    registerWithEmailAndPassword(email, password);
    if (user) navigate(&quot;/dashboard&quot;, &#123; replace: true &#125;);
  &#125;;

  useEffect(() =&gt; &#123;
    if (loading) return;
    if (user) navigate(&quot;/dashboard&quot;, &#123; replace: true &#125;);
  &#125;, [user, loading]);

  return (
    &lt;div className=&quot;flex pt-6&quot;&gt;
      &lt;div className=&quot;card shadow-2xl bg-base-200 flex-1 justify-center p-12&quot;&gt;
        &lt;div className=&quot;card-header&quot;&gt;
          &lt;h2 className=&quot;text-3xl&quot;&gt;Register&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div className=&quot;card-body&quot;&gt;
          &lt;div className=&quot;form-control&quot;&gt;
            &lt;label className=&quot;label&quot;&gt;
              &lt;span className=&quot;label-text&quot;&gt;Email&lt;/span&gt;
            &lt;/label&gt;
            &lt;input
              type=&quot;text&quot;
              className=&quot;input input-bordered&quot;
              value=&#123;email&#125;
              onChange=&#123;(e) =&gt; setEmail(e.target.value)&#125;
              placeholder=&quot;E-mail Address&quot;
            /&gt;
          &lt;/div&gt;
          &lt;div className=&quot;form-control&quot;&gt;
            &lt;label className=&quot;label&quot;&gt;
              &lt;span className=&quot;label-text&quot;&gt;Password&lt;/span&gt;
            &lt;/label&gt;
            &lt;input
              type=&quot;password&quot;
              className=&quot;input input-bordered&quot;
              value=&#123;password&#125;
              onChange=&#123;(e) =&gt; setPassword(e.target.value)&#125;
              placeholder=&quot;Password&quot;
            /&gt;
          &lt;/div&gt;
          &lt;a className=&quot;btn btn-primary w-full&quot; onClick=&#123;register&#125;&gt;
            Register
          &lt;/a&gt;
          &lt;div className=&quot;justify-end&quot;&gt;
            Already have an account?&#123;&quot; &quot;&#125;
            &lt;Link to=&quot;/login&quot; className=&quot;link&quot;&gt;
              Login now
            &lt;/Link&gt;
            .
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
&#125;

export default RegisterForm;</code>`,tl,Wt,Fe,ls,el,tt,Fr=`<code class="language-undefined">import React, &#123; useEffect, useState &#125; from &quot;react&quot;;
import &#123; useAuthState &#125; from &quot;react-firebase-hooks/auth&quot;;
import &#123; useNavigate &#125; from &quot;react-router-dom&quot;;
import &#123; Link &#125; from &quot;react-router-dom&quot;;
import &#123; auth, sendPasswordReset &#125; from &quot;../../firebase&quot;;

function ResetPasswordForm() &#123;
  const [email, setEmail] = useState(&quot;&quot;);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() =&gt; &#123;
    if (loading) return;
    if (user) navigate(&quot;/dashboard&quot;, &#123; replace: true &#125;);
  &#125;, [user, loading]);
  return (
    &lt;div className=&quot;flex pt-6&quot;&gt;
      &lt;div className=&quot;card shadow-2xl bg-base-200 flex-1 justify-center p-12&quot;&gt;
        &lt;div className=&quot;card-header&quot;&gt;
          &lt;h2 className=&quot;text-3xl&quot;&gt;Reset Password&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div className=&quot;card-body&quot;&gt;
          &lt;div className=&quot;form-control&quot;&gt;
            &lt;label className=&quot;label&quot;&gt;
              &lt;span className=&quot;label-text&quot;&gt;Email&lt;/span&gt;
            &lt;/label&gt;
            &lt;input
              type=&quot;text&quot;
              className=&quot;input input-bordered&quot;
              value=&#123;email&#125;
              onChange=&#123;(e) =&gt; setEmail(e.target.value)&#125;
              placeholder=&quot;E-mail Address&quot;
            /&gt;
          &lt;/div&gt;
          &lt;button
            className=&quot;btn btn-primary w-full&quot;
            onClick=&#123;() =&gt; sendPasswordReset(email)&#125;
          &gt;
            Send password reset Email
          &lt;/button&gt;
          &lt;div className=&quot;justify-end&quot;&gt;
            Don&#39;t have an account?&#123;&quot; &quot;&#125;
            &lt;Link to=&quot;/register&quot; className=&quot;link&quot;&gt;
              Register now
            &lt;/Link&gt;
            .
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
&#125;

export default ResetPasswordForm;</code>`,ol,Bt,je,as,ll,et,jr=`<code class="language-undefined">import React, &#123; useContext &#125; from &quot;react&quot;;

const Hero = () =&gt; &#123;
  return (
    &lt;div className=&quot;card justify-center h-96 bg-base-200 m-4&quot;&gt;
      &lt;div className=&quot;hero-content text-center mx-auto&quot;&gt;
        &lt;div className=&quot;max-w-lg&quot;&gt;
          &lt;h1 className=&quot;text-5xl font-bold&quot;&gt;React Firebase Login&lt;/h1&gt;
          &lt;p className=&quot;py-6&quot;&gt;
            A base template to implement a Firebase login system React.
          &lt;/p&gt;
          &lt;a className=&quot;btn btn-primary&quot; href=&quot;/login&quot;&gt;Get Started&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
&#125;;

export default React.memo(Hero);</code>`,al,Ut,Oe,ss,sl,ot,Or=`<code class="language-undefined">import React, &#123; useContext &#125; from &quot;react&quot;;
import &#123; Link, NavLink, useNavigate &#125; from &quot;react-router-dom&quot;;
import &#123; useAuthState &#125; from &quot;react-firebase-hooks/auth&quot;;
import &#123; auth, logout &#125; from &quot;../../firebase&quot;;

function Navigation() &#123;
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    &lt;nav className=&quot;navbar bg-base-200 text-base-content&quot;&gt;
      &lt;div className=&quot;navbar-start&quot;&gt;
        &lt;Link to=&quot;/&quot; className=&quot;btn btn-ghost normal-case text-xl&quot;&gt;
          React Firebase Login
        &lt;/Link&gt;
      &lt;/div&gt;

      &lt;div className=&quot;navbar-middle&quot;&gt;
        &#123;!user ? (
          &lt;NavLink
            to=&quot;/&quot;
            className=&#123;(&#123; isActive &#125;) =&gt;
              isActive
                ? &quot;btn btn-ghost btn-active mr-2 hidden lg:flex&quot;
                : &quot;btn btn-ghost mr-2 hidden lg:flex&quot;
            &#125;
          &gt;
            Home
          &lt;/NavLink&gt;
        ) : (
          &lt;NavLink
            to=&quot;/dashboard&quot;
            className=&#123;(&#123; isActive &#125;) =&gt;
              isActive
                ? &quot;btn btn-ghost btn-active mr-2 hidden lg:flex&quot;
                : &quot;btn btn-ghost mr-2 hidden lg:flex&quot;
            &#125;
          &gt;
            Dashboard
          &lt;/NavLink&gt;
        )&#125;
      &lt;/div&gt;
      &#123;!user ? (
        &lt;div className=&quot;navbar-end&quot;&gt;
          &lt;Link to=&quot;/login&quot;&gt;
            &lt;a className=&quot;btn mr-2&quot;&gt;Login&lt;/a&gt;
          &lt;/Link&gt;
          &lt;Link to=&quot;/register&quot;&gt;
            &lt;a className=&quot;btn btn-primary mr-2&quot;&gt;Register&lt;/a&gt;
          &lt;/Link&gt;
          &lt;div className=&quot;dropdown dropdown-end&quot;&gt;
            &lt;label tabIndex=&quot;0&quot; className=&quot;btn btn-ghost lg:hidden&quot;&gt;
              &lt;svg
                xmlns=&quot;http://www.w3.org/2000/svg&quot;
                className=&quot;h-5 w-5&quot;
                fill=&quot;none&quot;
                viewBox=&quot;0 0 24 24&quot;
                stroke=&quot;currentColor&quot;
              &gt;
                &lt;path
                  strokeLinecap=&quot;round&quot;
                  strokeLinejoin=&quot;round&quot;
                  strokeWidth=&quot;2&quot;
                  d=&quot;M4 6h16M4 12h8m-8 6h16&quot;
                /&gt;
              &lt;/svg&gt;
            &lt;/label&gt;
            &lt;ul
              tabIndex=&quot;0&quot;
              className=&quot;menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52&quot;
            &gt;
              &lt;li&gt;
                &lt;NavLink
                  to=&quot;/&quot;
                  className=&#123;(&#123; isActive &#125;) =&gt;
                    isActive
                      ? &quot;btn btn-ghost btn-active mb-2&quot;
                      : &quot;btn btn-ghost mb-2&quot;
                  &#125;
                &gt;
                  Home
                &lt;/NavLink&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      ) : (
        &lt;div className=&quot;navbar-end&quot;&gt;
          &lt;Link to=&quot;/logout&quot;&gt;
            &lt;a className=&quot;btn mr-2&quot;&gt;Log Out&lt;/a&gt;
          &lt;/Link&gt;
          &lt;div className=&quot;dropdown dropdown-end&quot;&gt;
            &lt;label tabIndex=&quot;0&quot; className=&quot;btn btn-ghost lg:hidden&quot;&gt;
              &lt;svg
                xmlns=&quot;http://www.w3.org/2000/svg&quot;
                className=&quot;h-5 w-5&quot;
                fill=&quot;none&quot;
                viewBox=&quot;0 0 24 24&quot;
                stroke=&quot;currentColor&quot;
              &gt;
                &lt;path
                  strokeLinecap=&quot;round&quot;
                  strokeLinejoin=&quot;round&quot;
                  strokeWidth=&quot;2&quot;
                  d=&quot;M4 6h16M4 12h8m-8 6h16&quot;
                /&gt;
              &lt;/svg&gt;
            &lt;/label&gt;
            &lt;ul
              tabIndex=&quot;0&quot;
              className=&quot;menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52&quot;
            &gt;
              &lt;li&gt;
                &lt;NavLink
                  to=&quot;/dashboard&quot;
                  className=&#123;(&#123; isActive &#125;) =&gt;
                    isActive
                      ? &quot;btn btn-ghost btn-active mb-2&quot;
                      : &quot;btn btn-ghost mb-2&quot;
                  &#125;
                &gt;
                  Dashboard
                &lt;/NavLink&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      )&#125;
    &lt;/nav&gt;
  );
&#125;

export default Navigation;</code>`,il,Yt,is,rl,S,rs,He,us,ns,ul,Jt,Kt,Ws,nl,I,ps,Me,ds,fs,pl,$t,zt,Bs,dl,Qt,cs,fl,Vt,Zt,Us,cl,T,ms,Ge,qs,vs,ml,Xt,te,Ys,ql,ee,gs,vl,oe,hs,gl,c,We,Es,bs,Be,ws,_s,Ue,Ps,Rs,Ye,ys,Ns,Je,As,Cs,Ke,xs;return{c(){w=s("p"),Sl=u("This guide will step you through how to build a React app using the create-react-app tool and implement a login system using Firebase. The front end for this application is built with TailwindCSS using the DaisyUI component library."),$e=p(),_=s("p"),Il=u("The final code can be found on my GitHub page "),D=s("a"),Tl=u("here"),Dl=u("."),ze=p(),lt=s("h2"),Fl=u("Prerequisites"),Qe=p(),at=s("p"),jl=u("Before starting, ensure the below is installed on your system."),Ve=p(),P=s("ul"),ue=s("li"),Ol=u("NodeJS"),Hl=p(),ne=s("li"),Ml=u("Visual Studio Code (or your favourite IDE)"),Ze=p(),st=s("h2"),Gl=u("Getting Started"),Xe=p(),it=s("p"),Wl=u("Let’s get started. Open up a terminal and type the below commands to set up the app and install all the required dependancies."),to=p(),F=s("pre"),eo=p(),rt=s("blockquote"),j=s("p"),Bl=u("npx is not a typo, it’s a "),O=s("a"),Ul=u("package runner tool that was released alongside npm 5.2+"),Yl=u("."),oo=p(),R=s("p"),Jl=u("Create a new file "),pe=s("code"),Kl=u(".env"),$l=u(" in the my-app folder and add the below to it. We will update these values later once we set up our Firebase app."),lo=p(),H=s("pre"),ao=p(),ut=s("p"),zl=u("To set up Tailwind, open up the newly generated tailwind.config.js and replace all of the contents with the below. This will also ensure that we can use the daisyui component library."),so=p(),M=s("pre"),io=p(),y=s("p"),Ql=u("Then open up "),de=s("code"),Vl=u("src/index.css"),Zl=u(" and replace the contents with"),ro=p(),G=s("pre"),uo=p(),nt=s("p"),Xl=u("We now have a simple React app set up, our dependancies installed and TailwindCSS initialised. Let’s move on to setting up Firebase so we can implement the login system."),no=p(),pt=s("h2"),ta=u("Firebase Setup"),po=p(),v=s("p"),ea=u("Head on over to the "),W=s("a"),oa=u("Firebase"),la=u(" website and hit "),fe=s("code"),aa=u("Get Started"),sa=u("."),fo=p(),dt=s("p"),ft=s("img"),co=p(),N=s("p"),ia=u("Click "),ce=s("code"),ra=u("Add Project"),ua=u(", type in the project name and press Continue."),mo=p(),ct=s("p"),mt=s("img"),qo=p(),qt=s("p"),na=u("For simplicity of this tutorial, on the next page disable Google Analytics and press Create Project."),vo=p(),vt=s("p"),gt=s("img"),go=p(),A=s("p"),pa=u("Once your Project is set up, go to "),me=s("code"),da=u("All Products"),fa=u(" in the sidebar then Authentication."),ho=p(),ht=s("p"),Et=s("img"),Eo=p(),C=s("p"),ca=u("Once here, go ahead and click "),qe=s("code"),ma=u("Get Started"),qa=u("."),bo=p(),bt=s("p"),wt=s("img"),wo=p(),x=s("p"),va=u("We are going to want to set up Email/Password login, so under "),ve=s("code"),ga=u("Native providers"),ha=u(" click this, enable it and click save."),_o=p(),_t=s("p"),Pt=s("img"),Po=p(),g=s("p"),Ea=u("Next, let’s get our application secrets to add to our "),ge=s("code"),ba=u(".env"),wa=u(" file. Head on over to the Project Overview and select web app at the top, which looks like a "),he=s("code"),_a=u("</>"),Pa=u(" icon."),Ro=p(),Rt=s("p"),yt=s("img"),yo=p(),B=s("p"),Ra=u("Create your app nickname and press "),Ee=s("code"),ya=u("Register app"),No=p(),Nt=s("p"),At=s("img"),Ao=p(),L=s("p"),Na=u("You will then be faced with your API key details. Copy the values of these and add them to the relevant variable in your "),be=s("code"),Aa=u(".env"),Ca=u(" file."),Co=p(),Ct=s("p"),xt=s("img"),xo=p(),Lt=s("p"),kt=s("img"),Lo=p(),h=s("p"),xa=u("We also need to create a file which communicates with Firebase to authenticate / create users. Create the file "),we=s("code"),La=u("firebase.js"),ka=u(" in the "),_e=s("code"),Sa=u("src"),Ia=u(" folder and paste in the following code."),ko=p(),U=s("pre"),So=p(),St=s("h2"),Ta=u("Routes Setup"),Io=p(),k=s("p"),Da=u("We need to add our routes so our app can render the pages, which we will create next. Open the "),Pe=s("code"),Fa=u("App.js"),ja=u(" file and replace the contents with the below."),To=p(),Y=s("pre"),Do=p(),It=s("h2"),Oa=u("Page Template Setup"),Fo=p(),E=s("p"),Ha=u("Now let’s got our pages set up for our web application. Create a folder called "),Re=s("code"),Ma=u("Pages"),Ga=u(" in the "),ye=s("code"),Wa=u("/src"),Ba=u(" folder of your app and create the following files."),jo=p(),Tt=s("p"),Ne=s("code"),Ua=u("Home.js"),Oo=p(),J=s("pre"),Ho=p(),Dt=s("p"),Ae=s("code"),Ya=u("Dashboard.js"),Mo=p(),K=s("pre"),Go=p(),Ft=s("p"),Ce=s("code"),Ja=u("Login.js"),Wo=p(),$=s("pre"),Bo=p(),jt=s("p"),xe=s("code"),Ka=u("Logout.js"),Uo=p(),z=s("pre"),Yo=p(),Ot=s("p"),Le=s("code"),$a=u("Register.js"),Jo=p(),Q=s("pre"),Ko=p(),Ht=s("p"),ke=s("code"),za=u("Reset.js"),$o=p(),V=s("pre"),zo=p(),b=s("p"),Qa=u("And then we’ll set up our components for the above. Create the "),Se=s("code"),Va=u("Components"),Za=u(" folder in "),Ie=s("code"),Xa=u("/src"),ts=u(" and create the following files."),Qo=p(),Mt=s("p"),Te=s("code"),es=u("forms/loginForm.js"),Vo=p(),Z=s("pre"),Zo=p(),Gt=s("p"),De=s("code"),os=u("forms/registerForm.js"),Xo=p(),X=s("pre"),tl=p(),Wt=s("p"),Fe=s("code"),ls=u("forms/resetPasswordForm.js"),el=p(),tt=s("pre"),ol=p(),Bt=s("p"),je=s("code"),as=u("hero/hero.js"),ll=p(),et=s("pre"),al=p(),Ut=s("p"),Oe=s("code"),ss=u("nav/navigation.js"),sl=p(),ot=s("pre"),il=p(),Yt=s("h2"),is=u("Testing the Application"),rl=p(),S=s("p"),rs=u("Now that we have the code wrote for our application - let’s go ahead and test it! Type "),He=s("code"),us=u("npm start"),ns=u(" into the console and a browser window will open with our application."),ul=p(),Jt=s("p"),Kt=s("img"),nl=p(),I=s("p"),ps=u("Try to register an account by clicking the "),Me=s("code"),ds=u("register"),fs=u(" button."),pl=p(),$t=s("p"),zt=s("img"),dl=p(),Qt=s("p"),cs=u("Once your account is created, you should be redirected to the dashboard with the email you registered with being displayed."),fl=p(),Vt=s("p"),Zt=s("img"),cl=p(),T=s("p"),ms=u("Now let’s have a see where this user is stored. Head on over to Firebase and click "),Ge=s("code"),qs=u("Authentication"),vs=u(" in the sidebar. Your new user should be displayed here."),ml=p(),Xt=s("p"),te=s("img"),ql=p(),ee=s("h2"),gs=u("Conclusion"),vl=p(),oe=s("p"),hs=u("We now have a fully functional React application with a login system using Firebase! Let’s go back through what we done."),gl=p(),c=s("ul"),We=s("li"),Es=u("Create a new React app using create-react-app"),bs=p(),Be=s("li"),ws=u("Install the dependancies required"),_s=p(),Ue=s("li"),Ps=u("Initialise TailwindCSS and ensure it uses the DaisyUI library"),Rs=p(),Ye=s("li"),ys=u("Create a Firebase application to store & authenticate users"),Ns=p(),Je=s("li"),As=u("Write the code that communicates with Firebase"),Cs=p(),Ke=s("li"),xs=u("Create the Routes, Pages & Components of our application"),this.h()},l(t){w=i(t,"P",{});var l=r(w);Sl=n(l,"This guide will step you through how to build a React app using the create-react-app tool and implement a login system using Firebase. The front end for this application is built with TailwindCSS using the DaisyUI component library."),l.forEach(e),$e=d(t),_=i(t,"P",{});var hl=r(_);Il=n(hl,"The final code can be found on my GitHub page "),D=i(hl,"A",{href:!0,rel:!0});var Js=r(D);Tl=n(Js,"here"),Js.forEach(e),Dl=n(hl,"."),hl.forEach(e),ze=d(t),lt=i(t,"H2",{});var Ks=r(lt);Fl=n(Ks,"Prerequisites"),Ks.forEach(e),Qe=d(t),at=i(t,"P",{});var $s=r(at);jl=n($s,"Before starting, ensure the below is installed on your system."),$s.forEach(e),Ve=d(t),P=i(t,"UL",{});var El=r(P);ue=i(El,"LI",{});var zs=r(ue);Ol=n(zs,"NodeJS"),zs.forEach(e),Hl=d(El),ne=i(El,"LI",{});var Qs=r(ne);Ml=n(Qs,"Visual Studio Code (or your favourite IDE)"),Qs.forEach(e),El.forEach(e),Ze=d(t),st=i(t,"H2",{});var Vs=r(st);Gl=n(Vs,"Getting Started"),Vs.forEach(e),Xe=d(t),it=i(t,"P",{});var Zs=r(it);Wl=n(Zs,"Let’s get started. Open up a terminal and type the below commands to set up the app and install all the required dependancies."),Zs.forEach(e),to=d(t),F=i(t,"PRE",{class:!0});var Hr=r(F);Hr.forEach(e),eo=d(t),rt=i(t,"BLOCKQUOTE",{});var Xs=r(rt);j=i(Xs,"P",{});var bl=r(j);Bl=n(bl,"npx is not a typo, it’s a "),O=i(bl,"A",{href:!0,rel:!0});var ti=r(O);Ul=n(ti,"package runner tool that was released alongside npm 5.2+"),ti.forEach(e),Yl=n(bl,"."),bl.forEach(e),Xs.forEach(e),oo=d(t),R=i(t,"P",{});var wl=r(R);Jl=n(wl,"Create a new file "),pe=i(wl,"CODE",{});var ei=r(pe);Kl=n(ei,".env"),ei.forEach(e),$l=n(wl," in the my-app folder and add the below to it. We will update these values later once we set up our Firebase app."),wl.forEach(e),lo=d(t),H=i(t,"PRE",{class:!0});var Mr=r(H);Mr.forEach(e),ao=d(t),ut=i(t,"P",{});var oi=r(ut);zl=n(oi,"To set up Tailwind, open up the newly generated tailwind.config.js and replace all of the contents with the below. This will also ensure that we can use the daisyui component library."),oi.forEach(e),so=d(t),M=i(t,"PRE",{class:!0});var Gr=r(M);Gr.forEach(e),io=d(t),y=i(t,"P",{});var _l=r(y);Ql=n(_l,"Then open up "),de=i(_l,"CODE",{});var li=r(de);Vl=n(li,"src/index.css"),li.forEach(e),Zl=n(_l," and replace the contents with"),_l.forEach(e),ro=d(t),G=i(t,"PRE",{class:!0});var Wr=r(G);Wr.forEach(e),uo=d(t),nt=i(t,"P",{});var ai=r(nt);Xl=n(ai,"We now have a simple React app set up, our dependancies installed and TailwindCSS initialised. Let’s move on to setting up Firebase so we can implement the login system."),ai.forEach(e),no=d(t),pt=i(t,"H2",{});var si=r(pt);ta=n(si,"Firebase Setup"),si.forEach(e),po=d(t),v=i(t,"P",{});var le=r(v);ea=n(le,"Head on over to the "),W=i(le,"A",{href:!0,rel:!0});var ii=r(W);oa=n(ii,"Firebase"),ii.forEach(e),la=n(le," website and hit "),fe=i(le,"CODE",{});var ri=r(fe);aa=n(ri,"Get Started"),ri.forEach(e),sa=n(le,"."),le.forEach(e),fo=d(t),dt=i(t,"P",{});var ui=r(dt);ft=i(ui,"IMG",{src:!0,alt:!0}),ui.forEach(e),co=d(t),N=i(t,"P",{});var Pl=r(N);ia=n(Pl,"Click "),ce=i(Pl,"CODE",{});var ni=r(ce);ra=n(ni,"Add Project"),ni.forEach(e),ua=n(Pl,", type in the project name and press Continue."),Pl.forEach(e),mo=d(t),ct=i(t,"P",{});var pi=r(ct);mt=i(pi,"IMG",{src:!0,alt:!0}),pi.forEach(e),qo=d(t),qt=i(t,"P",{});var di=r(qt);na=n(di,"For simplicity of this tutorial, on the next page disable Google Analytics and press Create Project."),di.forEach(e),vo=d(t),vt=i(t,"P",{});var fi=r(vt);gt=i(fi,"IMG",{src:!0,alt:!0}),fi.forEach(e),go=d(t),A=i(t,"P",{});var Rl=r(A);pa=n(Rl,"Once your Project is set up, go to "),me=i(Rl,"CODE",{});var ci=r(me);da=n(ci,"All Products"),ci.forEach(e),fa=n(Rl," in the sidebar then Authentication."),Rl.forEach(e),ho=d(t),ht=i(t,"P",{});var mi=r(ht);Et=i(mi,"IMG",{src:!0,alt:!0}),mi.forEach(e),Eo=d(t),C=i(t,"P",{});var yl=r(C);ca=n(yl,"Once here, go ahead and click "),qe=i(yl,"CODE",{});var qi=r(qe);ma=n(qi,"Get Started"),qi.forEach(e),qa=n(yl,"."),yl.forEach(e),bo=d(t),bt=i(t,"P",{});var vi=r(bt);wt=i(vi,"IMG",{src:!0,alt:!0}),vi.forEach(e),wo=d(t),x=i(t,"P",{});var Nl=r(x);va=n(Nl,"We are going to want to set up Email/Password login, so under "),ve=i(Nl,"CODE",{});var gi=r(ve);ga=n(gi,"Native providers"),gi.forEach(e),ha=n(Nl," click this, enable it and click save."),Nl.forEach(e),_o=d(t),_t=i(t,"P",{});var hi=r(_t);Pt=i(hi,"IMG",{src:!0,alt:!0}),hi.forEach(e),Po=d(t),g=i(t,"P",{});var ae=r(g);Ea=n(ae,"Next, let’s get our application secrets to add to our "),ge=i(ae,"CODE",{});var Ei=r(ge);ba=n(Ei,".env"),Ei.forEach(e),wa=n(ae," file. Head on over to the Project Overview and select web app at the top, which looks like a "),he=i(ae,"CODE",{});var bi=r(he);_a=n(bi,"</>"),bi.forEach(e),Pa=n(ae," icon."),ae.forEach(e),Ro=d(t),Rt=i(t,"P",{});var wi=r(Rt);yt=i(wi,"IMG",{src:!0,alt:!0}),wi.forEach(e),yo=d(t),B=i(t,"P",{});var Ls=r(B);Ra=n(Ls,"Create your app nickname and press "),Ee=i(Ls,"CODE",{});var _i=r(Ee);ya=n(_i,"Register app"),_i.forEach(e),Ls.forEach(e),No=d(t),Nt=i(t,"P",{});var Pi=r(Nt);At=i(Pi,"IMG",{src:!0,alt:!0}),Pi.forEach(e),Ao=d(t),L=i(t,"P",{});var Al=r(L);Na=n(Al,"You will then be faced with your API key details. Copy the values of these and add them to the relevant variable in your "),be=i(Al,"CODE",{});var Ri=r(be);Aa=n(Ri,".env"),Ri.forEach(e),Ca=n(Al," file."),Al.forEach(e),Co=d(t),Ct=i(t,"P",{});var yi=r(Ct);xt=i(yi,"IMG",{src:!0,alt:!0}),yi.forEach(e),xo=d(t),Lt=i(t,"P",{});var Ni=r(Lt);kt=i(Ni,"IMG",{src:!0,alt:!0}),Ni.forEach(e),Lo=d(t),h=i(t,"P",{});var se=r(h);xa=n(se,"We also need to create a file which communicates with Firebase to authenticate / create users. Create the file "),we=i(se,"CODE",{});var Ai=r(we);La=n(Ai,"firebase.js"),Ai.forEach(e),ka=n(se," in the "),_e=i(se,"CODE",{});var Ci=r(_e);Sa=n(Ci,"src"),Ci.forEach(e),Ia=n(se," folder and paste in the following code."),se.forEach(e),ko=d(t),U=i(t,"PRE",{class:!0});var Br=r(U);Br.forEach(e),So=d(t),St=i(t,"H2",{});var xi=r(St);Ta=n(xi,"Routes Setup"),xi.forEach(e),Io=d(t),k=i(t,"P",{});var Cl=r(k);Da=n(Cl,"We need to add our routes so our app can render the pages, which we will create next. Open the "),Pe=i(Cl,"CODE",{});var Li=r(Pe);Fa=n(Li,"App.js"),Li.forEach(e),ja=n(Cl," file and replace the contents with the below."),Cl.forEach(e),To=d(t),Y=i(t,"PRE",{class:!0});var Ur=r(Y);Ur.forEach(e),Do=d(t),It=i(t,"H2",{});var ki=r(It);Oa=n(ki,"Page Template Setup"),ki.forEach(e),Fo=d(t),E=i(t,"P",{});var ie=r(E);Ha=n(ie,"Now let’s got our pages set up for our web application. Create a folder called "),Re=i(ie,"CODE",{});var Si=r(Re);Ma=n(Si,"Pages"),Si.forEach(e),Ga=n(ie," in the "),ye=i(ie,"CODE",{});var Ii=r(ye);Wa=n(Ii,"/src"),Ii.forEach(e),Ba=n(ie," folder of your app and create the following files."),ie.forEach(e),jo=d(t),Tt=i(t,"P",{});var Ti=r(Tt);Ne=i(Ti,"CODE",{});var Di=r(Ne);Ua=n(Di,"Home.js"),Di.forEach(e),Ti.forEach(e),Oo=d(t),J=i(t,"PRE",{class:!0});var Yr=r(J);Yr.forEach(e),Ho=d(t),Dt=i(t,"P",{});var Fi=r(Dt);Ae=i(Fi,"CODE",{});var ji=r(Ae);Ya=n(ji,"Dashboard.js"),ji.forEach(e),Fi.forEach(e),Mo=d(t),K=i(t,"PRE",{class:!0});var Jr=r(K);Jr.forEach(e),Go=d(t),Ft=i(t,"P",{});var Oi=r(Ft);Ce=i(Oi,"CODE",{});var Hi=r(Ce);Ja=n(Hi,"Login.js"),Hi.forEach(e),Oi.forEach(e),Wo=d(t),$=i(t,"PRE",{class:!0});var Kr=r($);Kr.forEach(e),Bo=d(t),jt=i(t,"P",{});var Mi=r(jt);xe=i(Mi,"CODE",{});var Gi=r(xe);Ka=n(Gi,"Logout.js"),Gi.forEach(e),Mi.forEach(e),Uo=d(t),z=i(t,"PRE",{class:!0});var $r=r(z);$r.forEach(e),Yo=d(t),Ot=i(t,"P",{});var Wi=r(Ot);Le=i(Wi,"CODE",{});var Bi=r(Le);$a=n(Bi,"Register.js"),Bi.forEach(e),Wi.forEach(e),Jo=d(t),Q=i(t,"PRE",{class:!0});var zr=r(Q);zr.forEach(e),Ko=d(t),Ht=i(t,"P",{});var Ui=r(Ht);ke=i(Ui,"CODE",{});var Yi=r(ke);za=n(Yi,"Reset.js"),Yi.forEach(e),Ui.forEach(e),$o=d(t),V=i(t,"PRE",{class:!0});var Qr=r(V);Qr.forEach(e),zo=d(t),b=i(t,"P",{});var re=r(b);Qa=n(re,"And then we’ll set up our components for the above. Create the "),Se=i(re,"CODE",{});var Ji=r(Se);Va=n(Ji,"Components"),Ji.forEach(e),Za=n(re," folder in "),Ie=i(re,"CODE",{});var Ki=r(Ie);Xa=n(Ki,"/src"),Ki.forEach(e),ts=n(re," and create the following files."),re.forEach(e),Qo=d(t),Mt=i(t,"P",{});var $i=r(Mt);Te=i($i,"CODE",{});var zi=r(Te);es=n(zi,"forms/loginForm.js"),zi.forEach(e),$i.forEach(e),Vo=d(t),Z=i(t,"PRE",{class:!0});var Vr=r(Z);Vr.forEach(e),Zo=d(t),Gt=i(t,"P",{});var Qi=r(Gt);De=i(Qi,"CODE",{});var Vi=r(De);os=n(Vi,"forms/registerForm.js"),Vi.forEach(e),Qi.forEach(e),Xo=d(t),X=i(t,"PRE",{class:!0});var Zr=r(X);Zr.forEach(e),tl=d(t),Wt=i(t,"P",{});var Zi=r(Wt);Fe=i(Zi,"CODE",{});var Xi=r(Fe);ls=n(Xi,"forms/resetPasswordForm.js"),Xi.forEach(e),Zi.forEach(e),el=d(t),tt=i(t,"PRE",{class:!0});var Xr=r(tt);Xr.forEach(e),ol=d(t),Bt=i(t,"P",{});var tr=r(Bt);je=i(tr,"CODE",{});var er=r(je);as=n(er,"hero/hero.js"),er.forEach(e),tr.forEach(e),ll=d(t),et=i(t,"PRE",{class:!0});var tu=r(et);tu.forEach(e),al=d(t),Ut=i(t,"P",{});var or=r(Ut);Oe=i(or,"CODE",{});var lr=r(Oe);ss=n(lr,"nav/navigation.js"),lr.forEach(e),or.forEach(e),sl=d(t),ot=i(t,"PRE",{class:!0});var eu=r(ot);eu.forEach(e),il=d(t),Yt=i(t,"H2",{});var ar=r(Yt);is=n(ar,"Testing the Application"),ar.forEach(e),rl=d(t),S=i(t,"P",{});var xl=r(S);rs=n(xl,"Now that we have the code wrote for our application - let’s go ahead and test it! Type "),He=i(xl,"CODE",{});var sr=r(He);us=n(sr,"npm start"),sr.forEach(e),ns=n(xl," into the console and a browser window will open with our application."),xl.forEach(e),ul=d(t),Jt=i(t,"P",{});var ir=r(Jt);Kt=i(ir,"IMG",{src:!0,alt:!0}),ir.forEach(e),nl=d(t),I=i(t,"P",{});var Ll=r(I);ps=n(Ll,"Try to register an account by clicking the "),Me=i(Ll,"CODE",{});var rr=r(Me);ds=n(rr,"register"),rr.forEach(e),fs=n(Ll," button."),Ll.forEach(e),pl=d(t),$t=i(t,"P",{});var ur=r($t);zt=i(ur,"IMG",{src:!0,alt:!0}),ur.forEach(e),dl=d(t),Qt=i(t,"P",{});var nr=r(Qt);cs=n(nr,"Once your account is created, you should be redirected to the dashboard with the email you registered with being displayed."),nr.forEach(e),fl=d(t),Vt=i(t,"P",{});var pr=r(Vt);Zt=i(pr,"IMG",{src:!0,alt:!0}),pr.forEach(e),cl=d(t),T=i(t,"P",{});var kl=r(T);ms=n(kl,"Now let’s have a see where this user is stored. Head on over to Firebase and click "),Ge=i(kl,"CODE",{});var dr=r(Ge);qs=n(dr,"Authentication"),dr.forEach(e),vs=n(kl," in the sidebar. Your new user should be displayed here."),kl.forEach(e),ml=d(t),Xt=i(t,"P",{});var fr=r(Xt);te=i(fr,"IMG",{src:!0,alt:!0}),fr.forEach(e),ql=d(t),ee=i(t,"H2",{});var cr=r(ee);gs=n(cr,"Conclusion"),cr.forEach(e),vl=d(t),oe=i(t,"P",{});var mr=r(oe);hs=n(mr,"We now have a fully functional React application with a login system using Firebase! Let’s go back through what we done."),mr.forEach(e),gl=d(t),c=i(t,"UL",{});var q=r(c);We=i(q,"LI",{});var qr=r(We);Es=n(qr,"Create a new React app using create-react-app"),qr.forEach(e),bs=d(q),Be=i(q,"LI",{});var vr=r(Be);ws=n(vr,"Install the dependancies required"),vr.forEach(e),_s=d(q),Ue=i(q,"LI",{});var gr=r(Ue);Ps=n(gr,"Initialise TailwindCSS and ensure it uses the DaisyUI library"),gr.forEach(e),Rs=d(q),Ye=i(q,"LI",{});var hr=r(Ye);ys=n(hr,"Create a Firebase application to store & authenticate users"),hr.forEach(e),Ns=d(q),Je=i(q,"LI",{});var Er=r(Je);As=n(Er,"Write the code that communicates with Firebase"),Er.forEach(e),Cs=d(q),Ke=i(q,"LI",{});var br=r(Ke);xs=n(br,"Create the Routes, Pages & Components of our application"),br.forEach(e),q.forEach(e),this.h()},h(){f(D,"href","https://github.com/jouwdan/react-firebase-login"),f(D,"rel","nofollow"),f(F,"class","language-undefined"),f(O,"href","https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"),f(O,"rel","nofollow"),f(H,"class","language-undefined"),f(M,"class","language-undefined"),f(G,"class","language-undefined"),f(W,"href","https://firebase.google.com/"),f(W,"rel","nofollow"),m(ft.src,Ss="https://cdn.hashnode.com/res/hashnode/image/upload/v1659440560930/oSSw52H00.png")||f(ft,"src",Ss),f(ft,"alt","image.png"),m(mt.src,Is="https://cdn.hashnode.com/res/hashnode/image/upload/v1659440716383/5QhPz1mON.png")||f(mt,"src",Is),f(mt,"alt","image.png"),m(gt.src,Ts="https://cdn.hashnode.com/res/hashnode/image/upload/v1659440814566/ILZVbyiEq.png")||f(gt,"src",Ts),f(gt,"alt","image.png"),m(Et.src,Ds="https://cdn.hashnode.com/res/hashnode/image/upload/v1659440988686/DRzArSh_H.png")||f(Et,"src",Ds),f(Et,"alt","image.png"),m(wt.src,Fs="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441028010/x46cog8T7.png")||f(wt,"src",Fs),f(wt,"alt","image.png"),m(Pt.src,js="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441135155/5EofUjjgM.png")||f(Pt,"src",js),f(Pt,"alt","image.png"),m(yt.src,Os="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441375337/UvQe7wapu.png")||f(yt,"src",Os),f(yt,"alt","image.png"),m(At.src,Hs="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441424647/Ry9C6vvDg.png")||f(At,"src",Hs),f(At,"alt","image.png"),m(xt.src,Ms="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441634387/4auJu6RPb.png")||f(xt,"src",Ms),f(xt,"alt","image.png"),m(kt.src,Gs="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441799376/4js19rSqp.png")||f(kt,"src",Gs),f(kt,"alt","image.png"),f(U,"class","language-undefined"),f(Y,"class","language-undefined"),f(J,"class","language-undefined"),f(K,"class","language-undefined"),f($,"class","language-undefined"),f(z,"class","language-undefined"),f(Q,"class","language-undefined"),f(V,"class","language-undefined"),f(Z,"class","language-undefined"),f(X,"class","language-undefined"),f(tt,"class","language-undefined"),f(et,"class","language-undefined"),f(ot,"class","language-undefined"),m(Kt.src,Ws="https://cdn.hashnode.com/res/hashnode/image/upload/v1659449379981/AQbPd5BEp.png")||f(Kt,"src",Ws),f(Kt,"alt","image.png"),m(zt.src,Bs="https://cdn.hashnode.com/res/hashnode/image/upload/v1659450151055/6FJcQshrk.png")||f(zt,"src",Bs),f(zt,"alt","image.png"),m(Zt.src,Us="https://cdn.hashnode.com/res/hashnode/image/upload/v1659449434309/mTmu8UU9y.png")||f(Zt,"src",Us),f(Zt,"alt","image.png"),m(te.src,Ys="https://cdn.hashnode.com/res/hashnode/image/upload/v1659449498257/41AErDlk8.png")||f(te,"src",Ys),f(te,"alt","image.png")},m(t,l){a(t,w,l),o(w,Sl),a(t,$e,l),a(t,_,l),o(_,Il),o(_,D),o(D,Tl),o(_,Dl),a(t,ze,l),a(t,lt,l),o(lt,Fl),a(t,Qe,l),a(t,at,l),o(at,jl),a(t,Ve,l),a(t,P,l),o(P,ue),o(ue,Ol),o(P,Hl),o(P,ne),o(ne,Ml),a(t,Ze,l),a(t,st,l),o(st,Gl),a(t,Xe,l),a(t,it,l),o(it,Wl),a(t,to,l),a(t,F,l),F.innerHTML=_r,a(t,eo,l),a(t,rt,l),o(rt,j),o(j,Bl),o(j,O),o(O,Ul),o(j,Yl),a(t,oo,l),a(t,R,l),o(R,Jl),o(R,pe),o(pe,Kl),o(R,$l),a(t,lo,l),a(t,H,l),H.innerHTML=Pr,a(t,ao,l),a(t,ut,l),o(ut,zl),a(t,so,l),a(t,M,l),M.innerHTML=Rr,a(t,io,l),a(t,y,l),o(y,Ql),o(y,de),o(de,Vl),o(y,Zl),a(t,ro,l),a(t,G,l),G.innerHTML=yr,a(t,uo,l),a(t,nt,l),o(nt,Xl),a(t,no,l),a(t,pt,l),o(pt,ta),a(t,po,l),a(t,v,l),o(v,ea),o(v,W),o(W,oa),o(v,la),o(v,fe),o(fe,aa),o(v,sa),a(t,fo,l),a(t,dt,l),o(dt,ft),a(t,co,l),a(t,N,l),o(N,ia),o(N,ce),o(ce,ra),o(N,ua),a(t,mo,l),a(t,ct,l),o(ct,mt),a(t,qo,l),a(t,qt,l),o(qt,na),a(t,vo,l),a(t,vt,l),o(vt,gt),a(t,go,l),a(t,A,l),o(A,pa),o(A,me),o(me,da),o(A,fa),a(t,ho,l),a(t,ht,l),o(ht,Et),a(t,Eo,l),a(t,C,l),o(C,ca),o(C,qe),o(qe,ma),o(C,qa),a(t,bo,l),a(t,bt,l),o(bt,wt),a(t,wo,l),a(t,x,l),o(x,va),o(x,ve),o(ve,ga),o(x,ha),a(t,_o,l),a(t,_t,l),o(_t,Pt),a(t,Po,l),a(t,g,l),o(g,Ea),o(g,ge),o(ge,ba),o(g,wa),o(g,he),o(he,_a),o(g,Pa),a(t,Ro,l),a(t,Rt,l),o(Rt,yt),a(t,yo,l),a(t,B,l),o(B,Ra),o(B,Ee),o(Ee,ya),a(t,No,l),a(t,Nt,l),o(Nt,At),a(t,Ao,l),a(t,L,l),o(L,Na),o(L,be),o(be,Aa),o(L,Ca),a(t,Co,l),a(t,Ct,l),o(Ct,xt),a(t,xo,l),a(t,Lt,l),o(Lt,kt),a(t,Lo,l),a(t,h,l),o(h,xa),o(h,we),o(we,La),o(h,ka),o(h,_e),o(_e,Sa),o(h,Ia),a(t,ko,l),a(t,U,l),U.innerHTML=Nr,a(t,So,l),a(t,St,l),o(St,Ta),a(t,Io,l),a(t,k,l),o(k,Da),o(k,Pe),o(Pe,Fa),o(k,ja),a(t,To,l),a(t,Y,l),Y.innerHTML=Ar,a(t,Do,l),a(t,It,l),o(It,Oa),a(t,Fo,l),a(t,E,l),o(E,Ha),o(E,Re),o(Re,Ma),o(E,Ga),o(E,ye),o(ye,Wa),o(E,Ba),a(t,jo,l),a(t,Tt,l),o(Tt,Ne),o(Ne,Ua),a(t,Oo,l),a(t,J,l),J.innerHTML=Cr,a(t,Ho,l),a(t,Dt,l),o(Dt,Ae),o(Ae,Ya),a(t,Mo,l),a(t,K,l),K.innerHTML=xr,a(t,Go,l),a(t,Ft,l),o(Ft,Ce),o(Ce,Ja),a(t,Wo,l),a(t,$,l),$.innerHTML=Lr,a(t,Bo,l),a(t,jt,l),o(jt,xe),o(xe,Ka),a(t,Uo,l),a(t,z,l),z.innerHTML=kr,a(t,Yo,l),a(t,Ot,l),o(Ot,Le),o(Le,$a),a(t,Jo,l),a(t,Q,l),Q.innerHTML=Sr,a(t,Ko,l),a(t,Ht,l),o(Ht,ke),o(ke,za),a(t,$o,l),a(t,V,l),V.innerHTML=Ir,a(t,zo,l),a(t,b,l),o(b,Qa),o(b,Se),o(Se,Va),o(b,Za),o(b,Ie),o(Ie,Xa),o(b,ts),a(t,Qo,l),a(t,Mt,l),o(Mt,Te),o(Te,es),a(t,Vo,l),a(t,Z,l),Z.innerHTML=Tr,a(t,Zo,l),a(t,Gt,l),o(Gt,De),o(De,os),a(t,Xo,l),a(t,X,l),X.innerHTML=Dr,a(t,tl,l),a(t,Wt,l),o(Wt,Fe),o(Fe,ls),a(t,el,l),a(t,tt,l),tt.innerHTML=Fr,a(t,ol,l),a(t,Bt,l),o(Bt,je),o(je,as),a(t,ll,l),a(t,et,l),et.innerHTML=jr,a(t,al,l),a(t,Ut,l),o(Ut,Oe),o(Oe,ss),a(t,sl,l),a(t,ot,l),ot.innerHTML=Or,a(t,il,l),a(t,Yt,l),o(Yt,is),a(t,rl,l),a(t,S,l),o(S,rs),o(S,He),o(He,us),o(S,ns),a(t,ul,l),a(t,Jt,l),o(Jt,Kt),a(t,nl,l),a(t,I,l),o(I,ps),o(I,Me),o(Me,ds),o(I,fs),a(t,pl,l),a(t,$t,l),o($t,zt),a(t,dl,l),a(t,Qt,l),o(Qt,cs),a(t,fl,l),a(t,Vt,l),o(Vt,Zt),a(t,cl,l),a(t,T,l),o(T,ms),o(T,Ge),o(Ge,qs),o(T,vs),a(t,ml,l),a(t,Xt,l),o(Xt,te),a(t,ql,l),a(t,ee,l),o(ee,gs),a(t,vl,l),a(t,oe,l),o(oe,hs),a(t,gl,l),a(t,c,l),o(c,We),o(We,Es),o(c,bs),o(c,Be),o(Be,ws),o(c,_s),o(c,Ue),o(Ue,Ps),o(c,Rs),o(c,Ye),o(Ye,ys),o(c,Ns),o(c,Je),o(Je,As),o(c,Cs),o(c,Ke),o(Ke,xs)},p:ks,i:ks,o:ks,d(t){t&&e(w),t&&e($e),t&&e(_),t&&e(ze),t&&e(lt),t&&e(Qe),t&&e(at),t&&e(Ve),t&&e(P),t&&e(Ze),t&&e(st),t&&e(Xe),t&&e(it),t&&e(to),t&&e(F),t&&e(eo),t&&e(rt),t&&e(oo),t&&e(R),t&&e(lo),t&&e(H),t&&e(ao),t&&e(ut),t&&e(so),t&&e(M),t&&e(io),t&&e(y),t&&e(ro),t&&e(G),t&&e(uo),t&&e(nt),t&&e(no),t&&e(pt),t&&e(po),t&&e(v),t&&e(fo),t&&e(dt),t&&e(co),t&&e(N),t&&e(mo),t&&e(ct),t&&e(qo),t&&e(qt),t&&e(vo),t&&e(vt),t&&e(go),t&&e(A),t&&e(ho),t&&e(ht),t&&e(Eo),t&&e(C),t&&e(bo),t&&e(bt),t&&e(wo),t&&e(x),t&&e(_o),t&&e(_t),t&&e(Po),t&&e(g),t&&e(Ro),t&&e(Rt),t&&e(yo),t&&e(B),t&&e(No),t&&e(Nt),t&&e(Ao),t&&e(L),t&&e(Co),t&&e(Ct),t&&e(xo),t&&e(Lt),t&&e(Lo),t&&e(h),t&&e(ko),t&&e(U),t&&e(So),t&&e(St),t&&e(Io),t&&e(k),t&&e(To),t&&e(Y),t&&e(Do),t&&e(It),t&&e(Fo),t&&e(E),t&&e(jo),t&&e(Tt),t&&e(Oo),t&&e(J),t&&e(Ho),t&&e(Dt),t&&e(Mo),t&&e(K),t&&e(Go),t&&e(Ft),t&&e(Wo),t&&e($),t&&e(Bo),t&&e(jt),t&&e(Uo),t&&e(z),t&&e(Yo),t&&e(Ot),t&&e(Jo),t&&e(Q),t&&e(Ko),t&&e(Ht),t&&e($o),t&&e(V),t&&e(zo),t&&e(b),t&&e(Qo),t&&e(Mt),t&&e(Vo),t&&e(Z),t&&e(Zo),t&&e(Gt),t&&e(Xo),t&&e(X),t&&e(tl),t&&e(Wt),t&&e(el),t&&e(tt),t&&e(ol),t&&e(Bt),t&&e(ll),t&&e(et),t&&e(al),t&&e(Ut),t&&e(sl),t&&e(ot),t&&e(il),t&&e(Yt),t&&e(rl),t&&e(S),t&&e(ul),t&&e(Jt),t&&e(nl),t&&e(I),t&&e(pl),t&&e($t),t&&e(dl),t&&e(Qt),t&&e(fl),t&&e(Vt),t&&e(cl),t&&e(T),t&&e(ml),t&&e(Xt),t&&e(ql),t&&e(ee),t&&e(vl),t&&e(oe),t&&e(gl),t&&e(c)}}}const ru={title:"How to build a simple Login system with React & Firebase",date:"Aug 2, 2022",cover:"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",excerpt:"This guide will step you through how to build a React app and implement a login system using Firebase."};class uu extends ou{constructor(w){super(),lu(this,w,null,su,au,{})}}export{uu as default,ru as metadata};
