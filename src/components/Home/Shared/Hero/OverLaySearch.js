import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OverLaySearch = () => {
  return (
    <div className="w-full gap-4 px-12 flex flex-col justify-center items-start">
      <h1 className="lg:text-7xl md:text-6xl text-5xl text-left   lg:text-gray-600 font-semibold">
        Fresh VegeTable <br />
        Big discount
      </h1>
      <div className="flex  justify-center items-center bg-white rounded-full">
        <FontAwesomeIcon
          className="text-gray-600 px-4 lg:px-8 text-xl py-4 rounded-full bg-white"
          icon={faPaperPlane}
        />
        <input
          className="py-4 px-2 outline-none"
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
