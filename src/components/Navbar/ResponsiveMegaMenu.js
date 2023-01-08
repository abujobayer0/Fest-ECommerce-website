import { Card } from "@mui/material";
import React from "react";
import MegaMenuItem from "./MegaMenuItem";

const ResponsiveMegaMenu = () => {
  return (
    <div className="flex transition-all ease-in-out duration-500 flex-col gap-4 justify-start items-start">
      <MegaMenuItem
        one={"Products 10% Discount"}
        two={"Canada Dry Ginger Ale - 2 L Bottle"}
        three={"Cauliflower Species Brassica The Genus"}
        four={"Onion hybrid Varieties genus Allium"}
        five={"Nestle Original Mate Coffee Creamer "}
        six={"Seeds of Change Organic Red Rice"}
      ></MegaMenuItem>
      <MegaMenuItem
        one={"Products 20% Discount"}
        two={"All Natural Style Chicken Meatballs"}
        three={"Angie's Sweet & Salty Kettle Corn Staple "}
        four={"Blue Almonds Lightly Salted Vegetables"}
        five={"Butter fat and protein churned cream "}
        six={"Chobani  Compleate Vanilla Greek Yougert"}
      ></MegaMenuItem>
      <MegaMenuItem
        one={"Products 30% Discount"}
        two={"Collared Nikky Printed Men Neck T-Shiort"}
        three={"Crabs Arte Decapod crustaceans fraorder"}
        four={"Encore Seafoods Stuffed the occasional "}
        five={"Foster Farms Takeout Crispy Classic"}
        Fresh={"Fresh Mango Smoothhies with a Blender"}
      ></MegaMenuItem>
      <Card
        link={
          "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-1.png"
        }
        name={"Flash Sale"}
      ></Card>
    </div>
  );
};

export default ResponsiveMegaMenu;
