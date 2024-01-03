/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgcolor: "rgba(0,0,0,0.9)",
        gray: "#333",
      },
      colors: {
        colour: "rgb(229,9,20);",
      },
      // backgroundImage: {
      //   backImage: "url('../../Images/backgroundImage.jpg')",
      // },
    },
  },
  plugins: [],
};
