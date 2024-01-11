import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="shadow-2xl shadow-white py-10 mt-10">
      <div className="text-white text-center w-[70%] mx-auto font-semibold">
        <ul className="flex gap-4 justify-center my-3">
          <li className="hover:text-red-500 cursor-pointer">Terms Of Use </li>
          <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-red-500 cursor-pointer">About</li>
          <li className="hover:text-red-500 cursor-pointer">Blog</li>
          <li className="hover:text-red-500 cursor-pointer">FAQs</li>
        </ul>
        <p className="hidden md:block">
          This movie app is a user-friendly, responsive platform designed for
          movie enthusiasts. It provides real-time access to trending movies and
          TV shows. The app fetches data from APIs to display details such as
          titles, release dates, ratings, and genres. Users can easily toggle
          between TV shows and movies to explore a diverse range of content.
        </p>
        <div className="flex gap-5 justify-center  my-4 ">
          <a
            className="bg-colour p-2 text-2xl rounded-full hover:scale-90"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <AiOutlineFacebook />
          </a>
          <a
            className="bg-colour p-2 text-2xl rounded-full hover:scale-90"
            href="https://www.instagram.com/shahidahmad7748/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="bg-colour p-2 text-2xl rounded-full hover:scale-90"
            href="https://twitter.com/ms6992902"
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            className="bg-colour p-2 text-2xl rounded-full hover:scale-90"
            href="https://www.linkedin.com/in/mohammed-shahid-a54747299/"
            target="_blank"
          >
            <CiLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
