import React from "react";
import ShopMenuItem from "./ShopMenuItem";

const ResponsiveShopMenu = () => {
  return (
    <div className="flex w-full px-12 py-4 justify-center items-center flex-col">
      <ShopMenuItem
        one={"Product Types"}
        two={"Simple Products"}
        three={"Grouped Products"}
        four={"External/Affiliate Product"}
      ></ShopMenuItem>
      <ShopMenuItem
        one={"Product Types"}
        two={"Simple Products"}
        three={"Grouped Products"}
        four={"External/Affiliate Product"}
      ></ShopMenuItem>
    </div>
  );
};

export default ResponsiveShopMenu;
