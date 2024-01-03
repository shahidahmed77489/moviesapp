import React from "react";
import backgroundImage from "../Images/backgroundImage.jpg";

const BackgroundImage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default BackgroundImage;
