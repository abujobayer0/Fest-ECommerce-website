import React from "react";

const Catagories = ({ catagory }) => {
  return (
    <div className="px-10  hover:text-[#3bb77e] font-semibold  Cfont rounded-lg text-gray-700 ring-2 ring-green-100 hover:shadow-sm hover:shadow-[#3bb77e] transition-all ease-in-out py-4">
      <p>{catagory.icon}</p>
      <p>{catagory.name}</p>
    </div>
  );
};

export default Catagories;
