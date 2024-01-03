import React, { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../Components/BackgroundImage";
import Header from "../Components/Header";
const auth = getAuth(app);
const SignInPage = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const submitBtn = async (e) => {
    e.preventDefault();
    try {
      const userLogin = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      if (userLogin) {
        alert("login successful");
        navigate("/moviesFlix");
      }
    } catch (error) {
      alert("password do not match");
    }
  };
  return (
    <>
      <BackgroundImage />
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <div className="absolute z-10 top-0 left-[28%] min-w-[35%] ">
        <div className=" h-screen flex items-center justify-center">
          <div className="bg-bgcolor p-12 min-w-full rounded">
            <h2 className="text-white text-3xl font-semibold mb-6">Sign In </h2>
            <form action="" onSubmit={submitBtn}>
              <div className="my-5">
                <input
                  type="text"
                  placeholder="Email or phone number "
                  className="w-full bg-gray pl-4 py-3 mb-3 rounded text-white"
                  ref={email}
                  name="email"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full bg-gray pl-4 py-3 rounded text-white"
                  ref={password}
                  name="password"
                />
              </div>
              <button
                className="w-full  bg-colour mt-8 mb-4 py-3 rounded font-semibold text-white"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
