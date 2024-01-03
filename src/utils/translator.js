import React, { useEffect } from "react";

const Translator = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");

    // Set the script source to the Google Translate API
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    // Define the function for Google Translate initialization
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        { pageLanguage: "hin" },
        "google_translate_element"
      );
    };

    // Append the script to the document
    document.head.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div>
      {/* This is where the Google Translate widget will be rendered */}
      <div id="google_translate_element"></div>
    </div>
  );
};

export default Translator;
