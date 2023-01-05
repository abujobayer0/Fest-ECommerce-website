import React from "react";

const SlideItem = ({ name, img, bg }) => {
  return (
    <div
      className={`w-44 rounded-lg flex bg-${bg}-200 py-4 justify-center items-center flex-col cursor-pointer `}
    >
      <div className="w-28 ">
        <img src={img} className="w-full" alt="" />
      </div>
      <h1 className="font-semibold text-xl text-[#575757]">{name}</h1>
    </div>
  );
};

export default SlideItem;
