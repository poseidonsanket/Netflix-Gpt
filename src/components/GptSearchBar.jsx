import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const supportedLanguage = useSelector((store) => store.lang.lang);
  console.log(supportedLanguage);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[supportedLanguage].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 rounded-lg bg-red-700 text-white col-span-3 text-2xl">
          {language[supportedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
