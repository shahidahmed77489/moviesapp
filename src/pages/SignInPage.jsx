import React, { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../Components/BackgroundImage";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../utils/authSlice";

const auth = getAuth(app);
const SignInPage = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authData);
  console.log(user);

  const submitBtn = async (e) => {
    e.preventDefault();
    try {
      const userLog = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      if (userLog) {
        alert("login successful");
        navigate("/moviesFlix");
        dispatch(userLogin(userLog));
        window.sessionStorage.setItem("userAuthentication", true);
      }
    } catch (error) {
      alert("password do not match");
    }
  };

  return (
    <>
      <BackgroundImage />
      <div className="absolute top-0 w-full"></div>
      <div className="absolute z-10 top-0 md:left-[30%] xs:min-w-full  sml:left-[20%] sml:min-w-[30%] mdl:min-w-[35%] ">
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
            <p className="text-white">
              Create New Account !{" "}
              <Link to={"/signup"}>
                <span className="underline text-colour">SignUp</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
