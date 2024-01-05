import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();

  const changeUserHandler = () => {
    setLogin((prevLogin) => !prevLogin);
    const route = isLogin ? "/" : "/signup";
    navigate(route);
    console.log(isLogin);
  };

  return (
    <div className="lg:px-20 mx-auto absolute top-0 w-full z-20 shadow-sm shadow-white bg-black py-5 px-2">
      <div className="relative z-10 flex justify-between  items-center">
        <div>
          <h2 className="lg:text-4xl sm:text-3xl text-colour font-bold">
            Movies App
          </h2>
        </div>
        <div className="flex">
          <div className="border border-slate-500 rounded text-center px-3 mr-4 pt-1">
            <span>
              <i className="fa-solid fa-language text-white"></i>
            </span>
            <select className="bg-transparent text-white outline-none xs:px-0 xs:text-[10px] md:text-[16px]">
              <option value="English" className="text-black px-3 pt-4">
                English
              </option>
              <option value="Hindi" className="text-black px-3 pt-1">
                Hindi
              </option>
            </select>
            {/* <Translator /> */}
          </div>
          <button
            className="bg-colour text-white font-semibold px-4 rounded xs:text-[10px] md:text-[16px]"
            onClick={changeUserHandler}
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
