import React from "react";
import Common from "./Company";
import InstallApp from "./InstallApp";
import Nest from "./Nest";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-6  place-content-center md:grid-cols-4 grid-cols-2 px-8 gap-8 lg:gap-4 py-8  ">
      <Nest></Nest>
      <Common
        name={"Company"}
        one={"About Us"}
        two={"Delevery Information"}
        three={"Privacy Policy"}
        four={"Terms & Conditions"}
        five={"Contacts Us"}
        six={"Support Center "}
        seven={"Careers"}
      ></Common>
      <Common
        name={"Account"}
        one={"Sign In"}
        two={"View Cart"}
        three={"My WishList"}
        four={"Track My Order"}
        five={"Help Ticket"}
        six={"Shipping Details"}
        seven={"Compare Products"}
      ></Common>
      <Common
        name={"Corporate"}
        one={"Become a Vendor"}
        two={"Affiliate Program"}
        three={"Farm Buisness"}
        four={"Farm Careers"}
        five={"Our Suppliers"}
        six={"Accessibility"}
        seven={"Promotions"}
      ></Common>
      <Common
        name={"Popular"}
        one={"Milk & Flavored"}
        two={"Butter And Margarine"}
        three={"Eggs Substitutes"}
        four={"Marmalades"}
        five={"Sour Cream and Dips"}
        six={"Tea & Kombucha"}
        seven={"Cheese"}
      ></Common>
      <InstallApp></InstallApp>
    </div>
  );
};

export default Footer;
