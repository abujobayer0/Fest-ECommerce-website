import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OverLaySearch = ({ title, p }) => {
  return (
    <div className="w-full gap-4 lg:px-20 px-12 flex flex-col justify-center items-start">
      <h1 className="lg:text-7xl md:text-6xl lg:w-1/2 md:w-1/2 first-line: text-5xl text-left   text-[#253d4e] font-semibold">
        {title}
      </h1>
      <p className="CTC font-semibold">{p}</p>
      <div className="flex  justify-center items-center bg-white rounded-full">
        <FontAwesomeIcon
          className="text-gray-600 px-4 lg:px-8 text-xl py-4 rounded-full bg-white"
          icon={faPaperPlane}
        />
        <input
          className="py-4 px-2 lg:w-full md:w-full w-56 outline-none"
          placeholder="Your Email address"
          type="email"
          name=""
          id=""
        />
        <button className="bg-[#3bb77e] rounded-full text-lg text-white  px-4 lg:px-8 py-4">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default OverLaySearch;
