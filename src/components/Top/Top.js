import React from "react";

const Top = () => {
  return (
    <div className="lg:flex md:hidden hidden text-sm  items-center shadow-sm px-4 py-2 CTC justify-between w-full">
      <div>
        <ul className="flex items-center  gap-2">
          <li className="border-r-2 pr-2">About Us</li>
          <li className="border-r-2 pr-2">My Account</li>
          <li>WishhList</li>
        </ul>
      </div>
      <div>
        <h2 className=" font-bold">
          Trendy 25silver jewelry, save up 35% off today
        </h2>
      </div>
      <div>
        <ul className="flex gap-2">
          <li className="">Need help? Call Us:+1800900</li>
          <li className="border-l-2 pl-2">United States (USD $)</li>
          <li className="border-l-2 pl-2">English</li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
