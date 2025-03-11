---
title: How to build a simple Login system with React & Firebase
date: 2022-08-02
cover: https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
tags: ["React", "Firebase", "Authentication", "Web Development", "Tutorial", "JavaScript", "DaisyUI", "Tailwind CSS"]
excerpt: This guide will step you through how to build a React app and implement a login system using Firebase.
---

This guide will step you through how to build a React app using the create-react-app tool and implement a login system using Firebase. The front end for this application is built with TailwindCSS using the DaisyUI component library.

The final code can be found on my GitHub page [here](https://github.com/jouwdan/react-firebase-login).

## Prerequisites

Before starting, ensure the below is installed on your system.

- NodeJS
- Visual Studio Code (or your favourite IDE)

## Getting Started

Let's get started. Open up a terminal and type the below commands to set up the app and install all the required dependancies.

```
npx create-react-app my-app
cd my-app
npm install --save dotenv firebase react-firebase-hooks react-router-dom tailwindcss postcss autoprefixer daisyui
npx tailwindcss init -p
``` 

> npx is not a typo, it's a [package runner tool that was released alongside npm 5.2+](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

Create a new file `.env` in the my-app folder and add the below to it. We will update these values later once we set up our Firebase app.

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTHDOMAIN=
REACT_APP_FIREBASE_PROJECTID=
REACT_APP_FIREBASE_STORAGEBUCKET=
REACT_APP_FIREBASE_MESSAGINGSENDERID=
REACT_APP_FIREBASE_APPID=
```

To set up Tailwind, open up the newly generated tailwind.config.js and replace all of the contents with the below. This will also ensure that we can use the daisyui component library.

```
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

Then open up `src/index.css` and replace the contents with

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

We now have a simple React app set up, our dependancies installed and TailwindCSS initialised. Let's move on to setting up Firebase so we can implement the login system.

## Firebase Setup

Head on over to the [Firebase](https://firebase.google.com/) website and hit `Get Started`.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659440560930/oSSw52H00.png)

Click `Add Project`, type in the project name and press Continue.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659440716383/5QhPz1mON.png)

For simplicity of this tutorial, on the next page disable Google Analytics and press Create Project.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659440814566/ILZVbyiEq.png)

Once your Project is set up, go to `All Products` in the sidebar then Authentication.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659440988686/DRzArSh_H.png)

Once here, go ahead and click `Get Started`.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659441028010/x46cog8T7.png)

We are going to want to set up Email/Password login, so under `Native providers` click this, enable it and click save.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659441135155/5EofUjjgM.png)

Next, let's get our application secrets to add to our `.env` file. Head on over to the Project Overview and select web app at the top, which looks like a `</>` icon.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659441375337/UvQe7wapu.png)

Create your app nickname and press `Register app`

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659441424647/Ry9C6vvDg.png)

You will then be faced with your API key details. Copy the values of these and add them to the relevant variable in your `.env` file.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659441634387/4auJu6RPb.png)

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659441799376/4js19rSqp.png)

We also need to create a file which communicates with Firebase to authenticate / create users. Create the file `firebase.js` in the `src` folder and paste in the following code.

```
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTHDOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APPID}`,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};

```

## Routes Setup

We need to add our routes so our app can render the pages, which we will create next. Open the `App.js` file and replace the contents with the below.

```
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Register from "./Pages/Register";
import Reset from "./Pages/Reset";
import Dashboard from "./Pages/Dashboard";

import Navigation from "./Components/nav/navigation";

function App() {
  return (
    <Router>
      <div
        className="flex flex-col justify-between bg-base-100"
        data-theme="dark"
      >
        <Navigation />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;

```

## Page Template Setup

Now let's got our pages set up for our web application. Create a folder called `Pages` in the `/src` folder of your app and create the following files.

`Home.js`

```
import Hero from "../Components/hero/hero";

const Home = () => {
  return <Hero />;
};

export default Home;
```

`Dashboard.js`

```
import React, { useEffect, useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading]);

  return (
    <>
      <div className="card justify-center h-60 bg-base-200 m-4">
        <div className="hero-content text-center mx-auto">
          <h1 className="text-5xl font-bold">Welcome, {user.email}</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
```

`Login.js`

```
import LoginForm from "../components/forms/loginForm";

const Login = () => {
  return <LoginForm />;
};

export default Login;
```

`Logout.js`

```
import { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.signOut().then(navigate("/"));
  });
};

export default Logout;
```

`Register.js`

```
import RegisterForm from "../components/forms/registerForm";

const Register = () => {
  return <RegisterForm />;
};

export default Register;

```

`Reset.js`

```
import ResetPasswordForm from "../components/forms/resetPasswordForm";

const Reset = () => {
  return <ResetPasswordForm />;
};

export default Reset;
```

And then we'll set up our components for the above. Create the `Components` folder in `/src` and create the following files.

`forms/loginForm.js`

```
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard", { replace: true });
  }, [user]);
  return (
    <div className="flex pt-6">
      <div className="card shadow-2xl bg-base-200 flex-1 justify-center p-12">
        <div className="card-header">
          <h2 className="text-3xl">Log In</h2>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <a
            className="btn btn-primary w-full"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </a>
          <div>
            <Link to="/reset" className="btn btn-ghost w-full">
              Forgot Password
            </Link>
          </div>
          <div className="justify-end">
            Don't have an account?{" "}
            <Link to="/register" className="link">
              Register now
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
```

`forms/registerForm.js`

```
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    registerWithEmailAndPassword(email, password);
    if (user) navigate("/dashboard", { replace: true });
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard", { replace: true });
  }, [user, loading]);

  return (
    <div className="flex pt-6">
      <div className="card shadow-2xl bg-base-200 flex-1 justify-center p-12">
        <div className="card-header">
          <h2 className="text-3xl">Register</h2>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <a className="btn btn-primary w-full" onClick={register}>
            Register
          </a>
          <div className="justify-end">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login now
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
```

`forms/resetPasswordForm.js`

```
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";

function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard", { replace: true });
  }, [user, loading]);
  return (
    <div className="flex pt-6">
      <div className="card shadow-2xl bg-base-200 flex-1 justify-center p-12">
        <div className="card-header">
          <h2 className="text-3xl">Reset Password</h2>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <button
            className="btn btn-primary w-full"
            onClick={() => sendPasswordReset(email)}
          >
            Send password reset Email
          </button>
          <div className="justify-end">
            Don't have an account?{" "}
            <Link to="/register" className="link">
              Register now
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
```

`hero/hero.js`

```
import React, { useContext } from "react";

const Hero = () => {
  return (
    <div className="card justify-center h-96 bg-base-200 m-4">
      <div className="hero-content text-center mx-auto">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">React Firebase Login</h1>
          <p className="py-6">
            A base template to implement a Firebase login system React.
          </p>
          <a className="btn btn-primary" href="/login">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
```

`nav/navigation.js`

```
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";

function Navigation() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-base-200 text-base-content">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          React Firebase Login
        </Link>
      </div>

      <div className="navbar-middle">
        {!user ? (
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                : "btn btn-ghost mr-2 hidden lg:flex"
            }
          >
            Home
          </NavLink>
        ) : (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-active mr-2 hidden lg:flex"
                : "btn btn-ghost mr-2 hidden lg:flex"
            }
          >
            Dashboard
          </NavLink>
        )}
      </div>
      {!user ? (
        <div className="navbar-end">
          <Link to="/login">
            <a className="btn mr-2">Login</a>
          </Link>
          <Link to="/register">
            <a className="btn btn-primary mr-2">Register</a>
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-ghost btn-active mb-2"
                      : "btn btn-ghost mb-2"
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/logout">
            <a className="btn mr-2">Log Out</a>
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-ghost btn-active mb-2"
                      : "btn btn-ghost mb-2"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
```

## Testing the Application

Now that we have the code wrote for our application - let's go ahead and test it! Type `npm start` into the console and a browser window will open with our application.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659449379981/AQbPd5BEp.png)

Try to register an account by clicking the `register` button.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659450151055/6FJcQshrk.png)

Once your account is created, you should be redirected to the dashboard with the email you registered with being displayed.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659449434309/mTmu8UU9y.png)

Now let's have a see where this user is stored. Head on over to Firebase and click `Authentication` in the sidebar. Your new user should be displayed here.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659449498257/41AErDlk8.png)

## Conclusion

We now have a fully functional React application with a login system using Firebase! Let's go back through what we done.

- Create a new React app using create-react-app
- Install the dependancies required
- Initialise TailwindCSS and ensure it uses the DaisyUI library
- Create a Firebase application to store & authenticate users
- Write the code that communicates with Firebase
- Create the Routes, Pages & Components of our application