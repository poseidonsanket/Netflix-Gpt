import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    console.log(isSignInForm);
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black right-0 left-0 mx-auto my-36 text-white bg-opacity-85">
        <h1 className="font-bold text-3xl py-4 px-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-lg bg-[#333]"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-lg bg-[#333]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-lg bg-[#333]"
        />
        <button className="p-4 my-10 bg-red-700 block w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 px-1">
          {isSignInForm ? "New to NetFlix? " : "Already Registered! "}
          {isSignInForm ? (
            <span
              className="cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              Sign Up Now
            </span>
          ) : (
            <span
              className="cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              Sign In Now
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
