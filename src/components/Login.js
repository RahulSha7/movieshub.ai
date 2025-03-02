import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Background_Image } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSign = () => {
    setIsSignInForm(!isSignInForm);
  };

  const checkValidation = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src={Background_Image}
          alt="background_image"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-8 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="text-2xl font-bold my-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="px-4 w-full p-3 my-3 bg-gray-700"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          className="px-4 w-full p-3 bg-gray-700"
          placeholder="Email Address"
        ></input>
        <input
          ref={password}
          type="password"
          className="px-4 w-full p-3 my-3 bg-gray-700"
          placeholder="Password"
        ></input>
        <p className="text-red-500 font-bold "> {errorMessage}</p>
        <button
          className="bg-red-700 my-4 p-3 w-full rounded-lg"
          onClick={checkValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSign}>
          {isSignInForm
            ? "New To MoviesHub? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
