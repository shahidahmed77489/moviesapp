import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userloggedOut } from "../utils/authSlice";
const Header = () => {
  const disaptch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    disaptch(userloggedOut());
    window.sessionStorage.removeItem("userAuthentication");
    navigate("/");
  };
  return (
    <div className="lg:px-20 mx-auto absolute top-0 w-full z-20 shadow-sm shadow-white bg-black py-5 px-2">
      <div className="relative z-10 flex justify-between  items-center">
        <div>
          <h2 className="lg:text-4xl sm:text-3xl text-colour font-bold">
            Movies Flix
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <Link to={"/movie"}>
            <h2 className="text-colour text-xl font-semibold lg:text-xl xs:text-[15px] sm:text-xl md:text-xl">
              Movie
            </h2>
          </Link>
          <Link to={"/tv"}>
            <h2 className="text-colour text-xl font-semibold lg:text-xl xs:text-[15px] sm:text-xl md:text-xl">
              TV
            </h2>
          </Link>
          <button
            className="text-colour text-xl font-semibold lg:text-xl xs:text-[15px] sm:text-xl md:text-xl"
            onClick={logoutHandler}
          >
            <AiOutlineLogout />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
