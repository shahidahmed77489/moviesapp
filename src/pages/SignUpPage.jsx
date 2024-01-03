import React, { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import BackgroundImage from "../Components/BackgroundImage";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
const auth = getAuth(app);

const SignUpPage = () => {
  const navigate = useNavigate();
  const fullname = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const fullNameValue = fullname.current.value;
    const emailValue = userEmail.current.value;
    const passwordValue = userPassword.current.value;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );
      const user = userCredential.user;
      console.log("User registered successfully:", user);
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
    fullname.current.value = "";
    userEmail.current.value = "";
    userPassword.current.value = "";
    navigate("/signin");
  };
  return (
    <>
      <BackgroundImage />
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <div className="absolute z-10 top-5 left-[30%] min-w-[35%]">
        <div className=" h-screen flex items-center justify-center">
          <div className="bg-bgcolor p-12 min-w-full relative z-10">
            <h2 className="text-white text-3xl font-semibold mb-6">Sign Up </h2>
            <form action="" onSubmit={submitHandler}>
              <div>
                <input
                  type="text"
                  placeholder="FullName"
                  className="w-full bg-gray pl-4 py-4 rounded text-white mt-5"
                  name="fullname"
                  ref={fullname}
                />
              </div>
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Email or phone number "
                  className="w-full bg-gray pl-4 py-4 rounded text-white mt-5"
                  name="email"
                  ref={userEmail}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-gray pl-4 py-4 rounded text-white mt-5"
                  name="password"
                  ref={userPassword}
                />
              </div>

              <button
                className="w-full  bg-colour mt-8 mb-4 py-4 rounded font-semibold text-white"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
