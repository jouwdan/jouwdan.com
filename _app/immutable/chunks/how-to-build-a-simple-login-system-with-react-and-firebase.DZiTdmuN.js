import{s as mo,n as Ll}from"./scheduler.DGZYho1L.js";import{S as go,i as co,e as o,s as i,H as r,a as s,g as n,d as u,b as d,w as p,h as e,j as m,k as a}from"./index.BCys4dKQ.js";function qo($a){let g,Pl="This guide will step you through how to build a React app using the create-react-app tool and implement a login system using Firebase. The front end for this application is built with TailwindCSS using the DaisyUI component library.",Ft,c,Cl='The final code can be found on my GitHub page <a href="https://github.com/jouwdan/react-firebase-login" rel="nofollow">here</a>.',It,q,Tl="Prerequisites",Dt,f,El="Before starting, ensure the below is installed on your system.",Bt,v,Hl="<li>NodeJS</li> <li>Visual Studio Code (or your favourite IDE)</li>",Wt,h,Rl="Getting Started",Ot,b,Nl="Let’s get started. Open up a terminal and type the below commands to set up the app and install all the required dependancies.",zt,w,Ut,Ja=`<code class="language-undefined">npx create-react-app my-app
cd my-app
npm install --save dotenv firebase react-firebase-hooks react-router-dom tailwindcss postcss autoprefixer daisyui
npx tailwindcss init -p</code>`,Gt,x,Ml='<p>npx is not a typo, it’s a <a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b" rel="nofollow">package runner tool that was released alongside npm 5.2+</a>.</p>',Kt,_,Al="Create a new file <code>.env</code> in the my-app folder and add the below to it. We will update these values later once we set up our Firebase app.",$t,L,Jt,Qa=`<code class="language-undefined">REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTHDOMAIN=
REACT_APP_FIREBASE_PROJECTID=
REACT_APP_FIREBASE_STORAGEBUCKET=
REACT_APP_FIREBASE_MESSAGINGSENDERID=
REACT_APP_FIREBASE_APPID=</code>`,Qt,P,yl="To set up Tailwind, open up the newly generated tailwind.config.js and replace all of the contents with the below. This will also ensure that we can use the daisyui component library.",Yt,C,Vt,Ya=`<code class="language-undefined">module.exports = &#123;
  content: [&quot;./src/**/*.&#123;js,jsx,ts,tsx&#125;&quot;, &quot;./public/index.html&quot;],
  theme: &#123;
    extend: &#123;&#125;,
  &#125;,
  variants: &#123;
    extend: &#123;&#125;,
  &#125;,
  plugins: [require(&quot;daisyui&quot;)],
&#125;;</code>`,Zt,T,kl="Then open up <code>src/index.css</code> and replace the contents with",Xt,E,te,Va=`<code class="language-undefined">@tailwind base;
@tailwind components;
@tailwind utilities;</code>`,ee,H,Sl="We now have a simple React app set up, our dependancies installed and TailwindCSS initialised. Let’s move on to setting up Firebase so we can implement the login system.",le,R,jl="Firebase Setup",ae,N,Fl='Head on over to the <a href="https://firebase.google.com/" rel="nofollow">Firebase</a> website and hit <code>Get Started</code>.',oe,M,Il='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659440560930/oSSw52H00.png" alt="image.png"/>',se,A,Dl="Click <code>Add Project</code>, type in the project name and press Continue.",ie,y,Bl='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659440716383/5QhPz1mON.png" alt="image.png"/>',ue,k,Wl="For simplicity of this tutorial, on the next page disable Google Analytics and press Create Project.",ne,S,Ol='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659440814566/ILZVbyiEq.png" alt="image.png"/>',re,j,zl="Once your Project is set up, go to <code>All Products</code> in the sidebar then Authentication.",de,F,Ul='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659440988686/DRzArSh_H.png" alt="image.png"/>',pe,I,Gl="Once here, go ahead and click <code>Get Started</code>.",me,D,Kl='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441028010/x46cog8T7.png" alt="image.png"/>',ge,B,$l="We are going to want to set up Email/Password login, so under <code>Native providers</code> click this, enable it and click save.",ce,W,Jl='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441135155/5EofUjjgM.png" alt="image.png"/>',qe,O,Ql="Next, let’s get our application secrets to add to our <code>.env</code> file. Head on over to the Project Overview and select web app at the top, which looks like a <code>&lt;/&gt;</code> icon.",fe,z,Yl='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441375337/UvQe7wapu.png" alt="image.png"/>',ve,U,Vl="Create your app nickname and press <code>Register app</code>",he,G,Zl='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441424647/Ry9C6vvDg.png" alt="image.png"/>',be,K,Xl="You will then be faced with your API key details. Copy the values of these and add them to the relevant variable in your <code>.env</code> file.",we,$,ta='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441634387/4auJu6RPb.png" alt="image.png"/>',xe,J,ea='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659441799376/4js19rSqp.png" alt="image.png"/>',_e,Q,la="We also need to create a file which communicates with Firebase to authenticate / create users. Create the file <code>firebase.js</code> in the <code>src</code> folder and paste in the following code.",Le,Y,Pe,Za=`<code class="language-undefined">import &#123; initializeApp &#125; from &quot;firebase/app&quot;;
import &#123;
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
&#125; from &quot;firebase/auth&quot;;
import &#123; getFirestore &#125; from &quot;firebase/firestore&quot;;

const firebaseConfig = &#123;
  apiKey: &#96;$&#123;process.env.REACT_APP_FIREBASE_API_KEY&#125;&#96;,
  authDomain: &#96;$&#123;process.env.REACT_APP_FIREBASE_AUTHDOMAIN&#125;&#96;,
  projectId: &#96;$&#123;process.env.REACT_APP_FIREBASE_PROJECTID&#125;&#96;,
  storageBucket: &#96;$&#123;process.env.REACT_APP_FIREBASE_STORAGEBUCKET&#125;&#96;,
  messagingSenderId: &#96;$&#123;process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID&#125;&#96;,
  appId: &#96;$&#123;process.env.REACT_APP_FIREBASE_APPID&#125;&#96;,
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
</code>`,Ce,V,aa="Routes Setup",Te,Z,oa="We need to add our routes so our app can render the pages, which we will create next. Open the <code>App.js</code> file and replace the contents with the below.",Ee,X,He,Xa=`<code class="language-undefined">import React from &quot;react&quot;;
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
</code>`,Re,tt,sa="Page Template Setup",Ne,et,ia="Now let’s got our pages set up for our web application. Create a folder called <code>Pages</code> in the <code>/src</code> folder of your app and create the following files.",Me,lt,ua="<code>Home.js</code>",Ae,at,ye,to=`<code class="language-undefined">import Hero from &quot;../Components/hero/hero&quot;;

const Home = () =&gt; &#123;
  return &lt;Hero /&gt;;
&#125;;

export default Home;</code>`,ke,ot,na="<code>Dashboard.js</code>",Se,st,je,eo=`<code class="language-undefined">import React, &#123; useEffect, useState, useContext &#125; from &quot;react&quot;;
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

export default Dashboard;</code>`,Fe,it,ra="<code>Login.js</code>",Ie,ut,De,lo=`<code class="language-undefined">import LoginForm from &quot;../components/forms/loginForm&quot;;

const Login = () =&gt; &#123;
  return &lt;LoginForm /&gt;;
&#125;;

export default Login;</code>`,Be,nt,da="<code>Logout.js</code>",We,rt,Oe,ao=`<code class="language-undefined">import &#123; useEffect &#125; from &quot;react&quot;;
import &#123; auth &#125; from &quot;../firebase&quot;;
import &#123; useNavigate &#125; from &quot;react-router-dom&quot;;

const Logout = () =&gt; &#123;
  const navigate = useNavigate();
  useEffect(() =&gt; &#123;
    auth.signOut().then(navigate(&quot;/&quot;));
  &#125;);
&#125;;

export default Logout;</code>`,ze,dt,pa="<code>Register.js</code>",Ue,pt,Ge,oo=`<code class="language-undefined">import RegisterForm from &quot;../components/forms/registerForm&quot;;

const Register = () =&gt; &#123;
  return &lt;RegisterForm /&gt;;
&#125;;

export default Register;
</code>`,Ke,mt,ma="<code>Reset.js</code>",$e,gt,Je,so=`<code class="language-undefined">import ResetPasswordForm from &quot;../components/forms/resetPasswordForm&quot;;

const Reset = () =&gt; &#123;
  return &lt;ResetPasswordForm /&gt;;
&#125;;

export default Reset;</code>`,Qe,ct,ga="And then we’ll set up our components for the above. Create the <code>Components</code> folder in <code>/src</code> and create the following files.",Ye,qt,ca="<code>forms/loginForm.js</code>",Ve,ft,Ze,io=`<code class="language-undefined">import React, &#123; useEffect, useState &#125; from &quot;react&quot;;
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

export default LoginForm;</code>`,Xe,vt,qa="<code>forms/registerForm.js</code>",tl,ht,el,uo=`<code class="language-undefined">import React, &#123; useEffect, useState &#125; from &quot;react&quot;;
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

export default RegisterForm;</code>`,ll,bt,fa="<code>forms/resetPasswordForm.js</code>",al,wt,ol,no=`<code class="language-undefined">import React, &#123; useEffect, useState &#125; from &quot;react&quot;;
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

export default ResetPasswordForm;</code>`,sl,xt,va="<code>hero/hero.js</code>",il,_t,ul,ro=`<code class="language-undefined">import React, &#123; useContext &#125; from &quot;react&quot;;

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

export default React.memo(Hero);</code>`,nl,Lt,ha="<code>nav/navigation.js</code>",rl,Pt,dl,po=`<code class="language-undefined">import React, &#123; useContext &#125; from &quot;react&quot;;
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

export default Navigation;</code>`,pl,Ct,ba="Testing the Application",ml,Tt,wa="Now that we have the code wrote for our application - let’s go ahead and test it! Type <code>npm start</code> into the console and a browser window will open with our application.",gl,Et,xa='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659449379981/AQbPd5BEp.png" alt="image.png"/>',cl,Ht,_a="Try to register an account by clicking the <code>register</code> button.",ql,Rt,La='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659450151055/6FJcQshrk.png" alt="image.png"/>',fl,Nt,Pa="Once your account is created, you should be redirected to the dashboard with the email you registered with being displayed.",vl,Mt,Ca='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659449434309/mTmu8UU9y.png" alt="image.png"/>',hl,At,Ta="Now let’s have a see where this user is stored. Head on over to Firebase and click <code>Authentication</code> in the sidebar. Your new user should be displayed here.",bl,yt,Ea='<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659449498257/41AErDlk8.png" alt="image.png"/>',wl,kt,Ha="Conclusion",xl,St,Ra="We now have a fully functional React application with a login system using Firebase! Let’s go back through what we done.",_l,jt,Na="<li>Create a new React app using create-react-app</li> <li>Install the dependancies required</li> <li>Initialise TailwindCSS and ensure it uses the DaisyUI library</li> <li>Create a Firebase application to store &amp; authenticate users</li> <li>Write the code that communicates with Firebase</li> <li>Create the Routes, Pages &amp; Components of our application</li>";return{c(){g=o("p"),g.textContent=Pl,Ft=i(),c=o("p"),c.innerHTML=Cl,It=i(),q=o("h2"),q.textContent=Tl,Dt=i(),f=o("p"),f.textContent=El,Bt=i(),v=o("ul"),v.innerHTML=Hl,Wt=i(),h=o("h2"),h.textContent=Rl,Ot=i(),b=o("p"),b.textContent=Nl,zt=i(),w=o("pre"),Ut=new r(!1),Gt=i(),x=o("blockquote"),x.innerHTML=Ml,Kt=i(),_=o("p"),_.innerHTML=Al,$t=i(),L=o("pre"),Jt=new r(!1),Qt=i(),P=o("p"),P.textContent=yl,Yt=i(),C=o("pre"),Vt=new r(!1),Zt=i(),T=o("p"),T.innerHTML=kl,Xt=i(),E=o("pre"),te=new r(!1),ee=i(),H=o("p"),H.textContent=Sl,le=i(),R=o("h2"),R.textContent=jl,ae=i(),N=o("p"),N.innerHTML=Fl,oe=i(),M=o("p"),M.innerHTML=Il,se=i(),A=o("p"),A.innerHTML=Dl,ie=i(),y=o("p"),y.innerHTML=Bl,ue=i(),k=o("p"),k.textContent=Wl,ne=i(),S=o("p"),S.innerHTML=Ol,re=i(),j=o("p"),j.innerHTML=zl,de=i(),F=o("p"),F.innerHTML=Ul,pe=i(),I=o("p"),I.innerHTML=Gl,me=i(),D=o("p"),D.innerHTML=Kl,ge=i(),B=o("p"),B.innerHTML=$l,ce=i(),W=o("p"),W.innerHTML=Jl,qe=i(),O=o("p"),O.innerHTML=Ql,fe=i(),z=o("p"),z.innerHTML=Yl,ve=i(),U=o("p"),U.innerHTML=Vl,he=i(),G=o("p"),G.innerHTML=Zl,be=i(),K=o("p"),K.innerHTML=Xl,we=i(),$=o("p"),$.innerHTML=ta,xe=i(),J=o("p"),J.innerHTML=ea,_e=i(),Q=o("p"),Q.innerHTML=la,Le=i(),Y=o("pre"),Pe=new r(!1),Ce=i(),V=o("h2"),V.textContent=aa,Te=i(),Z=o("p"),Z.innerHTML=oa,Ee=i(),X=o("pre"),He=new r(!1),Re=i(),tt=o("h2"),tt.textContent=sa,Ne=i(),et=o("p"),et.innerHTML=ia,Me=i(),lt=o("p"),lt.innerHTML=ua,Ae=i(),at=o("pre"),ye=new r(!1),ke=i(),ot=o("p"),ot.innerHTML=na,Se=i(),st=o("pre"),je=new r(!1),Fe=i(),it=o("p"),it.innerHTML=ra,Ie=i(),ut=o("pre"),De=new r(!1),Be=i(),nt=o("p"),nt.innerHTML=da,We=i(),rt=o("pre"),Oe=new r(!1),ze=i(),dt=o("p"),dt.innerHTML=pa,Ue=i(),pt=o("pre"),Ge=new r(!1),Ke=i(),mt=o("p"),mt.innerHTML=ma,$e=i(),gt=o("pre"),Je=new r(!1),Qe=i(),ct=o("p"),ct.innerHTML=ga,Ye=i(),qt=o("p"),qt.innerHTML=ca,Ve=i(),ft=o("pre"),Ze=new r(!1),Xe=i(),vt=o("p"),vt.innerHTML=qa,tl=i(),ht=o("pre"),el=new r(!1),ll=i(),bt=o("p"),bt.innerHTML=fa,al=i(),wt=o("pre"),ol=new r(!1),sl=i(),xt=o("p"),xt.innerHTML=va,il=i(),_t=o("pre"),ul=new r(!1),nl=i(),Lt=o("p"),Lt.innerHTML=ha,rl=i(),Pt=o("pre"),dl=new r(!1),pl=i(),Ct=o("h2"),Ct.textContent=ba,ml=i(),Tt=o("p"),Tt.innerHTML=wa,gl=i(),Et=o("p"),Et.innerHTML=xa,cl=i(),Ht=o("p"),Ht.innerHTML=_a,ql=i(),Rt=o("p"),Rt.innerHTML=La,fl=i(),Nt=o("p"),Nt.textContent=Pa,vl=i(),Mt=o("p"),Mt.innerHTML=Ca,hl=i(),At=o("p"),At.innerHTML=Ta,bl=i(),yt=o("p"),yt.innerHTML=Ea,wl=i(),kt=o("h2"),kt.textContent=Ha,xl=i(),St=o("p"),St.textContent=Ra,_l=i(),jt=o("ul"),jt.innerHTML=Na,this.h()},l(t){g=s(t,"P",{"data-svelte-h":!0}),n(g)!=="svelte-ltr2cp"&&(g.textContent=Pl),Ft=u(t),c=s(t,"P",{"data-svelte-h":!0}),n(c)!=="svelte-1cezmcv"&&(c.innerHTML=Cl),It=u(t),q=s(t,"H2",{"data-svelte-h":!0}),n(q)!=="svelte-1yr04vb"&&(q.textContent=Tl),Dt=u(t),f=s(t,"P",{"data-svelte-h":!0}),n(f)!=="svelte-1p8hg9c"&&(f.textContent=El),Bt=u(t),v=s(t,"UL",{"data-svelte-h":!0}),n(v)!=="svelte-f8fya6"&&(v.innerHTML=Hl),Wt=u(t),h=s(t,"H2",{"data-svelte-h":!0}),n(h)!=="svelte-1ris1ql"&&(h.textContent=Rl),Ot=u(t),b=s(t,"P",{"data-svelte-h":!0}),n(b)!=="svelte-1a7u0st"&&(b.textContent=Nl),zt=u(t),w=s(t,"PRE",{class:!0});var l=d(w);Ut=p(l,!1),l.forEach(e),Gt=u(t),x=s(t,"BLOCKQUOTE",{"data-svelte-h":!0}),n(x)!=="svelte-3lzpps"&&(x.innerHTML=Ml),Kt=u(t),_=s(t,"P",{"data-svelte-h":!0}),n(_)!=="svelte-9drtsj"&&(_.innerHTML=Al),$t=u(t),L=s(t,"PRE",{class:!0});var Ma=d(L);Jt=p(Ma,!1),Ma.forEach(e),Qt=u(t),P=s(t,"P",{"data-svelte-h":!0}),n(P)!=="svelte-a7ankx"&&(P.textContent=yl),Yt=u(t),C=s(t,"PRE",{class:!0});var Aa=d(C);Vt=p(Aa,!1),Aa.forEach(e),Zt=u(t),T=s(t,"P",{"data-svelte-h":!0}),n(T)!=="svelte-1v6lu19"&&(T.innerHTML=kl),Xt=u(t),E=s(t,"PRE",{class:!0});var ya=d(E);te=p(ya,!1),ya.forEach(e),ee=u(t),H=s(t,"P",{"data-svelte-h":!0}),n(H)!=="svelte-zo17y"&&(H.textContent=Sl),le=u(t),R=s(t,"H2",{"data-svelte-h":!0}),n(R)!=="svelte-r8ib5a"&&(R.textContent=jl),ae=u(t),N=s(t,"P",{"data-svelte-h":!0}),n(N)!=="svelte-1gq6oz3"&&(N.innerHTML=Fl),oe=u(t),M=s(t,"P",{"data-svelte-h":!0}),n(M)!=="svelte-11gxpxv"&&(M.innerHTML=Il),se=u(t),A=s(t,"P",{"data-svelte-h":!0}),n(A)!=="svelte-1vdzmrm"&&(A.innerHTML=Dl),ie=u(t),y=s(t,"P",{"data-svelte-h":!0}),n(y)!=="svelte-f41jvw"&&(y.innerHTML=Bl),ue=u(t),k=s(t,"P",{"data-svelte-h":!0}),n(k)!=="svelte-1c326j9"&&(k.textContent=Wl),ne=u(t),S=s(t,"P",{"data-svelte-h":!0}),n(S)!=="svelte-18oanjw"&&(S.innerHTML=Ol),re=u(t),j=s(t,"P",{"data-svelte-h":!0}),n(j)!=="svelte-1ji3if4"&&(j.innerHTML=zl),de=u(t),F=s(t,"P",{"data-svelte-h":!0}),n(F)!=="svelte-h2j11z"&&(F.innerHTML=Ul),pe=u(t),I=s(t,"P",{"data-svelte-h":!0}),n(I)!=="svelte-1m5y4tp"&&(I.innerHTML=Gl),me=u(t),D=s(t,"P",{"data-svelte-h":!0}),n(D)!=="svelte-oz9onf"&&(D.innerHTML=Kl),ge=u(t),B=s(t,"P",{"data-svelte-h":!0}),n(B)!=="svelte-13ob3vu"&&(B.innerHTML=$l),ce=u(t),W=s(t,"P",{"data-svelte-h":!0}),n(W)!=="svelte-f5rsx8"&&(W.innerHTML=Jl),qe=u(t),O=s(t,"P",{"data-svelte-h":!0}),n(O)!=="svelte-1ox9giz"&&(O.innerHTML=Ql),fe=u(t),z=s(t,"P",{"data-svelte-h":!0}),n(z)!=="svelte-2qxqrb"&&(z.innerHTML=Yl),ve=u(t),U=s(t,"P",{"data-svelte-h":!0}),n(U)!=="svelte-zvfj77"&&(U.innerHTML=Vl),he=u(t),G=s(t,"P",{"data-svelte-h":!0}),n(G)!=="svelte-5dqcir"&&(G.innerHTML=Zl),be=u(t),K=s(t,"P",{"data-svelte-h":!0}),n(K)!=="svelte-1mwlmiv"&&(K.innerHTML=Xl),we=u(t),$=s(t,"P",{"data-svelte-h":!0}),n($)!=="svelte-165a5pg"&&($.innerHTML=ta),xe=u(t),J=s(t,"P",{"data-svelte-h":!0}),n(J)!=="svelte-x662lk"&&(J.innerHTML=ea),_e=u(t),Q=s(t,"P",{"data-svelte-h":!0}),n(Q)!=="svelte-17u08tz"&&(Q.innerHTML=la),Le=u(t),Y=s(t,"PRE",{class:!0});var ka=d(Y);Pe=p(ka,!1),ka.forEach(e),Ce=u(t),V=s(t,"H2",{"data-svelte-h":!0}),n(V)!=="svelte-1413b95"&&(V.textContent=aa),Te=u(t),Z=s(t,"P",{"data-svelte-h":!0}),n(Z)!=="svelte-kj4d0w"&&(Z.innerHTML=oa),Ee=u(t),X=s(t,"PRE",{class:!0});var Sa=d(X);He=p(Sa,!1),Sa.forEach(e),Re=u(t),tt=s(t,"H2",{"data-svelte-h":!0}),n(tt)!=="svelte-ib5pu8"&&(tt.textContent=sa),Ne=u(t),et=s(t,"P",{"data-svelte-h":!0}),n(et)!=="svelte-ojsbt9"&&(et.innerHTML=ia),Me=u(t),lt=s(t,"P",{"data-svelte-h":!0}),n(lt)!=="svelte-ffg7lh"&&(lt.innerHTML=ua),Ae=u(t),at=s(t,"PRE",{class:!0});var ja=d(at);ye=p(ja,!1),ja.forEach(e),ke=u(t),ot=s(t,"P",{"data-svelte-h":!0}),n(ot)!=="svelte-1n7kxa2"&&(ot.innerHTML=na),Se=u(t),st=s(t,"PRE",{class:!0});var Fa=d(st);je=p(Fa,!1),Fa.forEach(e),Fe=u(t),it=s(t,"P",{"data-svelte-h":!0}),n(it)!=="svelte-lpdhxr"&&(it.innerHTML=ra),Ie=u(t),ut=s(t,"PRE",{class:!0});var Ia=d(ut);De=p(Ia,!1),Ia.forEach(e),Be=u(t),nt=s(t,"P",{"data-svelte-h":!0}),n(nt)!=="svelte-18dyome"&&(nt.innerHTML=da),We=u(t),rt=s(t,"PRE",{class:!0});var Da=d(rt);Oe=p(Da,!1),Da.forEach(e),ze=u(t),dt=s(t,"P",{"data-svelte-h":!0}),n(dt)!=="svelte-3sbhcv"&&(dt.innerHTML=pa),Ue=u(t),pt=s(t,"PRE",{class:!0});var Ba=d(pt);Ge=p(Ba,!1),Ba.forEach(e),Ke=u(t),mt=s(t,"P",{"data-svelte-h":!0}),n(mt)!=="svelte-1us3kop"&&(mt.innerHTML=ma),$e=u(t),gt=s(t,"PRE",{class:!0});var Wa=d(gt);Je=p(Wa,!1),Wa.forEach(e),Qe=u(t),ct=s(t,"P",{"data-svelte-h":!0}),n(ct)!=="svelte-1bm9xt0"&&(ct.innerHTML=ga),Ye=u(t),qt=s(t,"P",{"data-svelte-h":!0}),n(qt)!=="svelte-9mw65h"&&(qt.innerHTML=ca),Ve=u(t),ft=s(t,"PRE",{class:!0});var Oa=d(ft);Ze=p(Oa,!1),Oa.forEach(e),Xe=u(t),vt=s(t,"P",{"data-svelte-h":!0}),n(vt)!=="svelte-q04ij9"&&(vt.innerHTML=qa),tl=u(t),ht=s(t,"PRE",{class:!0});var za=d(ht);el=p(za,!1),za.forEach(e),ll=u(t),bt=s(t,"P",{"data-svelte-h":!0}),n(bt)!=="svelte-tcmxhm"&&(bt.innerHTML=fa),al=u(t),wt=s(t,"PRE",{class:!0});var Ua=d(wt);ol=p(Ua,!1),Ua.forEach(e),sl=u(t),xt=s(t,"P",{"data-svelte-h":!0}),n(xt)!=="svelte-1y11gxn"&&(xt.innerHTML=va),il=u(t),_t=s(t,"PRE",{class:!0});var Ga=d(_t);ul=p(Ga,!1),Ga.forEach(e),nl=u(t),Lt=s(t,"P",{"data-svelte-h":!0}),n(Lt)!=="svelte-12oslxo"&&(Lt.innerHTML=ha),rl=u(t),Pt=s(t,"PRE",{class:!0});var Ka=d(Pt);dl=p(Ka,!1),Ka.forEach(e),pl=u(t),Ct=s(t,"H2",{"data-svelte-h":!0}),n(Ct)!=="svelte-1ho2dcx"&&(Ct.textContent=ba),ml=u(t),Tt=s(t,"P",{"data-svelte-h":!0}),n(Tt)!=="svelte-1dfj6uz"&&(Tt.innerHTML=wa),gl=u(t),Et=s(t,"P",{"data-svelte-h":!0}),n(Et)!=="svelte-1qnnrer"&&(Et.innerHTML=xa),cl=u(t),Ht=s(t,"P",{"data-svelte-h":!0}),n(Ht)!=="svelte-1r5q8x7"&&(Ht.innerHTML=_a),ql=u(t),Rt=s(t,"P",{"data-svelte-h":!0}),n(Rt)!=="svelte-dv2p6j"&&(Rt.innerHTML=La),fl=u(t),Nt=s(t,"P",{"data-svelte-h":!0}),n(Nt)!=="svelte-1xsugbz"&&(Nt.textContent=Pa),vl=u(t),Mt=s(t,"P",{"data-svelte-h":!0}),n(Mt)!=="svelte-fhptyc"&&(Mt.innerHTML=Ca),hl=u(t),At=s(t,"P",{"data-svelte-h":!0}),n(At)!=="svelte-9ibc40"&&(At.innerHTML=Ta),bl=u(t),yt=s(t,"P",{"data-svelte-h":!0}),n(yt)!=="svelte-g0ojph"&&(yt.innerHTML=Ea),wl=u(t),kt=s(t,"H2",{"data-svelte-h":!0}),n(kt)!=="svelte-grw4hp"&&(kt.textContent=Ha),xl=u(t),St=s(t,"P",{"data-svelte-h":!0}),n(St)!=="svelte-100n5n"&&(St.textContent=Ra),_l=u(t),jt=s(t,"UL",{"data-svelte-h":!0}),n(jt)!=="svelte-zeo68x"&&(jt.innerHTML=Na),this.h()},h(){Ut.a=null,m(w,"class","language-undefined"),Jt.a=null,m(L,"class","language-undefined"),Vt.a=null,m(C,"class","language-undefined"),te.a=null,m(E,"class","language-undefined"),Pe.a=null,m(Y,"class","language-undefined"),He.a=null,m(X,"class","language-undefined"),ye.a=null,m(at,"class","language-undefined"),je.a=null,m(st,"class","language-undefined"),De.a=null,m(ut,"class","language-undefined"),Oe.a=null,m(rt,"class","language-undefined"),Ge.a=null,m(pt,"class","language-undefined"),Je.a=null,m(gt,"class","language-undefined"),Ze.a=null,m(ft,"class","language-undefined"),el.a=null,m(ht,"class","language-undefined"),ol.a=null,m(wt,"class","language-undefined"),ul.a=null,m(_t,"class","language-undefined"),dl.a=null,m(Pt,"class","language-undefined")},m(t,l){a(t,g,l),a(t,Ft,l),a(t,c,l),a(t,It,l),a(t,q,l),a(t,Dt,l),a(t,f,l),a(t,Bt,l),a(t,v,l),a(t,Wt,l),a(t,h,l),a(t,Ot,l),a(t,b,l),a(t,zt,l),a(t,w,l),Ut.m(Ja,w),a(t,Gt,l),a(t,x,l),a(t,Kt,l),a(t,_,l),a(t,$t,l),a(t,L,l),Jt.m(Qa,L),a(t,Qt,l),a(t,P,l),a(t,Yt,l),a(t,C,l),Vt.m(Ya,C),a(t,Zt,l),a(t,T,l),a(t,Xt,l),a(t,E,l),te.m(Va,E),a(t,ee,l),a(t,H,l),a(t,le,l),a(t,R,l),a(t,ae,l),a(t,N,l),a(t,oe,l),a(t,M,l),a(t,se,l),a(t,A,l),a(t,ie,l),a(t,y,l),a(t,ue,l),a(t,k,l),a(t,ne,l),a(t,S,l),a(t,re,l),a(t,j,l),a(t,de,l),a(t,F,l),a(t,pe,l),a(t,I,l),a(t,me,l),a(t,D,l),a(t,ge,l),a(t,B,l),a(t,ce,l),a(t,W,l),a(t,qe,l),a(t,O,l),a(t,fe,l),a(t,z,l),a(t,ve,l),a(t,U,l),a(t,he,l),a(t,G,l),a(t,be,l),a(t,K,l),a(t,we,l),a(t,$,l),a(t,xe,l),a(t,J,l),a(t,_e,l),a(t,Q,l),a(t,Le,l),a(t,Y,l),Pe.m(Za,Y),a(t,Ce,l),a(t,V,l),a(t,Te,l),a(t,Z,l),a(t,Ee,l),a(t,X,l),He.m(Xa,X),a(t,Re,l),a(t,tt,l),a(t,Ne,l),a(t,et,l),a(t,Me,l),a(t,lt,l),a(t,Ae,l),a(t,at,l),ye.m(to,at),a(t,ke,l),a(t,ot,l),a(t,Se,l),a(t,st,l),je.m(eo,st),a(t,Fe,l),a(t,it,l),a(t,Ie,l),a(t,ut,l),De.m(lo,ut),a(t,Be,l),a(t,nt,l),a(t,We,l),a(t,rt,l),Oe.m(ao,rt),a(t,ze,l),a(t,dt,l),a(t,Ue,l),a(t,pt,l),Ge.m(oo,pt),a(t,Ke,l),a(t,mt,l),a(t,$e,l),a(t,gt,l),Je.m(so,gt),a(t,Qe,l),a(t,ct,l),a(t,Ye,l),a(t,qt,l),a(t,Ve,l),a(t,ft,l),Ze.m(io,ft),a(t,Xe,l),a(t,vt,l),a(t,tl,l),a(t,ht,l),el.m(uo,ht),a(t,ll,l),a(t,bt,l),a(t,al,l),a(t,wt,l),ol.m(no,wt),a(t,sl,l),a(t,xt,l),a(t,il,l),a(t,_t,l),ul.m(ro,_t),a(t,nl,l),a(t,Lt,l),a(t,rl,l),a(t,Pt,l),dl.m(po,Pt),a(t,pl,l),a(t,Ct,l),a(t,ml,l),a(t,Tt,l),a(t,gl,l),a(t,Et,l),a(t,cl,l),a(t,Ht,l),a(t,ql,l),a(t,Rt,l),a(t,fl,l),a(t,Nt,l),a(t,vl,l),a(t,Mt,l),a(t,hl,l),a(t,At,l),a(t,bl,l),a(t,yt,l),a(t,wl,l),a(t,kt,l),a(t,xl,l),a(t,St,l),a(t,_l,l),a(t,jt,l)},p:Ll,i:Ll,o:Ll,d(t){t&&(e(g),e(Ft),e(c),e(It),e(q),e(Dt),e(f),e(Bt),e(v),e(Wt),e(h),e(Ot),e(b),e(zt),e(w),e(Gt),e(x),e(Kt),e(_),e($t),e(L),e(Qt),e(P),e(Yt),e(C),e(Zt),e(T),e(Xt),e(E),e(ee),e(H),e(le),e(R),e(ae),e(N),e(oe),e(M),e(se),e(A),e(ie),e(y),e(ue),e(k),e(ne),e(S),e(re),e(j),e(de),e(F),e(pe),e(I),e(me),e(D),e(ge),e(B),e(ce),e(W),e(qe),e(O),e(fe),e(z),e(ve),e(U),e(he),e(G),e(be),e(K),e(we),e($),e(xe),e(J),e(_e),e(Q),e(Le),e(Y),e(Ce),e(V),e(Te),e(Z),e(Ee),e(X),e(Re),e(tt),e(Ne),e(et),e(Me),e(lt),e(Ae),e(at),e(ke),e(ot),e(Se),e(st),e(Fe),e(it),e(Ie),e(ut),e(Be),e(nt),e(We),e(rt),e(ze),e(dt),e(Ue),e(pt),e(Ke),e(mt),e($e),e(gt),e(Qe),e(ct),e(Ye),e(qt),e(Ve),e(ft),e(Xe),e(vt),e(tl),e(ht),e(ll),e(bt),e(al),e(wt),e(sl),e(xt),e(il),e(_t),e(nl),e(Lt),e(rl),e(Pt),e(pl),e(Ct),e(ml),e(Tt),e(gl),e(Et),e(cl),e(Ht),e(ql),e(Rt),e(fl),e(Nt),e(vl),e(Mt),e(hl),e(At),e(bl),e(yt),e(wl),e(kt),e(xl),e(St),e(_l),e(jt))}}}const ho={title:"How to build a simple Login system with React & Firebase",date:"Aug 2, 2022",cover:"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",excerpt:"This guide will step you through how to build a React app and implement a login system using Firebase."};class bo extends go{constructor(g){super(),co(this,g,null,qo,mo,{})}}export{bo as default,ho as metadata};
