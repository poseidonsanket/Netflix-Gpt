import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    console.log(isSignInForm);
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //Form Validation
    const nameValue = name.current ? name.current.value : "First Last";
    const emailValue = email.current ? email.current.value : "";
    const passwordValue = password.current ? password.current.value : "";
    const message = checkValidData(emailValue, passwordValue, nameValue);
    setErrorMessage(message);

    //After Form Validation SignUp/SignIn
    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: nameValue,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  userId: uid,
                  emailId: email,
                  displayName: displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black right-0 left-0 mx-auto my-36 text-white bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4 px-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? (
          ""
        ) : (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-lg bg-[#333]"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-lg bg-[#333]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-lg bg-[#333]"
        />
        <p className="text-red-600 font-bold text-lg pt-2">{errorMessage}</p>
        <button
          className="p-4 my-10 bg-red-700 block w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
