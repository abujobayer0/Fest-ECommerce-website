import React from "react";

const SlideItem = ({ name, img, bg }) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={
        "w-44 rounded-lg flex  py-4 justify-center items-center flex-col cursor-pointer bg--100 "
      }
    >
      <div className="w-28 ">
        <img src={img} className="w-full" alt="" />
      </div>
      <h1 className="font-semibold text-xl text-[#575757]">{name}</h1>
    </div>
  );
};

export default SlideItem;
