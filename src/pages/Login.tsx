import React from 'react';
import Button from '../components/Button';
const Login = () => {
  return (
    <div className="flex h-screen border justify-center bg-zinc-100">
      <div className="w-[32rem] h-min p-16 mt-16 bg-white drop-shadow">
        <div id="title" className="flex flex-col mb-5">
          <p className="font-bold text-3xl text-zinc-500">hadir_in</p>
          <p className="font-bold text-4xl">account</p>
        </div>
        <form action="" className="">
          <div id="email-group" className="flex flex-col mb-5">
            <label className="text-sm mb-1">Email address</label>
            <input
              className="text-zinc-800 border rounded p-1 px-3"
              alt="email"
              autoFocus
            ></input>
          </div>
          <div id="password-group">
            <div id="password-group" className="flex flex-col mb-5">
              <label className="text-sm mb-1">Password</label>
              <input
                className="text-zinc-800 border rounded p-1 px-3"
                type="password"
              ></input>
            </div>
          </div>
          <div id="remember-me-group"></div>
          <Button
            href="/login"
            name="Login"
            className="text-white font-bold bg-blue-500 rounded drop-shadow w-full mb-5"
          />
        </form>

        <p className="text-zinc-500 text-center text-sm font-medium">
          Don't have an account?
          <a href="/sign-up" className="text-blue-500 pl-1">
            Sign up for free
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
