import React from "react";
import ShopMenuItem from "./ShopMenuItem";

const ShopMenu = () => {
  return (
    <div className="w-full   absolute z-10  px-8">
      <div className="bg-white grid grid-cols-5 gap-2 h-fit p-4 shadow-2xl  rounded-lg w-full border-2">
        <ShopMenuItem
          one={"Product Style"}
          two={"Default Shop One "}
          three={"Shop With Left Sidebar"}
        ></ShopMenuItem>
        <ShopMenuItem
          one={"Product Types"}
          two={"Simple Products"}
          three={"Grouped Products"}
          four={"External/Affiliate Product"}
        ></ShopMenuItem>
        <ShopMenuItem
          one={"Product Single Feature"}
          two={"Product With Deals Date"}
        ></ShopMenuItem>
        <ShopMenuItem
          one={"Product Single Style"}
          two={"Product Single Style One"}
        ></ShopMenuItem>
      </div>
    </div>
  );
};

export default ShopMenu;
